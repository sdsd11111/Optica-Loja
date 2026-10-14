import urllib.request, re

urls = [
  ("1", "https://share.google/wepyzNk31APWaLBSs"),
  ("2", "https://share.google/vUNCHr9S9Fd6RwwlL"),
  ("3", "https://share.google/UR0AcFjdLUP7Fwcvl")
]

for name, u in urls:
    req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            final_url = r.geturl()
            html = r.read().decode('utf-8', errors='ignore')
            # Extraer títulos o descripciones
            title = re.findall(r'<title>(.*?)</title>', html)
            og = re.findall(r'property="og:description" content="(.*?)"', html)
            print(f"=== {name} ===")
            print("URL:", final_url)
            print("Title:", title)
            print("OG:", og)
    except Exception as e:
        print(f"Error {name}:", e)
