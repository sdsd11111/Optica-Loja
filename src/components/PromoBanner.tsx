import { site } from "@/lib/site";

export function PromoBanner() {
  if (!site.promo) return null;
  return (
    <aside className="promo" aria-label="Promoción vigente">
      <div className="wrap promo__in">
        <p className="promo__text">{site.promo.text}</p>
        <p className="promo__note">{site.promo.note}</p>
      </div>
    </aside>
  );
}
