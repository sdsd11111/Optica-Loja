"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿El examen de la vista tiene algún costo si compro mis lentes en Óptica Loja?",
    a: "No. Si decides adquirir tus armazones y lunas graduadas con nosotros, el examen visual computarizado es completamente sin costo. Si únicamente necesitas la receta médica sin adquirir lentes, el valor de la consulta optométrica es muy accesible ($15).",
  },
  {
    q: "¿Qué diferencia tienen las lunas ZEISS frente a las lunas convencionales?",
    a: "Las lunas alemanas ZEISS ofrecen una nitidez óptica superior de borde a borde, reduciendo la distorsión periférica. Además, sus tratamientos DuraVision protegen contra luz azul, resisten rayas y facilitan la limpieza por mucho más tiempo.",
  },
  {
    q: "¿Cuánto tiempo demoran en entregar los lentes con mi graduación?",
    a: "En la mayoría de graduaciones convencionales y monofocales, la entrega es de 24 a 48 horas laborables. Para lunas personalizadas ZEISS o multifocales progresivos, el tiempo promedio es de 3 a 5 días con calibración digital exacta.",
  },
  {
    q: "¿Atienden a personas de otras ciudades de la provincia de Loja o Zamora?",
    a: "¡Sí, con frecuencia! Recibimos pacientes de Catamayo, Zamora, Yantzaza, Saraguro, Cariamanga y Macará. Si viajas desde fuera de la ciudad, te recomendamos coordinar tu cita previamente por WhatsApp para atenderte con prioridad.",
  },
  {
    q: "¿Realizan adaptación guiada de lentes de contacto para personas primerizas?",
    a: "Totalmente. Evaluamos la curvatura y salud corneal, te enseñamos a colocarlos y retirarlos con total seguridad, y te entregamos un kit con solución desinfectante y recomendaciones de higiene ocular.",
  },
  {
    q: "¿Tienen atención médica oftalmológica para problemas como ojo rojo o cataratas?",
    a: "Sí. Contamos con oftalmólogos especialistas en la misma clínica para diagnósticos de glaucoma, cataratas, pterigión o urgencias oculares agudas.",
  },
];

export function FaqSection({ isCompact = false }: { isCompact?: boolean }) {
  // Inicialmente cerrado
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Por defecto se muestra exactamente 1 sola pregunta para máxima compacidad
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 1);

  return (
    <div className="faq-compact-container">
      <div className="faq-accordion" role="region" aria-label="Acordeón de preguntas frecuentes">
        {displayedFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`faq-card ${isOpen ? "is-open" : ""}`}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <span className="faq-q-text">{faq.q}</span>
                <span className="faq-icon-arrow">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="faq-answer-body">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="faq-toggle-more-wrap">
        <button
          type="button"
          className="btn btn--ghost btn--sm faq-show-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Ver menos preguntas (−)" : `Ver más preguntas frecuentes (+${faqs.length - 1})`}
        </button>
      </div>
    </div>
  );
}
