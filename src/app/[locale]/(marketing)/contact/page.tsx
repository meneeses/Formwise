// src/app/[locale]/(marketing)/contact/page.tsx
import type {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";
import { FormRow } from "./helpers";


type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({params}: Params): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "ContactPage"});
  return {
    title: `${t("title")} | Formwise Studio`,
    description: t("subtitle")
  };
}

export default async function ContactPage({params}: Params) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "ContactPage"});

  // Usamos t.rich para o link da política
  const consentText = t.rich("form.consent.label", {
    link: (chunks) => (
      <Link
        href="/policy"
        className="underline decoration-[rgb(var(--accent))]/50 underline-offset-2 hover:decoration-[rgb(var(--accent))]"
      >
        {chunks}
      </Link>
    )
  });

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
          {t("title")}
        </h1>
        <p className="mt-2 max-w-2xl text-[rgb(var(--muted))] text-center mx-auto">
          {t("subtitle")}
        </p>
      </header>

      <div className="mx-auto mt-6 max-w-2xl">
        <form
          action="https://formsubmit.co/formwisestudio@gmail.com"
          method="POST"
          className="card p-6 md:p-8 space-y-4"
        >
          {/* honeypot anti-spam */}
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Configs do Formsubmit */}
          <input type="hidden" name="_subject" value="Novo contato — Formwise Studio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          {/* Redireciona para a página de obrigado do locale atual */}
          <input type="hidden" name="_next" value={`/${locale}/thanks`} />

          {/* Campos */}
          <FormRow label={t("form.name.label")}>
            <input
              name="name"
              placeholder={t("form.name.placeholder")}
              required
              className="input"
              aria-required="true"
            />
          </FormRow>

          <FormRow label={t("form.email.label")}>
            <input
              name="email"
              type="email"
              placeholder={t("form.email.placeholder")}
              required
              className="input"
              aria-required="true"
            />
          </FormRow>

          <FormRow label={t("form.phone.label")}>
            <input
              name="phone"
              inputMode="tel"
              placeholder={t("form.phone.placeholder")}
              required
              className="input"
              aria-required="true"
            />
          </FormRow>

          <FormRow label={t("form.message.label")}>
            <textarea
              name="message"
              rows={5}
              placeholder={t("form.message.placeholder")}
              required
              className="input"
              aria-required="true"
            />
          </FormRow>

          {/* Consent pill */}
          <label
            htmlFor="consent"
            className="
              group inline-flex items-center gap-2 rounded-xl
              border border-[rgb(var(--line)/0.12)]
              bg-[rgb(var(--fg)/0.02)] dark:bg-white/5
              px-3 py-2 text-xs
              transition hover:border-[rgb(var(--line)/0.24)]
              focus-within:ring-2 focus-within:ring-[rgb(var(--accent))]/30
            "
          >
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              aria-label={t("form.consent.aria")}
              className="
                h-4 w-4 rounded
                border border-[rgb(var(--line)/0.25)]
                accent-[rgb(var(--accent))]
                outline-none
                transition
              "
            />
            <span className="text-[rgb(var(--muted))]">{consentText}</span>
          </label>

          <div className="pt-2">
            <button className="btn btn-primary w-full justify-center" type="submit">
              {t("form.submit")}
            </button>
            <p className="mt-2 text-center text-[11px] text-[rgb(var(--muted))]">
              {t("form.disclaimer")}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

