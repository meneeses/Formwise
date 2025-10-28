// src/components/layout/Header.tsx
"use client";

import {useEffect, useRef, useState} from "react";
import {Link, usePathname} from "@/i18n/navigation";
import {useTranslations, useLocale} from "next-intl";
import LocaleMenu from "@/components/locale-menu";
import ThemeToggle from "@/components/theme-toggle";
import type {Locale} from "@/i18n/config";

// Em vez de labels fixas, guardamos só as chaves de tradução
// e os hrefs canônicos (o Link do seu i18n/navigation resolve para o locale atual)
const NAV: {href: string; key: `home`|`how`|`templates`|`pricing`|`faq`|`contact`}[] = [
  { href: "/",              key: "home"      },
  { href: "/how-it-works",  key: "how"       },
  { href: "/templates",     key: "templates" },
  { href: "/pricing",       key: "pricing"   },
  { href: "/faq",           key: "faq"       },
  { href: "/contact",       key: "contact"   },
];

export default function Header({
  currentLocale,
  right
}: {
  currentLocale: Locale;
  right?: React.ReactNode;
}) {
  const t = useTranslations("Header");
  const tCommon = useTranslations("Common");
  const locale = useLocale();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const linkBase =
    "opacity-80 hover:opacity-100 transition relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] " +
    "after:w-0 after:bg-[rgb(var(--accent))] hover:after:w-full after:transition-[width] after:duration-200";

  // helper para estado "ativo" mais tolerante (localização, subrotas, query)
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[rgb(var(--bg))]/80 backdrop-blur supports-[backdrop-filter]:bg-[rgb(var(--bg))]/70 border-b border-[rgb(var(--fg)/0.06)] transition-colors duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 py-2.5 md:py-4">
        {/* Wordmark — aria-label traduzida */}
        <Link
          href="/"
          aria-label={`Formwise Studio — ${t("home")}`}
          className="inline-flex items-baseline gap-1"
        >
          <span className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight">Formwise</span>
          <span className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight text-[rgb(var(--accent))]">Studio</span>
          <span className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight text-[rgb(var(--accent))]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${linkBase} ${active ? "opacity-100 after:w-full" : ""}`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LocaleMenu current={currentLocale} />
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Hamburger (mobile) — aria em i18n */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-[rgb(var(--fg)/0.12)] hover:ring-[rgb(var(--fg)/0.2)] active:scale-[.98] transition lg:hidden"
            aria-label={open ? t("mobileMenu.close") : t("mobileMenu.open")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg className={`h-5 w-5 ${open ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`h-5 w-5 ${open ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        ref={panelRef}
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <div className="mb-3">
            <ThemeToggle />
          </div>

          <ul className="grid gap-2">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      block rounded-xl px-3 pt-2 pb-3 text-base
                      ${active ? "bg-[rgb(var(--fg)/0.05)] dark:bg-white/5 font-medium"
                               : "hover:bg-[rgb(var(--fg)/0.04)] dark:hover:bg-white/5"}
                    `}
                  >
                    <span className={`relative inline-block ${active ? "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-[rgb(var(--accent))]" : ""}`}>
                      {t(item.key)}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-[rgb(var(--brand))] text-white hover:brightness-95 transition"
            >
              {tCommon("contactUs")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
