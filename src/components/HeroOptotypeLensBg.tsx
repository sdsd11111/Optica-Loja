"use client";

import React, { useEffect, useRef, ReactNode } from "react";

export interface HeroOptotypeLensBgProps {
  /**
   * Contenido que se renderizará en primer plano sobre el efecto
   */
  children?: ReactNode;
  /**
   * Texto de la etiqueta en el anillo del lente (por defecto "Óptica Loja")
   */
  lensLabel?: string;
  /**
   * Clases adicionales para el contenedor principal
   */
  className?: string;
  /**
   * Si se debe pausar la animación flotante automática
   */
  pauseAutoFloat?: boolean;
}

/**
 * Componente Reutilizable: HeroOptotypeLensBg
 * 
 * Efecto inmersivo de examen visual / óptica:
 * - Capa 1 de fondo: pirámides de optotipos Snellen/ZEISS laterales con desenfoque óptico
 * - Capa 2 interactiva: máscara radial que revela los mismos optotipos en nitidez 20/20 absoluta
 * - Capa 3: bisel circular metálico/óptico con reflejo especular (glare) y etiqueta de marca
 * - Animación orgánica flotante continua + seguimiento reactivo al cursor/touch
 */
export function HeroOptotypeLensBg({
  children,
  lensLabel = "Óptica Loja",
  className = "",
  pauseAutoFloat = false,
}: HeroOptotypeLensBgProps) {
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

    const updateInitialPos = () => {
      const rect = el.getBoundingClientRect();
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setCoordinates(rect.width * 0.5, rect.height * 0.38);
      } else {
        setCoordinates(rect.width * 0.16, rect.height * 0.5);
      }
    };

    updateInitialPos();

    const floatLoop = () => {
      if (!isInteracting && !pauseAutoFloat) {
        t += 0.008;
        const rect = el.getBoundingClientRect();
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
          const xPos = rect.width * (0.5 + 0.38 * Math.sin(t * 0.8));
          const yPos = rect.height * (0.35 + 0.22 * Math.cos(t * 0.6));
          setCoordinates(xPos, yPos);
        } else {
          const xPos = rect.width * (0.5 + 0.35 * Math.sin(t));
          const yPos = rect.height * (0.5 + 0.15 * Math.cos(t * 1.2));
          setCoordinates(xPos, yPos);
        }
      }
      rafId = requestAnimationFrame(floatLoop);
    };

    const handlePointerMove = (e: PointerEvent) => {
      isInteracting = true;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCoordinates(x, y);

      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        isInteracting = false;
      }, 2500);
    };

    rafId = requestAnimationFrame(floatLoop);

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerdown", handlePointerMove);

    const handleResize = () => {
      if (!isInteracting) {
        updateInitialPos();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(idleTimer);
      window.removeEventListener("resize", handleResize);
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerdown", handlePointerMove);
    };
  }, [pauseAutoFloat]);

  return (
    <div
      className={`hero-lens-container ${className}`.trim()}
      ref={containerRef}
      role="region"
      aria-label="Efecto interactivo de lente de enfoque visual"
    >
      {/* CAPA 1: Letras difuminadas a los costados */}
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

      {/* CAPA 2: Mismas letras nítidas reveladas mediante máscara radial sincronizada */}
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

      {/* CAPA 3: Anillo físico, bisel y reflejo de luz del lente */}
      <div className="hero-lens-ring" aria-hidden="true">
        <div className="hero-lens-glare" />
        {lensLabel && <span className="hero-lens-label">{lensLabel}</span>}
      </div>

      {/* CAPA 4: Contenido del Hero en primer plano */}
      {children && <div className="hero-lens-content">{children}</div>}
    </div>
  );
}

export default HeroOptotypeLensBg;
