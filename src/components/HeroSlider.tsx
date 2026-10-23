/**
 * HeroSlider.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Hero de pantalla completa con slider de imágenes para Óptica Loja.
 *
 * INSPIRACIÓN VISUAL: gmo.com.ec
 *   - Imagen full-width con object-fit: cover
 *   - Overlay degradado izquierdo para legibilidad del texto
 *   - Texto alineado a la izquierda con títulos grandes tipo serif/display
 *   - Flechas circulares outline en bordes izquierdo y derecho (centradas vertical)
 *   - Dots indicadores esquina inferior derecha
 *   - Autoplay 5 segundos, pausa al hover para accesibilidad
 *   - Transición: cross-fade suave (opacity)
 *
 * RESPONSIVIDAD:
 *   - Desktop (≥1024px): texto izquierda, imagen ocupa 100% ancho
 *   - Tablet (768-1023px): texto más compacto, imagen sigue siendo cover
 *   - Móvil (≤767px): imagen cubre todo, texto se posiciona en la parte inferior
 *     con fondo degradado ascendente para garantizar contraste
 *
 * ACCESIBILIDAD:
 *   - aria-live="polite" en región de slides
 *   - aria-label descriptivo en flechas y dots
 *   - Pausa automática al hover/focus para usuarios con preferencia de movimiento
 *   - Prefiere-reduced-motion: desactiva transición y autoplay
 *
 * CÓMO USAR:
 *   import { HeroSlider } from "@/components/HeroSlider";
 *   <HeroSlider />
 *
 * PERSONALIZAR SLIDES:
 *   Edita el array SLIDES más abajo. Cada slide acepta:
 *     - image:    ruta de la imagen en /public (string)
 *     - tag:      etiqueta pequeña sobre el título (ej. "ZEISS VISION EXPERT")
 *     - title:    título principal en dos líneas
 *     - subtitle: subtítulo/descripción corta
 *     - ctaLabel: texto del botón CTA
 *     - ctaHref:  enlace del botón (WhatsApp o ruta interna)
 *     - align:    "left" | "right" — posición del bloque de texto
 */

"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { waLink } from "@/lib/site";

/* ── Tipado del slide ─────────────────────────────────────────────────── */
interface SlideData {
  /** Ruta de la imagen para Desktop (horizontal) */
  image: string;
  /** Ruta de la imagen para Móvil (vertical/cuadrada) opcional */
  mobileImage?: string;
  /** Punto focal de la imagen en desktop (ej: 'center 25%') */
  focalDesktop?: string;
  /** Punto focal de la imagen en móvil (ej: 'center 40%') */
  focalMobile?: string;
  /** Texto alternativo de la imagen para accesibilidad */
  imageAlt: string;
  /** Etiqueta pequeña tipo badge encima del título */
  tag: string;
  /** Título principal del slide */
  title: string;
  /** Subtítulo o descripción corta */
  subtitle: string;
  /** Texto del botón CTA principal */
  ctaLabel: string;
  /** Href del botón CTA */
  ctaHref: string;
  /** Lado donde aparece el bloque de texto */
  align?: "left" | "right";
}

