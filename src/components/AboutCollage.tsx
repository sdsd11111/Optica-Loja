"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function AboutCollage() {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  const [showMoreText, setShowMoreText] = useState(false);

  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  return (
    <section id="nosotros" className="section section--paper about-section" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about-grid">
          {/* Columna Izquierda: Información y Credibilidad (Desliza desde la izquierda) */}
          <Reveal direction="left" className="about-content">
            <span className="eyebrow-accent">
              <span className="dot-pulse" /> TRAYECTORIA &amp; ATENCIÓN FAMILIAR
            </span>
            <h2 id="about-title" className="about-heading">
              Más de 25 años cuidando la visión de las familias lojanas
            </h2>

            {/* Texto con "Seguir leyendo" desplegable */}
            <p className="lead about-lead">
              En la tradicional calle de los lentes en Loja, nuestro compromiso es la salud y el bienestar visual a largo plazo de cada familia, respaldados por la precisión tecnológica de <strong>ZEISS Vision Expert</strong>.
            </p>

            <div className="about-collapsible-text-wrap">
              <p className={`about-text ${showMoreText ? "about-text--expanded" : "about-text--collapsed"}`}>
                Optometristas y médicos oftalmólogos de una misma familia trabajando juntos. Para nosotros tu visión no es un producto descartable: cuidamos la evolución de tus ojos con diagnósticos clínicos completos, graduaciones microscópicas y materiales certificados para garantizar calidad de vida visual duradera.
              </p>
              <button
                type="button"
                className="about-read-more-btn"
                onClick={() => setShowMoreText(!showMoreText)}
              >
                {showMoreText ? "Leer menos ↑" : "Seguir leyendo ↓"}
              </button>
            </div>

            {/* Puntos clave desplegables (Acordeón interactivo) */}
            <div className="about-features-accordion">
              {/* Feature 01: Diagnóstico Digital Computarizado */}
              <div className={`about-feature-card ${openFeature === 1 ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="about-feature-trigger"
                  onClick={() => toggleFeature(1)}
                  aria-expanded={openFeature === 1}
                >
                  <div className="feature-trigger-left">
                    <span className="feature-marker">01</span>
                    <strong className="feature-title">Diagnóstico Digital Computarizado</strong>
                  </div>
                  <span className="feature-arrow">{openFeature === 1 ? "−" : "+"}</span>
                </button>
                {openFeature === 1 && (
                  <div className="about-feature-content">
                    <p>
                      Medición computarizada precisa de la agudeza visual, autorefractometría de alta resolución y centrado milimétrico de lunas con equipos alemanes de calibración digital ZEISS.
                    </p>
                  </div>
                )}
              </div>

              {/* Feature 02: Atención Oftalmológica Directa */}
              <div className={`about-feature-card ${openFeature === 2 ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="about-feature-trigger"
                  onClick={() => toggleFeature(2)}
                  aria-expanded={openFeature === 2}
                >
                  <div className="feature-trigger-left">
                    <span className="feature-marker">02</span>
                    <strong className="feature-title">Atención Oftalmológica Directa</strong>
                  </div>
                  <span className="feature-arrow">{openFeature === 2 ? "−" : "+"}</span>
                </button>
                {openFeature === 2 && (
                  <div className="about-feature-content">
                    <p>
                      Control preventivo y tratamiento médico integral para niños, adultos y personas mayores: evaluación de fondo de ojo, presión intraocular, despistaje de cataratas, glaucoma y pterigión en un solo consultorio.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="about-cta-group">
              <a
                className="btn btn--primary"
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola Óptica Loja, deseo conocer más sobre su historia y agendar una consulta.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conocer al equipo médico
              </a>
              <Link href="/centro-oftalmologico-loja" className="btn btn--ghost">
                Ver centro de diagnóstico
              </Link>
            </div>
          </Reveal>

          {/* Columna Derecha: Composición de 4 Fotos Estilo Collage Desordenado & Atractivo */}
          <Reveal direction="right" delay={150} className="about-visual">
            <div className="collage-scattered">
              {/* Foto 1: Principal arriba izquierda con inclinación leve */}
              <div className="collage-card collage-card--1">
                <img
                  src="/images/Home/somos-1.jpg"
                  alt="Equipo y atención en Óptica Loja"
                  className="collage-img"
                  loading="lazy"
                />
              </div>

              {/* Foto 2: Arriba derecha superpuesta */}
              <div className="collage-card collage-card--2">
                <img
                  src="/images/Home/somos-2.jpg"
                  alt="Instalaciones y boutique Óptica Loja"
                  className="collage-img"
                  loading="lazy"
                />
              </div>

              {/* Foto 3: Abajo izquierda en rotación sutil */}
              <div className="collage-card collage-card--3">
                <img
                  src="/images/Home/somos-3.jpg"
                  alt="Examen oftalmológico y tecnología ZEISS"
                  className="collage-img"
                  loading="lazy"
                />
              </div>

              {/* Foto 4: Abajo derecha cerrando la composición */}
              <div className="collage-card collage-card--4">
                <img
                  src="/images/Home/somos-4.jpg"
                  alt="Atención cercana y personalizada"
                  className="collage-img"
                  loading="lazy"
                />
              </div>

              {/* Tarjeta Flotante Verde Esmeralda */}
              <div className="collage-badge collage-badge--scattered" role="region" aria-label="Calificación de clientes">
                <div className="badge-rating-row">
                  <span className="badge-stars">★★★★★</span>
                  <span className="badge-number">{site.rating.value}/5</span>
                </div>
                <span className="badge-label">VALORACIÓN CLIENTES</span>
                <span className="badge-subtext">Más de {site.rating.count} reseñas en Google</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
