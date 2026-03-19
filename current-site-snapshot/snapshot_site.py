import os, re, json, requests
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup

BASE='https://www.scicluborezzo.com/'
OUT=r'C:\Users\micme\Desktop\micmer\sci-club-orezzo\current-site-snapshot'
os.makedirs(OUT, exist_ok=True)
assets_dir=os.path.join(OUT,'assets_live')
os.makedirs(assets_dir, exist_ok=True)

sess=requests.Session(); sess.headers.update({'User-Agent':'Mozilla/5.0'})

r=sess.get(BASE, timeout=30)
r.raise_for_status()
html=r.text
open(os.path.join(OUT,'homepage.html'),'w',encoding='utf-8').write(html)

soup=BeautifulSoup(html,'html.parser')

links=[]
for a in soup.select('a[href]'):
    href=a.get('href','').strip()
    if not href: continue
    absu=urljoin(BASE,href)
    if urlparse(absu).netloc.endswith('scicluborezzo.com'):
        links.append(absu)

assets=[]
for tag,attr in [('img','src'),('script','src'),('link','href')]:
    for el in soup.find_all(tag):
        u=(el.get(attr) or '').strip()
        if not u: continue
        if tag=='link' and (el.get('rel') and 'stylesheet' not in [x.lower() for x in el.get('rel')]):
            continue
        absu=urljoin(BASE,u)
        assets.append(absu)

assets=sorted(set(assets))

fetched=[]
for u in assets:
    try:
        rr=sess.get(u, timeout=30)
        if rr.status_code!=200: continue
        p=urlparse(u)
        fn=os.path.basename(p.path) or 'asset'
        safe=re.sub(r'[^a-zA-Z0-9._-]','_',fn)
        outp=os.path.join(assets_dir,safe)
        # avoid overwrite
        base,ext=os.path.splitext(outp)
        i=1
        while os.path.exists(outp):
            outp=f"{base}_{i}{ext}"; i+=1
        with open(outp,'wb') as f: f.write(rr.content)
        fetched.append({'url':u,'file':outp,'bytes':len(rr.content)})
    except Exception:
        pass

report={
  'base':BASE,
  'title': (soup.title.text.strip() if soup.title else ''),
  'nav_text':[x.get_text(' ',strip=True) for x in soup.select('nav a, .menu a, .navbar a')][:50],
  'sample_internal_links': sorted(set(links))[:120],
  'assets_found': len(assets),
  'assets_downloaded': len(fetched),
  'assets': fetched[:300]
}
open(os.path.join(OUT,'snapshot_report.json'),'w',encoding='utf-8').write(json.dumps(report,ensure_ascii=False,indent=2))
open(os.path.join(OUT,'snapshot_report.md'),'w',encoding='utf-8').write(
    f"# Snapshot sito attuale\n\n- URL: {BASE}\n- Titolo: {report['title']}\n- Asset trovati: {report['assets_found']}\n- Asset scaricati: {report['assets_downloaded']}\n\n## Nav (estratto)\n"+
    '\n'.join([f"- {n}" for n in report['nav_text'] if n])+
    "\n\n## Link interni (estratto)\n"+
    '\n'.join([f"- {u}" for u in report['sample_internal_links'][:80]])+
    "\n"
)
print('ok', report['assets_downloaded'])