/* ── Configuración de slides ─────────────────────────────────────────── */
const SLIDES: SlideData[] = [
  {
    image: "/servicio-examen-visual.jpg",
    mobileImage: "/servicio-examen-visual.jpg",
    focalDesktop: "center 25%",
    focalMobile: "center 22%",
    imageAlt: "Optometrista realizando examen visual en Óptica Loja",
    tag: "ZEISS VISION EXPERT · LOJA",
    title: "Tu visión\nes nuestra prioridad",
    subtitle: "Examen visual computarizado sin costo con la compra de tus lentes. Más de 25 años cuidando la salud visual de Loja.",
    ctaLabel: "Agendar cita por WhatsApp",
    ctaHref: waLink("Hola Óptica Loja, quiero agendar mi examen visual."),
    align: "left",
  },
  {
    image: "/servicio-lentes-zeiss.jpg",
    mobileImage: "/servicio-lentes-zeiss.jpg",
    focalDesktop: "center 28%",
    focalMobile: "center 30%",
    imageAlt: "Lentes de precisión alemana ZEISS en Óptica Loja",
    tag: "TECNOLOGÍA ALEMANA",
    title: "Lunas ZEISS\nde precisión",
    subtitle: "Centro de Certificación ZEISS Vision Expert en Loja. Nitidez óptica de máxima calidad con garantía alemana.",
    ctaLabel: "Solicitar asesoría ZEISS",
    ctaHref: waLink("Hola Óptica Loja, quiero información sobre lentes ZEISS."),
    align: "left",
  },
  {
    image: "/servicio-lentes-contacto.jpg",
    mobileImage: "/servicio-lentes-contacto.jpg",
    focalDesktop: "center 25%",
    focalMobile: "center 20%",
    imageAlt: "Lentes de contacto y pupilentes en Óptica Loja",
    tag: "ADAPTACIÓN GUIADA",
    title: "Lentes de contacto\ncon prueba incluida",
    subtitle: "Graduados, tóricos, multifocales y cosméticos. Adaptación personalizada por nuestro equipo de optometría.",
    ctaLabel: "Agendar prueba de adaptación",
    ctaHref: waLink("Hola Óptica Loja, quiero una prueba de adaptación de lentes de contacto."),
    align: "left",
  },
];

/* ── Componente principal ────────────────────────────────────────────── */
export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  /** Cambia al slide anterior con wrapping circular */
  const prev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActive((cur) => (cur - 1 + SLIDES.length) % SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  /** Cambia al slide siguiente con wrapping circular */
  const next = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActive((cur) => (cur + 1) % SLIDES.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  /** Ir a un slide específico por índice */
  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning || idx === active) return;
      setIsTransitioning(true);
      setActive(idx);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [active, isTransitioning]
  );

  /* Autoplay — se pausa al hover y respeta prefers-reduced-motion */
  useEffect(() => {
    if (isPaused || prefersReducedMotion) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      next();
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, prefersReducedMotion, next]);

  /* Soporte de teclado: flechas izquierda/derecha */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  const slide = SLIDES[active];

  return (
    <section
      className="hs"
      aria-label="Slider principal de Óptica Loja"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* ── Imágenes: todas montadas en el DOM, solo la activa es visible ── */}
      {SLIDES.map((s, idx) => (
        <div
          key={s.image}
          className={`hs__slide ${idx === active ? "hs__slide--active" : ""}`}
          aria-hidden={idx !== active}
        >
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
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : "auto"}
              draggable={false}
            />
          </picture>
          {/* Sutil viñeta en los bordes para resaltar las flechas y dots */}
          <div className="hs__subtle-vignette" aria-hidden="true" />
        </div>
      ))}

      {/* ── Flecha izquierda (Anterior) ── */}
      <button
        type="button"
        className="hs__arrow hs__arrow--prev"
        onClick={prev}
        aria-label="Slide anterior"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* ── Flecha derecha (Siguiente) ── */}
      <button
        type="button"
        className="hs__arrow hs__arrow--next"
        onClick={next}
        aria-label="Siguiente slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* ── Dots indicadores (esquina inferior derecha como GMO) ── */}
      <div className="hs__dots" role="tablist" aria-label="Slides del hero">
        {SLIDES.map((s, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={idx === active}
            aria-label={`Ir al slide ${idx + 1}: ${s.tag}`}
            className={`hs__dot ${idx === active ? "hs__dot--active" : ""}`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>

      {/* ── Barra de progreso del slide activo ── */}
      <div className="hs__progress" aria-hidden="true">
        <div
          className={`hs__progress-bar ${!isPaused && !prefersReducedMotion ? "hs__progress-bar--running" : ""}`}
          key={active} /* Reinicia la animación al cambiar slide */
        />
      </div>
    </section>
  );
}

export default HeroSlider;
