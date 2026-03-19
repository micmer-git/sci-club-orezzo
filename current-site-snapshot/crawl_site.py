import os, re, json, requests
from urllib.parse import urljoin, urlparse, urlunparse
from bs4 import BeautifulSoup
from collections import deque

BASE='https://www.scicluborezzo.com/'
DOMAIN='www.scicluborezzo.com'
OUT=r'C:\Users\micme\Desktop\micmer\sci-club-orezzo\current-site-snapshot'
PAGES_DIR=os.path.join(OUT,'pages')
ASSETS_DIR=os.path.join(OUT,'assets_live')
os.makedirs(PAGES_DIR, exist_ok=True)
os.makedirs(ASSETS_DIR, exist_ok=True)

MAX_PAGES=60
sess=requests.Session(); sess.headers.update({'User-Agent':'Mozilla/5.0'})


def norm(u):
    p=urlparse(u)
    p=p._replace(fragment='')
    if p.path=='': p=p._replace(path='/')
    return urlunparse(p)

def is_internal(u):
    try:
        return urlparse(u).netloc in ('scicluborezzo.com','www.scicluborezzo.com')
    except: return False

q=deque([BASE])
seen=set()
pages=[]
assets=set()
errors=[]

while q and len(pages)<MAX_PAGES:
    u=norm(q.popleft())
    if u in seen: continue
    seen.add(u)
    try:
        r=sess.get(u, timeout=25)
        ct=r.headers.get('content-type','')
        if r.status_code!=200 or 'text/html' not in ct:
            continue
        html=r.text
        pages.append(u)

        fn=re.sub(r'[^a-zA-Z0-9._-]','_',urlparse(u).path.strip('/')) or 'home'
        open(os.path.join(PAGES_DIR,fn+'.html'),'w',encoding='utf-8').write(html)

        soup=BeautifulSoup(html,'html.parser')
        for a in soup.select('a[href]'):
            href=a.get('href','').strip()
            if not href or href.startswith('mailto:') or href.startswith('tel:') or href.startswith('javascript:'): continue
            uu=norm(urljoin(u,href))
            if is_internal(uu) and uu not in seen:
                q.append(uu)

        for tag,attr in [('img','src'),('script','src'),('link','href'),('source','src')]:
            for el in soup.find_all(tag):
                vv=(el.get(attr) or '').strip()
                if not vv: continue
                if tag=='link':
                    rel=[x.lower() for x in (el.get('rel') or [])]
                    if rel and not any(x in ('stylesheet','icon','preload') for x in rel):
                        continue
                absu=norm(urljoin(u,vv))
                if is_internal(absu): assets.add(absu)
    except Exception as e:
        errors.append({'url':u,'error':str(e)[:180]})

fetched=[]
for u in sorted(assets):
    try:
        rr=sess.get(u, timeout=30)
        if rr.status_code!=200: continue
        p=urlparse(u)
        fn=os.path.basename(p.path) or 'asset'
        fn=re.sub(r'[^a-zA-Z0-9._-]','_',fn)
        outp=os.path.join(ASSETS_DIR,fn)
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
  'pages_crawled':len(pages),
  'pages':pages,
  'assets_found':len(assets),
  'assets_downloaded':len(fetched),
  'errors':errors[:50]
}
open(os.path.join(OUT,'crawl_report.json'),'w',encoding='utf-8').write(json.dumps(report,ensure_ascii=False,indent=2))
open(os.path.join(OUT,'crawl_report.md'),'w',encoding='utf-8').write(
    '# Crawl report sito attuale\n\n'
    +f"- Pages crawled: {len(pages)}\n"
    +f"- Assets found: {len(assets)}\n"
    +f"- Assets downloaded: {len(fetched)}\n\n"
    +'## Pagine\n'+ '\n'.join([f"- {x}" for x in pages[:120]]) + '\n\n'
    +'## Errori (estratto)\n'+ '\n'.join([f"- {e['url']}: {e['error']}" for e in errors[:30]]) + '\n'
)
print('pages',len(pages),'assets',len(fetched))
