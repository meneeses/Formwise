export default function Steps() {
  const steps = [
    {
      n: "1",
      title: "Escolha um template",
      desc: "Navegue pelo catálogo e selecione o visual ideal para o seu negócio.",
    },
    {
      n: "2",
      title: "Envie o conteúdo",
      desc: "Logo, cores, textos e imagens. Nós encaixamos tudo para você.",
    },
    {
      n: "3",
      title: "Publicamos pra você",
      desc: "Entrega otimizada, domínio e suporte inicial para subir seu site.",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((s) => (
        <div key={s.n} className="card p-6">
          <div className="text-2xl font-semibold text-[rgb(var(--brand))]">{s.n}.</div>
          <div className="mt-2 font-semibold">{s.title}</div>
          <p className="mt-2 text-sm text-[rgb(var(--muted))]">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
