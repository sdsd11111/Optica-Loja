"use client";

import { useState, useEffect, useRef } from "react";
import { site, waLink } from "@/lib/site";

export function CitaWidget() {
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", telefono: "", servicio: "Examen visual" });
  const modalRef = useRef<HTMLDivElement>(null);

  // Comprobar al montar si ya fue cerrado en esta sesión
  useEffect(() => {
    if (sessionStorage.getItem("optica_cta_dismissed") === "true") {
      setDismissed(true);
      setBadgeVisible(false);
    }
  }, []);

  // Al llegar al 50% de scroll, aparece el botón/tarjeta flotante (solo si no fue cerrado)
  useEffect(() => {
    if (dismissed) {
      setBadgeVisible(false);
      return;
    }

    function handleScroll() {
      if (sessionStorage.getItem("optica_cta_dismissed") === "true") {
        setBadgeVisible(false);
        setDismissed(true);
        return;
      }

      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrollPercent = window.scrollY / totalScrollable;
      if (scrollPercent >= 0.5) {
        setBadgeVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  // Quitar el botón flotante al hacer clic en su "X"
  function handleDismissBadge(e: React.MouseEvent | React.TouchEvent) {
    e.preventDefault();
    e.stopPropagation();
    setBadgeVisible(false);
    setDismissed(true);
    sessionStorage.setItem("optica_cta_dismissed", "true");
  }

  // Cerrar el modal al hacer clic en su X o fondo
  function handleCloseModal() {
    setModalOpen(false);
  }

  // Cerrar modal con tecla Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCloseModal();
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hola Óptica Loja, soy ${formData.nombre}. Quiero agendar una cita para: ${formData.servicio}. Mi teléfono de contacto: ${formData.telefono}`;
    window.open(waLink(msg), "_blank");
    handleCloseModal();
  }

  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

  return (
    <>
      {/* ── BOTÓN / WIDGET FLOTANTE LATERAL DERECHO ── */}
      <div
        className={`cita-floating-card ${badgeVisible ? "cita-floating-card--visible" : ""}`}
        onClick={() => setModalOpen(true)}
        role="button"
        tabIndex={0}
        aria-label="Agendar cita y ver dónde estamos ubicados"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setModalOpen(true);
        }}
      >
        {/* Botón X para quitar el widget flotante */}
        <button
          className="cita-floating-card__close"
          onClick={handleDismissBadge}
          onTouchEnd={handleDismissBadge}
          aria-label="Cerrar aviso"
          title="Ocultar aviso"
          type="button"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Icono con pulso y movimiento llamativo */}
        <div className="cita-floating-card__icon-wrap">
          <div className="cita-floating-card__pulse" />
          <span className="cita-floating-card__icon">📍</span>
        </div>

        {/* Textos: Agenda tu cita + Dónde estamos ubicados */}
        <div className="cita-floating-card__content">
          <span className="cita-floating-card__title">
            Agenda tu Cita aquí
          </span>
          <span className="cita-floating-card__sub">
            ¿Dónde estamos ubicados? &rarr;
          </span>
        </div>
      </div>

      {/* ── POPUP / MODAL CENTRADO (SÓLO SE ABRE AL DAR CLIC EN EL BOTÓN) ── */}
      <div
        className={`cita-modal-overlay ${modalOpen ? "cita-modal-overlay--open" : ""}`}
        onClick={handleBackdropClick}
        aria-hidden={!modalOpen}
      >
        <div
          ref={modalRef}
          className="cita-modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cita-modal-title"
        >
          {/* Botón X de cerrar el modal */}
          <button
            className="cita-modal-close"
            onClick={handleCloseModal}
            aria-label="Cerrar ventana"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Encabezado */}
          <div className="cita-modal-header">
            <div className="cita-modal-header__badge">
              <span className="live-dot" /> Abierto hoy hasta las 19:00
            </div>
            <h3 id="cita-modal-title" className="cita-modal-title">
              ¡Agenda tu cita o visítanos en Óptica Loja!
            </h3>
            <p className="cita-modal-desc">
              Estamos en pleno centro: <strong>Bernardo Valdivieso y 10 de Agosto</strong>, Loja.
            </p>
          </div>

          {/* Grid: Mapa a la izquierda + Formulario a la derecha */}
          <div className="cita-modal-grid">
            {/* Columna Mapa */}
            <div className="cita-modal-map-col">
              <div className="cita-modal-map-wrapper">
                {modalOpen && (
                  <iframe
                    src={mapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación exacta de Óptica Loja"
                  />
                )}
              </div>
              <div className="cita-modal-location-footer">
                <span className="loc-icon">📍</span>
                <div>
                  <span className="loc-label">Bernardo Valdivieso y 10 de Agosto</span>
                  <a
                    href="https://maps.google.com/?q=Bernardo+Valdivieso+y+10+de+Agosto+Loja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="loc-link"
                  >
                    Abrir en Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Columna Formulario */}
            <div className="cita-modal-form-col">
              <form onSubmit={handleSubmit} className="cita-form">
                <div className="cita-form-group">
                  <label htmlFor="modal-cita-nombre">Nombre y Apellido</label>
                  <input
                    id="modal-cita-nombre"
                    type="text"
                    required
                    placeholder="Ej: Carlos Castillo"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  />
                </div>

                <div className="cita-form-group">
                  <label htmlFor="modal-cita-tel">Teléfono / WhatsApp</label>
                  <input
                    id="modal-cita-tel"
                    type="tel"
                    required
                    placeholder="Ej: 099 123 4567"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  />
                </div>

                <div className="cita-form-group">
                  <label htmlFor="modal-cita-servicio">Servicio de interés</label>
                  <select
                    id="modal-cita-servicio"
                    value={formData.servicio}
                    onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                  >
                    <option>Examen visual completo</option>
                    <option>Lentes ZEISS y monturas</option>
                    <option>Lentes de contacto</option>
                    <option>Terapia visual / Estrabismo</option>
                    <option>Consulta oftalmológica</option>
                    <option>Urgencia ocular</option>
                  </select>
                </div>

                <button type="submit" className="cita-modal-submit-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    <path d="M8 12h.01M12 12h.01M16 12h.01" strokeWidth="3" />
                  </svg>
                  Confirmar cita por WhatsApp
                </button>

                <p className="cita-form-hint">
                  Atención directa con el Dr. Fernando Lomas o su equipo.
                </p>
              </form>

              <div className="cita-modal-direct-call">
                <span>¿Prefieres llamada tradicional?</span>
                <a href={site.phoneHref} className="call-btn">
                  📞 {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
