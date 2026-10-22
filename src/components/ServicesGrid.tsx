"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { useRef, useState, useCallback } from "react";

interface ServiceCardData {
  href: string;
  badge: string;
  title: string;
  desc: string;
  image: string;
  btnText: string;
}

const serviceItems: ServiceCardData[] = [
  {
    href: "/examen-visual-loja",
    badge: "OPTOMETRÍA DIGITAL",
    title: "Examen visual computarizado",
    desc: "Evaluación refractiva completa de agudeza visual, miopía, astigmatismo y presbicia con tecnología moderna.",
    image: "/images/Home/servicio-examen.jpg",
    btnText: "Examen visual →",
  },
  {
    href: "/centro-oftalmologico-loja",
    badge: "DIAGNÓSTICO MÉDICO",
    title: "Diagnóstico oftalmológico",
    desc: "Detección y tratamiento de glaucoma, cataratas, queratocono, retina y patologías oculares.",
    image: "/images/Home/servicio-oftalmologico.jpg",
    btnText: "Diagnóstico →",
  },
  {
    href: "/terapia-visual-estrabismo-loja",
    badge: "SALUD INFANTIL Y ADULTOS",
    title: "Terapia visual y estrabismo",
    desc: "Rehabilitación visual, control temprano de miopía, ojo vago (ambliopía) y alineación binocular.",
    image: "/images/Home/servicio-terapia-visual.jpg",
    btnText: "Terapia visual →",
  },
  {
    href: "/laboratorio-optico-loja",
    badge: "TALLER & MONTAJE",
    title: "Lentes y laboratorio óptico",
    desc: "Biselado digital de alta precisión, montaje de lunas monofocales y progresivas, y calibración de armazones.",
    image: "/images/Home/servicio-lentes-zeiss.jpg",
    btnText: "Laboratorio óptico →",
  },
  {
    href: "/lentes-de-contacto-loja",
    badge: "ADAPTACIÓN GUIADA",
    title: "Lentes de contacto & pupilentes",
    desc: "Lentes graduados, tóricos para astigmatismo y cosméticos con asesoría y prueba personalizada.",
    image: "/servicio-lentes-contacto.jpg",
    btnText: "Lentes de contacto →",
  },
  {
    href: "/productos-opticos-loja",
    badge: "CATÁLOGO & ACCESORIOS",
    title: "Productos y armazones ópticos",
    desc: "Variedad de armazones oftálmicos, gafas de sol con protección UV400, soluciones de limpieza y accesorios.",
    image: "/servicio-urgencias.jpg",
    btnText: "Ver productos →",
  },
];

function ServiceCard({ s }: { s: ServiceCardData }) {
  return (
    <Link href={s.href} className="service-card service-card--with-img">
      <div className="service-card__img-wrap">
        <img
          src={s.image}
          alt={s.title}
          className="service-card__img"
          loading="lazy"
        />
        <span className="service-badge service-card__badge-overlay">{s.badge}</span>
      </div>
      <div className="service-card__content">
        <h3 className="service-card__title">{s.title}</h3>
        <p className="service-card__desc">{s.desc}</p>
        <div className="service-card__bottom">
          <span className="service-link-btn">{s.btnText}</span>
        </div>
      </div>
    </Link>
  );
}

export function ServicesGrid() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = serviceItems.length;

  // Touch swipe state
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const scrollTo = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clampedIdx = Math.max(0, Math.min(idx, total - 1));
    setCurrent(clampedIdx);

    // Get the card width (first child)
    const card = track.children[clampedIdx] as HTMLElement;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, [total]);

  const handlePrev = () => scrollTo(current - 1);
  const handleNext = () => scrollTo(current + 1);

  // Update current index on scroll (for dot sync)
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 0;
    if (!cardWidth) return;
    const idx = Math.round(track.scrollLeft / cardWidth);
    setCurrent(Math.max(0, Math.min(idx, total - 1)));
  };

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY.current - e.changedTouches[0].clientY);
    if (Math.abs(dx) > 40 && dy < 60) {
      scrollTo(dx > 0 ? current + 1 : current - 1);
    }
  };

  return (
    <section
      className="section section--paper services-grid-section"
      id="servicios"
      aria-labelledby="services-title"
    >
      <div className="wrap">
        <Reveal direction="up" className="center services-header">
          <span className="eyebrow-accent">
            <span className="dot-pulse" /> ESPECIALIDADES &amp; SERVICIOS
          </span>
          <h2 id="services-title" className="services-heading">
            Cuidado visual integral en un solo lugar
          </h2>
          <p className="lead services-lead">
            Desde tu examen computarizado hasta lunas alemanas ZEISS y tratamientos
            oftalmológicos avanzados. Cada servicio cuenta con su página especializada.
          </p>
        </Reveal>

        {/* ── DESKTOP: grid 3 columnas ── */}
        <div className="services-grid services-grid--three-cols services-grid--desktop">
          {serviceItems.map((s) => (
            <ServiceCard key={s.href} s={s} />
          ))}
        </div>

        {/* ── MOBILE/TABLET: slider con peek ── */}
        <div className="services-slider" aria-label="Slider de servicios">
          {/* Track deslizable */}
          <div
            className="services-slider__track"
            ref={trackRef}
            onScroll={handleScroll}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {serviceItems.map((s) => (
              <div key={s.href} className="services-slider__item">
                <ServiceCard s={s} />
              </div>
            ))}
          </div>

          {/* Controles: flechas + dots */}
          <div className="services-slider__controls">
            <button
              className="services-slider__arrow services-slider__arrow--prev"
              onClick={handlePrev}
              disabled={current === 0}
              aria-label="Servicio anterior"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="services-slider__dots" role="tablist">
              {serviceItems.map((s, i) => (
                <button
                  key={s.href}
                  role="tab"
                  aria-selected={i === current}
                  className={`services-slider__dot${i === current ? " services-slider__dot--active" : ""}`}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir al servicio ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="services-slider__arrow services-slider__arrow--next"
              onClick={handleNext}
              disabled={current === total - 1}
              aria-label="Siguiente servicio"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
