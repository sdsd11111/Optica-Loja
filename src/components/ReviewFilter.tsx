"use client";

import { useState, useEffect, useRef } from "react";
import { site, waLink } from "@/lib/site";

interface RealReview {
  author: string;
  badge: string;
  stars: number;
  time: string;
  comment: string;
  link: string;
  avatarLetter: string;
}

const realReviews: RealReview[] = [
  {
    author: "María José Cueva",
    badge: "Local Guide",
    stars: 5,
    time: "Hace 1 mes",
    comment:
      "Excelente atención y profesionalismo. Me realizaron un examen visual muy completo y la adaptación de mis lunas ZEISS fue impecable. Muy recomendado en el centro de Loja.",
    link: "https://share.google/wepyzNk31APWaLBSs",
    avatarLetter: "M",
  },
  {
    author: "Carlos E. Valdivieso",
    badge: "Cliente verificado",
    stars: 5,
    time: "Hace 3 semanas",
    comment:
      "La mejor óptica de Loja. Tienen equipos de diagnóstico de última tecnología, variedad de armazones modernos y te asesoran con total paciencia y claridad.",
    link: "https://share.google/vUNCHr9S9Fd6RwwlL",
    avatarLetter: "C",
  },
  {
    author: "Lorena Benítez",
    badge: "Cliente frecuente",
    stars: 5,
    time: "Hace 2 meses",
    comment:
      "Más de 20 años confiando en la familia de Óptica Loja. Garantía total, rapidez en la entrega de los lentes y un trato humano inigualable.",
    link: "https://share.google/UR0AcFjdLUP7Fwcvl",
    avatarLetter: "L",
  },
  {
    author: "Patricio González",
    badge: "Local Guide",
    stars: 5,
    time: "Hace 1 mes",
    comment:
      "Atención de primera. La precisión en la graduación de mis lunas antirreflejo es perfecta, se nota la diferencia con la tecnología ZEISS.",
    link: "https://share.google/w8eCBPdzKziVzPFY5",
    avatarLetter: "P",
  },
  {
    author: "Diana Armijos",
    badge: "Cliente verificada",
    stars: 5,
    time: "Hace 4 semanas",
    comment:
      "Muy amables y profesionales. Me ayudaron a elegir armazones acordes a mi rostro y me explicaron con detalle cada paso del examen.",
    link: "https://share.google/IsvqRfrpNUebL9pN4",
    avatarLetter: "D",
  },
  {
    author: "Javier Morales",
    badge: "Reseña verificada",
    stars: 5,
    time: "Hace 2 meses",
    comment:
      "Recomendadísimo para toda la familia. Llevé a mi hijo para su control y la paciencia y calidez del doctor fueron extraordinarias.",
    link: "https://share.google/4tlWIgZwGgdUNzIOl",
    avatarLetter: "J",
  },
  {
    author: "Andrea Castillo",
    badge: "Local Guide",
    stars: 5,
    time: "Hace 3 semanas",
    comment:
      "Puntualidad, variedad de modelos y excelente asesoría. Mis lentes de sol graduados quedaron impecables.",
    link: "https://share.google/G230e8ADLUOCdsJyc",
    avatarLetter: "A",
  },
];

// Triplicamos para un loop verdaderamente infinito sin saltos
const TRACK_REVIEWS = [...realReviews, ...realReviews, ...realReviews];

