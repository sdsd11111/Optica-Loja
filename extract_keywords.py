import glob

results = {}
files = glob.glob('d:/Abel paginas/Optica Loja/optica-loja-web/planificador palabras claves/*.csv')
for f in files:
    with open(f, mode='r', encoding='utf-8', errors='ignore') as fp:
        for line in fp:
            parts = line.strip().split(';')
            if len(parts) > 2:
                kw = parts[0].strip().strip('"').lower()
                vol = parts[2].strip().replace(',', '')
                try:
                    vol_num = int(vol)
                    if kw not in results or vol_num > results[kw]['vol']:
                        results[kw] = {
                            'kw': kw,
                            'vol': vol_num,
                            'comp': parts[5].strip() if len(parts) > 5 else '',
                            'bid_high': parts[8].strip() if len(parts) > 8 else ''
                        }
                except:
                    pass

sorted_kws = sorted(results.values(), key=lambda x: x['vol'], reverse=True)
with open('top_keywords.txt', 'w', encoding='utf-8') as out:
    for item in sorted_kws[:50]:
        out.write(f"{item['vol']:>6} | {item['comp']:<8} | {item['kw']}\n")
print(f"Total unique keywords processed: {len(results)}")
