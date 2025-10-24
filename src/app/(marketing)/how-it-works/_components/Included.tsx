export default function Included() {
  const items = [
    { icon: "🚀", title: "Site publicado", desc: "Colocamos seu site no ar e deixamos acessível no seu domínio." },
    { icon: "📱", title: "Visual responsivo", desc: "Fica bonito e legível no celular, tablet e computador." },
    { icon: "🧩", title: "Conteúdo organizado", desc: "Seções claras com seus textos e fotos já encaixados." },
    { icon: "⚡️", title: "Velocidade", desc: "Carrega rápido para não perder visitantes." },
    { icon: "🔎", title: "Pronto para o Google", desc: "Configurações básicas para aparecer bem nas buscas." },
    { icon: "🤝", title: "Suporte inicial", desc: "Acompanhamos os primeiros dias e ajustamos o que for preciso." },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">O que você recebe</h2>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <li
            key={it.title}
            className="card p-5 transition-transform hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-3">
              {/* Badge com emoji */}
              <span
                aria-hidden
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
    </section>
  );
}
