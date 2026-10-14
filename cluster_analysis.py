import glob

clusters = {
    "urgencias_ojos_rojos": ["ojo rojo", "ojos rojo", "derrame", "infecci", "conjuntivitis", "orzuelo", "emergencia", "dolor de ojo", "trauma"],
    "estrabismo_terapia": ["estrabismo", "terapia visual", "ojo vago", "ambliop", "desviad", "visión doble", "diplopia"],
    "cirugia_catarata_retina": ["catarata", "retin", "cirug", "operaci", "pterigi", "glaucoma", "pentacam", "oct"],
    "lentes_gafas_armazones": ["lente", "gafa", "armazon", "montura", "zeiss", "progresiv", "fotocrom"],
    "examen_vista_optometria": ["examen", "medicion", "gradua", "optometr", "vista cerca"],
    "lentes_contacto": ["lente de contacto", "lentes de contacto", "pupilentes", "toric", "lentilla"]
}

results = {k: [] for k in clusters}
files = glob.glob('d:/Abel paginas/Optica Loja/optica-loja-web/planificador palabras claves/*.csv')

for f in files:
    with open(f, mode='r', encoding='utf-8', errors='ignore') as fp:
        for line in fp:
            parts = line.strip().split(';')
            if len(parts) > 2:
                kw = parts[0].strip().strip('"').lower()
                vol_str = parts[2].strip().replace(',', '')
                try:
                    vol = int(vol_str)
                    comp = parts[5].strip() if len(parts) > 5 else ''
                    for c_name, c_terms in clusters.items():
                        if any(t in kw for t in c_terms):
                            results[c_name].append((kw, vol, comp))
                except:
                    pass

for c_name, kw_list in results.items():
    unique = {}
    for kw, vol, comp in kw_list:
        if kw not in unique or vol > unique[kw][0]:
            unique[kw] = (vol, comp)
    sorted_unique = sorted(unique.items(), key=lambda x: x[1][0], reverse=True)
    total_vol = sum(v[0] for _, v in sorted_unique)
    print(f"=== CLUSTER: {c_name} (Total KWs: {len(sorted_unique)}, Sum Vol: {total_vol}) ===")
    for kw, (vol, comp) in sorted_unique[:8]:
        print(f"   {vol:>6} | {comp:<7} | {kw}")
    print()
