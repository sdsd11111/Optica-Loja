"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, orgSchema } from "@/lib/schema";
import { waLink } from "@/lib/site";

const stats = [
  { num: "+25", label: "Años de trayectoria", sub: "Cuidando la salud visual de Loja" },
  { num: "8.5k+", label: "Pacientes atendidos", sub: "Niños, jóvenes y adultos mayores" },
  { num: "ZEISS", label: "Vision Expert", sub: "Tecnología óptica alemana certificada" },
  { num: "4.9 ★", label: "En Google Reviews", sub: "Más de 190 opiniones de pacientes" },
];

const pillars = [
  {
    num: "01",
    title: "Atención honesta y recetas claras",
    text: "Te mostramos los resultados de tus ojos en pantalla y te explicamos sin tecnicismos qué significa tu diagnóstico visual. En Óptica Loja no vendemos por vender; te damos una prescripción transparente.",
    icon: "💬",
    tip: "Transparencia total con tu salud visual",
  },
  {
    num: "02",
    title: "Optometría y Oftalmología unidas",
    text: "Somos una clínica de tradición familiar donde optometristas y médicos oftalmólogos trabajan bajo el mismo techo. Si tu examen visual requiere tratamiento médico, diagnóstico de retina o cirugía, la solución está en casa.",
    icon: "🏥",
    tip: "Atención multidisciplinaria completa",
  },
  {
    num: "03",
    title: "Tecnología alemana de precisión ZEISS",
    text: "Como centro especializado ZEISS Vision Expert en Loja, calibramos lunas digitales con centrado milimétrico, reduciendo reflejos, aberraciones y fatiga por pantallas.",
    icon: "🔬",
    tip: "Máxima nitidez óptica de borde a borde",
  },
  {
    num: "04",
    title: "Laboratorio óptico y taller propio",
    text: "Contamos con equipos de biselado computarizado propios en Loja. Cortamos, adaptamos y ajustamos tus lunas con precisión y rapidez, ofreciendo mantenimiento y reparación continua.",
    icon: "⚙️",
    tip: "Calibración y montaje local inmediato",
  },
];

/* ─── Stack de tarjetas de evolución histórica (Hover reveal + navegación) ─── */
const historyCards = [
  {
    year: "Fundación",
    title: "Pioneros en la 10 de Agosto",
    desc: "Nacimos en la tradicional calle de los lentes en Loja con el propósito de ofrecer atención visual cálida, cercana y con ética profesional a cada familia lojana.",
    img: "/images/Home/somos-1.jpg",
    badge: "MÁS DE 25 AÑOS",
    focal: "center 25%",
  },
  {
    year: "Innovación",
    title: "Primer Laboratorio Digital",
    desc: "Incorporamos maquinaria computarizada de autorrefracción y biselado digital para calibrar lunas con exactitud milimétrica sin depender de envíos externos.",
    img: "/images/Home/servicio-lentes-zeiss.jpg",
    badge: "TALLER PROPIO",
    focal: "center 30%",
  },
  {
    year: "Alianza",
    title: "Certificación ZEISS Vision Expert",
    desc: "Nos consolidamos como referente oficial de tecnología alemana ZEISS en el sur del Ecuador, ofreciendo lunas progresivas y monofocales de máxima gama óptica.",
    img: "/images/marca-personal/optometrista-3-trabajando.jpg",
    badge: "CALIDAD ALEMANA",
    focal: "center 20%",
  },
  {
    year: "Actualidad",
    title: "Centro de Diagnóstico Integral",
    desc: "Consolidamos nuestra clínica oftalmológica y optométrica con estudios avanzados de OCT, Pentacam y topografía corneal, liderados por médicos especialistas de la familia.",
    img: "/images/Home/servicio-oftalmologico.jpg",
    badge: "CENTRO INTEGRAL",
    focal: "center 25%",
  },
];

