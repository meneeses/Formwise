import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates | Formwise Studio",
  description: "Escolha um template para o seu site.",
};

export default function TemplatesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Templates</h1>
      <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">
        Em breve você encontrará aqui o catálogo completo de modelos.
      </p>

      {/* placeholder vazio por enquanto */}
      <div className="mt-8 rounded-2xl border border-[rgb(var(--line)/0.08)] bg-[rgb(var(--fg)/0.02)] dark:bg-white/5 p-8 text-sm text-[rgb(var(--muted))]">
        Nada por aqui ainda — estamos preparando os templates.
      </div>
    </section>
  );
}
