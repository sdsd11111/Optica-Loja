import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PostCard } from "@/components/PostCard";
import { ContactSection } from "@/components/ContactSection";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMeta } from "@/lib/seo";
import { DISCLAIMER, fmtDate, getPost, posts } from "@/content/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMeta({ title: post.title, description: post.description, path: `/blog/${post.slug}`, type: "article" });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <article className="section article">
        <div className="wrap wrap--narrow">
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: post.title }]} />
          <p className="post__meta">
            {post.category} · {post.minutes} min de lectura
          </p>
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
          <p className="byline">
            Por <Link href="/dr-fernando-lomas">Opt. Fernando Lomas</Link> ·{" "}
            <time dateTime={post.date}>{fmtDate(post.date)}</time>
          </p>

          <div className="prose">
            {post.body.map((b, i) =>
              b.t === "h2" ? (
                <h2 key={i}>{b.v}</h2>
              ) : b.t === "ul" ? (
                <ul key={i}>
                  {b.v.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              ) : (
                <p key={i}>{b.v}</p>
              ),
            )}
          </div>

          <p className="note">{DISCLAIMER}</p>
          <p>
            <Link className="btn btn--primary" href={post.service.href}>
              {post.service.label}
            </Link>
          </p>
        </div>
      </article>
      <section className="section section--paper">
        <div className="wrap posts posts--two">
          {others.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
