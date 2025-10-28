// src/app/layout.tsx
import '../styles/globals.css';
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  display: 'swap',
  variable: '--font-sans'
});

const initTheme = `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const system = mql.matches ? 'dark' : 'light';
    const theme = stored || system;
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch {}
})()`;

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${montserrat.variable} min-h-dvh selection:bg-teal-300/40 transition-colors duration-300`}>
        <script dangerouslySetInnerHTML={{__html: initTheme}} />
        {children}
      </body>
    </html>
  );
}