/* ─── Todo el Equipo Humano y Médico de Óptica Loja ─── */
const fullTeam = [
  {
    name: "Opt. Fernando Lomas",
    role: "Director Optométrico & Especialista",
    spec: "Máster en Ciencias de la Visión, examen computarizado, contactología y especialista ZEISS.",
    img: "/images/marca-personal/optometrista-1.jpg",
    badge: "OPTOMETRÍA CLÍNICA",
    focal: "center 15%",
  },
  {
    name: "Dra. Rosemary Guamán",
    role: "Médico Oftalmóloga",
    spec: "Especialista en Glaucoma, control de presión intraocular, polo anterior y evaluación clínica.",
    img: "/images/marca-personal/equipo-2.jpg",
    badge: "OFTALMOLOGÍA",
    focal: "center 20%",
  },
  {
    name: "Dr. Víctor Lomas",
    role: "Médico Oftalmólogo Cirujano",
    spec: "Cirugía ocular, patologías de retina, vítreo y procedimientos quirúrgicos de alta complejidad.",
    img: "/images/marca-personal/equipo-3.jpg",
    badge: "CIRUGÍA OCULAR",
    focal: "center 18%",
  },
  {
    name: "Dra. Janet Lomas",
    role: "Médico Oftalmóloga",
    spec: "Diagnóstico oftalmológico integral, estudios por imágenes diagnósticas y valoración médica.",
    img: "/images/marca-personal/equipo-4.jpg",
    badge: "DIAGNÓSTICO MÉDICO",
    focal: "center 20%",
  },
];

