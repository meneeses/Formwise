type Step = {
  n: string;
  title: string;
  desc: string;
  fazemos: string[];
  voce: string[];
  eta: string;
};

const STEPS: Step[] = [
  {
    n: "1",
    title: "Escolha um template",
    desc: "Navegue pelo catálogo e selecione o visual ideal para o seu negócio.",
    fazemos: [
      "Ajudamos a escolher pelo seu segmento",
      "Ajustamos fontes e espaçamentos para ficar harmônico",
      "Aplicamos cores iniciais que combinem com sua marca",
    ],
    voce: [
      "Envie sua logo em boa qualidade",
      "Compartilhe referências (se tiver)",
      "Defina as páginas que quer ter",
    ],
    eta: "~1 dia",
  },
  {
    n: "2",
    title: "Envie o conteúdo",
    desc: "Textos e imagens — nós montamos tudo pra você.",
    fazemos: [
      "Organizamos as seções do site",
      "Tratamos e reduzimos as imagens para carregar rápido",
      "Preenchemos títulos e descrições para o Google",
    ],
    voce: [
      "Envie textos revisados e diretos",
      "Separe fotos nítidas do seu negócio",
      "Informe canais de contato (WhatsApp, e-mail, redes)",
    ],
    eta: "~2–3 dias",
  },
  {
    n: "3",
    title: "Publicamos pra você",
    desc: "Colocamos o site no ar e acompanhamos o início.",
    fazemos: [
      "Publicamos o site",
      "Conectamos ao seu domínio",
      "Instalamos ferramentas básicas de visitas (opcional)",
    ],
    voce: [
      "Confirme os dados para apontar o endereço do site",
      "Faça um teste final de navegação",
    ],
    eta: "~1 dia",
  },
];


export default function Steps() {
  return (
    <section aria-labelledby="como-funciona">
      <div className="relative">
        {/* trilha horizontal com gradiente (desktop) */}
        <div className="pointer-events-none absolute left-6 top-12 hidden h-[2px] w-[calc(100%-3rem)] md:block"
             style={{
               background: "linear-gradient(90deg, rgb(var(--line)/0.08), rgb(var(--accent)/0.18), rgb(var(--line)/0.08))",
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
                    <span className="flex h-9 w-9 items-center justify-center rounded-full
                                      bg-[rgb(var(--brand))]/12 text-[rgb(var(--brand))] font-semibold">
                      {s.n}
                    </span>
                    {/* nó da trilha (desktop) */}
                    <span className="absolute -left-[22px] top-1.5 hidden h-5 w-5 rounded-full
                                     border border-[rgb(var(--line)/0.12)] bg-[rgb(var(--bg))] md:block" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold">{s.title}</h3>
                      {/* chip de ETA */}
                      <span className="whitespace-nowrap rounded-full border border-[rgb(var(--line)/0.12)]
                                       bg-[rgb(var(--fg)/0.04)] dark:bg-white/5 px-2 py-0.5 text-xs text-[rgb(var(--muted))]">
                        {s.eta}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[rgb(var(--muted))]">{s.desc}</p>
                  </div>
                </div>

                {/* listas do passo */}
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <ul aria-label="O que nós fazemos" className="space-y-1.5">
                    <li className="text-xs font-medium tracking-wide text-[rgb(var(--muted))]">O que nós fazemos</li>
                    {s.fazemos.map((it) => (
                      <ChecklistItem key={it} color="brand">{it}</ChecklistItem>
                    ))}
                  </ul>

                  <ul aria-label="O que você prepara" className="space-y-1.5">
                    <li className="text-xs font-medium tracking-wide text-[rgb(var(--muted))]">O que você prepara</li>
                    {s.voce.map((it) => (
                      <ChecklistItem key={it} color="accent">{it}</ChecklistItem>
                    ))}
                  </ul>
                </div>

                {/* rodapé do passo (opcional) */}
                {i === 1 && (
                  <div className="mt-4 rounded-lg border border-[rgb(var(--line)/0.08)] px-3 py-2 text-xs text-[rgb(var(--muted))]">
                    Dica: se ainda não tiver imagens, podemos sugerir bancos gratuitos e orientar tamanhos ideais.
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>

      {/* faixa de resumo + CTA */}
      <div className="mt-8 grid items-center gap-3 rounded-xl border border-[rgb(var(--line)/0.08)] px-4 py-4 md:grid-cols-3">
        <div className="text-sm text-[rgb(var(--muted))] md:col-span-2">
          Prazo médio de publicação: <strong className="text-[rgb(var(--fg))]">~4–5 dias</strong> após o envio do conteúdo completo.
          Ajustes finos e suporte inicial incluídos.
        </div>
        <div className="md:text-right">
          <a href="/templates" className="btn btn-primary">Escolher um template</a>
        </div>
      </div>
    </section>
  );
}

/* Item de checklist com ícone minimalista */
function ChecklistItem({
  children,
  color = "brand",
}: {
  children: React.ReactNode;
  color?: "brand" | "accent";
}) {
  const dot =
    color === "brand"
      ? "bg-[rgb(var(--brand))]"
      : "bg-[rgb(var(--accent))]";
  return (
    <li className="flex items-start gap-2 text-sm">
      <span className={`mt-1 inline-flex h-1.5 w-1.5 rounded-full ${dot}`} />
      <span className="text-[rgb(var(--fg))]/90">{children}</span>
    </li>
  );
}
