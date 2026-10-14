import { waLink } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      className="fab"
      href={waLink("Hola Óptica Loja, quisiera hacer una consulta.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" strokeWidth="3" />
      </svg>
    </a>
  );
}
