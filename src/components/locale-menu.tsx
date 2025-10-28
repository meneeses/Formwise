"use client";

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {usePathname, useRouter} from "@/i18n/navigation";
import {locales, type Locale} from "@/i18n/config";

// Se preferir emojis, basta trocar src/alt aqui.
const META: Record<Locale, {label: string; native: string; src: string; alt: string}> = {
  pt: {label: "PT", native: "Português (BR)", src: "/flags/br.svg", alt: "Bandeira do Brasil"},
  en: {label: "EN", native: "English (US)",   src: "/flags/en.svg", alt: "US flag"},
  es: {label: "ES", native: "Español (ES)",   src: "/flags/es.svg", alt: "Bandera de España"},
};

export default function LocaleMenu({current}: {current: Locale}) {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // fecha ao clicar fora
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!open) return;
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || btnRef.current?.contains(t)) return;
      setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // fecha ao trocar rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const activeMeta = META[current];

  return (
    <div className="relative">
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        className="
          inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm
          border border-[rgb(var(--line)/0.12)]
          bg-[rgb(var(--fg)/0.02)] dark:bg-white/5
          hover:opacity-100 opacity-90 transition
        "
      >
        <span className="relative inline-block h-5 w-5">
          <Image src={activeMeta.src} alt={activeMeta.alt} fill sizes="20px" className="rounded-sm object-cover" />
        </span>
        <span className="hidden sm:inline">{activeMeta.label}</span>
        <svg
          className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* panel */}
      <div
        ref={panelRef}
        role="menu"
        aria-label="Select language"
        className={`
          absolute right-0 mt-2 w-48 overflow-hidden rounded-xl
          border border-[rgb(var(--line)/0.12)]
          bg-[rgb(var(--bg))] shadow-lg
          transition origin-top-right
          ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
        `}
      >
        <ul className="py-1">
          {locales.map((loc) => {
            const meta = META[loc];
            const active = loc === current;
            return (
              <li key={loc}>
                <button
                  type="button"
                  role="menuitem"
                  aria-pressed={active}
                  onClick={() => !active && router.replace(pathname, {locale: loc})}
                  className={`
                    flex w-full items-center gap-2 px-3 py-2 text-sm text-left
                    hover:bg-[rgb(var(--fg)/0.04)] dark:hover:bg-white/5
                    ${active ? "font-medium" : ""}
                  `}
                >
                  <span className="relative inline-block h-4.5 w-4.5">
                    <Image src={meta.src} alt={meta.alt} width={18} height={18} className="rounded-[3px] object-cover" />
                  </span>
                  <span className="flex-1">{meta.native}</span>
                  {active && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
