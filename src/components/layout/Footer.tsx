// src/components/layout/Footer.tsx (Server Component)
import {getLocale, getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";

export default async function Footer() {
  const locale = await getLocale();
  const tFooter = await getTranslations({locale, namespace: 'Footer'});
  const tHeader = await getTranslations({locale, namespace: "Header"});
  const tCommon = await getTranslations({locale, namespace: "Common"});

  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-[rgb(var(--line)/0.08)] bg-[rgb(var(--bg))]">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        {/* Top: brand + descrição + social */}
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-baseline gap-1">
              <span className="text-xl font-semibold tracking-tight">{tCommon("brand")}</span>
              <span className="text-xl font-semibold tracking-tight text-[rgb(var(--accent))]">
                {tCommon("brandSuffix")}
              </span>
              <span className="text-xl font-semibold tracking-tight text-[rgb(var(--accent))]">.</span>
            </Link>
            <p className="mt-2 max-w-sm text-sm text-[rgb(var(--muted))]">
              {tFooter("tagline")}
            </p>

            {/* Social */}
            <div className="mt-4 flex items-center gap-3">
              <Social href="https://instagram.com/formwisestudio" label={tFooter("social.instagram")}>
                {/* instagram */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <path d="M16.5 7.5h.01" />
                  <circle cx="12" cy="12" r="4.5" />
                </svg>
              </Social>
              <Social href="https://www.linkedin.com/formwisestudio" label={tFooter("social.linkedin")}>
                {/* linkedin */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2a4 4 0 0 1 2-2z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="5" r="2" />
                </svg>
              </Social>
            </div>
          </div>

          {/* Navegação */}
          <nav className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3 md:col-span-2 md:justify-items-end">
            <div>
              <div className="text-[13px] font-medium text-[rgb(var(--muted))]">{tFooter("pages")}</div>
              <ul className="mt-2 space-y-1.5">
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/">{tHeader("home")}</Link></li>
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/how-it-works">{tHeader("how")}</Link></li>
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/templates">{tHeader("templates")}</Link></li>
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/pricing">{tHeader("pricing")}</Link></li>
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/faq">{tHeader("faq")}</Link></li>
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/contact">{tHeader("contact")}</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-[13px] font-medium text-[rgb(var(--muted))]">{tFooter("contact")}</div>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <a className="opacity-80 hover:opacity-100 transition" href="mailto:formwisestudio@gmail.com">
                    formwisestudio@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className="opacity-80 hover:opacity-100 transition"
                    href="https://wa.me/5541996727030"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tFooter("social.whatsapp")}
                  </a>
                </li>
                <li className="text-[rgb(var(--muted))]">{tFooter("hours")}</li>
              </ul>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <div className="text-[13px] font-medium text-[rgb(var(--muted))]">{tFooter("legal")}</div>
              <ul className="mt-2 space-y-1.5">
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/policy">{tFooter("privacy")}</Link></li>
                <li><Link className="opacity-80 hover:opacity-100 transition" href="/terms-of-use">{tFooter("terms")}</Link></li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-[rgb(var(--line)/0.08)] pt-4 text-sm md:flex-row">
          <div className="text-[rgb(var(--muted))]">
            © {year} {tCommon("brand")} {tCommon("brandSuffix")} — {tFooter("copyright")}
          </div>
          <div className="text-[rgb(var(--muted))]">
            {tFooter("madeIn")}
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children
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
