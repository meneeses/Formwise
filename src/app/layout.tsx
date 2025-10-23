import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import ThemeToggle from "@/components/theme-toggle";
import { Montserrat } from "next/font/google";
import WhatsAppFAB from "@/components/whatsapp-fab";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  display: "swap",
  variable: "--font-sans",
});


export const metadata: Metadata = {
title: "Formwise Studio",
description: "Templates modernos para sites, prontos para personalizar.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
// Lê preferência do SO via prefers-color-scheme e seta class no html no 1º paint
const initTheme = `(() => {
const stored = localStorage.getItem('theme');
const mql = window.matchMedia('(prefers-color-scheme: dark)');
const system = mql.matches ? 'dark' : 'light';
const theme = stored || system;
if (theme === 'dark') document.documentElement.classList.add('dark');
})()`;


return (
<html lang="pt-BR" suppressHydrationWarning>
<head>
<link rel="icon" href="/favicon.ico" sizes="32x32" />
<script dangerouslySetInnerHTML={{ __html: initTheme }} />
</head>
<body className={`${montserrat.variable} min-h-dvh selection:bg-teal-300/40 transition-colors duration-300`}>
<div className="mx-auto max-w-7xl px-6">
<Header right={<ThemeToggle />} />
<main className="py-10">{children}</main>
<footer className="py-12 text-center text-sm text-[rgb(var(--muted))]">
© {new Date().getFullYear()} Formwise Studio — Todos os direitos reservados.
</footer>
</div>

 {/* 👉 FAB do WhatsApp (troque pelo seu número) */}
<WhatsAppFAB phone="5541996727030" message="Olá! Vim do site Formwise Studio 😊" />
</body>
</html>
);
}