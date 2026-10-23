import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { CitaWidget } from "@/components/CitaWidget";
import { JsonLd } from "@/components/JsonLd";
import { ScrollReveal } from "@/components/ScrollReveal";
import { orgSchema } from "@/lib/schema";
import { site } from "@/lib/site";

// Tipografía Sans Serif de élite: Geist para display/títulos/métricas e Inter para cuerpo
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Óptica Loja | Lentes ZEISS y salud visual en Loja", template: `%s | ${site.name}` },
  description:
    "Óptica y centro de diagnóstico visual en Loja: examen visual, lentes ZEISS, terapia visual para estrabismo y atención oftalmológica.",
  applicationName: site.name,
  authors: [{ name: "Fernando Lomas" }],
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Óptica Loja | Lentes ZEISS · Examen Visual · Diagnóstico Oftalmológico en Loja",
    description: "Centro óptico y oftalmológico en Loja, Ecuador. Examen visual completo, lentes alemanes ZEISS, terapia visual, diagnóstico oftalmológico y taller propio. ¡Lo mejor para tus ojos!",
    url: site.url,
    siteName: site.name,
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: `${site.url}/optica-logo-1200x630.jpg`,
        width: 1200,
        height: 630,
        alt: "Óptica Loja - Lo mejor para tus ojos",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Óptica Loja | Lentes ZEISS · Examen Visual · Diagnóstico Oftalmológico en Loja",
    description: "Centro óptico y oftalmológico en Loja, Ecuador. Examen visual completo, lentes alemanes ZEISS, terapia visual, diagnóstico oftalmológico y taller propio. ¡Lo mejor para tus ojos!",
    images: [`${site.url}/optica-logo-1200x630.jpg`],
  },
};

export const viewport: Viewport = {
  themeColor: "#0F3447",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-EC" className={`${geistSans.variable} ${inter.variable}`}>
      <body>
        <a className="skip" href="#contenido">Saltar al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppFab />
        <CitaWidget />
        <JsonLd data={orgSchema()} />
        <ScrollReveal />
      </body>
    </html>
  );
}
