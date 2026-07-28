# Sci Club Orezzo — hosting e deploy

Sito: **[www.scicluborezzo.com](https://www.scicluborezzo.com)** — Astro + Tailwind, build statica in `dist/`.

## Stato: migrazione hosting NON completata

Il repo contiene il sito ricostruito, ma il passaggio all'hosting nuovo è **fermo in attesa delle credenziali Aruba e dell'accesso DNS** del club. Vedi `hosting-transfer/HOSTING_TRANSFER_INPUTS.md` (ancora da compilare) e `hosting-transfer/TRANSFER_CHECKLIST.md` (procedura completa: inventario → freeze → staging → cutover DNS → rollback).

Serve, da chi gestisce il dominio:

- account Aruba: username, URL pannello, piano hosting;
- accesso FTP: host, utente, porta;
- accesso DB (se il sito attuale ha un CMS/MySQL);
- registrar del dominio, DNS provider, nameserver attuali;
- record A/CNAME e MX/SPF/DKIM/DMARC (per non rompere la posta al cutover).

## Come si deploya (una volta avute le credenziali)

```bash
npm ci
npm run build
npm run deploy      # scripts/deploy-ftp.mjs, basic-ftp
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
