# Plan SEO – Óptica Loja

## Qué dice la data (y qué no)
- Las exportaciones de Keyword Planner traen volúmenes en **rangos (0 / 50 / 500 / 5.000)**, sin estacionalidad mensual y **sin palabras con "loja"**. Sirven para priorizar temas, no para medir tráfico local.
- Google Trends para la ciudad de Loja no muestra datos suficientes con términos genéricos. La demanda local se captura sobre todo con **Google Business Profile, WhatsApp e Instagram**.
- Estrategia: **tema con volumen + "Loja"** en title, H1 y textos, y un perfil de Google Business muy completo.

## Mapa de páginas (8)
| Página | URL | Palabra principal |
|---|---|---|
| Inicio | / | óptica loja |
| Examen visual y lentes de contacto | /examen-visual-loja | examen de la vista |
| Centro de diagnóstico | /centro-oftalmologico-loja | oftalmología, catarata, glaucoma |
| Lentes ZEISS | /lentes-zeiss-loja | lentes fotocromáticos, progresivos |
| Terapia visual | /terapia-visual-estrabismo-loja | estrabismo |
| Urgencias oculares | /urgencias-oculares-loja | conjuntivitis, ojos rojos |
| Opt. Fernando Lomas | /dr-fernando-lomas | optometrista loja |
| Blog (artículos en /blog/[slug]) | /blog | astigmatismo, ojo seco |

Citas y contacto: bloque en todas las páginas (formulario a WhatsApp, mapa, filtro de reseñas). No hay página aparte.

`docs/palabras-clave-por-pagina.csv` lista las 40 mejores palabras de la data para cada página (sin marcas ajenas).

## Antes de publicar
1. Verificar datos en `src/lib/site.ts`: teléfonos, dirección, horarios, precios, reseñas, años.
2. Confirmar con ZEISS cómo se puede redactar la exclusividad. El sitio dice "trabaja con lentes ZEISS", no "distribución única".
3. Confirmar el título profesional. El sitio usa "Opt." como Instagram.
4. Reemplazar `public/og.png` y `public/logo-optica.jpg` por versiones finales y añadir fotos de la sesión profesional.
5. Definir dominio y poner `NEXT_PUBLIC_SITE_URL`.

## Después de publicar
1. Verificar el dominio en Google Search Console y enviar `/sitemap.xml`.
2. Completar Google Business Profile: categoría "Óptica", servicios, fotos, horarios y enlace al sitio.
3. Poner la URL del sitio en la bio de Instagram y Facebook, con el mismo nombre en todas las redes.
4. Publicar un artículo por semana (ver ideas en `src/content/posts.ts`) y enlazar cada uno a su página de servicio.
5. Pedir reseñas con el módulo de calificación y revisar el desempeño de Google Business cada mes.

## Siguiente fase
- Bot de agendamiento 24/7 con base de datos (reemplaza el formulario a WhatsApp).
- Panel de contenidos para el calendario dolor (fin de semana) / solución (lunes).
