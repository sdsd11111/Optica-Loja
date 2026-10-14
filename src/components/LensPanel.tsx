"use client";

import { useEffect, useRef } from "react";

const ROWS: { text: string; size: string }[] = [
  { text: "E", size: "clamp(4.5rem, 11vw, 7.5rem)" },
  { text: "F P", size: "clamp(3rem, 7.4vw, 5rem)" },
  { text: "T O Z", size: "clamp(2.2rem, 5.2vw, 3.6rem)" },
  { text: "L P E D", size: "clamp(1.6rem, 3.8vw, 2.6rem)" },
  { text: "P E C F D", size: "clamp(1.2rem, 2.8vw, 1.9rem)" },
  { text: "E D F C Z P", size: "clamp(.95rem, 2.1vw, 1.4rem)" },
];

function Chart() {
  return (
    <div className="lens__chart" aria-hidden="true">
      {ROWS.map((r) => (
        <span key={r.text} style={{ fontSize: r.size }}>
          {r.text}
        </span>
      ))}
    </div>
  );
}

/** Tabla de optotipos que se enfoca dentro de un "lente" que sigue al puntero. */
export function LensPanel() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let t = 0;
    let interacting = false;
    let timer: number | undefined;

    const set = (x: number, y: number) => {
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    const start = el.getBoundingClientRect();
    set(start.width * 0.5, start.height * 0.42);

    const drift = () => {
      if (!interacting) {
        const r = el.getBoundingClientRect();
        t += 0.007;
        set(r.width * (0.5 + 0.26 * Math.sin(t)), r.height * (0.45 + 0.3 * Math.sin(t * 1.6 + 1)));
      }
      raf = requestAnimationFrame(drift);
    };
    const move = (e: PointerEvent) => {
      interacting = true;
      const r = el.getBoundingClientRect();
      set(e.clientX - r.left, e.clientY - r.top);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        interacting = false;
      }, 2500);
    };

    raf = requestAnimationFrame(drift);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerdown", move);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerdown", move);
    };
  }, []);

  return (
    <figure className="lens-fig">
      <div className="lens" ref={ref} role="img" aria-label="Tabla de letras que se vuelve nítida dentro de un lente en movimiento">
        <div className="lens__layer lens__blur">
          <Chart />
        </div>
        <div className="lens__layer lens__sharp">
          <Chart />
        </div>
        <div className="lens__ring" aria-hidden="true" />
      </div>
      <figcaption>Mueve el cursor por la tabla: así de nítida puede ser tu visión.</figcaption>
    </figure>
  );
}
