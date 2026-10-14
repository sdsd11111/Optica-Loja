import type { Metadata } from "next";
import { HeroLensWrapper } from "@/components/HeroLensWrapper";
import { AboutCollage } from "@/components/AboutCollage";
import { VideoSection } from "@/components/VideoSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ReviewFilter } from "@/components/ReviewFilter";
import { FaqSection } from "@/components/FaqSection";
import { buildMeta } from "@/lib/seo";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = buildMeta({
  title: "Óptica Loja | Lentes ZEISS y salud visual en Loja",
  description:
    "Óptica y centro de diagnóstico en Loja: examen visual computarizado, lentes ZEISS, lentes de contacto y atención oftalmológica especializada. Más de 25 años en Loja.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="hero-clean">
        <HeroLensWrapper>
          <div className="wrap wrap--narrow center">
            <div className="hero-clean__badge">
              <span className="dot-pulse" />
              <span>ZEISS VISION EXPERT • CLÍNICA &amp; ÓPTICA FAMILIAR</span>
            </div>

            <h1 className="hero-clean__title">
              La Mejor Óptica de Loja
            </h1>

            <p className="hero-clean__lead">
              Más de 25 años priorizando la salud visual a largo plazo de cada paciente: diagnóstico médico exhaustivo, tecnología alemana ZEISS y soluciones ópticas duraderas para proteger tus ojos por encima de todo.
            </p>

            <div className="hero-clean__actions">
              <a
                className="btn btn--primary"
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola Óptica Loja, quiero agendar mi examen visual.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar cita por WhatsApp
              </a>
              <a className="btn btn--ghost" href="#servicios">
                Ver especialidades
              </a>
            </div>

            <div className="hero-clean__metrics">
              <div className="metric-pill">
                <strong>{site.rating.value} ★</strong>
                <span>Google Maps ({site.rating.count} reseñas)</span>
              </div>
              <div className="metric-divider" />
              <div className="metric-pill">
                <strong>ZEISS</strong>
                <span>Centro de Certificación Oficial</span>
              </div>
            </div>

            {/* Flecha interactiva para invitar a bajar a la siguiente sección */}
            <div className="hero-scroll-cue">
              <a href="#nosotros" aria-label="Bajar a conocer más sobre Óptica Loja" className="hero-scroll-btn">
                <span className="hero-scroll-label">Conoce nuestra historia</span>
                <svg className="hero-scroll-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </HeroLensWrapper>
      </section>

      {/* ── 2. QUIÉNES SOMOS (Entra desde la izquierda) ── */}
      <div data-reveal="left">
        <AboutCollage />
      </div>

      {/* ── 3. VIDEO (Entra con zoom suave y fade) ── */}
      <div data-reveal="zoom">
        <VideoSection />
      </div>

      {/* ── 4. SERVICIOS (Entra desde la derecha) ── */}
      <div data-reveal="right">
        <ServicesGrid />
      </div>

      {/* ── 5. CALIFICACIONES & RESEÑAS ── */}
      <section className="section section--paper rating-section" aria-labelledby="rate-h">
        <div className="wrap wrap--narrow center">
          <div data-reveal="up">
            <span className="eyebrow-accent">
              <span className="dot-pulse" /> TU OPINIÓN NOS IMPORTA
            </span>
            <h2 id="rate-h" className="section__title" style={{ marginInline: "auto" }}>
              ¿Ya visitaste Óptica Loja? Cuéntanos tu experiencia
            </h2>
            <p className="lead" style={{ marginInline: "auto", marginBottom: "2rem" }}>
              Tu valoración ayuda a que más familias lojanas y de toda la provincia encuentren atención visual de confianza.
            </p>
          </div>
        </div>
        {/* Slider full-width */}
        <div data-reveal="fade">
          <ReviewFilter />
        </div>
      </section>

      {/* ── 6. AYUDA + COBERTURA + CITA ── */}
      <section className="section section--paper unified-help-section" id="cita" aria-labelledby="help-h">
        <div className="wrap">
          <div className="center unified-help-header" data-reveal="up">
            <span className="eyebrow-accent">
              <span className="dot-pulse" /> PREGUNTAS, UBICACIÓN &amp; CITAS
            </span>
            <h2 id="help-h" className="section__title" style={{ marginInline: "auto" }}>
              Todo lo que necesitas saber antes de visitarnos
            </h2>
            <p className="lead" style={{ marginInline: "auto", maxWidth: "60ch" }}>
              Atención personalizada para familias de Loja y pacientes de toda la provincia.
            </p>
          </div>

          <div className="unified-help-grid">
            {/* Columna Izquierda: Preguntas Frecuentes desde la izquierda */}
            <div className="unified-help-col" data-reveal="left">
              <div className="unified-card">
                <div className="unified-card__title-row">
                  <h3 className="unified-card__title">❓ Preguntas frecuentes sobre tu visita</h3>
                  <span className="badge-pill">Dudas resueltas</span>
                </div>
                <FaqSection isCompact={true} />
                <div className="unified-card__footer">
                  <p>¿Tienes una consulta específica sobre tu medida o lentes?</p>
                  <a
                    className="btn btn--ghost btn--sm"
                    href={waLink("Hola Óptica Loja, tengo una pregunta sobre mi examen visual.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Cobertura + Cita desde la derecha */}
            <div className="unified-help-col" data-reveal="right" data-reveal-delay="150">
              <div className="unified-card unified-card--accent">
                <div className="unified-card__title-row">
                  <h3 className="unified-card__title">📍 Pacientes de toda la provincia</h3>
                  <span className="badge-pill badge-pill--blue">Cita prioritaria</span>
                </div>
                <p className="unified-card__desc">
                  Si viajas desde fuera de Loja capital, coordinamos tu cita para darte atención preferente y entrega ágil el mismo día:
                </p>

                <ul className="province-pills-list">
                  {["Catamayo", "Zamora", "Yantzaza", "Saraguro", "Cariamanga", "Macará", "Célica", "Vilcabamba"].map((c) => (
                    <li key={c}>✓ {c}</li>
                  ))}
                </ul>

                <div className="unified-appointment-box">
                  <h4>Agenda tu cita médica u optométrica</h4>
                  <p>Bernardo Valdivieso y 10 de Agosto, Centro de Loja • Lun a Sáb 08:30 - 19:00</p>
                  <div className="unified-appointment-actions">
                    <a
                      className="btn btn--primary"
                      href={waLink("Hola Óptica Loja, quiero agendar mi cita.")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📲 Agendar cita por WhatsApp
                    </a>
                    <a
                      className="btn btn--ghost"
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver ubicación en Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
