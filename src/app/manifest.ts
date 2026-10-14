import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Óptica Loja",
    short_name: "Óptica Loja",
    description: "Lentes ZEISS, examen visual y diagnóstico oftalmológico en Loja.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7FBFC",
    theme_color: "#0F3447",
    lang: "es-EC",
    icons: [{ src: "/favicon.ico", sizes: "any" }],
  };
}
