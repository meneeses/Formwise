// src/app/[locale]/como-funciona/_components/Steps.tsx
import {getTranslations, getLocale} from "next-intl/server";
import {Link} from "@/i18n/navigation";

type Step = {
  n: string;
  title: string;
  desc: string;
  fazemos: string[];
  voce: string[];
  eta: string;
  tip?: string;
};

export default async function Steps() {
  // GARANTE o locale correto
  const locale = await getLocale();
  const t = await getTranslations({locale, namespace: "Steps"});

  // items do JSON (PT/EN/ES)
  const STEPS = (t.raw("items") as Step[]) ?? [];

  // helper de chave opcional com fallback
  const opt = (key: string, fallback: string) => {
    try {
      return t(key);
    } catch {
      return fallback;
    }
  };

  // Labels das colunas (se ausentes no JSON, usa fallback)
  const weDoLabel = opt("itemsLabels.weDo", "O que nós fazemos");
  const youDoLabel = opt("itemsLabels.youDo", "O que você prepara");

  // Summary com <strong> no JSON
  const summary = t.rich("summary", {
    strong: (chunks) => <strong className="text-[rgb(var(--fg))]">{chunks}</strong>
  });

  return (
    <section aria-labelledby="como-funciona">
      <div className="relative">
        {/* trilha horizontal (desktop) */}
        <div
          className="pointer-events-none absolute left-6 top-12 hidden h-[2px] w-[calc(100%-3rem)] md:block"
          style={{
            background:
              "linear-gradient(90deg, rgb(var(--line)/0.08), rgb(var(--accent)/0.18), rgb(var(--line)/0.08))"
          }}
        />

        <ol className="grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative">
              {/* conector vertical (mobile) */}
              {i !== STEPS.length - 1 && (
                <span className="absolute left-[18px] top-[44px] h-[calc(100%-44px)] w-[2px] bg-[rgb(var(--line)/0.08)] md:hidden" />
              )}

              <article className="card p-5 hover:translate-y-[-1px]">
                {/* Cabeçalho do passo */}
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgb(var(--brand))]/12 text-[rgb(var(--brand))] font-semibold">
                      {s.n}
                    </span>
                    {/* nó da trilha (desktop) */}
                    <span className="absolute -left-[22px] top-1.5 hidden h-5 w-5 rounded-full border border-[rgb(var(--line)/0.12)] bg-[rgb(var(--bg))] md:block" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold">{s.title}</h3>
                      {/* ETA */}
                      <span className="whitespace-nowrap rounded-full border border-[rgb(var(--line)/0.12)] bg-[rgb(var(--fg)/0.04)] dark:bg-white/5 px-2 py-0.5 text-xs text-[rgb(var(--muted))]">
                        {s.eta}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[rgb(var(--muted))]">{s.desc}</p>
                  </div>
                </div>

                {/* listas do passo */}
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <ul aria-label={weDoLabel} className="space-y-1.5">
                    <li className="text-xs font-medium tracking-wide text-[rgb(var(--muted))]">
                      {weDoLabel}
                    </li>
                    {s.fazemos.map((it, idx) => (
                      <ChecklistItem key={`${s.n}-we-${idx}`} color="brand">
                        {it}
                      </ChecklistItem>
                    ))}
                  </ul>

                  <ul aria-label={youDoLabel} className="space-y-1.5">
                    <li className="text-xs font-medium tracking-wide text-[rgb(var(--muted))]">
                      {youDoLabel}
                    </li>
                    {s.voce.map((it, idx) => (
                      <ChecklistItem key={`${s.n}-you-${idx}`} color="accent">
                        {it}
                      </ChecklistItem>
                    ))}
                  </ul>
                </div>

                {/* tip opcional */}
                {s.tip && (
                  <div className="mt-4 rounded-lg border border-[rgb(var(--line)/0.08)] px-3 py-2 text-xs text-[rgb(var(--muted))]">
                    {s.tip}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>

      {/* faixa de resumo + CTA */}
      <div className="mt-8 grid items-center gap-3 rounded-xl border border-[rgb(var(--line)/0.08)] px-4 py-4 md:grid-cols-3">
        <div className="text-sm text-[rgb(var(--muted))] md:col-span-2">{summary}</div>
        <div className="md:text-right">
          <Link href="/templates" className="btn btn-primary">
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Item de checklist com ícone minimalista */
function ChecklistItem({
  children,
  color = "brand"
}: {
  children: React.ReactNode;
  color?: "brand" | "accent";
}) {
  const dot = color === "brand" ? "bg-[rgb(var(--brand))]" : "bg-[rgb(var(--accent))]";
  return (
    <li className="flex items-start gap-2 text-sm">
      <span className={`mt-1 inline-flex h-1.5 w-1.5 rounded-full ${dot}`} />
      <span className="text-[rgb(var(--fg))]/90">{children}</span>
    </li>
  );
}