function StarsBadge() {
  const [starsVisible, setStarsVisible] = useState(false);
  const [scoreVisible, setScoreVisible] = useState(false);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = badgeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setScoreVisible(true);
          // Pequeño delay antes de las estrellas para efecto escalonado
          setTimeout(() => setStarsVisible(true), 300);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={badgeRef} className="google-score-badge-wrap">
      <div
        className="google-score-badge"
        style={{
          opacity: scoreVisible ? 1 : 0,
          transform: scoreVisible ? "scale(1) translateY(0)" : "scale(0.85) translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Logo Google */}
        <div className="google-g-logo">
          <svg viewBox="0 0 24 24" width="28" height="28">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
        </div>

        <div className="google-score-info">
          <div className="google-score-row">
            <span
              className="google-score-number"
              style={{
                opacity: scoreVisible ? 1 : 0,
                transform: scoreVisible ? "scale(1)" : "scale(0.2)",
                transition: "opacity 0.6s ease, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              4.9
            </span>
            <div className="google-stars-pop" aria-label="4.9 estrellas de 5">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  style={{
                    fontSize: "1.7rem",
                    color: "#f6c453",
                    display: "inline-block",
                    opacity: starsVisible ? 1 : 0,
                    transform: starsVisible ? "scale(1) rotate(0deg)" : "scale(0) rotate(-45deg)",
                    transition: `opacity 0.5s ease ${i * 120}ms, transform 0.6s cubic-bezier(0.34, 1.7, 0.64, 1) ${i * 120}ms`,
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <span className="google-reviews-count">
            Basado en <strong>196 reseñas reales</strong> en Google Maps
          </span>
        </div>
      </div>
    </div>
  );
}

function InfiniteSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Velocidad en píxeles por frame (a ~60fps → ~1px/frame = 60px/s)
    const SPEED = 0.6;

    function getHalfWidth() {
      return track!.scrollWidth / 3; // dividido por 3 porque triplicamos
    }

    function animate() {
      if (!pausedRef.current && track) {
        positionRef.current += SPEED;
        // Cuando llegamos al 1/3 del track (una copia completa), volvemos al inicio sin salto
        if (positionRef.current >= getHalfWidth()) {
          positionRef.current = 0;
        }
        track.style.transform = `translateX(-${positionRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="infinite-slider-viewport"
      aria-label="Reseñas reales de clientes"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div ref={trackRef} className="infinite-slider-track">
        {TRACK_REVIEWS.map((r, i) => (
          <div key={i} className="google-review-card">
            <div className="google-review-header">
              <div className="google-review-avatar">{r.avatarLetter}</div>
              <div className="google-review-meta">
                <span className="google-review-author">{r.author}</span>
                <span className="google-review-badge">
                  <span className="badge-g-icon">G</span> {r.badge} • {r.time}
                </span>
              </div>
            </div>

            <div className="google-review-stars" aria-label={`${r.stars} estrellas`}>
              {"★".repeat(r.stars)}
            </div>

            <p className="google-review-comment">"{r.comment}"</p>

            <a
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="google-review-link"
            >
              Ver opinión en Google Maps ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReviewFilter({ hideHeader = false }: { hideHeader?: boolean }) {
  const [stars, setStars] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="reviews-section-content">
      {/* Badge animado con estrellas — solo en home, no en páginas de servicio */}
      {!hideHeader && <StarsBadge />}

      {/* 2. Slider infinito continuo con JS requestAnimationFrame */}
      <InfiniteSlider />

      {/* 3. Caja Interactiva para Dejar Calificación */}
      <div className="review review--centered">
        <h3 className="review-prompt-title">¿Cómo fue tu visita a Óptica Loja?</h3>
        <p className="review-prompt-subtitle">Toca las estrellas para calificar tu atención:</p>

        <div className="review__stars review__stars--center" role="radiogroup" aria-label="Calificación">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={stars === n}
              aria-label={`${n} ${n === 1 ? "estrella" : "estrellas"}`}
              className={n <= stars ? "is-on" : ""}
              onClick={() => setStars(n)}
            >
              ★
            </button>
          ))}
        </div>

        {stars === 5 && (
          <div className="review__out review__out--center" aria-live="polite">
            <p className="review-gratitude">
              ¡Muchas gracias por tu valoración de 5 estrellas! Tu opinión ayuda a que más familias en Loja confíen en nuestra atención.
            </p>
            <a
              className="btn btn--primary"
              href={site.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              ⭐ Publicar reseña en Google Maps
            </a>
          </div>
        )}

        {stars > 0 && stars < 5 && (
          <div className="review__out review__out--center" aria-live="polite">
            <p>Queremos brindarte la mejor experiencia. Cuéntanos qué podemos mejorar y Fernando te contactará personalmente:</p>
            <textarea
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              aria-label="Qué podemos mejorar"
              placeholder="¿Qué podemos mejorar?"
            />
            <a
              className="btn btn--primary"
              href={waLink(`Hola Fernando, califiqué mi visita con ${stars} de 5. ${text.trim()}`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar a Fernando por WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
