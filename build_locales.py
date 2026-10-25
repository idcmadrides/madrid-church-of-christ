"""Regenerate crawlable English pages after editing Spanish HTML or app.js.
Requires Python 3, beautifulsoup4 and Node.js. Generated pages are committed;
GitHub Pages serves them directly, with no runtime build dependency.
"""
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlsplit
import subprocess, json

root=Path(__file__).resolve().parent
config=json.loads((root/'seo.json').read_text(encoding='utf8'))
script=(root/'app.js').read_text(encoding='utf8')
prefix=script.split('const translatedNodes=')[0].split('const nodes=')[0]
english=json.loads(subprocess.check_output(['node','-e',prefix+';process.stdout.write(JSON.stringify(english));'],encoding='utf8'))
for filename,meta in config['pages'].items():
    original=root/filename
    soup=BeautifulSoup(original.read_text(encoding='utf8'),'html.parser')
    soup.html['lang']='en'
    for node in soup.select('[data-i18n]'):
        value=english.get(node['data-i18n'])
        if value is not None:
            node.clear()
            for child in list(BeautifulSoup(value,'html.parser').contents): node.append(child)
    soup.title.string=meta['en']['title']
    soup.select_one('meta[name="description"]')['content']=meta['en']['description']
    soup.select_one('link[rel="canonical"]')['href']=meta['en']['url']
    for key in ['og:title','og:description','og:url']:
        soup.select_one('meta[property="'+key+'"]')['content']=meta['en'][{'og:title':'title','og:description':'description','og:url':'url'}[key]]
    soup.select_one('meta[property="og:locale"]')['content']='en_GB'
    soup.select_one('meta[property="og:locale:alternate"]')['content']='es_ES'
    for node in soup.select('[src],link[href]'):
        attr='src' if node.has_attr('src') else 'href'
        value=node[attr]
        if not urlsplit(value).scheme and not value.startswith(('/', '#')): node[attr]='../'+value
    for node in soup.select('[srcset]'):
        node['srcset']=', '.join('../'+item.strip() for item in node['srcset'].split(','))
    for node in soup.select('a[href]'):
        href=node['href']
        if href.startswith('index.html'): node['href']='./'+href[len('index.html'):]
        elif href.startswith(('credits.html','research.html','practica.html')): node['href']='../'+href
        if node.has_attr('data-verse-en'): node['href']='https://www.biblegateway.com/passage/?search='+node['data-verse-en']+'&version=KJV'
    for node in soup.select('[data-lang]'):
        node.attrs.pop('aria-current',None)
        if node['data-lang']=='en': node['aria-current']='page'
    for node in soup.select('img'):
        filename2=Path(node.get('src','')).name
        if filename2 in config['imageAlts']: node['alt']=config['imageAlts'][filename2]
    soup.select_one('.brand')['aria-label']=config['englishName']
    soup.select_one('nav')['aria-label']='Main navigation'
    menu=soup.select_one('.menu,.menu-toggle')
    if menu: menu['aria-label']='Open menu'
    for selector,label in [('.meeting-strip','Gathering information')]:
        node=soup.select_one(selector)
        if node: node['aria-label']=label
    for node in soup.select('script[type="application/ld+json"]'):
        data=json.loads(node.string)
        if data.get('@type')=='WebPage':
            data.update(url=meta['en']['url'],name=meta['en']['title'],description=meta['en']['description'],inLanguage='en')
            node.string=json.dumps(data,ensure_ascii=False)
    target=root/'en'/filename
    target.parent.mkdir(exist_ok=True)
    target.write_text(str(soup).rstrip()+'\n',encoding='utf8',newline='\n')
print('Generated English HTML:',', '.join(config['pages']))
