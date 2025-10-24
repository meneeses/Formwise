// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ThemeToggle from "@/components/theme-toggle";
import WhatsAppFAB from "@/components/whatsapp-fab";
import RouteTransition from "../components/ui/RouteTransition"; // animação entre páginas
import ViewportVars from "../components/ui/ViewportVars";       // --header-h para centralizar a hero
import { Montserrat } from "next/font/google";

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
  // tema escuro/claro no 1º paint (evita flash)
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script dangerouslySetInnerHTML={{ __html: initTheme }} />
      </head>
      <body className={`${montserrat.variable} min-h-dvh selection:bg-teal-300/40 transition-colors duration-300`}>
        <ViewportVars />

        <div className="mx-auto max-w-7xl px-6">
          <Header right={<ThemeToggle />} />
          {/* transição suave entre páginas */}
          <RouteTransition>
            <main className="py-10">{children}</main>
          </RouteTransition>
          <Footer />
        </div>

        {/* Botão flutuante do WhatsApp */}
        <WhatsAppFAB phone="5541996727030" message="Olá! Vim do site Formwise Studio 😊" />
      </body>
    </html>
  );
}
