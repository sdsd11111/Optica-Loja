import type { Metadata } from "next";
import { ServicePageView } from "@/components/ServicePageView";
import { buildMeta } from "@/lib/seo";
import { services } from "@/content/services";

const data = services.urgencias;

export const metadata: Metadata = buildMeta({
  title: data.metaTitle,
  description: data.metaDescription,
  path: data.path,
});

export default function Page() {
  return <ServicePageView data={data} />;
}
