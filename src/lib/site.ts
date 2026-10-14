/**
 * Datos del negocio. Todo lo marcado con VERIFICAR debe confirmarse con Fernando
 * antes de publicar (aparece en el sitio y en los datos estructurados de Google).
 */
export const site = {
  name: "Óptica Loja",
  tagline: "Lo mejor para tus ojos",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://opticaloja.com.ec").replace(/\/$/, ""),

  // VERIFICAR: teléfonos tomados de una captura de Instagram parcialmente cortada.
  phone: "072 586217",
  phoneHref: "tel:+59372586217",
  whatsapp: "593998123492",
  whatsappDisplay: "099 812 3492",

  // VERIFICAR: la dirección se leía cortada en la captura.
  address: {
    street: "Calle 10 de Agosto, entre Olmedo y Juan José Peña",
    city: "Loja",
    region: "Loja",
    country: "EC",
  },
  mapsQuery: "Optica Loja, calle 10 de Agosto, Loja, Ecuador",

  // VERIFICAR: completar horarios reales. Con la lista vacía el sitio muestra "escríbenos por WhatsApp".
  hours: [] as { days: string[]; opens: string; closes: string }[],

  social: {
    instagram: "https://www.instagram.com/optica.loja",
    facebook: "https://www.facebook.com/share/1MqM8WR39J/",
    google: "https://share.google/pyI8nkYWmNyJr2XP1",
  },

  // VERIFICAR: cifras de la reunión (190 reseñas, 4.9). Se muestran en pantalla; no se envían a Google como datos estructurados.
  rating: { value: "4.9", count: "190+" },
  years: "más de 25 años",

  googleReviewUrl:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ||
    "https://www.google.com/maps/search/?api=1&query=Optica+Loja+Loja+Ecuador",

  // Pon `null` para ocultar la promoción en todo el sitio.
  promo: {
    text: "Compra tus lentes con lunas ZEISS y recibe un 2.º par de lunas sin costo.",
    note: "Aplican condiciones. Consulta en la óptica.",
  } as { text: string; note: string } | null,

  // VERIFICAR antes de publicar precios.
  prices: { optometry: 15, ophthalmology: 50, lensesFrom: 25 },
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: "/examen-visual-loja", label: "Examen visual" },
  { href: "/lentes-de-contacto-loja", label: "Lentes de contacto" },
  { href: "/centro-oftalmologico-loja", label: "Diagnóstico" },
  { href: "/lentes-zeiss-loja", label: "Lentes ZEISS" },
  { href: "/terapia-visual-estrabismo-loja", label: "Terapia visual" },
  { href: "/urgencias-oculares-loja", label: "Urgencias" },
  { href: "/dr-fernando-lomas", label: "Opt. Lomas" },
  // Blog oculto por ahora
];
