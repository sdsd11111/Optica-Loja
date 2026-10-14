import Link from "next/link";
import { fmtDate, type Post } from "@/content/posts";

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <article className={featured ? "post post--lead" : "post"}>
      <p className="post__meta">
        {post.category} · {post.minutes} min de lectura
      </p>
      <h3>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p>{post.description}</p>
      <time dateTime={post.date}>{fmtDate(post.date)}</time>
    </article>
  );
}
