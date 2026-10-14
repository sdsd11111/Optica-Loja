"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { waLink } from "@/lib/site";

const stats = [
  { num: "+12", label: "Años de experiencia", sub: "Cuidando la visión de Loja" },
  { num: "8.5k+", label: "Pacientes evaluados", sub: "Niños, jóvenes y adultos mayores" },
  { num: "Máster", label: "Ciencias de la Visión", sub: "Formación de posgrado oficial" },
  { num: "4.9 ★", label: "En Google Reviews", sub: "Más de 190 opiniones verificadas" },
];

const pillars = [
  {
    num: "01",
    title: "Explicación clara, sin tecnicismos",
    text: "Te muestro los resultados de tus ojos en pantalla, te explico qué significa tu miopía o astigmatismo y por qué sientes fatiga visual. Sales de consulta entendiendo exactamente tu salud ocular.",
    icon: "💬",
    tip: "Transparencia total con tu receta",
  },
  {
    num: "02",
    title: "Cada ojo y rutina son únicos",
    text: "Dos personas con la misma graduación pueden requerir lentes totalmente distintos. Pregunto por tus horas frente a pantallas, si manejas de noche o tus pasatiempos antes de formular.",
    icon: "🎯",
    tip: "Personalización según tu estilo de vida",
  },
  {
    num: "03",
    title: "Tecnología óptica alemana ZEISS",
    text: "Como centro ZEISS Vision Expert, calibro lunas digitales de alta definición con máxima precisión milimétrica, reduciendo aberraciones y cansancio ocular.",
    icon: "🔬",
    tip: "Calibración y nitidez de borde a borde",
  },
  {
    num: "04",
    title: "Respaldo y derivación oftalmológica",
    text: "Si durante la evaluación detecto indicios de glaucoma, cataratas o alteraciones de retina, te derivo inmediatamente con los especialistas oftalmólogos de mi equipo médico familiar.",
    icon: "🏥",
    tip: "Atención multidisciplinaria inmediata",
  },
];

/* ─── Cards con imagen de fondo y texto revelado al hover ─────────── */
const timelineCards = [
  {
    year: "Pregrado",
    title: "Licenciatura en Optometría",
    desc: "Cinco años de rigurosa formación universitaria integral en refracción clínica, salud ocular, contactología y óptica oftálmica, complementados con servicio social comunitario.",
    img: "/images/marca-personal/optometrista-2.jpg",
    badge: "5 AÑOS + RURAL",
  },
  {
    year: "Posgrado",
    title: "Máster en Ciencias de la Visión",
    desc: "Especialización avanzada en fisiología visual, terapia visual en niños, alteraciones de la visión binocular, refracción pediátrica y diagnóstico preventivo.",
    img: "/images/marca-personal/optometrista-4.jpg",
    badge: "TÍTULO DE CUARTO NIVEL",
  },
  {
    year: "Certificación",
    title: "Especialista ZEISS Vision Expert",
    desc: "Capacitación continua en cálculo digital de lentes multifocales progresivos de alta gama, filtros selectivos de luz azul y tratamientos DuraVision antirreflejo.",
    img: "/images/marca-personal/optometrista-3-trabajando.jpg",
    badge: "TECNOLOGÍA ALEMANA",
  },
  {
    year: "Actualidad",
    title: "Dirección Clínica en Óptica Loja",
    desc: "Liderando una óptica clínica honesta, moderna y cercana, respaldada por médicos oftalmólogos para pacientes de toda la provincia de Loja y Zamora.",
    img: "/images/marca-personal/optometrista-1.jpg",
    badge: "LIDERAZGO CLÍNICO",
  },
];

