import Link from "next/link";
import type { Template } from "@/lib/data";

export default function TemplateCard({ t }: { t: Template }) {
  return (
    <article className="card overflow-hidden">
      <img src={t.cover} alt={t.name} className="h-40 w-full object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-medium">{t.name}</h3>
          <span className="rounded-full border border-[rgb(var(--line)/0.12)] px-2 py-0.5 text-xs text-[rgb(var(--muted))]">
            {t.category}
          </span>
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-[rgb(var(--muted))]">{t.short}</p>
        <div className="mt-3 flex items-center gap-2">
          <Link href={`/templates/${t.slug}`} className="btn btn-primary">Ver detalhes</Link>
          <Link href="/templates" className="btn">Outros</Link>
        </div>
      </div>
    </article>
  );
}
