import type { Metadata } from "next";
import { SobreNosotrosView } from "@/components/SobreNosotrosView";
import { buildMeta } from "@/lib/seo";

export const metadata: Metadata = buildMeta({
  title: "Sobre Nosotros — Óptica Loja | Más de 25 años de salud visual y equipo médico",
  description:
    "Conoce a Óptica Loja: más de 25 años de trayectoria en Loja, Ecuador. Nuestro equipo de optometristas y médicos oftalmólogos, centro de diagnóstico y lunas alemanas ZEISS.",
  path: "/sobre-nosotros",
});

export default function Page() {
  return <SobreNosotrosView />;
}
