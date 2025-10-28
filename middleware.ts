// middleware.ts
import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from '@/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true
});

export const config = {
  // Aplica nas rotas com e sem prefixo de locale
  matcher: ['/', '/(pt|en|es)/:path*']
};
