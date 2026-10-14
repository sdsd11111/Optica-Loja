ontinuemos
/**
 * Catálogo central de todas las páginas de servicios para la sección "Sigue leyendo".
 * Cada entrada tiene imagen real, ruta, badge, título, descripción corta y botón.
 */
export const SERVICE_CATALOG = [
  {
    href: "/examen-visual-loja",
    badge: "OPTOMETRÍA DIGITAL",
    title: "Examen visual computarizado",
    desc: "Evaluación refractiva completa con tecnología moderna para todas las edades.",
    image: "/images/Home/servicio-examen.jpg",
    btnText: "Ver servicio",
    emoji: "👁️",
  },
  {
    href: "/lentes-zeiss-loja",
    badge: "ZEISS VISION EXPERT",
    title: "Lentes ZEISS de alta definición",
    desc: "Máxima nitidez y confort visual con la tecnología óptica alemana líder mundial.",
    image: "/images/Home/servicio-lentes-zeiss.jpg",
    btnText: "Ver servicio",
    emoji: "🔭",
  },
  {
    href: "/lentes-de-contacto-loja",
    badge: "ADAPTACIÓN GUIADA",
    title: "Lentes de contacto y pupilentes",
    desc: "Graduados, tóricos para astigmatismo y de color. Adaptación profesional y seguimiento.",
    image: "/images/Home/servicio-examen.jpg",
    btnText: "Ver servicio",
    emoji: "💧",
  },
  {
    href: "/centro-oftalmologico-loja",
    badge: "DIAGNÓSTICO MÉDICO",
    title: "Centro de diagnóstico oftalmológico",
    desc: "Pentacam, OCT y atención de glaucoma, cataratas y retina con oftalmólogos.",
    image: "/images/Home/servicio-oftalmologico.jpg",
    btnText: "Ver servicio",
    emoji: "🏥",
  },
  {
    href: "/terapia-visual-estrabismo-loja",
    badge: "SALUD INFANTIL",
    title: "Terapia visual y estrabismo",
    desc: "Tratamiento para ojos desviados, ojo vago y coordinación visual en niños y adultos.",
    image: "/images/Home/servicio-terapia-visual.jpg",
    btnText: "Ver servicio",
    emoji: "🧠",
  },
  {
    href: "/urgencias-oculares-loja",
    badge: "ATENCIÓN PRIORITARIA",
    title: "Urgencias oculares y ojo rojo",
    desc: "Cuidado inmediato para molestias repentinas, cuerpo extraño, infecciones y traumatismos.",
    image: "/images/Home/servicio-oftalmologico.jpg",
    btnText: "Ver servicio",
    emoji: "🚨",
  },
] as const;

export type ServiceCatalogItem = (typeof SERVICE_CATALOG)[number];
