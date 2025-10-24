import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preços & Licenças | Formwise Studio",
  description: "Planos simples para publicar seu site com rapidez e qualidade.",
};

const plans = [
  {
    name: "Essencial",
    price: "R$ 990",
    caption: "Para começar bem",
    features: [
      "1 página principal",
      "Seções padrão (sobre, serviços, contato)",
      "Visual responsivo",
      "Publicação inclusa",
      "Suporte inicial (7 dias)",
    ],
    cta: { href: "/contato", label: "Quero este" },
    highlight: false,
  },
  {
    name: "Profissional",
    price: "R$ 1.490",
    caption: "Mais espaço para conteúdo",
    features: [
      "Até 4 páginas",
      "Ajustes finos de identidade",
      "Pronto para o Google (básico)",
      "Publicação + domínio",
      "Suporte inicial (15 dias)",
    ],
    cta: { href: "/contato", label: "Falar com a Formwise" },
    highlight: true,
  },
  {
    name: "Sob medida",
    price: "Sob consulta",
    caption: "Para necessidades específicas",
    features: [
      "Mapeamento de conteúdo",
      "Páginas extras e integrações",
      "Blog/Artigos opcional",
      "Prioridade na publicação",
      "Suporte dedicado",
    ],
    cta: { href: "/contato", label: "Solicitar proposta" },
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Preços & Licenças</h1>
      <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">
        Planos diretos: escolha o que combina com seu momento. Publicação inclusa e suporte inicial.
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
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[rgb(var(--brand))]" />
                  <span className="text-[rgb(var(--fg))]/90">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Link href={p.cta.href} className={`btn ${p.highlight ? "btn-primary" : ""}`}>
                {p.cta.label}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-[rgb(var(--muted))]">
        * Valores base para sites estáticos. Integrações, páginas extras e conteúdo sob medida podem alterar o investimento.
      </p>
    </section>
  );
}
