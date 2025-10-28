// src/app/[locale]/precos/page.tsx
import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";

type Plan = {
  name: string;
  price: string;
  caption: string;
  features: string[];
  cta: string;
  highlight: boolean;
};

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "PricingPage"});
  return {
    title: `${t("title")} | Formwise Studio`,
    description: t("subtitle")
  };
}

export default async function PricingPage({params}: Params) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "PricingPage"});

  const plans = (t.raw("plans") as any[]).map(
    (p): Plan => ({
      name: p.name,
      price: p.price,
      caption: p.caption,
      features: p.features,
      cta: p.cta,
      highlight: Boolean(p.highlight)
    })
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        {t("title")}
      </h1>
      <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">
        {t("subtitle")}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`card p-6 ${p.highlight ? "ring-1 ring-[rgb(var(--accent))]/20" : ""}`}
          >
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-sm text-[rgb(var(--muted))]">{p.caption}</div>
                <h2 className="text-xl font-semibold">{p.name}</h2>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold">{p.price}</div>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-sm">
              {p.features.map((f: string) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand))]" />
                  <span className="text-[rgb(var(--fg))]/90">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link href="/contact" className={`btn ${p.highlight ? "btn-primary" : ""}`}>
                {p.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-[rgb(var(--muted))]">{t("note")}</p>
    </section>
  );
}
