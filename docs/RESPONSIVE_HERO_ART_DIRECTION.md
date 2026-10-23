# Técnica de "Art Direction" y Ajuste Óptimo de Imágenes en Heros (Estilo GMO)

Esta guía documenta la técnica profesional implementada en el hero de **Óptica Loja** inspirada en e-commerce líderes (como GMO Ecuador).

---

## 1. El Problema Común
- **Corte de rostros/objetos clave:** Una foto panorámica (16:9) al encajar en la pantalla vertical de un celular (9:16) se corta de los lados o pierde el foco.
- **Imágenes deformadas:** Cuando se usa `width: 100%; height: 100%` sin `object-fit`, las personas o productos se estiran o aplastan.
- **Carga lenta en móviles:** Servir una foto pesada de 2000px en conexiones móviles retrasa la carga innecesariamente.

---

## 2. Los 3 Pilares de la Solución Implementada en la Home

### A. Elemento Nativo `<picture>` (*Art Direction*)
El navegador escoge automáticamente la imagen óptima según el ancho del dispositivo:

```tsx
<picture className="hs__picture">
  {s.mobileImage && (
    <source
      media="(max-width: 768px)"
      srcSet={s.mobileImage}
    />
  )}
  <img
    src={s.image}
    alt={s.imageAlt}
    className="hs__img"
    style={{
      "--focal-desktop": s.focalDesktop || "center 25%",
      "--focal-mobile": s.focalMobile || s.focalDesktop || "center 22%",
    } as React.CSSProperties}
  />
</picture>
```

### B. Calibración de Puntos Focales (`object-position` dinámico)
A través de variables CSS (`--focal-desktop` y `--focal-mobile`), cada slide puede indicarle al navegador exactamente qué coordenada mantener visible (ej. el rostro del paciente o el equipo oftalmológico):

```css
.hs__picture {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}

.hs__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--focal-desktop, center 25%);
  display: block;
}

@media (max-width: 768px) {
  .hs__img {
    object-position: var(--focal-mobile, center 22%);
  }
}
```

### C. Altura Fluida con `clamp()`
Garantiza proporciones armoniosas sin brincos al redimensionar:
- **Desktop:** `clamp(380px, 44vw, 560px)`
- **Móvil (≤ 640px):** `clamp(490px, 115vw, 600px)`

---

## 3. Configuración en `HeroSlider.tsx`

Cada slide ahora acepta:
- `image`: Ruta de la imagen panorámica de escritorio.
- `mobileImage`: Variante vertical o recortada para móvil.
- `focalDesktop`: Coordenada de enfoque en desktop (ej: `center 25%`).
- `focalMobile`: Coordenada de enfoque en móvil (ej: `center 22%`).
