import Link from "next/link";

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav aria-label="Ruta" className="crumbs">
      <ol>
        <li><Link href="/">Inicio</Link></li>
        {items.map((it) => (
          <li key={it.name} aria-current={it.href ? undefined : "page"}>
            {it.href ? <Link href={it.href}>{it.name}</Link> : it.name}
          </li>
        ))}
      </ol>
    </nav>
  );
}
