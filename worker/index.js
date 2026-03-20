/**
 * Sci Club Orezzo — Form submission worker
 * Accepts contact forms and athlete result submissions,
 * creates GitHub Issues in micmer-git/sci-club-orezzo.
 */

const ALLOWED_ORIGINS = [
  'https://www.scicluborezzo.com',
  'http://localhost:4321',
  'http://localhost:3000',
];

const REPO_OWNER = 'micmer-git';
const REPO_NAME = 'sci-club-orezzo';

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

// Upload a base64 image to the repo via GitHub Contents API
async function uploadPhoto(token, filename, base64Data) {
  // Strip data URI prefix if present
  const raw = base64Data.replace(/^data:[^;]+;base64,/, '');
  const path = `submissions/photos/${filename}`;

  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'scicluborezzo-forms-worker',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `foto: ${filename}`,
        content: raw,
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error(`Photo upload failed for ${filename}: ${err}`);
    return null;
  }

  const result = await res.json();
  return result.content?.download_url || result.content?.html_url || path;
}

// Create a GitHub Issue
async function createIssue(token, title, body, labels) {
  const res = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'scicluborezzo-forms-worker',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body, labels }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub Issue creation failed: ${res.status} — ${err}`);
  }

  return res.json();
}

// Format contact submission as markdown
function formatContatto(data) {
  const title = `Contatto: ${data.nome} ${data.cognome} — ${data.oggetto || 'info'}`;
  const body = [
    `## Nuovo messaggio dal sito`,
    '',
    `| Campo | Valore |`,
    `|-------|--------|`,
    `| **Nome** | ${data.nome} |`,
    `| **Cognome** | ${data.cognome} |`,
    `| **Email** | ${data.email} |`,
    `| **Oggetto** | ${data.oggetto} |`,
    '',
    `### Messaggio`,
    '',
    data.messaggio || '_Nessun messaggio_',
    '',
    `---`,
    `_Inviato dal form contatti del sito_`,
  ].join('\n');

  return { title, body, labels: ['contatto', 'submission'] };
}

// Format result submission as markdown
function formatRisultato(data) {
  const title = `Risultato: ${data.nome} ${data.cognome} — ${data.gara} (${data.specialita || 'N/A'})`;
  const body = [
    `## Risultato gara`,
    '',
    `| Campo | Valore |`,
    `|-------|--------|`,
    `| **Atleta** | ${data.nome} ${data.cognome} |`,
    `| **Gara** | ${data.gara} |`,
    `| **Luogo** | ${data.luogo || '—'} |`,
    `| **Data** | ${data.data || '—'} |`,
    `| **Posizione** | ${data.posizione || '—'} |`,
    `| **Tempo** | ${data.tempo || '—'} |`,
    `| **Specialita** | ${data.specialita || '—'} |`,
    data.instagram ? `| **Instagram** | @${data.instagram.replace(/^@/, '')} |` : '',
    '',
    `### Racconto`,
    '',
    data.racconto || '_Nessun racconto fornito_',
  ].filter(Boolean).join('\n');

  return { title, body, labels: ['risultato', 'submission'] };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return json({ ok: false, error: 'Method not allowed' }, 405, origin);
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ ok: false, error: 'Invalid JSON' }, 400, origin);
    }

    const type = data._type;
    if (!type || !['contatto', 'risultato'].includes(type)) {
      return json({ ok: false, error: 'Invalid _type (contatto | risultato)' }, 400, origin);
    }

    const token = env.GITHUB_TOKEN;
    if (!token) {
      return json({ ok: false, error: 'Server misconfigured' }, 500, origin);
    }

    try {
      // Upload photos if present (risultato only)
      let photoCount = 0;
      const photoUrls = [];

      if (type === 'risultato' && Array.isArray(data.photos) && data.photos.length > 0) {
        const timestamp = Date.now();
        const slug = `${data.nome}-${data.cognome}`.toLowerCase().replace(/[^a-z0-9]/g, '-');

        for (let i = 0; i < Math.min(data.photos.length, 3); i++) {
          const ext = data.photos[i].startsWith('data:image/png') ? 'png' : 'jpg';
          const filename = `${timestamp}_${slug}_${i + 1}.${ext}`;
          const url = await uploadPhoto(token, filename, data.photos[i]);
          if (url) {
            photoUrls.push(url);
            photoCount++;
          }
        }
      }

      // Build issue content
      const { title, body, labels } =
        type === 'contatto' ? formatContatto(data) : formatRisultato(data);

      // Append photo links to body if any
      let finalBody = body;
      if (photoUrls.length > 0) {
        finalBody += '\n\n### Foto\n\n';
        photoUrls.forEach((url, i) => {
          finalBody += `![foto-${i + 1}](${url})\n\n`;
        });
      }

      const issue = await createIssue(token, title, finalBody, labels);

      return json(
        { ok: true, issue_url: issue.html_url, photo_count: photoCount },
        200,
        origin
      );
    } catch (err) {
      console.error('Worker error:', err);
      return json({ ok: false, error: err.message }, 500, origin);
    }
  },
};
