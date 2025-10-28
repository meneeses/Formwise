// src/app/[locale]/como-funciona/_components/AddOns.tsx
import {getTranslations} from "next-intl/server";

type Item = { icon: string; title: string; desc: string };

export default async function AddOns() {
  // O locale é inferido pelo middleware; só passamos o namespace.
  const t = await getTranslations("AddOns");
  const items = t.raw("items") as Item[];

  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {t("title")}
        </h2>
        <span className="text-xs text-[rgb(var(--muted))]">{t("note")}</span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={`${it.title}-${i}`}
            className="card p-5 transition-transform hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-3">
              {/* Badge com emoji */}
              <span
                aria-hidden
                className="inline-flex h-9 w-9 select-none items-center justify-center rounded-xl
                           bg-[rgb(var(--fg)/0.05)] dark:bg-white/5 text-base"
                title={it.title}
              >
                {it.icon}
              </span>

              <div>
                <div className="font-medium">{it.title}</div>
                <p className="mt-1 text-sm text-[rgb(var(--muted))]">{it.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