export function SobreNosotrosView() {
  /* Estado para acordeón 'Seguir leyendo' en misión (móvil) */
  const [isMisionExpanded, setIsMisionExpanded] = useState(false);

  /* Slider de Pilares con swipe y peek */
  const pillarSliderRef = useRef<HTMLDivElement>(null);
  const [pillarIdx, setPillarIdx] = useState(0);
  const touchStartPillars = useRef(0);
  const touchStartYPillars = useRef(0);

  /* Slider del Equipo con swipe y peek */
  const teamSliderRef = useRef<HTMLDivElement>(null);
  const [teamIdx, setTeamIdx] = useState(0);
  const touchStartTeam = useRef(0);
  const touchStartYTeam = useRef(0);

  /* Estado para la pila de tarjetas de historia */
  const [activeStackIdx, setActiveStackIdx] = useState(0);
  const [revealedCardIdx, setRevealedCardIdx] = useState<number | null>(null);

  const scrollToPillar = (idx: number) => {
    const container = pillarSliderRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(idx, pillars.length - 1));
    const card = container.children[0]?.children[clamped] as HTMLElement;
    if (card) {
      container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: "smooth" });
    }
    setPillarIdx(clamped);
  };

  const nextPillar = () => scrollToPillar(pillarIdx + 1);
  const prevPillar = () => scrollToPillar(pillarIdx - 1);

  const scrollToTeam = (idx: number) => {
    const container = teamSliderRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(idx, fullTeam.length - 1));
    const card = container.children[clamped] as HTMLElement;
    if (card) {
      container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: "smooth" });
    }
    setTeamIdx(clamped);
  };

  const nextTeam = () => scrollToTeam(teamIdx + 1);
  const prevTeam = () => scrollToTeam(teamIdx - 1);

  const nextStack = () => {
    setRevealedCardIdx(null);
    setActiveStackIdx((prev) => (prev + 1) % historyCards.length);
  };

  const prevStack = () => {
    setRevealedCardIdx(null);
    setActiveStackIdx((prev) => (prev - 1 + historyCards.length) % historyCards.length);
  };

  const handleCardClick = (idx: number) => {
    if (revealedCardIdx === idx) {
      nextStack();
    } else {
      setRevealedCardIdx(idx);
    }
  };

  return (
    <>
      <JsonLd data={orgSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Sobre Nosotros", path: "/sobre-nosotros" },
        ])}
      />

      {/* ── 1. HERO CORPORATIVO CON ALTO IMPACTO ───────────────────── */}
      <section className="doc-hero" aria-label="Sobre Óptica Loja: Historia y Equipo">
        <div className="wrap">
          <div className="doc-hero__grid">
            {/* Columna Texto */}
            <div className="doc-hero__info" data-reveal="right">
              <span className="eyebrow-accent">
                <span className="dot-pulse" /> HISTORIA &amp; COMPROMISO LOCAL
              </span>

              <h1 className="doc-hero__title">
                Sobre Óptica Loja
                <span className="doc-hero__title-sub">Salud visual, ciencia y atención familiar</span>
              </h1>

              <p className="doc-hero__lead">
                Más de 25 años cuidando los ojos de las familias lojanas. Unimos la cercanía de una atención óptica honesta con la tecnología médica más avanzada de diagnóstico oftalmológico y lunas de precisión alemana ZEISS.
              </p>

              <div className="doc-hero__badges">
                <span className="doc-badge">🏥 Optometría + Oftalmología</span>
                <span className="doc-badge">🔬 Centro ZEISS Vision Expert</span>
                <span className="doc-badge">⚙️ Taller y Laboratorio Propio</span>
                <span className="doc-badge">⭐ 4.9 en Google Reviews</span>
              </div>

              <div className="doc-hero__actions">
                <a
                  className="btn btn--primary"
                  href={waLink("Hola Óptica Loja, deseo información sobre sus servicios o agendar una cita.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📅 Contactar por WhatsApp
                </a>
                <Link className="btn btn--ghost" href="/#servicios">
                  Ver nuestros 6 servicios →
                </Link>
              </div>
            </div>

            {/* Columna Foto Flotante */}
            <div className="doc-hero__photo-col" data-reveal="left">
              <div className="doc-hero__card">
                <div className="doc-hero__card-glow" aria-hidden="true" />
                <img
                  src="/images/Home/somos-1.jpg"
                  alt="Equipo y sede de Óptica Loja en la calle 10 de Agosto"
                  className="doc-hero__img"
                  loading="eager"
                />
                <div className="doc-hero__floating-tag">
                  <div className="doc-hero__floating-icon">👁️</div>
                  <div>
                    <strong>Óptica Loja</strong>
                    <span>Lo mejor para tus ojos desde hace más de 25 años</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. NÚMEROS Y CONFIANZA ───────────────────────────────── */}
      <section className="doc-stats-strip" aria-label="Cifras clave de Óptica Loja">
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

      {/* ── 3. NUESTRA IDENTIDAD: FILOSOFÍA DE ATENCIÓN ────────────────────── */}
      <section className="doc-working-section" aria-labelledby="working-h">
        <div className="wrap">
          <div className="doc-working-grid">
            <div className="doc-working-photo-wrap" data-reveal="right">
              <img
                src="/images/Home/somos-2.jpg"
                alt="Instalaciones y equipo de atención en Óptica Loja"
                className="doc-working-img"
                loading="lazy"
              />
              <div className="doc-working-photo-caption">
                <strong>Atención integral en Loja</strong>
                <span>Dos sucursales céntricas: Matriz en 10 de Agosto y Sucursal 24 de Mayo</span>
              </div>
            </div>

            <div className="doc-working-text" data-reveal="left">
              <span className="eyebrow-accent">
                <span className="dot-pulse" /> NUESTRA MISIÓN
              </span>
              <h2 id="working-h" className="section__title" style={{ textAlign: "left", margin: "0.5rem 0 1.25rem 0" }}>
                ¿Por qué las familias eligen Óptica Loja?
              </h2>
              <p className="doc-working-desc">
                En un mercado saturado de promociones comerciales agresivas, en Óptica Loja creemos que la salud ocular no es una transacción rápida. Es un proceso médico y humano que requiere tiempo, tecnología calibrada y seguimiento continuo.
              </p>

              <ul className={`doc-working-bullets ${isMisionExpanded ? "is-expanded-mobile" : ""}`}>
                <li>
                  <strong>Diagnóstico integral bajo un mismo techo:</strong> Si tu visión necesita más que un lente, contamos con exámenes médicos de OCT y Pentacam en nuestro centro de diagnóstico.
                </li>
                <li>
                  <strong>Taller óptico de respuesta rápida:</strong> Nuestro laboratorio propio nos permite adaptar lunas en tiempo récord y realizar mantenimiento de tus armazones al instante.
                </li>
                <li>
                  <strong>Calidad garantizada y respaldo familiar:</strong> Dos generaciones de profesionales dedicadas con vocación a cuidar los ojos de niños, jóvenes y adultos de Loja.
                </li>
              </ul>

              <button
                type="button"
                className="doc-mision-toggle-btn"
                onClick={() => setIsMisionExpanded(!isMisionExpanded)}
                aria-expanded={isMisionExpanded}
              >
                <span>{isMisionExpanded ? "Ver menos ▲" : "Seguir leyendo ▼"}</span>
              </button>

              <div style={{ marginTop: "1.75rem" }}>
                <a
                  href={waLink("Hola Óptica Loja, quiero hacer una consulta sobre la atención para mi familia.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--sm"
                >
                  📲 Escribir a nuestro equipo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. LOS 4 PILARES QUE NOS DEFINEN (SLIDER CON SWIPE Y FLECHAS) ── */}
      <section className="doc-pillars" aria-labelledby="pillars-h">
        <div className="wrap">
          <div className="center" data-reveal="up" style={{ marginBottom: "2rem" }}>
            <span className="eyebrow-accent">
              <span className="dot-pulse" /> VALORES INSTITUCIONALES
            </span>
            <h2 id="pillars-h" className="section__title">
              Nuestros 4 pilares fundamentales
            </h2>
            <p className="lead" style={{ margin: "0 auto 1rem", maxWidth: "54ch" }}>
              Principios que guían cada consulta y cada lente entregado en Óptica Loja.
            </p>

            <div className="doc-swipe-notice">
              <span className="doc-swipe-icon">👈👉</span>
              <span>Usa las flechas o desliza para ver los 4 pilares</span>
            </div>
          </div>

          <div className="doc-pillar-carousel-wrap" data-reveal="up">
            <button
              type="button"
              className="doc-carousel-arrow doc-carousel-arrow--prev"
              onClick={prevPillar}
              aria-label="Pilar anterior"
            >
              ←
            </button>

            <div
              className="doc-pillar-slider-container"
              ref={pillarSliderRef}
              onTouchStart={(e) => {
                touchStartPillars.current = e.touches[0].clientX;
                touchStartYPillars.current = e.touches[0].clientY;
              }}
              onTouchEnd={(e) => {
                const dx = touchStartPillars.current - e.changedTouches[0].clientX;
                const dy = Math.abs(touchStartYPillars.current - e.changedTouches[0].clientY);
                if (Math.abs(dx) > 40 && dy < 60) {
                  if (dx > 0) nextPillar();
                  else prevPillar();
                }
              }}
            >
              <div className="doc-pillar-slider-track">
                {pillars.map((p) => (
                  <div key={p.title} className="doc-pillar-slide doc-pillar-slide--peek">
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
              aria-label="Siguiente pilar"
            >
              →
            </button>
          </div>

          <div className="doc-carousel-dots">
            {pillars.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`doc-carousel-dot ${pillarIdx === i ? "is-active" : ""}`}
                onClick={() => scrollToPillar(i)}
                aria-label={`Ver pilar ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HITOS Y EVOLUCIÓN HISTÓRICA (STACK 3D INTERACTIVO CON HOVER REVEAL) ── */}
      <section className="doc-timeline-section" aria-labelledby="tray-h">
        <div className="wrap">
          <div className="center" data-reveal="up" style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow-accent">
              <span className="dot-pulse" /> TRAYECTORIA LOCAL
            </span>
            <h2 id="tray-h" className="section__title">
              Evolución y trayectoria de Óptica Loja
            </h2>
            <p className="lead" style={{ margin: "0 auto 0.75rem", maxWidth: "56ch" }}>
              Pasa el cursor sobre la foto para ver los detalles. Cada tarjeta revela un hito de nuestra historia.
            </p>
          </div>

          <div className="doc-card-stack-stage" data-reveal="up">
            <div className="doc-card-stack-box">
              <div className="doc-card-stack">
                {historyCards.map((card, i) => {
                  const offset = (i - activeStackIdx + historyCards.length) % historyCards.length;
                  const isFront = offset === 0;
                  const isRevealed = isFront && revealedCardIdx === i;

                  return (
                    <div
                      key={card.title}
                      className={`doc-stacked-card ${isFront ? "is-front" : ""} ${isRevealed ? "is-revealed" : ""}`}
                      style={{
                        transform: `translate3d(${offset * 32}px, ${-offset * 28}px, ${-offset * 50}px)`,
                        zIndex: historyCards.length - offset,
                        opacity: offset > 3 ? 0 : 1,
                        pointerEvents: isFront ? "auto" : "none",
                      }}
                      onClick={() => handleCardClick(i)}
                    >
                      <div
                        className="doc-stacked-card__bg"
                        style={{
                          backgroundImage: `url(${card.img})`,
                          backgroundPosition: card.focal || "center center",
                        }}
                      />
                      <div className="doc-stacked-card__overlay" />

                      <div className="doc-stacked-card__front-info">
                        <span className="doc-stacked-card__badge">{card.badge}</span>
                        <span className="doc-stacked-card__year">{card.year}</span>
                        <h3 className="doc-stacked-card__title">{card.title}</h3>
                        <span className="doc-stacked-card__hover-cue">Ver información al pasar el mouse ↗</span>
                      </div>

                      <div className="doc-stacked-card__hover-reveal">
                        <span className="doc-stacked-card__badge">{card.badge}</span>
                        <span className="doc-stacked-card__year">{card.year}</span>
                        <h3 className="doc-stacked-card__hover-title">{card.title}</h3>
                        <p className="doc-stacked-card__hover-text">{card.desc}</p>
                        <span className="doc-stacked-card__next-hint">Click para pasar al siguiente hito →</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="doc-stack-arrows">
                <button
                  type="button"
                  className="doc-stack-arrow-btn"
                  onClick={prevStack}
                  aria-label="Hito anterior"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="doc-stack-arrow-btn"
                  onClick={nextStack}
                  aria-label="Siguiente hito"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. NUESTRO EQUIPO HUMANO Y MÉDICO COMPLETO ─────── */}
      <section className="doc-team-section" aria-labelledby="team-h">
        <div className="wrap">
          <div className="center" data-reveal="up" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow-accent">
              <span className="dot-pulse" /> EQUIPO PROFESIONAL
            </span>
            <h2 id="team-h" className="section__title">
              El equipo humano y médico detrás de tu visión
            </h2>
            <p className="lead" style={{ margin: "0 auto", maxWidth: "60ch" }}>
              Profesionales comprometidos con vocación de servicio: optometristas con posgrados, oftalmólogos cirujanos y especialistas en laboratorio óptico.
            </p>
          </div>

          {/* Slider de equipo con controles, peek y swipe */}
          <div className="doc-team-slider-wrap" data-reveal="up">
            <div
              className="doc-team-grid doc-team-grid--peek"
              ref={teamSliderRef}
              onTouchStart={(e) => {
                touchStartTeam.current = e.touches[0].clientX;
                touchStartYTeam.current = e.touches[0].clientY;
              }}
              onTouchEnd={(e) => {
                const dx = touchStartTeam.current - e.changedTouches[0].clientX;
                const dy = Math.abs(touchStartYTeam.current - e.changedTouches[0].clientY);
                if (Math.abs(dx) > 40 && dy < 60) {
                  if (dx > 0) nextTeam();
                  else prevTeam();
                }
              }}
            >
              {fullTeam.map((member, idx) => (
                <div key={member.name} className="doc-team-card doc-team-card--peek" data-reveal="up" data-reveal-delay={String(idx * 80)}>
                  <div className="doc-team-card__img-wrap">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="doc-team-card__img"
                      style={{ objectPosition: member.focal || "center 20%" }}
                      loading="lazy"
                    />
                    <span className="related-service-card__badge" style={{ top: "0.75rem", left: "0.75rem" }}>
                      {member.badge}
                    </span>
                    <div className="doc-team-card__overlay" />
                  </div>
                  <div className="doc-team-card__body">
                    <span className="doc-team-card__role">{member.role}</span>
                    <h3 className="doc-team-card__name">{member.name}</h3>
                    <p className="doc-team-card__spec">{member.spec}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles para móvil/tablet: flechas y dots */}
            <div className="doc-team-slider-controls">
              <button
                type="button"
                className="doc-carousel-arrow doc-carousel-arrow--prev"
                onClick={prevTeam}
                disabled={teamIdx === 0}
                aria-label="Especialista anterior"
              >
                ←
              </button>

              <div className="doc-carousel-dots">
                {fullTeam.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`doc-carousel-dot ${teamIdx === i ? "is-active" : ""}`}
                    onClick={() => scrollToTeam(i)}
                    aria-label={`Ver especialista ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="doc-carousel-arrow doc-carousel-arrow--next"
                onClick={nextTeam}
                disabled={teamIdx === fullTeam.length - 1}
                aria-label="Siguiente especialista"
              >
                →
              </button>
            </div>
          </div>

          <div className="center" style={{ marginTop: "2.5rem" }} data-reveal="up">
            <Link href="/centro-oftalmologico-loja" className="btn btn--ghost">
              Conocer nuestro Centro de Diagnóstico Oftalmológico →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. CTA FINAL CORPORATIVO ───────────────────────────────── */}
      <section className="doc-cta-section" aria-labelledby="cita-corp-h">
        <div className="wrap">
          <div className="doc-cta-card" data-reveal="up">
            <div className="doc-cta-card__glow" aria-hidden="true" />
            <span className="eyebrow-accent">
              <span className="dot-pulse" /> VISÍTANOS EN LOJA
            </span>
            <h2 id="cita-corp-h" className="doc-cta-title">
              ¿Listo para cuidar tu visión con los mejores especialistas?
            </h2>
            <p className="doc-cta-text">
              Te esperamos en nuestra sede central de la calle 10 de Agosto o en la sucursal 24 de Mayo. Atención de lunes a sábado con tecnología médica de vanguardia.
            </p>
            <div className="doc-cta-actions">
              <a
                href={waLink("Hola Óptica Loja, deseo agendar una consulta visual para mí o mi familia.")}
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
