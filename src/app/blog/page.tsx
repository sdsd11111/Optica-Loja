import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PostCard } from "@/components/PostCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMeta } from "@/lib/seo";
import { posts } from "@/content/posts";

export const metadata: Metadata = buildMeta({
  title: "Blog de salud visual en Loja",
  description:
    "Consejos de optometristas y oftalmólogos en Loja: pantallas, astigmatismo, ojos rojos, estrabismo, niños y queratocono.",
  path: "/blog",
});

export default function BlogPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <section className="phero">
        <div className="wrap">
          <Breadcrumbs items={[{ name: "Blog" }]} />
          <h1>Blog de salud visual: consejos de optometristas y oftalmólogos en Loja</h1>
          <p className="lead">Explicaciones claras sobre tus ojos, sin tecnicismos y con indicaciones de cuándo consultar.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap posts">
          <PostCard post={lead} featured />
          {rest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
