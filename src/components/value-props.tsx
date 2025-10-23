export default function ValueProps() {
  const items = [
    {
      title: "Visual profissional",
      desc: "Design flat, tipografia forte e foco no conteúdo.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 6h16M4 12h10M4 18h6" />
        </svg>
      ),
    },
    {
      title: "Rápido e responsivo",
      desc: "Carrega leve e se adapta do mobile ao desktop.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8" />
        </svg>
      ),
    },
    {
      title: "Fácil de editar",
      desc: "Conteúdo via template.json. Sem complicação.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div key={it.title} className="card p-5">
          <div className="flex items-center gap-2">
            <div className="rounded-lg p-2 bg-[rgb(var(--fg)/0.05)] dark:bg-white/5 text-[rgb(var(--brand))]">
              {it.icon}
            </div>
            <h3 className="font-semibold">{it.title}</h3>
          </div>
          <p className="mt-2 text-sm text-[rgb(var(--muted))]">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}
