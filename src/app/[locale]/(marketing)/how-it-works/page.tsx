// src/app/[locale]/como-funciona/page.tsx
import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import Steps from "./_components/Steps";
import Included from "./_components/Included";
import AddOns from "./_components/AddOns";
import {Link} from "@/i18n/navigation";

// Next 16: params é uma Promise
type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Steps" });
  return {
    title: `${t("title")} | Formwise Studio`,
    description: t("subtitle"),
  };
}

export default async function HowItWorksPage({ params }: Params) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Steps" });
  const tCta = await getTranslations({ locale, namespace: "CTASection" });

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-8 md:pt-12 pb-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {t("title")}
        </h1>
        <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">
          {t("subtitle")}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 md:pb-12">
        <Steps />
      </section>

      {/* divisor sutil */}
      <div className="border-t border-[rgb(var(--line)/0.08)]" />

      <Included />
      <AddOns />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="card p-6 md:p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {tCta("title")}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-[rgb(var(--muted))]">
            {tCta("desc")}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/templates" className="btn btn-primary">
              {tCta("primary")}
            </Link>
            <Link href="/contact" className="btn">
              {tCta("secondary")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
