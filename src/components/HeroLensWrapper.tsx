"use client";

import { useEffect, useRef, ReactNode } from "react";

interface HeroLensWrapperProps {
  children: ReactNode;
}

export function HeroLensWrapper({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId = 0;
    let t = 0;
    let isInteracting = false;
    let idleTimer: number | undefined;

    const setCoordinates = (x: number, y: number) => {
      el.style.setProperty("--lx", `${x}px`);
      el.style.setProperty("--ly", `${y}px`);
    };

    // Posición inicial: adaptada a móvil o escritorio
    const setInitialPos = () => {
      const currentRect = el.getBoundingClientRect();
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setCoordinates(currentRect.width * 0.5, currentRect.height * 0.38);
      } else {
        setCoordinates(currentRect.width * 0.16, currentRect.height * 0.5);
      }
    };
    setInitialPos();

    // Animación suave continua: en móvil viaja en órbita sutil y en escritorio oscila lateralmente
    const floatLoop = () => {
      if (!isInteracting) {
        t += 0.008;
        const currentRect = el.getBoundingClientRect();
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
          // En móvil: oscila suavemente entre el contorno izquierdo y derecho
          const xPos = currentRect.width * (0.5 + 0.38 * Math.sin(t * 0.8));
          const yPos = currentRect.height * (0.35 + 0.22 * Math.cos(t * 0.6));
          setCoordinates(xPos, yPos);
        } else {
          // En escritorio: oscila entre el lateral izquierdo y derecho
          const xPos = currentRect.width * (0.5 + 0.35 * Math.sin(t));
          const yPos = currentRect.height * (0.5 + 0.15 * Math.cos(t * 1.2));
          setCoordinates(xPos, yPos);
        }
      }
      rafId = requestAnimationFrame(floatLoop);
    };

    const handlePointerMove = (e: PointerEvent) => {
      isInteracting = true;
      const currentRect = el.getBoundingClientRect();
      const x = e.clientX - currentRect.left;
      const y = e.clientY - currentRect.top;
      setCoordinates(x, y);

      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        isInteracting = false;
      }, 2500);
    };

    rafId = requestAnimationFrame(floatLoop);

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerdown", handlePointerMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(idleTimer);
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerdown", handlePointerMove);
    };
  }, []);

  return (
    <div className="hero-lens-container" ref={containerRef}>
      {/* CAPA 1: Letras borrosas a los lados (Fondo desenfocado) */}
      <div className="hero-lens-bg hero-lens-bg--blur" aria-hidden="true">
        <div className="optotypes-col optotypes-left">
          <span>E</span>
          <span>F P</span>
          <span>T O Z</span>
          <span>L P E D</span>
          <span>P E C F D</span>
          <span>E D F C Z P</span>
          <span>F E L O P Z D</span>
          <span>D E F P O T E C</span>
        </div>
        <div className="optotypes-col optotypes-right">
          <span>Z</span>
          <span>O L</span>
          <span>E I S S</span>
          <span>V I S I O N</span>
          <span>E X P E R T</span>
          <span>2 0 / 2 0</span>
          <span>C L I N I C</span>
          <span>O P T O M E T R Y</span>
        </div>
      </div>

      {/* CAPA 2: Mismas letras pero nítidas con máscara circular (El Lente) */}
      <div className="hero-lens-bg hero-lens-bg--sharp" aria-hidden="true">
        <div className="optotypes-col optotypes-left">
          <span>E</span>
          <span>F P</span>
          <span>T O Z</span>
          <span>L P E D</span>
          <span>P E C F D</span>
          <span>E D F C Z P</span>
          <span>F E L O P Z D</span>
          <span>D E F P O T E C</span>
        </div>
        <div className="optotypes-col optotypes-right">
          <span>Z</span>
          <span>O L</span>
          <span>E I S S</span>
          <span>V I S I O N</span>
          <span>E X P E R T</span>
          <span>2 0 / 2 0</span>
          <span>C L I N I C</span>
          <span>O P T O M E T R Y</span>
        </div>
      </div>

      {/* CAPA 3: Anillo físico y reflejo de luz del lente */}
      <div className="hero-lens-ring" aria-hidden="true">
        <div className="hero-lens-glare" />
        <span className="hero-lens-label">Óptica Loja</span>
      </div>

      {/* CAPA 4: Contenido del Hero en primer plano (Centrado y legible) */}
      <div className="hero-lens-content">
        {children}
      </div>
    </div>
  );
}
