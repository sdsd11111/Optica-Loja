import { BookingForm } from "./BookingForm";
import { ReviewFilter } from "./ReviewFilter";
import { site } from "@/lib/site";

export function ContactSection({ service }: { service?: string }) {
  const hours = site.hours.length
    ? site.hours.map((h) => `${h.days.join(", ")}: ${h.opens} a ${h.closes}`).join(" · ")
    : "Escríbenos por WhatsApp y te confirmamos horarios.";
  return (
    <section className="section section--mist" id="cita" aria-labelledby="cita-h">
      <div className="wrap contact">
        <div className="contact__book">
          <h2 id="cita-h">Agenda tu cita</h2>
          <p>Respondemos por WhatsApp. Si escribes fuera de horario, te contestamos al abrir.</p>
          <BookingForm defaultService={service} />
        </div>
        <div className="contact__info">
          <h2 className="h3">Dónde estamos</h2>
          <address>
            {site.address.street}, {site.address.city}
          </address>
          <p className="contact__hours">{hours}</p>
          <div className="map">
            <iframe
              title="Mapa de Óptica Loja"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`}
            />
          </div>
          <ReviewFilter />
        </div>
      </div>
    </section>
  );
}
