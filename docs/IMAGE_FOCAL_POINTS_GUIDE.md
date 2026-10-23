# Guía: Imágenes Perfectas en Divs — Focal Point + Art Direction

## El Problema de Fondo (Literal)

Cuando usas `background-image` en un `div`, el navegador intenta encajar una foto con sus propias dimensiones dentro de un contenedor de dimensiones distintas. Sin instrucciones claras, recorta **desde los bordes**, lo que puede cortar caras, equipos o el producto principal.

**El resultado amateur:**
```
┌─────────────┐
│    fondo    │  ← zona cortada (irrelevante)
│  ─ ─ ─ ─ ─ │
│  👤 sujeto  │  ← a veces se corta
│             │
└─────────────┘
```

**El resultado profesional (con focal point):**
```
┌─────────────┐
│  👤 sujeto  │  ← siempre visible (protegido)
│             │
│    fondo    │  ← zona cortada (irrelevante)
└─────────────┘
```

---

## La Técnica — 3 Ingredientes

### 1. CSS base: `object-fit: cover` (para `<img>`) o `background-size: cover` (para `background-image`)

```css
/* Para etiquetas <img> */
.mi-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--focal, center 20%);
}

/* Para background-image en divs */
.mi-panel {
  background-size: cover;
  background-position: var(--focal, center 20%);
}
```

### 2. CSS override para móvil

```css
@media (max-width: 768px) {
  /* Para <img> */
  .mi-card img {
    object-position: var(--focal-mobile, var(--focal, center 20%));
  }

  /* Para background-image */
  .mi-panel {
    background-position: var(--focal-mobile, var(--focal, center 20%));
  }
}
```

### 3. Valor por elemento (inline style en JSX/HTML)

```tsx
// En JSX/React
<div
  className="mi-panel"
  style={{
    backgroundImage: `url('/foto.jpg')`,
    "--focal":        "center 25%",   // Desktop
    "--focal-mobile": "center 18%",   // Móvil
  } as React.CSSProperties}
/>

// Para <img> con focal point:
<img
  src="/foto.jpg"
  className="mi-card__img"
  style={{
    "--focal":        "center 25%",
    "--focal-mobile": "center 18%",
  } as React.CSSProperties}
/>
```

> En HTML puro:
> ```html
> <div class="mi-panel"
>      style="--focal: center 25%; --focal-mobile: center 18%; background-image: url('/foto.jpg')">
> ```

---

## Referencia de Valores de Focal Point

| Valor | Qué protege |
|-------|-------------|
| `center top` o `center 0%` | La parte de arriba (cabezas, cielo, logos) |
| `center 20%` | Cabeza + hombros (personas en foto general) |
| `center 30%` | Zona media-alta (retrato 3/4) |
| `center 50%` | Centro geométrico (default, sin calibración) |
| `center 70%` | Zona baja (manos, producto en mesa) |
| `center bottom` | La parte de abajo (pies, suelo, texto inferior) |
| `left 25%` | Sujeto en el tercio izquierdo |
| `right 25%` | Sujeto en el tercio derecho |

---

## Cuándo Usar Cada Técnica

| Situación | Solución |
|-----------|----------|
| `<img>` dentro de un contenedor de tamaño fijo | `object-fit: cover` + `object-position: var(--focal)` |
| `div` con `background-image` | `background-size: cover` + `background-position: var(--focal)` |
| Imagen diferente en móvil vs desktop | `<picture>` + `<source media="(max-width:768px)">` |
| Imagen diferente + focal diferente | `<picture>` + variable CSS `--focal-mobile` en el override |

---

## Implementaciones en Este Proyecto

| Componente | Técnica aplicada | Archivo |
|---|---|---|
| Hero Home (Slider) | `<picture>` + `--focal-desktop` + `--focal-mobile` | `HeroSlider.tsx` + `globals.css` |
| Hero Servicios (Banner) | `.hs` + `object-position` heredado del slider | `ServicePageView.tsx` |
| Pasos del Proceso (`sp-steps`) | `background-position: var(--step-focal)` con override móvil | `ServicePageView.tsx` + `globals.css` |

---

## Receta Rápida para Nuevas Secciones

```
1. En CSS → agregar:
   background-position: var(--focal, center 20%);
   @media mobile → background-position: var(--focal-mobile, var(--focal, center 20%));

2. En JSX → agregar en style:
   "--focal": "center 25%",
   "--focal-mobile": "center 18%",

3. Ajustar visualmente en el navegador cambiando el % hasta que quede bien.
   Subir % → recorta más arriba (muestra más abajo)
   Bajar % → recorta más abajo (muestra más arriba)
```

---

## Tamaños de Imagen Recomendados

| Tipo de hero/card | Relación | Tamaño desktop | Tamaño móvil | Peso máximo |
|---|---|---|---|---|
| Hero full-width | 16:9 o 21:9 | 1920 × 760 px | 750 × 940 px | 200 KB / 120 KB |
| Card cuadrada | 1:1 | 600 × 600 px | 400 × 400 px | 80 KB |
| Card rectangular horizontal | 4:3 o 3:2 | 800 × 600 px | 500 × 375 px | 100 KB |
| Panel acordeón (sp-steps) | 3:4 o 4:5 | 400 × 480 px | — | 80 KB |
| Banner de sección | 21:9 | 1440 × 560 px | 750 × 500 px | 150 KB |

> **Formato recomendado:** WebP. Convierte con [Squoosh.app](https://squoosh.app) (gratis).

---

## Regla de Oro

> **Nunca dejes que el navegador decida solo qué recortar.**
> Siempre define un `focal point` explícito cuando una imagen se muestre dentro de un contenedor de dimensiones fijas.
