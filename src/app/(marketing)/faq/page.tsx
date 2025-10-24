import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Formwise Studio",
  description: "Perguntas frequentes sobre templates e publicação do site.",
};

const faqs = [
  {
    q: "Quanto tempo leva para publicar meu site?",
    a: "Em média 4–5 dias após recebermos todo o conteúdo (textos, imagens e dados de contato).",
  },
  {
    q: "Posso pedir ajustes de design?",
    a: "Sim. Ajustamos cores, tipografia e espaçamentos dentro do estilo do template escolhido.",
  },
  {
    q: "Vou conseguir editar o conteúdo depois?",
    a: "Sim. Entregamos o site já pronto para atualizações simples (textos e imagens).",
  },
  {
    q: "Vocês configuram o meu domínio?",
    a: "Sim. Acompanhamos a configuração do domínio e os apontamentos necessários.",
  },
  {
    q: "O site é responsivo?",
    a: "Totalmente. Ele se adapta a celular, tablet e desktop.",
  },
];

export default function FAQPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Perguntas frequentes</h1>
      <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">
        Tire suas dúvidas sobre prazos, ajustes e como funciona a publicação.
      </p>

      <div className="mt-6 divide-y divide-[rgb(var(--line)/0.08)] rounded-2xl border border-[rgb(var(--line)/0.08)]">
        {faqs.map((item) => (
          <details key={item.q} className="group p-4 [&_summary]:list-none">
            <summary className="flex cursor-pointer items-center justify-between gap-4">
              <span className="font-medium">{item.q}</span>
              <span
                className="rounded-md bg-[rgb(var(--fg)/0.04)] dark:bg-white/5 px-2 py-0.5 text-xs text-[rgb(var(--muted))] transition
                           group-open:rotate-180"
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
