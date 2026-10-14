"use client";

import { useState } from "react";
import { site, waLink } from "@/lib/site";

const SERVICES = [
  "Examen visual",
  "Lentes de contacto",
  "Lentes ZEISS",
  "Diagnóstico oftalmológico",
  "Terapia visual / estrabismo",
  "Urgencia ocular",
  "Otro",
];

export function BookingForm({ defaultService = "Examen visual" }: { defaultService?: string }) {
  const [name, setName] = useState("");
  const [service, setService] = useState(SERVICES.includes(defaultService) ? defaultService : "Otro");
  const [when, setWhen] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = `Hola Óptica Loja, soy ${name.trim()}. Quiero agendar: ${service}.${when.trim() ? ` Me acomoda: ${when.trim()}.` : ""}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="form" onSubmit={submit}>
      <label>
        Tu nombre
        <input required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
      </label>
      <label>
        Qué necesitas
        <select value={service} onChange={(e) => setService(e.target.value)}>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <label>
        Día y hora que te acomodan
        <input value={when} onChange={(e) => setWhen(e.target.value)} placeholder="Ej.: mañana en la tarde" />
      </label>
      <button className="btn btn--primary" type="submit">
        Enviar por WhatsApp
      </button>
      <p className="form__hint">Se abrirá WhatsApp con tu mensaje listo. También puedes llamar al {site.phone}.</p>
    </form>
  );
}
