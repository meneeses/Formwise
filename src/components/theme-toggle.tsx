"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setMounted(true);
    const stored = (localStorage.getItem("theme") as Theme | null);
    const system: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const hasClass = document.documentElement.classList.contains("dark");
    const current: Theme = stored ?? (hasClass ? "dark" : system);
    document.documentElement.classList.toggle("dark", current === "dark");
    setTheme(current);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema"
      aria-pressed={theme === "dark"}
      className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium
                 cursor-pointer select-none transition
                 ring-1 ring-[rgb(var(--fg)/0.12)] hover:ring-[rgb(var(--fg)/0.2)]
                 bg-[rgb(var(--fg)/0.05)] dark:bg-white/5
                 active:scale-[.98] focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]"
      title={theme === "dark" ? "Escuro" : "Claro"}
    >
      {/* Ícone com transição suave */}
      <span className="relative inline-flex h-5 w-5 items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme} // troca entre ☀️ / 🌙
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{ duration: 0.18 }}
            className="absolute"
            aria-hidden="true"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}
