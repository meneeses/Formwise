"use client";

import {useTranslations, useLocale} from "next-intl";
import {Link} from "@/i18n/navigation";
import {usePathname} from "next/navigation";
import {useEffect, useRef, useState} from "react";

const NAV = [
  {href: "/", labelKey: "home"},
  {href: "/how-it-works", labelKey: "how"},
  {href: "/templates", labelKey: "templates"},
  {href: "/pricing", labelKey: "pricing"},
  {href: "/faq", labelKey: "faq"},
  {href: "/contact", labelKey: "contact"}
];

export default function Header({right}: {right?: React.ReactNode}) {
  const tH = useTranslations("Header");
  const tC = useTranslations("Common");
  const locale = useLocale();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Close on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Active matcher: compare against locale-prefixed href
  const isActive = (href: string) => {
    const prefixed = `/${locale}${href === "/" ? "" : href}`;
    if (href === "/") return pathname === `/${locale}` || pathname === `/${locale}/`;
    return pathname === prefixed || pathname.startsWith(`${prefixed}/`);
  };

  const linkBase =
    "opacity-80 hover:opacity-100 transition relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 " +
    "after:bg-[rgb(var(--accent))] hover:after:w-full after:transition-[width] after:duration-200";

  return (
    <header
      className="
        sticky top-0 z-50
        bg-[rgb(var(--bg))]/80 backdrop-blur supports-[backdrop-filter]:bg-[rgb(var(--bg))]/70
        border-b border-[rgb(var(--fg)/0.06)]
        transition-colors duration-300
      "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 py-4">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label={`${tC("brand")} ${tC("brandSuffix")} — ${tH("home")}`}
          className="inline-flex items-baseline gap-1 transition-colors duration-300"
        >
          <span className="text-2xl md:text-3xl font-semibold tracking-tight">{tC("brand")}</span>
          <span className="text-2xl md:text-3xl font-semibold tracking-tight text-[rgb(var(--accent))]">
            {tC("brandSuffix")}
          </span>
          <span className="text-2xl md:text-3xl font-semibold tracking-tight text-[rgb(var(--accent))]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm transition-colors duration-300">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${linkBase} ${active ? "opacity-100 after:w-full" : ""}`}
              >
                {tH(item.labelKey as any)}
              </Link>
            );
          })}
        </nav>

        {/* Right + hamburger */}
        <div className="flex items-center gap-3">
          {right}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 ring-1 ring-[rgb(var(--fg)/0.12)] hover:ring-[rgb(var(--fg)/0.2)] active:scale-[.98] transition-colors duration-300"
            aria-label={open ? tH("mobileMenu.close") : tH("mobileMenu.open")}
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
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4 transition-colors duration-300">
          <ul className="grid gap-2">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      block rounded-xl px-3 pt-2 pb-3 text-base transition-colors duration-300
                      ${active ? "bg-[rgb(var(--fg)/0.05)] dark:bg-white/5 font-medium" : "hover:bg-[rgb(var(--fg)/0.04)] dark:hover:bg-white/5"}
                    `}
                  >
                    <span
                      className={`
                        relative inline-block
                        ${active ? "after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-[rgb(var(--accent))]" : ""}
                      `}
                    >
                      {tH(item.labelKey as any)}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium
                       bg-[rgb(var(--brand))] text-white hover:brightness-95 transition-colors duration-300"
            >
              {tC("contactUs")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
