import { bySlug, templates } from "@/lib/data";
import TemplateGrid from "@/components/template-grid";
import { notFound } from "next/navigation";

export default function TemplatePage({ params }: { params: { slug: string } }) {
  const t = bySlug(params.slug);
  if (!t) return notFound();

  const recs = (t.recommended || [])
    .map((slug) => templates.find((x) => x.slug === slug))
    .filter(Boolean) as typeof templates;

  return (
    <div className="grid gap-10">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          <img
            src={t.gallery?.[0] || t.thumb}
            alt="preview"
            className="w-full rounded-2xl"
          />
          <div className="grid grid-cols-3 gap-3">
            {t.gallery?.slice(1).map((g) => (
              <img
                key={g}
                src={g}
                alt="galeria"
                className="h-28 w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
        <aside className="card p-6">
          <h1 className="text-3xl font-bold">{t.title}</h1>
          <p className="mt-2 text-sm text-[rgb(var(--muted))]">{t.category}</p>
          <div className="mt-4 text-2xl font-bold">R$ {t.price}</div>
          <p className="mt-4 leading-relaxed">{t.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-black/5 px-2 py-1 text-xs dark:bg-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-primary" href="#">
              Comprar template
            </a>
            <a className="btn" href="#">
              Ver demo
            </a>
          </div>
        </aside>
      </div>

      {recs.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-semibold">Recomendados</h2>
          <TemplateGrid items={recs} />
        </section>
      )}
    </div>
  );
}
