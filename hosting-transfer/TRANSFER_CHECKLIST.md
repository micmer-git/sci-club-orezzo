# Sci Club Orezzo — Hosting Transfer Checklist

## 1) Inventario pre-migrazione
- [ ] Dominio attuale e nameserver verificati
- [ ] Piano hosting Aruba attuale documentato (Linux, spazio, DB, FTP, email)
- [ ] Backup completo files web (snapshot locale)
- [ ] Export database (se presente WordPress/MySQL)
- [ ] Elenco email/domain records (MX/SPF/DKIM/DMARC)
- [ ] Certificato SSL attuale e scadenza

## 2) Freeze e sicurezza
- [ ] Finestra migrazione definita (basso traffico)
- [ ] Riduzione TTL DNS a 300s (24h prima)
- [ ] Credenziali ruotate e salvate in vault (non in chat)
- [ ] Controllo accessi admin/FTP/DB

## 3) Setup nuovo hosting
- [ ] Creare ambiente `sci-club-orezzo` (repo + build)
- [ ] Deploy staging con dominio temporaneo
- [ ] Import files + assets
- [ ] Import DB e fix URL interni
- [ ] Config SSL + redirect HTTPS

## 4) DNS cutover
- [ ] Aggiornare record A/CNAME al nuovo target
- [ ] Verificare propagazione globale
- [ ] Smoke test: home, pagine chiave, contatti, form, asset statici
- [ ] Verifica mail flow (MX/SPF/DKIM)

## 5) Rollback plan
- [ ] Snapshot pre-cutover disponibile
- [ ] DNS vecchio target annotato
- [ ] Procedura rollback testata (max 15 min)

## 6) Post-migrazione
- [ ] Monitor errori 24-48h
- [ ] Backup automatici schedulati
- [ ] Documentazione aggiornata
