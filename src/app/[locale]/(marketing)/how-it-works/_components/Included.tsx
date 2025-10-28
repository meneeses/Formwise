// src/app/[locale]/como-funciona/_components/Included.tsx
import {getTranslations} from "next-intl/server";

type IncludedItem = { icon: string; title: string; desc: string };

export default async function Included() {
  const t = await getTranslations("Included");
  const items = (t.raw("items") as IncludedItem[]) ?? [];

  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        {t("title")}
      </h2>

      {items.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-[rgb(var(--line)/0.08)] bg-[rgb(var(--fg)/0.02)] dark:bg-white/5 p-8 text-sm text-[rgb(var(--muted))]">
          {/* fallback amigável caso o JSON ainda não tenha items */}
          {/** Opcional: trocar por um t("empty") se quiser traduzir essa mensagem */}
          Em breve você verá aqui tudo que está incluído na entrega.
        </div>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <li
              key={`${it.title}-${idx}`}
              className="card p-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden={true}
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
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
