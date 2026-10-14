"use client";

import { useEffect } from "react";

/**
 * ScrollReveal — observa TODOS los elementos [data-reveal] en el DOM
 * y les añade [data-revealed] cuando entran en el viewport.
 *
 * IMPORTANTE: Funciona SIEMPRE, incluso con prefers-reduced-motion activado.
 * En ese caso el CSS ya se encarga de mostrar solo fade sin movimiento.
 *
 * FIX CRÍTICO: overflow-x: clip en <html> es seguro para IntersectionObserver.
 * overflow-x: hidden en <html> lo ROMPE en Chrome/Safari móvil.
 */
export function ScrollReveal() {
  useEffect(() => {
    const SELECTOR = "[data-reveal]";

    function reveal(el: Element) {
      el.setAttribute("data-revealed", "true");
    }

    // Configuración optimizada para móvil y escritorio
    const isMobile = window.innerWidth <= 768;
    const rootMargin = isMobile ? "0px 0px -5px 0px" : "0px 0px -60px 0px";
    const threshold = isMobile ? 0.02 : 0.1;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(
              (entry.target as HTMLElement).dataset.revealDelay ?? 0
            );
            if (delay) {
              setTimeout(() => reveal(entry.target), delay);
            } else {
              reveal(entry.target);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    // Observar todos los elementos al montar
    // Los que ya están en viewport: revelarlos con un pequeño delay para que la animación sea visible
    document.querySelectorAll(SELECTOR).forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Ya visible: revelar con delay mínimo para que el CSS haga el fade
        setTimeout(() => reveal(el), 80);
      } else {
        observer.observe(el);
      }
    });

    // Fallback con scroll nativo — garantiza activación en cualquier navegador/dispositivo
    const onScroll = () => {
      document.querySelectorAll(`${SELECTOR}:not([data-revealed])`).forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 10 && rect.bottom > 0) {
          reveal(el);
          observer.unobserve(el);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Touch fallback específico para móvil (algunos navegadores móviles no disparan 'scroll')
    window.addEventListener("touchmove", onScroll, { passive: true });

    // MutationObserver para elementos añadidos dinámicamente
    const mut = new MutationObserver(() => {
      document
        .querySelectorAll(`${SELECTOR}:not([data-revealed])`)
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            reveal(el);
          } else {
            observer.observe(el);
          }
        });
    });
    mut.observe(document.body, { childList: true, subtree: true });

    // Forzar revisión tras 500ms por si el layout terminó de renderizar
    const initTimer = setTimeout(() => {
      document.querySelectorAll(`${SELECTOR}:not([data-revealed])`).forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          reveal(el);
        }
      });
    }, 500);

    return () => {
      observer.disconnect();
      mut.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onScroll);
      clearTimeout(initTimer);
    };
  }, []);

  return null;
}
