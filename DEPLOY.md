# Sci Club Orezzo — hosting e deploy

Sito: **[www.scicluborezzo.com](https://www.scicluborezzo.com)** — Astro + Tailwind, build statica in `dist/`.

## Stato: IN ONDA su Aruba

Il sito è pubblicato e www.scicluborezzo.com serve la build Astro di questo repo.
Le credenziali FTP **ci sono già**, nel `.env` in root (gitignorato): il deploy si
lancia e basta. Verificato il 22/09/2026.

> ⚠️ Questa sezione diceva «fermo in attesa delle credenziali Aruba» fino al
> 22/09/2026, quando il file `.env` era già compilato e il sito già online. Chi
> legge un DEPLOY.md e si ferma senza controllare il `.env` e il dominio perde
> un deploy: guarda prima cosa risponde il sito.

`hosting-transfer/` resta come storia della migrazione (inventario, checklist,
piano di rollback).

## Come si deploya

```bash
npm ci
npm run build
npm run deploy      # scripts/deploy-ftp.mjs, basic-ftp
```

**Verifica dopo il deploy** — non basta l'exit 0 dello script: `uploadFromDir`
sovrascrive ma non cancella, quindi un file rimosso dalla build resta online.
Si colpisce il dominio e si guarda il contenuto, per esempio:

```bash
curl -sL "https://www.scicluborezzo.com/?v=$RANDOM" | grep -c "<nome di uno sponsor nuovo>"
```

Lo script legge un `.env` in root (file **gitignorato**, da creare a mano):

```
FTP_HOST=
FTP_USER=
FTP_PASS=
FTP_REMOTE_DIR=
```

`astro.config.mjs` ha `site: 'https://www.scicluborezzo.com'` e mette gli asset in `_assets/`.

## Backup del sito vecchio

`current-site-snapshot/` è la copia integrale del sito precedente (crawl + snapshot, con `crawl_report.md` / `snapshot_report.md`): serve come riferimento e come rollback in caso di cutover andato male.

## Altri pezzi

- `worker/` — Cloudflare Worker (`wrangler.toml` + `index.js`). Deploy: `cd worker && npx wrangler deploy`.

## Credenziali

Le password **non stanno in questo repo** e non vanno committate: `.env` è gitignorato apposta. Chi serve che deployi le chiede a Michele su un canale privato.

## Da non confondere

Progetto **diverso** da `micmer-git/orezzosport` (Orezzo Sport A.S.D., sito statico da export Figma su Cloudflare Pages). Due società, due siti, due repo: non vanno unificati.
