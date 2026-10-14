import type { Metadata } from "next";
import { DoctorPageView } from "@/components/DoctorPageView";
import { buildMeta } from "@/lib/seo";

export const metadata: Metadata = buildMeta({
  title: "Opt. Fernando Lomas — Optometrista en Loja | Especialista en Salud Visual",
  description:
    "Opt. Fernando Lomas: Optometrista clínico en Loja con Máster en Ciencias de la Visión. Examen visual computarizado, lentes ZEISS, adaptación de lentes de contacto y respaldo médico oftalmológico.",
  path: "/dr-fernando-lomas",
});

export default function Page() {
  return <DoctorPageView />;
}
