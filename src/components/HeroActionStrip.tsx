import { waLink } from "@/lib/site";

interface HeroActionStripProps {
  tag?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function HeroActionStrip({
  title = "ÓPTICA LOJA",
  subtitle = "La óptica líder en salud visual y tecnología alemana ZEISS en Loja. Examen computarizado y armazones exclusivos.",
  ctaLabel = "Agendar cita",
  ctaHref,
}: HeroActionStripProps) {
  const targetHref = ctaHref || waLink("Hola Óptica Loja, quiero agendar mi examen visual.");

  return (
    <section className="has-strip-container" aria-label="Información principal y contacto">
      <div className="wrap">
        <div className="has-card-pill">
          {/* Título arriba centrado e imponente */}
          <h1 className="has-card-pill__title">{title}</h1>

          {/* Fila inferior: Gancho a la izquierda y Botón a la derecha a la misma altura */}
          <div className="has-card-pill__body">
            <p className="has-card-pill__desc">
              <span className="desc-full">La óptica líder en salud visual y tecnología alemana ZEISS en Loja. Examen computarizado.</span>
              <span className="desc-mobile">Líderes en salud visual y tecnología alemana ZEISS en Loja.</span>
            </p>

            <div className="has-card-pill__action">
              <a
                href={targetHref}
                className="btn has-card-pill__btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{ctaLabel}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroActionStrip;
