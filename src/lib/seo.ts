import type { Metadata } from "next";
import { site } from "./site";

type Meta = { title: string; description: string; path: string; type?: "website" | "article"; absoluteTitle?: boolean };

export function buildMeta({ title, description, path, type = "website", absoluteTitle }: Meta): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "es_EC",
      type,
      images: [
        {
          url: "https://optica-loja.vercel.app/logo-optica.jpg",
          width: 150,
          height: 150,
          alt: site.name,
          type: "image/jpeg",
        },
      ],
    },
    twitter: { card: "summary", title: fullTitle, description, images: ["https://optica-loja.vercel.app/logo-optica.jpg"] },
  };
}