/* ─── Asignación exacta de imágenes corregida por el usuario:
   - "Dra. Janet Lomas" <- "Equipo de Atención Óptica Loja" (equipo-4.jpg)
   - "Dr. Víctor Lomas" <- "Dra. Janet Lomas" (equipo-3.jpg)
   - "Dra. Rosemary Guamán" <- "Dr. Víctor Lomas" (equipo-2.jpg)
   - "Equipo de Atención Óptica Loja" <- "Dra. Rosemary Guamán" (equipo-1.jpg)
──────────────────────────────────────────────────────────────────── */
const teamDoctors = [
  {
    name: "Dra. Rosemary Guamán",
    role: "Médico Oftalmóloga",
    spec: "Glaucoma, presión intraocular y polo anterior",
    img: "/images/marca-personal/equipo-2.jpg",
  },
  {
    name: "Dr. Víctor Lomas",
    role: "Médico Oftalmólogo Cirujano",
    spec: "Cirugía ocular, retina y vítreo",
    img: "/images/marca-personal/equipo-3.jpg",
  },
  {
    name: "Dra. Janet Lomas",
    role: "Médico Oftalmóloga",
    spec: "Diagnóstico oftalmológico integral (Visualis)",
    img: "/images/marca-personal/equipo-4.jpg",
  },
  {
    name: "Equipo de Atención Óptica Loja",
    role: "Asesoría en Armazones & Taller",
    spec: "Montaje digital, calibración y servicio técnico",
    img: "/images/marca-personal/equipo-1.jpg",
  },
];

