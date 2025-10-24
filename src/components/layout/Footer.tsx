import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        mt-12 border-t border-[rgb(var(--line)/0.08)]
        bg-[rgb(var(--bg))]
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        {/* Top: brand + descrição + social */}
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-1">
              <span className="text-xl font-semibold tracking-tight">Formwise</span>
              <span className="text-xl font-semibold tracking-tight text-[rgb(var(--accent))]">Studio</span>
              <span className="text-xl font-semibold tracking-tight text-[rgb(var(--accent))]">.</span>
            </Link>
            <p className="mt-2 max-w-sm text-sm text-[rgb(var(--muted))]">
              Sites minimalistas, rápidos e bonitos — prontos para destacar seu negócio.
            </p>

            {/* Social */}
            <div className="mt-4 flex items-center gap-3">
              <Social href="https://instagram.com/" label="Instagram">
                {/* instagram */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <path d="M16.5 7.5h.01" />
                  <circle cx="12" cy="12" r="4.5" />
                </svg>
              </Social>
              <Social href="https://www.linkedin.com/" label="LinkedIn">
                {/* linkedin */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2a4 4 0 0 1 2-2z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="5" r="2" />
                </svg>
              </Social>
              <Social href="https://wa.me/5511999999999" label="WhatsApp">
                {/* whatsapp */}
                <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M19.11 17.08a4.86 4.86 0 0 1-1.54-.31c-.48-.19-1.03-.41-1.77-.8a8.46 8.46 0 0 1-3.22-3.23c-.39-.74-.61-1.29-.8-1.77a4.84 4.84 0 0 1-.31-1.54c-.05-.52.15-1.02.52-1.39l.44-.44c.31-.31.76-.41 1.16-.26.42.16.9.38 1.08.91.14.41.48 1.18.55 1.34.1.25.07.54-.11.75l-.36.43c-.12.14-.15.34-.07.51.2.43.66 1.2 1.5 2.04.84.84 1.61 1.3 2.04 1.5.17.08.37.05.51-.07l.43-.36c.21-.18.5-.21.75-.11.16.07.93.41 1.34.55.53.18.75.66.91 1.08.15.4.05.85-.26 1.16l-.44.44c-.37.37-.87.57-1.39.52z"/>
                  <path d="M27.5 14.5c0 7.18-5.82 13-13 13-2.23 0-4.33-.57-6.16-1.57L3 28.75l2.91-5.19A12.93 12.93 0 0 1 1.5 14.5c0-7.18 5.82-13 13-13s13 5.82 13 13zm-13-10.5C8.27 4 4 8.27 4 13.5c0 2.22.7 4.28 1.9 5.97l-.16.3-1.39 2.48 2.77-.74.3-.08A9.49 9.49 0 1 0 14.5 4z"/>
                </svg>
              </Social>
            </div>
          </div>

          {/* Navegação */}
          <nav className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3 md:col-span-2 md:justify-items-end">
            <div>
              <div className="text-[13px] font-medium text-[rgb(var(--muted))]">Páginas</div>
              <ul className="mt-2 space-y-1.5">
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/">Início</Link></li>
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/como-funciona">Como funciona</Link></li>
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/templates">Templates</Link></li>
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/precos">Preços & Licenças</Link></li>
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/faq">FAQ</Link></li>
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/contato">Contato</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-[13px] font-medium text-[rgb(var(--muted))]">Contato</div>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <a className="opacity-80 hover:opacity-100 transition" href="mailto:contato@formwise.studio">
                    contato@formwise.studio
                  </a>
                </li>
                <li>
                  <a className="opacity-80 hover:opacity-100 transition" href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li className="text-[rgb(var(--muted))]">Seg–Sex · 09h–18h</li>
              </ul>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <div className="text-[13px] font-medium text-[rgb(var(--muted))]">Legal</div>
              <ul className="mt-2 space-y-1.5">
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/politica-de-privacidade">Política de Privacidade</Link></li>
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/termos-de-uso">Termos de Uso</Link></li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-[rgb(var(--line)/0.08)] pt-4 text-sm md:flex-row">
          <div className="text-[rgb(var(--muted))]">
            © {new Date().getFullYear()} Formwise Studio — Todos os direitos reservados.
          </div>
          <div className="text-[rgb(var(--muted))]">
            Feito com <span aria-hidden>♥</span> no Brasil
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex h-9 w-9 items-center justify-center rounded-xl
        border border-[rgb(var(--line)/0.12)]
        bg-[rgb(var(--fg)/0.03)] dark:bg-white/5
        opacity-90 hover:opacity-100 hover:translate-y-[-1px]
        transition
      "
      title={label}
    >
      {children}
    </a>
  );
}
