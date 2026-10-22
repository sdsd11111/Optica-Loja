/**
 * Catálogo central de todas las páginas de servicios para la sección "Sigue leyendo".
 * Cada entrada tiene imagen real, ruta, badge, título, descripción corta y botón.
 */
export const SERVICE_CATALOG = [
  {
    href: "/examen-visual-loja",
    badge: "OPTOMETRÍA DIGITAL",
    title: "Examen visual computarizado",
    desc: "Evaluación refractiva completa de agudeza visual con tecnología moderna.",
    image: "/images/Home/servicio-examen.jpg",
    btnText: "Examen visual",
    emoji: "👁️",
  },
  {
    href: "/centro-oftalmologico-loja",
    badge: "DIAGNÓSTICO MÉDICO",
    title: "Diagnóstico oftalmológico",
    desc: "Glaucoma, catarata, queratocono, retina y patologías oculares con oftalmólogos.",
    image: "/images/Home/servicio-oftalmologico.jpg",
    btnText: "Diagnóstico",
    emoji: "🏥",
  },
  {
    href: "/terapia-visual-estrabismo-loja",
    badge: "SALUD INFANTIL Y ADULTOS",
    title: "Terapia visual y estrabismo",
    desc: "Rehabilitación visual, control de miopía y corrección de ojo vago (ambliopía).",
    image: "/images/Home/servicio-terapia-visual.jpg",
    btnText: "Terapia visual",
    emoji: "🧠",
  },
  {
    href: "/laboratorio-optico-loja",
    badge: "TALLER & MONTAJE",
    title: "Lentes y laboratorio óptico",
    desc: "Biselado computarizado, calibración de monturas, lunas ZEISS y prótesis oculares.",
    image: "/images/Home/servicio-lentes-zeiss.jpg",
    btnText: "Laboratorio óptico",
    emoji: "⚙️",
  },
  {
    href: "/lentes-de-contacto-loja",
    badge: "ADAPTACIÓN GUIADA",
    title: "Lentes de contacto & pupilentes",
    desc: "Lentes graduados, tóricos y cosméticos con prueba y adaptación personalizada.",
    image: "/servicio-lentes-contacto.jpg",
    btnText: "Lentes de contacto",
    emoji: "💧",
  },
  {
    href: "/productos-opticos-loja",
    badge: "CATÁLOGO & ACCESORIOS",
    title: "Productos y armazones ópticos",
    desc: "Armazones de tendencia, gafas de sol UV400, soluciones de limpieza y accesorios.",
    image: "/servicio-urgencias.jpg",
    btnText: "Productos ópticos",
    emoji: "🕶️",
  },
] as const;

export type ServiceCatalogItem = (typeof SERVICE_CATALOG)[number];