export function DoctorPageView() {
  /* Ref para el slider de pilares (scroll programático) */
  const pillarSliderRef = useRef<HTMLDivElement>(null);
  const [pillarIdx, setPillarIdx] = useState(0);

  /* Estado para la pila infinita de tarjetas de trayectoria */
  const [activeStackIdx, setActiveStackIdx] = useState(0);
  const [revealedCardIdx, setRevealedCardIdx] = useState<number | null>(null);

  const scrollToPillar = (idx: number) => {
    const container = pillarSliderRef.current;
    if (!container) return;
    // Ancho de cada slide = ancho del contenedor en móvil (1 col) ó mitad en escritorio (2 col)
    const slideWidth = container.scrollWidth / pillars.length;
    container.scrollTo({ left: idx * slideWidth, behavior: "smooth" });
    setPillarIdx(idx);
  };

  const nextPillar = () => {
    const next = (pillarIdx + 1) % pillars.length;
    scrollToPillar(next);
  };

  const prevPillar = () => {
    const prev = (pillarIdx - 1 + pillars.length) % pillars.length;
    scrollToPillar(prev);
  };

  const nextStack = () => {
    setRevealedCardIdx(null);
    setActiveStackIdx((prev) => (prev + 1) % timelineCards.length);
  };

  const prevStack = () => {
    setRevealedCardIdx(null);
    setActiveStackIdx((prev) => (prev - 1 + timelineCards.length) % timelineCards.length);
  };

  const handleCardClick = (idx: number) => {
    // En móvil: primer toque revela el texto; segundo toque pasa a la siguiente tarjeta
    if (revealedCardIdx === idx) {
      nextStack();
    } else {
      setRevealedCardIdx(idx);
    }
  };

  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Opt. Fernando Lomas", path: "/dr-fernando-lomas" },
        ])}
      />

      {/* ── 1. HERO PROFESIONAL DE ALTO IMPACTO ───────────────────── */}
      <section className="doc-hero" aria-label="Perfil profesional del Opt. Fernando Lomas">
        <div className="wrap">
          <div className="doc-hero__grid">
            {/* Columna Texto */}
            <div className="doc-hero__info" data-reveal="right">
              <Breadcrumbs items={[{ name: "Opt. Fernando Lomas" }]} />

              <span className="eyebrow-accent">
                <span className="dot-pulse" /> OPTOMETRISTA EN LOJA
              </span>

              <h1 className="doc-hero__title">
                Opt. Fernando Lomas
                <span className="doc-hero__title-sub">Máster en Ciencias de la Visión</span>
              </h1>

              <p className="doc-hero__lead">
                Especialista en examen visual computarizado, adaptación de lentes de contacto y tecnología ZEISS.
                Mi compromiso es que entiendas tu salud visual con honestidad, sin tecnicismos y con el respaldo de un equipo médico integral.
              </p>

              <div className="doc-hero__badges">
                <span className="doc-badge">🎓 Máster en Ciencias de la Visión</span>
                <span className="doc-badge">🔭 Especialista ZEISS</span>
                <span className="doc-badge">⭐ 4.9 en Google (190+ reseñas)</span>
              </div>

              <div className="doc-hero__actions">
                <a
                  className="btn btn--primary"
                  href={waLink("Hola Opt. Fernando Lomas, deseo agendar una consulta visual personalizada contigo.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📅 Agendar cita con Fernando
                </a>
                <Link className="btn btn--ghost" href="/examen-visual-loja">
                  Conocer examen visual →
                </Link>
              </div>
            </div>

            {/* Columna Foto Flotante */}
            <div className="doc-hero__photo-col" data-reveal="left">
              <div className="doc-hero__card">
                <div className="doc-hero__card-glow" aria-hidden="true" />
                <img
                  src="/images/marca-personal/optometrista-1.jpg"
                  alt="Opt. Fernando Lomas, optometrista en Loja con bata médica"
                  className="doc-hero__img"
                  loading="eager"
                />
                <div className="doc-hero__floating-tag">
                  <div className="doc-hero__floating-icon">👁️</div>
                  <div>
                    <strong>Opt. Fernando Lomas</strong>
                    <span>Atención personalizada en Óptica Loja</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. NÚMEROS Y CONFIANZA ───────────────────────────────── */}
      <section className="doc-stats-strip" aria-label="Cifras clave">
        <div className="wrap">
          <div className="doc-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="doc-stat-card" data-reveal="up" data-reveal-delay={String(i * 80)}>
                <span className="doc-stat-num">{s.num}</span>
                <strong className="doc-stat-label">{s.label}</strong>
                <span className="doc-stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. EN CONSULTA: CÓMO TE ATENDEMOS ────────────────────── */}
      <section className="doc-working-section" aria-labelledby="working-h">
        <div className="wrap">
          <div className="doc-working-grid">
            <div className="doc-working-photo-wrap" data-reveal="right">
              <img
                src="/images/marca-personal/optometrista-3-trabajando.jpg"
                alt="Opt. Fernando Lomas realizando examen visual computarizado en consultorio"
                className="doc-working-img"
                loading="lazy"
              />
              <div className="doc-working-photo-caption">
                <strong>En consulta clínica</strong>
                <span>Evaluación digital con tecnología de última generación en el centro de Loja</span>
              </div>
            </div>

            <div className="doc-working-text" data-reveal="left">
              <span className="eyebrow-accent">
                <span className="dot-pulse" /> FILOSOFÍA DE ATENCIÓN
              </span>
              <h2 id="working-h" className="section__title" style={{ textAlign: "left", margin: "0.5rem 0 1.25rem 0" }}>
                ¿Por qué una consulta con un optometrista especializado?
              </h2>
              <p className="doc-working-desc">
                Muchos dolores de cabeza, cansancio al leer o visión borrosa no se solucionan simplemente con unos lentes comprados al paso.
                Requieren un análisis de cómo tus ojos enfocan, cómo trabajan juntos y qué exige tu día a día laboral.
              </p>
              <ul className="doc-working-bullets">
                <li>
                  <strong>Medición computarizada + afinación manual:</strong> La máquina da una base, pero tu comodidad final la ajustamos con pruebas reales.
                </li>
                <li>
                  <strong>Salud ocular preventiva:</strong> Revisamos córnea, película lagrimal y reflejos pupilares para descartar afecciones silenciosas.
                </li>
                <li>
                  <strong>Asesoría de lunas honesta:</strong> Solo recomendamos tratamientos (antirreflejo, filtro azul o progresivos) si realmente los necesitas.
                </li>
              </ul>
              <div style={{ marginTop: "1.75rem" }}>
                <a
                  href={waLink("Hola Fernando, tengo molestias en la vista y quiero una valoración contigo.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--sm"
                >
                  📲 Escribirle directo a Fernando
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. MI MANERA DE TRABAJAR CONTIGO (SLIDER INTERACTIVO / SWIPE CON FLECHAS) ── */}
      <section className="doc-pillars" aria-labelledby="pillars-h">
        <div className="wrap">
          <div className="center" data-reveal="up" style={{ marginBottom: "2rem" }}>
            <span className="eyebrow-accent">
              <span className="dot-pulse" /> COMPROMISO PROFESIONAL
            </span>
            <h2 id="pillars-h" className="section__title">
              Mi manera de trabajar contigo
            </h2>
            <p className="lead" style={{ margin: "0 auto 1rem", maxWidth: "54ch" }}>
              Principios que guían cada consulta en Óptica Loja para que te sientas seguro y respaldado.
            </p>

            {/* Aviso visual interactivo */}
            <div className="doc-swipe-notice">
              <span className="doc-swipe-icon">👈👉</span>
              <span>Usa las flechas o desliza para ver los 4 principios</span>
            </div>
          </div>

          {/* Carrusel / Slider interactivo con flechas y dots (Muestra mínimo 2 cards) */}
          <div className="doc-pillar-carousel-wrap" data-reveal="up">
            <button
              type="button"
              className="doc-carousel-arrow doc-carousel-arrow--prev"
              onClick={prevPillar}
              aria-label="Principio anterior"
            >
              ←
            </button>

            <div className="doc-pillar-slider-container" ref={pillarSliderRef}>
              <div className="doc-pillar-slider-track">
                {pillars.map((p) => (
                  <div key={p.title} className="doc-pillar-slide doc-pillar-slide--two-col">
                    <div className="doc-pillar-card">
                      <div className="doc-pillar-top">
                        <span className="doc-pillar-icon">{p.icon}</span>
                        <span className="doc-pillar-num">{p.num}</span>
                      </div>
                      <span className="doc-pillar-tip">{p.tip}</span>
                      <h3 className="doc-pillar-title">{p.title}</h3>
                      <p className="doc-pillar-text">{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="doc-carousel-arrow doc-carousel-arrow--next"
              onClick={nextPillar}
              aria-label="Siguiente principio"
            >
              →
            </button>
          </div>

          {/* Paginadores / Dots */}
          <div className="doc-carousel-dots">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                type="button"
                className={`doc-carousel-dot ${pillarIdx === i ? "is-active" : ""}`}
                onClick={() => scrollToPillar(i)}
                aria-label={`Ver página ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FORMACIÓN Y TRAYECTORIA (STACK DE CARDS IDÉNTICO A LA CAPTURA + HOVER REVEAL) ── */}
      <section className="doc-timeline-section" aria-labelledby="tray-h">
        <div className="wrap">
          <div className="center" data-reveal="up" style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow-accent">
              <span className="dot-pulse" /> PREPARACIÓN ACADÉMICA
            </span>
            <h2 id="tray-h" className="section__title">
              Trayectoria y respaldo científico
            </h2>
            <p className="lead" style={{ margin: "0 auto 0.75rem", maxWidth: "56ch" }}>
              Pasa el cursor sobre la foto para ver los detalles. Cada tarjeta revela su historia.
            </p>
          </div>

          {/* Card Stack Interactivo (Idéntico a la captura de referencia) */}
          <div className="doc-card-stack-stage" data-reveal="up">
            <div className="doc-card-stack-box">
              <div className="doc-card-stack">
                {timelineCards.map((card, i) => {
                  const offset = (i - activeStackIdx + timelineCards.length) % timelineCards.length;
                  const isFront = offset === 0;
                  const isRevealed = isFront && revealedCardIdx === i;

                  return (
                    <div
                      key={card.title}
                      className={`doc-stacked-card ${isFront ? "is-front" : ""} ${isRevealed ? "is-revealed" : ""}`}
                      style={{
                        transform: `translate3d(${offset * 32}px, ${-offset * 28}px, ${-offset * 50}px)`,
                        zIndex: timelineCards.length - offset,
                        opacity: offset > 3 ? 0 : 1,
                        pointerEvents: isFront ? "auto" : "none",
                      }}
                      onClick={() => handleCardClick(i)}
                    >
                      {/* Imagen de fondo permanente */}
                      <div
                        className="doc-stacked-card__bg"
                        style={{ backgroundImage: `url(${card.img})` }}
                      />
                      <div className="doc-stacked-card__overlay" />

                      {/* Contenido en reposo: Badge, Año y Título */}
                      <div className="doc-stacked-card__front-info">
                        <span className="doc-stacked-card__badge">{card.badge}</span>
                        <span className="doc-stacked-card__year">{card.year}</span>
                        <h3 className="doc-stacked-card__title">{card.title}</h3>
                        <span className="doc-stacked-card__hover-cue">Ver información al pasar el mouse ↗</span>
                      </div>

                      {/* Contenido revelado al hacer hover */}
                      <div className="doc-stacked-card__hover-reveal">
                        <span className="doc-stacked-card__badge">{card.badge}</span>
                        <span className="doc-stacked-card__year">{card.year}</span>
                        <h3 className="doc-stacked-card__hover-title">{card.title}</h3>
                        <p className="doc-stacked-card__hover-text">{card.desc}</p>
                        <span className="doc-stacked-card__next-hint">Click para pasar a la siguiente tarjeta →</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Controles de flechas minimalistas en la esquina como en la captura */}
              <div className="doc-stack-arrows">
                <button
                  type="button"
                  className="doc-stack-arrow-btn"
                  onClick={prevStack}
                  aria-label="Tarjeta anterior"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="doc-stack-arrow-btn"
                  onClick={nextStack}
                  aria-label="Siguiente tarjeta"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. EL EQUIPO MÉDICO DE APOYO (IMÁGENES CORREGIDAS) ─────── */}
      <section className="doc-team-section" aria-labelledby="team-h">
        <div className="wrap">
          <div className="center" data-reveal="up" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow-accent">
              <span className="dot-pulse" /> ATENCIÓN INTEGRAL
            </span>
            <h2 id="team-h" className="section__title">
              Optometría y Oftalmología en el mismo lugar
            </h2>
            <p className="lead" style={{ margin: "0 auto", maxWidth: "60ch" }}>
              Fernando trabaja junto a una familia de oftalmólogos especialistas.
              Si tu caso supera la graduación óptica y requiere tratamiento médico o quirúrgico, la solución está en casa.
            </p>
          </div>

          <div className="doc-team-grid">
            {teamDoctors.map((doc, idx) => (
              <div key={doc.name} className="doc-team-card" data-reveal="up" data-reveal-delay={String(idx * 80)}>
                <div className="doc-team-card__img-wrap">
                  <img src={doc.img} alt={doc.name} className="doc-team-card__img" loading="lazy" />
                  <div className="doc-team-card__overlay" />
                </div>
                <div className="doc-team-card__body">
                  <span className="doc-team-card__role">{doc.role}</span>
                  <h3 className="doc-team-card__name">{doc.name}</h3>
                  <p className="doc-team-card__spec">{doc.spec}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="center" style={{ marginTop: "2.5rem" }} data-reveal="up">
            <Link href="/centro-oftalmologico-loja" className="btn btn--ghost">
              Conocer el centro de diagnóstico oftalmológico →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. CTA FINAL DEL DOCTOR ───────────────────────────────── */}
      <section className="doc-cta-section" aria-labelledby="cita-doc-h">
        <div className="wrap">
          <div className="doc-cta-card" data-reveal="up">
            <div className="doc-cta-card__glow" aria-hidden="true" />
            <span className="eyebrow-accent">
              <span className="dot-pulse" /> AGENDA TU VISITA
            </span>
            <h2 id="cita-doc-h" className="doc-cta-title">
              ¿Listo para ver con total claridad?
            </h2>
            <p className="doc-cta-text">
              Agenda tu examen visual computarizado directamente con el Opt. Fernando Lomas en Óptica Loja.
              Atendemos de lunes a sábado en el centro de Loja.
            </p>
            <div className="doc-cta-actions">
              <a
                href={waLink("Hola Fernando, leí tu perfil y deseo agendar una cita para mi examen visual.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                📲 Agendar cita por WhatsApp
              </a>
              <a href="tel:+59372586217" className="btn btn--ghost-dark">
                📞 Llamar al 072 586217
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
