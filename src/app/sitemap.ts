import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { posts } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed = ["/", "/dr-fernando-lomas", "/blog"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "/" ? 1 : 0.7,
  }));
  const svc = Object.values(services).map((s) => ({
    url: `${site.url}${s.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  const blog = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...fixed, ...svc, ...blog];
}
