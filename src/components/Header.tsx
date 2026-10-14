"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, waLink } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Desaparece al hacer scroll hacia abajo, y aparece al hacer scroll hacia arriba o al estar en el top
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // En el top de la página siempre visible
      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 70) {
        // Scroll hacia abajo: ocultar
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scroll hacia arriba: mostrar
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header className={`hdr-clean-wrap ${visible ? "hdr-clean-wrap--visible" : "hdr-clean-wrap--hidden"}`}>
        <div className="hdr-clean">
          {/* Botón para abrir el menú lateral desde la izquierda */}
          <button
            type="button"
            className="btn btn--primary btn--sm hdr-btn-menu"
            aria-expanded={open}
            aria-controls="menu-lateral"
            onClick={() => setOpen(true)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <span className="hdr-btn-menu__text">Menú</span>
          </button>

          {/* Logo Oficial Óptica Loja */}
          <Link href="/" className="hdr-clean__logo" aria-label="Óptica Loja, ir al inicio">
            <Logo height={48} />
          </Link>

          {/* Acceso rápido a WhatsApp / Cita */}
          <div className="hdr-clean__actions">
            <a
              className="btn btn--primary btn--sm hdr-clean__cta"
              href={waLink("Hola Óptica Loja, deseo información y agendar una cita.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Agendar Cita</span>
            </a>
          </div>
        </div>
      </header>

      {/* Menú lateral que sale desde la IZQUIERDA */}
      <div 
        className={`drawer-backdrop ${open ? "is-visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      
      <aside 
        id="menu-lateral" 
        className={`drawer-left ${open ? "is-open" : ""}`}
        aria-label="Navegación del sitio"
      >
        <div className="drawer-left__header">
          <Link href="/" onClick={() => setOpen(false)} aria-label="Inicio">
            <Logo height={48} />
          </Link>
          <button
            type="button"
            className="drawer-left__close"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        <div className="drawer-left__body">
          <span className="drawer-left__title">Servicios & Especialidades</span>
          <nav className="drawer-left__nav">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={isActive(n.href) ? "is-active" : ""}
                aria-current={isActive(n.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{n.label}</span>
                <span className="drawer-arrow">→</span>
              </Link>
            ))}
          </nav>

          <div className="drawer-left__footer">
            <a
              className="btn btn--primary drawer-btn-wa"
              href={waLink("Hola Óptica Loja, quiero agendar una cita.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              📲 Agendar por WhatsApp
            </a>
            <p className="drawer-left__info">
              📍 Bernardo Valdivieso y 10 de Agosto, Loja<br/>
              ⏰ Lun a Sáb: 08:30 - 19:00
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
