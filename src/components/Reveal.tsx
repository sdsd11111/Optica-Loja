"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "fade";
  delay?: number;
  className?: string;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Verificar si el elemento ya está en el viewport al cargar
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) {
      // Delay mínimo para que la animación sea visible incluso si ya está en pantalla
      const t = setTimeout(() => setIsVisible(true), delay + 80);
      return () => clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: "0px 0px -10px 0px",
      }
    );

    observer.observe(el);

    // Fallback scroll nativo
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight - 10 && r.bottom > 0) {
        setIsVisible(true);
        observer.unobserve(el);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [delay]);

  const translateMap = {
    up: "translateY(40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    fade: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : translateMap[direction],
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
