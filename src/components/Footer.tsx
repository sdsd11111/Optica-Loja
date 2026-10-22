"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

const branches = [
  {
    id: "matriz",
    name: "Matriz 10 de Agosto",
    badge: "Principal",
    street: "Calle 10 de Agosto, entre Olmedo y Juan José Peña",
    city: "Loja, Ecuador",
    hours: "Lun a Sáb 08:30 – 19:00",
    phone: "072 586217",
    embedUrl: "https://maps.google.com/maps?q=-3.99612,-79.20452&hl=es&z=17&output=embed",
    mapsUrl: "https://maps.google.com/?q=Optica+Loja+Calle+10+de+Agosto+Loja+Ecuador",
  },
  {
    id: "24demayo",
    name: "Sucursal 24 de Mayo",
    badge: "24 de Mayo",
    street: "José Antonio Eguiguren y 24 de Mayo (Esq.)",
    city: "Loja, Ecuador",
    hours: "Lun a Sáb 08:30 – 19:00",
    phone: "072 586217",
    embedUrl: "https://maps.google.com/maps?q=-3.99395,-79.20230&hl=es&z=17&output=embed",
    mapsUrl: "https://maps.app.goo.gl/gqig9t1AZoehw1yR8",
  },
];

export function Footer() {
  const [activeBranch, setActiveBranch] = useState(branches[0]);

  return (
    <footer className="ftr">
      <div className="wrap ftr__grid">
        {/* COLUMNA 1: IZQUIERDA - Identidad, Páginas y Contacto/Redes SOLO ICONOS */}
        <div className="ftr__col-left">
          <div className="ftr__brand-header">
            {/* Oculto solo en móvil vía CSS para no repetir con el logo */}
            <h3 className="ftr__brand-title">ÓPTICA LOJA</h3>
            <p className="ftr__tag">
              {site.tagline}. Salud visual integral, lunas alemanas ZEISS y atención de vanguardia en Loja.
            </p>
          </div>

          {/* Navegación rápida */}
          <nav className="ftr__nav" aria-label="Navegación del sitio">
            <h4 className="ftr__subh">Páginas</h4>
            <ul className="ftr__nav-list">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/examen-visual-loja">Examen visual</Link></li>
              <li><Link href="/centro-oftalmologico-loja">Diagnóstico oftalmológico</Link></li>
              <li><Link href="/terapia-visual-estrabismo-loja">Terapia visual</Link></li>
              <li><Link href="/laboratorio-optico-loja">Lentes y laboratorio</Link></li>
              <li><Link href="/lentes-de-contacto-loja">Lentes de contacto</Link></li>
              <li><Link href="/productos-opticos-loja">Productos ópticos</Link></li>
              <li><Link href="/sobre-nosotros">Sobre nosotros</Link></li>
            </ul>
          </nav>

          {/* Redes Sociales y Canales Directos: SOLO ICONOS */}
          <div className="ftr__social-block">
            <h4 className="ftr__subh">Conéctate con nosotros</h4>
            <div className="ftr__social-bar">
              {/* Instagram */}
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Óptica Loja"
                className="social-icon-btn social-icon-btn--ig"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Óptica Loja"
                className="social-icon-btn social-icon-btn--fb"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* TikTok Oficial SVG */}
              <a
                href="https://www.tiktok.com/@opticaloja"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de Óptica Loja"
                className="social-icon-btn social-icon-btn--tk"
                title="TikTok"
              >
                <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/fernando-lomas-946041161/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Fernando Lomas"
                className="social-icon-btn social-icon-btn--li"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* WhatsApp (Solo Ícono) */}
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola Óptica Loja, quiero hacer una consulta.")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Escribir por WhatsApp a Óptica Loja"
                className="social-icon-btn social-icon-btn--wa"
                title="WhatsApp: 099 812 3492"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.56 0 8.25 3.69 8.25 8.24 0 2.2-.86 4.28-2.42 5.83a8.218 8.218 0 0 1-5.83 2.41c-1.47 0-2.92-.39-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.22-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                </svg>
              </a>

              {/* Teléfono (Solo Ícono) */}
              <a
                href={site.phoneHref}
                aria-label={`Llamar a Óptica Loja: ${site.phone}`}
                className="social-icon-btn social-icon-btn--phone"
                title={`Llamar al ${site.phone}`}
              >
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* COLUMNA 2: CENTRO - LOGO PROTAGONISTA ENORME Y LIMPIO */}
        <div className="ftr__col-center">
          <div className="ftr__logo-stage">
            <img
              src="/Logo-svg.svg"
              alt="Óptica Loja - ¡Lo mejor para tus ojos!"
              className="ftr__main-logo"
            />
          </div>
        </div>

        {/* COLUMNA 3: DERECHA - Google Maps Real con Tabs para las 2 Sucursales */}
        <div className="ftr__col-right">
          <div className="ftr__branch-header">
            <h4 className="ftr__subh">Nuestras Sucursales</h4>
            {/* Tabs de Selección */}
            <div className="ftr__branch-tabs" role="tablist">
              {branches.map((b) => {
                const isActive = activeBranch.id === b.id;
                return (
                  <button
                    key={b.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveBranch(b)}
                    className={`ftr__branch-tab ${isActive ? "ftr__branch-tab--active" : ""}`}
                  >
                    <span className="ftr__branch-name">{b.name}</span>
                    <span className="ftr__branch-badge">{b.badge}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tarjeta de Ubicación con Google Maps real */}
          <div className="ftr__croquis-card">
            {/* Cabecera de Dirección */}
            <div className="ftr__croquis-info">
              <p className="ftr__croquis-address">
                📍 <strong>{activeBranch.street}</strong>
              </p>
              <div className="ftr__croquis-meta">
                <span>🕒 {activeBranch.hours}</span>
                <span className="ftr__croquis-city">{activeBranch.city}</span>
              </div>
            </div>

            {/* Google Maps Real incrustado */}
            <div className="ftr__map-embed-wrap">
              <iframe
                title={`Mapa de ${activeBranch.name}`}
                src={activeBranch.embedUrl}
                width="100%"
                height="145"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="ftr__map-iframe"
              />

              {/* Botón flotante para abrir ruta completa en Google Maps */}
              <a
                href={activeBranch.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ftr__croquis-btn"
              >
                <span>Abrir en Maps</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea legal y créditos */}
      <div className="wrap ftr__legal">
        <div className="ftr__legal-row">
          <p className="ftr__copy">
            Diseñado por{" "}
            <a
              href="https://cesarreyesjaramillo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ftr__author-link"
            >
              César Reyes
            </a>{" "}
            | Óptica Loja 2026 Loja-Ecuador
          </p>
          <p className="ftr__disclaimer">
            La información de este sitio es educativa y no reemplaza una consulta médica presencial.
          </p>
        </div>
      </div>
    </footer>
  );
}
