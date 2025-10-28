// src/app/[locale]/templates/_components/TemplateCard.tsx
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import type {Template} from "@/lib/data";

export default async function TemplateCard({tpl}: {tpl: Template}) {
  const t = await getTranslations("TemplatesPage");

  // Se tpl.category vier como chave (ex.: "popular"), traduz; senão, mostra raw
  let category = tpl.category;
  if (typeof tpl.category === "string" && t) {
    try {
      const translated = t(`categories.${tpl.category}`);
      category = translated ?? tpl.category;
    } catch {
      category = tpl.category;
    }
  }

  return (
    <article className="card overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={tpl.cover} alt={tpl.name} className="h-40 w-full object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-medium">{tpl.name}</h3>
          {category && (
            <span className="rounded-full border border-[rgb(var(--line)/0.12)] px-2 py-0.5 text-xs text-[rgb(var(--muted))]">
              {category}
            </span>
          )}
        </div>

        {tpl.short && (
          <p className="mt-1 line-clamp-2 text-sm text-[rgb(var(--muted))]">
            {tpl.short}
          </p>
        )}

        <div className="mt-3 flex items-center gap-2">
          <Link href={`/templates/${tpl.slug}`} className="btn btn-primary">
            {t("card.details")}
          </Link>
          <Link href="/templates" className="btn">
            {t("card.others")}
          </Link>
        </div>
      </div>
    </article>
  );
}
