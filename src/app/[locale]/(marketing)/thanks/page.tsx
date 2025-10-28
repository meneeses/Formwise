// src/app/[locale]/thanks/page.tsx
import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";

type Params = {params: {locale: string}};

export async function generateMetadata({params: {locale}}: Params): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: "ContactPage"});
  return {
    title: `${t("form.thanksTitle")} | Formwise Studio`,
    description: t("subtitle")
  };
}

export default async function ThanksPage({params: {locale}}: Params) {
  const t = await getTranslations({locale, namespace: "ContactPage"});

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        {t("form.thanksTitle")}
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-[rgb(var(--muted))]">
        {t("form.thanksBody")}
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="btn">
          {t("form.thanksBackHome")}
        </Link>
        <Link href="/templates" className="btn btn-primary">
          {t("form.thanksSeeTemplates")}
        </Link>
      </div>
    </section>
  );
}
