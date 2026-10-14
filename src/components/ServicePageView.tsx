"use client";

import { useState } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { ReviewFilter } from "./ReviewFilter";
import { ServiceRelatedCards } from "./ServiceRelatedCards";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { waLink } from "@/lib/site";
import type { ServicePage } from "@/content/services";

/* ─── Mapa VisualKey → imagen real ────────────────────────────────── */
const VISUAL_IMAGE: Record<string, string> = {
  exam:   "/images/Home/servicio-examen.jpg",
  retina: "/images/Home/servicio-oftalmologico.jpg",
  lens:   "/images/Home/servicio-lentes-zeiss.jpg",
  align:  "/images/Home/servicio-terapia-visual.jpg",
  alert:  "/images/Home/servicio-oftalmologico.jpg",
};

/* ─── Hero: imagen como background + overlay ──────────────────────── */
function ServiceHero({ data }: { data: ServicePage }) {
  const img = VISUAL_IMAGE[data.visual] ?? "/images/Home/servicio-examen.jpg";
  return (
    <section
      className="service-hero"
      aria-label={`Hero: ${data.name}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="service-hero__overlay" aria-hidden="true" />
      <div className="service-hero__optotypes" aria-hidden="true">
        <div className="service-hero__opto-col service-hero__opto-left">
          <span>E</span><span>F P</span><span>T O Z</span>
          <span>L P E D</span><span>P E C F D</span>
          <span>E D F C Z P</span>
        </div>
        <div className="service-hero__opto-col service-hero__opto-right">
          <span>Z</span><span>O L</span><span>E I S S</span>
          <span>V I S I O N</span><span>E X P E R T</span>
          <span>2 0 / 2 0</span>
        </div>
      </div>
      <div className="wrap service-hero__inner">
        <div className="service-hero__content">
          <Breadcrumbs items={[{ name: data.name }]} />
          <span className="service-hero__badge">
            <span className="dot-pulse" /> ÓPTICA LOJA · LOJA, ECUADOR
          </span>
          <h1 className="service-hero__h1">{data.h1}</h1>
          <p className="service-hero__lead">
            {data.lead.length > 160 ? data.lead.slice(0, 157) + "…" : data.lead}
          </p>
          <div className="service-hero__actions">
            <a
              className="btn btn--primary btn--lg"
              href={waLink(`Hola Óptica Loja, quiero información sobre: ${data.cta.service}.`)}
              target="_blank" rel="noopener noreferrer"
            >
              📲 Agendar por WhatsApp
            </a>
            <a className="btn btn--ghost-dark" href="#preguntas">
              Preguntas frecuentes
            </a>
          </div>
          <div className="service-hero__trust">
            <div className="service-hero__trust-pill">
              <strong>4.9 ★</strong><span>190+ reseñas</span>
            </div>
            <div className="service-hero__trust-divider" />
            <div className="service-hero__trust-pill">
              <strong>+25 años</strong><span>en Loja</span>
            </div>
            <div className="service-hero__trust-divider" />
            <div className="service-hero__trust-pill">
              <strong>ZEISS</strong><span>Vision Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Señales ─────────────────────────────────────────────────────── */
function SignalsSection({ data }: { data: ServicePage }) {
  return (
    <section className="sp-signals" aria-labelledby="signals-h">
      <div className="wrap">
        <div className="sp-signals__inner">
          <div className="sp-signals__text" data-reveal="left">
            <span className="eyebrow-accent">
              <span className="dot-pulse" /> SEÑALES DE ALERTA
            </span>
            <h2 id="signals-h" className="sp-signals__title">{data.signalsTitle}</h2>
            <ul className="sp-signals__list">
              {data.signals.map((s) => (
                <li key={s} className="sp-signals__item">
                  <span className="sp-signals__check">✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <a
              className="btn btn--primary"
              href={waLink(`Hola Óptica Loja, tengo síntomas: ${data.cta.service}.`)}
              target="_blank" rel="noopener noreferrer"
            >
              Consultar ahora →
            </a>
          </div>
          <div className="sp-signals__card" data-reveal="right">
            <div className="sp-signals__card-icon">🎯</div>
            <h3 className="sp-signals__card-title">La prevención protege tu visión a largo plazo</h3>
            <p className="sp-signals__card-text">
              Muchas enfermedades oculares no duelen hasta que el daño ya está hecho.
              Un control a tiempo marca la diferencia.
            </p>
            <div className="sp-signals__card-stats">
              <div className="sp-signals__stat">
                <strong>80%</strong>
                <span>de problemas visuales son prevenibles</span>
              </div>
              <div className="sp-signals__stat">
                <strong>1 de 3</strong>
                <span>personas tiene un problema sin diagnosticar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Bloques / Bento interactivo con selector de opciones ───────── */
function BlocksSection({ data }: { data: ServicePage }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeBlock = data.blocks[activeIdx] ?? data.blocks[0];
  const img = VISUAL_IMAGE[data.visual] ?? "/images/Home/servicio-examen.jpg";

  return (
    <section className="sp-blocks" aria-labelledby="blocks-h">
      <div className="wrap">
        <div className="sp-blocks__header center" data-reveal="up">
          <span className="eyebrow-accent">
            <span className="dot-pulse" /> DETALLE DEL SERVICIO
          </span>
          <h2 id="blocks-h" className="section__title">{data.blocksTitle}</h2>
          <p className="sp-blocks__lead">
            Selecciona una opción para conocer sus beneficios, especificaciones y para quién está recomendada.
          </p>
        </div>

        {/* Layout Interactivo: Selector lateral/superior + Tarjeta destacada dinámica */}
        <div className="sp-interactive-bento" data-reveal="up">
          {/* Navegación por Chips/Pestañas */}
          <div className="sp-bento__nav" role="tablist" aria-label="Opciones de servicio">
            {data.blocks.map((b, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={b.title}
                  role="tab"
                  aria-selected={isActive}
                  className={`sp-bento__nav-item ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span className="sp-bento__nav-num">0{idx + 1}</span>
                  <div className="sp-bento__nav-info">
                    <span className="sp-bento__nav-title">{b.title}</span>
                    <span className="sp-bento__nav-hint">
                      {isActive ? "Viendo detalles ➔" : "Explorar"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Panel de Visualización Dinámico con Foto y Especificaciones */}
          <div className="sp-bento__detail-panel" role="tabpanel">
            <div
              className="sp-bento__img-cover"
              style={{ backgroundImage: `url(${img})` }}
              aria-hidden="true"
            >
              <div className="sp-bento__img-badge">
                <span className="dot-pulse" /> Opción 0{activeIdx + 1} de {data.blocks.length}
              </div>
            </div>

            <div className="sp-bento__detail-content">
              <span className="sp-bento__tag">Especialidad Óptica Loja</span>
              <h3 className="sp-bento__title">{activeBlock.title}</h3>
              <p className="sp-bento__text">{activeBlock.text}</p>

              <div className="sp-bento__meta-grid">
                <div className="sp-bento__meta-item">
                  <span className="sp-bento__meta-icon">✓</span>
                  <div>
                    <strong>Garantía Óptica Loja</strong>
                    <p>Adaptación precisa y calibración digital</p>
                  </div>
                </div>
                <div className="sp-bento__meta-item">
                  <span className="sp-bento__meta-icon">🎯</span>
                  <div>
                    <strong>Atención Personalizada</strong>
                    <p>Evaluación sin costo con tus lunas</p>
                  </div>
                </div>
              </div>

              <div className="sp-bento__actions">
                <a
                  href={waLink(`Hola Óptica Loja, deseo agendar una consulta sobre: ${activeBlock.title} (${data.name}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--sm"
                >
                  <span>📲 Consultar esta opción</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {data.note && (
          <div className="sp-blocks__note" data-reveal="up">
            <span className="sp-blocks__note-icon">ℹ️</span>
            <p>{data.note}</p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Pasos: Acordeón fotográfico interactivo (Estilo GuíaLoja / paneles expandibles) ─── */
const STEP_IMAGES = [
  "/images/Home/somos-1.jpg",
  "/images/Home/somos-2.jpg",
  "/images/Home/servicio-examen.jpg",
  "/images/Home/somos-3.jpg",
  "/images/Home/somos-4.jpg",
  "/images/Home/servicio-lentes-zeiss.jpg",
];

function StepsSection({ data }: { data: ServicePage }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="sp-steps" aria-labelledby="steps-h">
      <div className="wrap">
        <div className="sp-steps__header center" data-reveal="up">
          <span className="eyebrow-accent">
            <span className="dot-pulse" /> PROCESO GUIADO
          </span>
          <h2 id="steps-h" className="section__title">{data.stepsTitle}</h2>
          <p className="sp-steps__lead">
            Pasa el cursor o toca cada etapa para descubrir cómo cuidamos cada detalle de tu atención.
          </p>
        </div>

        {/* Acordeón de paneles expandibles con fotos reales */}
        <div className="sp-steps-accordion" data-reveal="up">
          {data.steps.map((s, idx) => {
            const isActive = activeStep === idx;
            const bgImg = STEP_IMAGES[idx % STEP_IMAGES.length];
            const numStr = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={s.title}
                className={`sp-steps-panel ${isActive ? "is-expanded" : ""}`}
                style={{ backgroundImage: `url(${bgImg})` }}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
              >
                {/* Overlay degradado para legibilidad */}
                <div className="sp-steps-panel__overlay" />

                {/* Vista Colapsada (Etiqueta vertical y número) */}
                {!isActive && (
                  <div className="sp-steps-panel__collapsed-label">
                    <span className="sp-steps-panel__collapsed-num">{numStr}</span>
                    <span className="sp-steps-panel__collapsed-title">{s.title}</span>
                  </div>
                )}

                {/* Vista Expandida (Contenido completo en primer plano) */}
                <div className="sp-steps-panel__content">
                  <div className="sp-steps-panel__badge">
                    <span className="dot-pulse" /> PASO {numStr} DE 0{data.steps.length}
                  </div>
                  <h3 className="sp-steps-panel__title">{s.title}</h3>
                  <p className="sp-steps-panel__text">{s.text}</p>
                  <div className="sp-steps-panel__footer">
                    <span className="sp-steps-panel__status">✓ Protocolo Óptica Loja</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="sp-steps__cta" data-reveal="up">
          <p>¿Tienes dudas antes de tu primera visita?</p>
          <a
            className="btn btn--primary"
            href={waLink(`Hola Óptica Loja, quiero información sobre: ${data.cta.service}.`)}
            target="_blank" rel="noopener noreferrer"
          >
            📲 Preguntarnos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ: acordeón controlado (1 sola pregunta visible al inicio + botón Ver más) ─── */
function FaqSectionSp({ data }: { data: ServicePage }) {
  const [open, setOpen] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);

  const displayedFaqs = showAll ? data.faqs : data.faqs.slice(0, 1);

  return (
    <section className="sp-faq" id="preguntas" aria-labelledby="faq-h">
      <div className="wrap sp-faq__inner">
        <div className="sp-faq__header center" data-reveal="up">
          <span className="eyebrow-accent">
            <span className="dot-pulse" /> RESOLVEMOS TUS DUDAS
          </span>
          <h2 id="faq-h" className="section__title">
            Preguntas frecuentes sobre {data.name.toLowerCase()}
          </h2>
        </div>

        <div className="sp-faq__grid">
          {displayedFaqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={f.q}
                className={`sp-faq__item${isOpen ? " sp-faq__item--open" : ""}`}
                data-reveal="up"
                data-reveal-delay={String(idx * 60)}
              >
                <button
                  className="sp-faq__q"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="sp-faq__q-icon">{isOpen ? "−" : "+"}</span>
                  <span className="sp-faq__q-text">{f.q}</span>
                </button>
                {/* Wrapper externo controla maxHeight — sin padding para que no filtre */}
                <div
                  className="sp-faq__a-wrap"
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.45s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  {/* Wrapper interno tiene el padding real */}
                  <div className="sp-faq__a-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {data.faqs.length > 1 && (
          <div className="sp-faq__more-wrap" data-reveal="up" style={{ textAlign: "center", marginBottom: "2rem" }}>
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              onClick={() => {
                setShowAll(!showAll);
                if (!showAll) setOpen(0);
              }}
            >
              {showAll
                ? "Ver menos preguntas (−)"
                : `Ver más preguntas frecuentes (+${data.faqs.length - 1})`}
            </button>
          </div>
        )}

        <div className="sp-faq__footer" data-reveal="up">
          <p>¿Tu pregunta no está aquí?</p>
          <a
            className="btn btn--primary"
            href={waLink(`Hola Óptica Loja, tengo una pregunta sobre: ${data.cta.service}.`)}
            target="_blank" rel="noopener noreferrer"
          >
            💬 Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Final: Banner azul con calificador de estrellas interactivo y agendar cita ─── */
function VisitFeedbackCta({ data }: { data: ServicePage }) {
  const [stars, setStars] = useState(0);
  const [text, setText] = useState("");

  return (
    <section className="sp-visit-cta" aria-labelledby="visit-cta-h">
      <div className="wrap">
        <div className="sp-visit-cta__card" data-reveal="up">
          <div className="sp-visit-cta__glow" aria-hidden="true" />

          <span className="eyebrow-accent">
            <span className="dot-pulse" /> TU OPINIÓN NOS IMPORTA
          </span>

          <h2 id="visit-cta-h" className="sp-visit-cta__title">
            ¿Qué tal fue tu visita a Óptica Loja?
          </h2>

          <p className="sp-visit-cta__text">
            Si ya nos visitaste, tu experiencia nos ayuda a seguir cuidando la salud visual de Loja con la mejor calidad.
            Y si aún no has tenido tu cita, ¡es el momento ideal para agendarla!
          </p>

          {/* Bloque interactivo lado a lado: Calificación (Izq) y Agendar cita (Der) */}
          <div className="sp-visit-cta__dual-row">
            {/* Columna Izquierda: Calificación con estrellas */}
            <div className="review review--centered sp-visit-cta__rating-box">
              <p className="review-prompt-subtitle" style={{ color: "#ffffff", margin: "0 0 0.5rem 0", fontWeight: 700 }}>
                Toca las estrellas para calificar tu atención:
              </p>

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
                  <p className="review-gratitude" style={{ color: "#ffffff", fontSize: "0.85rem" }}>
                    ¡Muchas gracias por tus 5 estrellas!
                  </p>
                  <a
                    className="btn btn--primary btn--sm"
                    href="https://share.google/pyI8nkYWmNyJr2XP1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: "#ffffff", color: "var(--color-primary)", borderColor: "#ffffff" }}
                  >
                    ⭐ Publicar en Google Maps
                  </a>
                </div>
              )}

              {stars > 0 && stars < 5 && (
                <div className="review__out review__out--center" aria-live="polite">
                  <textarea
                    rows={2}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    aria-label="Qué podemos mejorar"
                    placeholder="¿Qué podemos mejorar?"
                    style={{ background: "rgba(255,255,255,0.95)", color: "var(--ink)", fontSize: "0.85rem" }}
                  />
                  <a
                    className="btn btn--primary btn--sm"
                    href={waLink(`Hola Fernando, califiqué mi visita sobre ${data.name} con ${stars} de 5. ${text.trim()}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: "#ffffff", color: "var(--color-primary)", borderColor: "#ffffff" }}
                  >
                    Enviar sugerencia
                  </a>
                </div>
              )}
            </div>

            {/* Columna Derecha: Botón de agendar a la misma altura */}
            <div className="sp-visit-cta__action-box">
              <p className="sp-visit-cta__action-label">¿Aún no te has atendido con nosotros?</p>
              <a
                href={waLink(`Hola Óptica Loja, deseo agendar mi cita para: ${data.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary sp-visit-cta__main-btn"
              >
                <span>📅 ¿Sin cita? Agendar ahora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Componente principal ────────────────────────────────────────── */
export function ServicePageView({ data }: { data: ServicePage }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", path: "/" }, { name: data.name, path: data.path }])} />
      <JsonLd data={faqSchema(data.faqs)} />
      <ServiceHero data={data} />
      <SignalsSection data={data} />
      <BlocksSection data={data} />
      <StepsSection data={data} />
      <FaqSectionSp data={data} />
      <ServiceRelatedCards currentPath={data.path} />
      <VisitFeedbackCta data={data} />
    </>
  );
}
