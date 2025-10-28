// src/i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from './config';

export default getRequestConfig(async ({locale}) => {
  // Garante string válida
  const resolvedLocale =
    locale && (locales as readonly string[]).includes(locale) ? locale : defaultLocale;

  const messages = (await import(`@/messages/${resolvedLocale}.json`)).default;

  return {
    locale: resolvedLocale,
    messages
  } satisfies import('next-intl/server').RequestConfig;
});
