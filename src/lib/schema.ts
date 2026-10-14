import { site } from "./site";
import type { Faq } from "@/content/services";
import type { Post } from "@/content/posts";

const DAY: Record<string, string> = {};

export function orgSchema() {
  const sameAs = [site.social.instagram, site.social.facebook, site.social.google];
  return {
    "@context": "https://schema.org",
    "@type": "Optician",
    "@id": `${site.url}/#negocio`,
    name: site.name,
    description:
      "Óptica y centro de diagnóstico visual en Loja, Ecuador. Lentes ZEISS, examen visual, terapia visual para estrabismo y atención oftalmológica.",
    url: site.url,
    image: `${site.url}/og.png`,
    logo: `${site.url}/logo-optica.jpg`,
    telephone: "+593" + site.phone.replace(/\s/g, "").replace(/^0/, ""),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: ["Loja", "Yantzaza", "Zamora Chinchipe"],
    sameAs,
    ...(site.hours.length
      ? {
          openingHoursSpecification: site.hours.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.days.map((d) => DAY[d] ?? d),
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fernando Lomas",
    jobTitle: "Optometrista",
    description: "Optometrista en Loja, Máster en Ciencias de la Visión.",
    url: `${site.url}/dr-fernando-lomas`,
    worksFor: { "@id": `${site.url}/#negocio` },
    knowsAbout: ["Optometría", "Terapia visual", "Lentes ZEISS", "Lentes de contacto"],
    sameAs: [site.social.instagram],
  };
}

export function articleSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "es-EC",
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    author: { "@type": "Person", name: "Fernando Lomas", url: `${site.url}/dr-fernando-lomas` },
    publisher: { "@id": `${site.url}/#negocio` },
    image: `${site.url}/og.png`,
  };
}
