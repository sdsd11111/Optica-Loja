import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr__grid">
        {/* Columna Marca & Identidad */}
        <div className="ftr__brand-col">
          <div className="ftr__logo-wrap">
            <img
              src="/logo-optica-sin-fondo-clean.png"
              alt="Óptica Loja - ¡Lo mejor para tus ojos!"
              className="ftr__logo-img"
            />
          </div>
          <p className="ftr__tag">
            {site.tagline}. Salud visual integral, lunas alemanas ZEISS y atención oftalmológica en Loja.
          </p>
        </div>

        {/* Columna Navegación Rápida */}
        <nav className="ftr__nav-col" aria-label="Navegación del sitio">
          <h3 className="ftr__h">Navegación</h3>
          <ul className="ftr__links-grid">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/examen-visual-loja">Examen visual</Link></li>
            <li><Link href="/lentes-zeiss-loja">Lentes ZEISS</Link></li>
            <li><Link href="/lentes-de-contacto-loja">Lentes de contacto</Link></li>
            <li><Link href="/centro-oftalmologico-loja">Diagnóstico médico</Link></li>
            <li><Link href="/terapia-visual-estrabismo-loja">Terapia visual</Link></li>
            <li><Link href="/urgencias-oculares-loja">Urgencias</Link></li>
            <li><Link href="/dr-fernando-lomas">Opt. Fernando Lomas</Link></li>
          </ul>
        </nav>

        {/* Columna Contacto & Redes Sociales */}
        <div className="ftr__contact-col">
          <h3 className="ftr__h">Atención &amp; Contacto</h3>
          <p className="ftr__address">
            📍 <strong>{site.address.street}</strong><br />
            {site.address.city}, Ecuador • Lun a Sáb 08:30 – 19:00
          </p>

          <div className="ftr__contact-links">
            <a href={site.phoneHref} className="ftr__contact-item">
              <span className="contact-icon">📞</span>
              <span>{site.phone}</span>
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola Óptica Loja, quiero hacer una consulta.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ftr__contact-item ftr__contact-item--wa"
            >
              {/* Logo SVG oficial WhatsApp */}
              <svg className="social-svg-icon wa-svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.56 0 8.25 3.69 8.25 8.24 0 2.2-.86 4.28-2.42 5.83a8.218 8.218 0 0 1-5.83 2.41c-1.47 0-2.92-.39-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.22-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
              </svg>
              <span>WhatsApp: 099 812 3492</span>
            </a>
          </div>

          {/* Redes Sociales con sus logotipos SVG */}
          <div className="ftr__social-bar">
            {/* Instagram */}
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Óptica Loja"
              className="social-btn social-btn--ig"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>

            {/* Facebook */}
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Óptica Loja"
              className="social-btn social-btn--fb"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>

            {/* Google Maps / Reviews */}
            <a
              href={site.social.google}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps perfil de Óptica Loja"
              className="social-btn social-btn--gg"
              title="Google Maps"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Google</span>
            </a>
          </div>
        </div>
      </div>

      {/* Línea legal y créditos de diseño solicitados */}
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
