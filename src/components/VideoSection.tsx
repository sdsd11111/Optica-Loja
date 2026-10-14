"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section section--video" aria-labelledby="video-title">
      <div className="wrap">
        <Reveal direction="up" className="video-header center">
          <span className="eyebrow-accent">
            <span className="dot-pulse" /> EXPERIENCIA VISUAL & TECNOLOGÍA
          </span>
          <h2 id="video-title" className="video-heading">
            Conoce cómo cuidamos tu visión en Óptica Loja
          </h2>
          <p className="lead video-lead">
            Un recorrido por nuestras instalaciones, tecnología computarizada alemana y la atención personalizada que nos distingue.
          </p>
        </Reveal>

        <Reveal direction="up" delay={120} className="video-container">
          <div className="video-frame-wrap">
            <video
              className="video-native"
              src="https://mvps.b-cdn.net/optica-loja/optica-loja-mejor-optica-de-loja.mp4#t=0.001"
              controls
              playsInline
              preload="metadata"
            >
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
