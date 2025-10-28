"use client";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

export default function AboutIntro() {
  const t = useTranslations("About");
  const cards = t.raw("cards") as {icon: string; title: string; desc: string}[];
  const stats = t.raw("stats") as {value: string; label: string}[];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      {/* Cabeçalho com acento e subtítulo leve */}
      <header className="mb-8">
        <div className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[rgb(var(--accent))]" />
          <span className="text-sm font-medium tracking-wide text-[rgb(var(--muted))]">
            {t("badge")}
          </span>
        </div>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
          {t("title")}
        </h2>
        <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">
          {t("subtitle")}
        </p>
      </header>

      {/* Corpo em duas colunas com divisores sutis */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Coluna 1: texto principal */}
        <div className="md:col-span-2 space-y-4">
          <p className="leading-relaxed text-[rgb(var(--muted))]">
            {t("p1")}
          </p>
          <p className="leading-relaxed text-[rgb(var(--muted))]">
            {t("p2")}
          </p>

          {/* Mini-quote com filete lateral */}
          <blockquote className="relative mt-4 border-l-2 border-[rgb(var(--accent))] pl-4">
            <p className="italic text-[rgb(var(--muted))]">
              {t("quote")}
            </p>
          </blockquote>
        </div>

        {/* Coluna 2: cartões resumidos */}
        <aside className="space-y-3">
          {cards.map((c, i) => (
            <div key={i} className="card p-4">
              <div className="flex items-start gap-3">
                <span className="rounded-lg bg-[rgb(var(--fg)/0.05)] dark:bg-white/5 p-2 text-[rgb(var(--brand))]">
                  <span className="inline-block h-5 w-5 leading-5 text-base">
                    {c.icon}
                  </span>
                </span>
                <div>
                  <div className="font-medium">{c.title}</div>
                  <p className="mt-1 text-sm text-[rgb(var(--muted))]">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </aside>
      </div>

      {/* Faixa de números (sutil) */}
      <div className="mt-10 grid grid-cols-3 gap-3 rounded-xl border border-[rgb(var(--line)/0.08)] p-4 text-center">
        {stats.map((s, i) => (
          <div
            key={i}
            className={i === 1 ? "border-x border-[rgb(var(--line)/0.08)] px-2" : ""}
          >
            <div className="text-xl font-semibold">{s.value}</div>
            <div className="text-xs text-[rgb(var(--muted))]">{s.label}</div>
          </div>
        ))}
      </div>

      {/* CTA final */}
      <div className="mt-8 text-center">
        <Link href="/como-funciona" className="btn btn-primary w-full md:w-auto">
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
