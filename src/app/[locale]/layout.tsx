// src/app/[locale]/layout.tsx
import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeToggle from '@/components/theme-toggle';
import RouteTransition from '@/components/ui/RouteTransition';
import ViewportVars from '@/components/ui/ViewportVars';
import WhatsAppMini from '@/components/whatsapp-fab';
import LocaleMenu from '@/components/locale-menu';

const locales = ['pt','en','es'] as const;
type Locale = typeof locales[number];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: Locale}>
}): Promise<Metadata> {
  const {locale} = await params;

  let messages: any = {};
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {}

  const meta = messages?.meta ?? {};
  return {
    title: meta.title ?? 'Formwise Studio',
    description: meta.description ?? 'Templates modernos para sites, prontos para personalizar.'
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: Locale}>;
}) {
  const {locale} = await params;
  if (!locales.includes(locale)) notFound();

  let messages: Record<string, any>;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ViewportVars />
      <div className="mx-auto max-w-7xl px-6">
        <Header
          right={
            <div className="flex items-center gap-2">
              <LocaleMenu current={locale} />
              <ThemeToggle />
            </div>
          }
        />
        <RouteTransition>
          <main className="py-10">{children}</main>
        </RouteTransition>
        <Footer />
      </div>
      <WhatsAppMini
        phone="5541996727030"
        defaultMsg="Olá! Quero saber mais sobre os templates."
        iconSrc="/whatsapp.png"
        remember
      />
    </NextIntlClientProvider>
  );
}
