# Óptica Loja – sitio web (Next.js + React + TypeScript)

Sitio multipágina (8 páginas) pensado para SEO local en Loja.

## Cómo correrlo
```bash
npm install
cp .env.example .env.local   # y completa el dominio
npm run dev                  # http://localhost:3000
npm run typecheck            # revisa tipos
npm run build && npm start   # producción
```
Requiere Node 20 o superior. Publícalo en Vercel o en cualquier hosting con Node.

## Dónde editar
| Qué | Archivo |
|---|---|
| Teléfonos, dirección, horarios, precios, promoción, reseñas | `src/lib/site.ts` |
| Textos, H1, preguntas frecuentes de las 5 páginas de servicio | `src/content/services.ts` |
| Artículos del blog | `src/content/posts.ts` |
| Portada y página del Opt. Lomas | `src/app/page.tsx`, `src/app/dr-fernando-lomas/page.tsx` |
| Colores y estilos | `src/app/globals.css` (variables al inicio) |

## Páginas
`/`, `/examen-visual-loja`, `/centro-oftalmologico-loja`, `/lentes-zeiss-loja`, `/terapia-visual-estrabismo-loja`, `/urgencias-oculares-loja`, `/dr-fernando-lomas`, `/blog` (los artículos viven en `/blog/[slug]`).

## Qué incluye
- Metadatos, canonical, Open Graph, `sitemap.xml`, `robots.txt` y manifest.
- Datos estructurados: Optician (negocio), FAQPage, BreadcrumbList, Person y Article. No se envían las reseñas como datos estructurados, porque Google no premia las reseñas propias del negocio.
- Formulario de cita que abre WhatsApp con el mensaje listo.
- Filtro de reseñas: 5 estrellas va a Google; 4 o menos va al WhatsApp del dueño.
- Selector "¿Qué te pasa?" en la portada y tabla de optotipos interactiva.
- Accesibilidad: enlace para saltar al contenido, foco visible, `prefers-reduced-motion`.

## Pendiente antes de publicar
Lee `docs/PLAN-SEO.md`. Lo más importante: verificar los datos marcados como VERIFICAR en `src/lib/site.ts`, añadir fotos profesionales y definir el dominio.

> Nota: este proyecto se escribió sin conexión a internet, por lo que no se ejecutó `npm install` ni `next build`. Si al compilar aparece algún error, es de ajuste menor.
