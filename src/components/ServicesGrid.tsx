import Link from "next/link";
import { Reveal } from "./Reveal";

interface ServiceCardData {
  href: string;
  badge: string;
  title: string;
  desc: string;
  image: string;
  btnText: string;
}

// 6 servicios ordenados exactamente: 3 arriba y 3 abajo
const serviceItems: ServiceCardData[] = [
  {
    href: "/examen-visual-loja",
    badge: "OPTOMETRÍA DIGITAL",
    title: "Examen visual computarizado",
    desc: "Evaluación refractiva completa de agudeza visual con tecnología moderna.",
    image: "/images/Home/servicio-examen.jpg",
    btnText: "Examen visual →",
  },
  {
    href: "/lentes-zeiss-loja",
    badge: "ZEISS VISION EXPERT",
    title: "Lentes y lunas alemanas ZEISS",
    desc: "Máxima nitidez óptica y confort visual con tecnología alemana de precisión.",
    image: "/images/Home/servicio-lentes-zeiss.jpg",
    btnText: "Lentes ZEISS →",
  },
  {
    href: "/lentes-de-contacto-loja",
    badge: "ADAPTACIÓN GUIADA",
    title: "Lentes de contacto & pupilentes",
    desc: "Lentes graduados, tóricos y cosméticos con prueba y adaptación personalizada.",
    image: "/servicio-lentes-contacto.jpg",
    btnText: "Lentes de contacto →",
  },
  {
    href: "/centro-oftalmologico-loja",
    badge: "DIAGNÓSTICO MÉDICO",
    title: "Diagnóstico oftalmológico",
    desc: "Detección y tratamiento de glaucoma, cataratas, pterigión y afecciones oculares.",
    image: "/images/Home/servicio-oftalmologico.jpg",
    btnText: "Diagnóstico →",
  },
  {
    href: "/terapia-visual-estrabismo-loja",
    badge: "SALUD INFANTIL",
    title: "Terapia visual y estrabismo",
    desc: "Control temprano de miopía, ojo vago y alineación visual para niños y jóvenes.",
    image: "/images/Home/servicio-terapia-visual.jpg",
    btnText: "Terapia visual →",
  },
  {
    href: "/urgencias-oculares-loja",
    badge: "ATENCIÓN PRIORITARIA",
    title: "Urgencias oculares y ojo rojo",
    desc: "Cuidado prioritario para molestias repentinas, cuerpo extraño y conjuntivitis.",
    image: "/servicio-urgencias.jpg",
    btnText: "Urgencias →",
  },
];

export function ServicesGrid() {
  return (
    <section className="section section--paper services-grid-section" id="servicios" aria-labelledby="services-title">
      <div className="wrap">
        <Reveal direction="up" className="center services-header">
          <span className="eyebrow-accent">
            <span className="dot-pulse" /> ESPECIALIDADES &amp; SERVICIOS
          </span>
          <h2 id="services-title" className="services-heading">
            Cuidado visual integral en un solo lugar
          </h2>
          <p className="lead services-lead">
            Desde tu examen computarizado hasta lunas alemanas ZEISS y tratamientos oftalmológicos avanzados. Cada servicio cuenta con su página especializada.
          </p>
        </Reveal>

        {/* Grid de 3 columnas (3 arriba y 3 abajo) con cards más anchas */}
        <div className="services-grid services-grid--three-cols">
          {serviceItems.map((s, idx) => (
            <Reveal key={s.href} direction="up" delay={(idx % 3) * 100}>
              <Link href={s.href} className="service-card service-card--with-img">
                <div className="service-card__img-wrap">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="service-card__img"
                    loading="lazy"
                  />
                  <span className="service-badge service-card__badge-overlay">{s.badge}</span>
                </div>
                <div className="service-card__content">
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                  <div className="service-card__bottom">
                    <span className="service-link-btn">{s.btnText}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
