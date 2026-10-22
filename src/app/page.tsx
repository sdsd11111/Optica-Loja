import type { Metadata } from "next";
/**
 * HeroSlider: slider de imágenes full-width inspirado en gmo.com.ec.
 * Reemplaza al HeroLensWrapper (efecto de lente de optotipos).
 * El HeroLensWrapper se conserva en HeroOptotypeLensBg.tsx como componente
 * reutilizable para usos futuros.
 */
import { HeroSlider } from "@/components/HeroSlider";
import { HeroActionStrip } from "@/components/HeroActionStrip";
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
      {/* ── 1. HERO SLIDER LIMPIO (Estilo GMO) ── */}
      <HeroSlider />

      {/* ── 1.1 BARRA HORIZONTAL CON H1, GANCHO Y BOTÓN (Solapada al hero) ── */}
      <HeroActionStrip />

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
