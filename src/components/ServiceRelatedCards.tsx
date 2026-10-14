"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { SERVICE_CATALOG } from "@/content/serviceCatalog";

interface ServiceRelatedCardsProps {
  /** Ruta de la página actual — para excluirla del slider de relacionados */
  currentPath: string;
}

export function ServiceRelatedCards({ currentPath }: ServiceRelatedCardsProps) {
  // Mostramos todos los demás servicios (sin limitar a 3)
  const related = SERVICE_CATALOG.filter((s) => s.href !== currentPath);
  // Duplicamos x3 para asegurar un bucle infinito perfectamente continuo sin saltos
  const loopList = [...related, ...related, ...related];

  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 0.65; // Velocidad suave

    const getLoopWidth = () => {
      // 1 tercio del scrollWidth corresponde exactamente a una tanda de cards
      return track.scrollWidth / 3;
    };

    const animate = () => {
      if (!pausedRef.current && track) {
        posRef.current += SPEED;
        const loopWidth = getLoopWidth();
        if (loopWidth > 0 && posRef.current >= loopWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translate3d(-${posRef.current}px, 0, 0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [related.length]);

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
      </div>

      {/* Viewport infinito full-width / bleed */}
      <div
        className="related-slider-viewport"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onTouchStart={() => { pausedRef.current = true; }}
        onTouchEnd={() => { pausedRef.current = false; }}
      >
        <div ref={trackRef} className="related-slider-track">
          {loopList.map((s, idx) => (
            <div key={`${s.href}-${idx}`} className="related-slider-item">
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
      </div>
    </section>
  );
}
