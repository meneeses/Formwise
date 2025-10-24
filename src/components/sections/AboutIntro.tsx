export default function AboutIntro() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      {/* Cabeçalho com acento e subtítulo leve */}
      <header className="mb-8">
        <div className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[rgb(var(--accent))]" />
          <span className="text-sm font-medium tracking-wide text-[rgb(var(--muted))]">SOBRE NÓS</span>
        </div>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">Quem somos</h2>
        <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">
          Design e código trabalhando juntos para sites minimalistas, rápidos e com foco no essencial.
        </p>
      </header>

      {/* Corpo em duas colunas com divisores sutis */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Coluna 1: texto principal */}
        <div className="md:col-span-2 space-y-4">
          <p className="leading-relaxed text-[rgb(var(--muted))]">
            A Formwise Studio nasceu para tirar a complexidade da criação de sites e focar no que importa:
            clareza, performance e estética minimalista. Unimos design e engenharia para entregar modelos
            prontos, polidos e fáceis de personalizar — sem ruído.
          </p>
          <p className="leading-relaxed text-[rgb(var(--muted))]">
            Nossa proposta é simples: você escolhe um template, envia conteúdo e nós ajustamos a identidade.
            O resultado é um site leve, bonito e funcional, com base sólida em Next.js e boas práticas.
          </p>

          {/* Mini-quote com filete lateral */}
          <blockquote className="relative mt-4 border-l-2 border-[rgb(var(--accent))] pl-4">
            <p className="italic text-[rgb(var(--muted))]">
              “Menos ornamento, mais intenção. Cada bloco existe para comunicar melhor o seu negócio.”
            </p>
          </blockquote>
        </div>

        {/* Coluna 2: cartões resumidos (micro “frufru” funcional) */}
        <aside className="space-y-3">
          <div className="card p-4">
            <div className="flex items-start gap-3">
              <span className="rounded-lg bg-[rgb(var(--fg)/0.05)] dark:bg-white/5 p-2 text-[rgb(var(--brand))]">
                {/* ícone lápis */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/>
                </svg>
              </span>
              <div>
                <div className="font-medium">Personalização ágil</div>
                <p className="mt-1 text-sm text-[rgb(var(--muted))]">Cores, tipografia e conteúdo alinhados à sua marca.</p>
              </div>
            </div>
          </div>

          <div className="card p-4">
            <div className="flex items-start gap-3">
              <span className="rounded-lg bg-[rgb(var(--fg)/0.05)] dark:bg-white/5 p-2 text-[rgb(var(--brand))]">
                {/* ícone raio */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/>
                </svg>
              </span>
              <div>
                <div className="font-medium">Performance e SEO</div>
                <p className="mt-1 text-sm text-[rgb(var(--muted))]">Base em Next.js, imagens otimizadas e boas práticas.</p>
              </div>
            </div>
          </div>

          <div className="card p-4">
            <div className="flex items-start gap-3">
              <span className="rounded-lg bg-[rgb(var(--fg)/0.05)] dark:bg-white/5 p-2 text-[rgb(var(--brand))]">
                {/* ícone segurança/check */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
                </svg>
              </span>
              <div>
                <div className="font-medium">Entrega confiável</div>
                <p className="mt-1 text-sm text-[rgb(var(--muted))]">Publicação assistida e suporte inicial.</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Faixa de números (sutil) */}
      <div className="mt-10 grid grid-cols-3 gap-3 rounded-xl border border-[rgb(var(--line)/0.08)] p-4 text-center">
        <div>
          <div className="text-xl font-semibold">+20</div>
          <div className="text-xs text-[rgb(var(--muted))]">templates base</div>
        </div>
        <div className="border-x border-[rgb(var(--line)/0.08)] px-2">
          <div className="text-xl font-semibold">~5 dias</div>
          <div className="text-xs text-[rgb(var(--muted))]">para publicar</div>
        </div>
        <div>
          <div className="text-xl font-semibold">100%</div>
          <div className="text-xs text-[rgb(var(--muted))]">foco no essencial</div>
        </div>
      </div>

      {/* CTA final */}
      <div className="mt-8 text-center">
        <a href="/como-funciona" className="btn btn-primary w-full md:w-auto">
          Veja como funciona para adquirir seu template
        </a>
      </div>
    </section>
  );
}
