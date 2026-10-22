"use client";

import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import { SERVICE_CATALOG } from "@/content/serviceCatalog";

interface ServiceRelatedCardsProps {
  /** Ruta de la página actual — para excluirla del slider de relacionados */
  currentPath: string;
}

export function ServiceRelatedCards({ currentPath }: ServiceRelatedCardsProps) {
  // Mostramos todos los demás servicios excluyendo la página actual
  const related = SERVICE_CATALOG.filter((s) => s.href !== currentPath);
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = related.length;

  // Touch swipe state
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const scrollTo = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clampedIdx = Math.max(0, Math.min(idx, total - 1));
    setCurrent(clampedIdx);

    const card = track.children[clampedIdx] as HTMLElement;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, [total]);

  const handlePrev = () => scrollTo(current - 1);
  const handleNext = () => scrollTo(current + 1);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 0;
    if (!cardWidth) return;
    const idx = Math.round(track.scrollLeft / cardWidth);
    setCurrent(Math.max(0, Math.min(idx, total - 1)));
  };

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
    <section className="related-services-section" aria-labelledby="related-h">
      <div className="wrap">
        <div className="related-services-header center" data-reveal="up">
          <span className="eyebrow-accent">
            <span className="dot-pulse" /> SIGUE EXPLORANDO
          </span>
          <h2 id="related-h" className="related-services__title">
            Otros servicios de Óptica Loja
          </h2>
          <p className="related-services__lead">
            Todos nuestros servicios están conectados. Explora nuestras especialidades y agenda según tu necesidad.
          </p>
        </div>

        {/* ── DESKTOP & MOBILE SLIDER CON PEEK Y SWIPE ── */}
        <div className="related-slider-container" aria-label="Slider de servicios relacionados">
          <div
            className="related-slider-track-peek"
            ref={trackRef}
            onScroll={handleScroll}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {related.map((s) => (
              <div key={s.href} className="related-slider-item-peek">
                <Link href={s.href} className="related-service-card">
                  <div className="related-service-card__img-wrap">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="related-service-card__img"
                      loading="lazy"
                    />
                    <span className="related-service-card__badge">{s.badge}</span>
                    <div className="related-service-card__overlay" />
                  </div>
                  <div className="related-service-card__body">
                    <span className="related-service-card__emoji">{s.emoji}</span>
                    <h3 className="related-service-card__title">{s.title}</h3>
                    <p className="related-service-card__desc">{s.desc}</p>
                    <span className="related-service-card__btn">
                      {s.btnText} →
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Controles: flechas + dots */}
          <div className="related-slider-controls">
            <button
              className="related-slider-arrow related-slider-arrow--prev"
              onClick={handlePrev}
              disabled={current === 0}
              aria-label="Servicio anterior"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="related-slider-dots" role="tablist">
              {related.map((s, i) => (
                <button
                  key={s.href}
                  role="tab"
                  aria-selected={i === current}
                  className={`related-slider-dot${i === current ? " related-slider-dot--active" : ""}`}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir al servicio ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="related-slider-arrow related-slider-arrow--next"
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
