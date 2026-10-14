"use client";

import Link from "next/link";
import { useState } from "react";

const options = [
  {
    label: "Veo borroso o me duele la cabeza al leer",
    to: "/examen-visual-loja",
    title: "Empieza por un examen visual",
    text: "Un optometrista mide tu graduación y revisa cómo trabajan tus ojos. Es el primer paso para saber si necesitas lentes nuevos.",
    cta: "Ver examen visual",
  },
  {
    label: "Quiero lentes nuevos o progresivos",
    to: "/lentes-zeiss-loja",
    title: "Elige el lente según tu rutina",
    text: "Progresivos, fotocromáticos o para pantallas. Te asesoramos con medidas individuales y opciones para cada presupuesto.",
    cta: "Ver lentes ZEISS",
  },
  {
    label: "Tengo más de 40 años o antecedentes de glaucoma",
    to: "/centro-oftalmologico-loja",
    title: "Un estudio a tiempo cambia el pronóstico",
    text: "La presión ocular y las imágenes de la retina permiten detectar cambios antes de que se note la pérdida de visión.",
    cta: "Ver centro de diagnóstico",
  },
  {
    label: "A mi hijo se le desvía un ojo",
    to: "/terapia-visual-estrabismo-loja",
    title: "No esperes a que se le pase",
    text: "Evaluamos la alineación de los ojos y definimos si la terapia visual, los lentes o el oftalmólogo son el mejor camino.",
    cta: "Ver terapia visual",
  },
  {
    label: "Tengo el ojo rojo, con dolor o secreción",
    to: "/urgencias-oculares-loja",
    title: "Esto conviene verlo pronto",
    text: "Dolor, secreción o un golpe necesitan evaluación. Llámanos o escríbenos y te indicamos cómo atenderte.",
    cta: "Ver urgencias oculares",
  },
];

export function Triage() {
  const [i, setI] = useState(0);
  const sel = options[i];
  return (
    <div className="triage">
      <div className="triage__list" role="group" aria-label="¿Qué te pasa?">
        {options.map((o, idx) => (
          <button key={o.to} type="button" aria-pressed={idx === i} onClick={() => setI(idx)}>
            {o.label}
          </button>
        ))}
      </div>
      <div className="triage__result" aria-live="polite">
        <h3>{sel.title}</h3>
        <p>{sel.text}</p>
        <Link href={sel.to} className="btn btn--primary">
          {sel.cta}
        </Link>
      </div>
    </div>
  );
}
