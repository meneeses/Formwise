// src/app/[locale]/faq/page.tsx
import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "FAQPage"});
  return {
    title: `${t("title")} | Formwise Studio`,
    description: t("subtitle")
  };
}

export default async function FAQPage({params}: Params) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "FAQPage"});

  // items é um array [{ q, a }]
  const faqs = t.raw("items") as { q: string; a: string }[];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">
        {t("subtitle")}
      </p>

      <div className="mt-6 divide-y divide-[rgb(var(--line)/0.08)] rounded-2xl border border-[rgb(var(--line)/0.08)]">
        {faqs.map((item) => (
          <details key={item.q} className="group p-4 [&_summary]:list-none">
            <summary className="flex cursor-pointer items-center justify-between gap-4">
              <span className="font-medium">{item.q}</span>
              <span
                className="rounded-md bg-[rgb(var(--fg)/0.04)] dark:bg-white/5 px-2 py-0.5 text-xs text-[rgb(var(--muted))] transition group-open:rotate-180"
                aria-hidden
              >
                ▼
              </span>
            </summary>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
