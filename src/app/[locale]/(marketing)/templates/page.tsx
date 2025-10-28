import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

type Params = {params: Promise<{locale: string}>};

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'TemplatesPage'});
  return {title: `${t('title')} | Formwise Studio`};
}

export default async function TemplatesPage({params}: Params) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'TemplatesPage'});

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{t('title')}</h1>
      <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">{t('subtitle')}</p>

      <div className="mt-8 rounded-2xl border border-[rgb(var(--line)/0.08)] bg-[rgb(var(--fg)/0.02)] dark:bg-white/5 p-8 text-sm text-[rgb(var(--muted))]">
        {t('empty')}
      </div>
    </section>
  );
}
