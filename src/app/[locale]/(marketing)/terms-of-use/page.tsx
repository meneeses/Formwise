// src/app/[locale]/terms/page.tsx
import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";

type Section =
  | { title: string; items: string[] }
  | { title: string; text: string; updatedAtPrefix?: string };

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Terms" });
  return {
    title: `${t("title")} | Formwise Studio`,
    description: t("intro"),
  };
}

export default async function TermsPage({ params }: Params) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Terms" });

  const sections = t.raw("sections") as Section[];

  const formatted = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>

      <p className="mt-2 max-w-3xl text-[rgb(var(--muted))]">{t("intro")}</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed">
        {sections.map((sec, idx) => (
          <section key={idx}>
            <h2 className="text-lg font-semibold">{sec.title}</h2>

            {"items" in sec ? (
              <ul className="mt-2 list-inside list-disc text-[rgb(var(--muted))]">
                {sec.items.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-[rgb(var(--muted))]">{sec.text}</p>
            )}

            {"updatedAtPrefix" in sec && sec.updatedAtPrefix && (
              <p className="mt-2 text-[rgb(var(--muted))]">
                <span className="text-xs">
                  {sec.updatedAtPrefix}: {formatted}.
                </span>
              </p>
            )}
          </section>
        ))}
      </div>
    </section>
  );
}
