import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export function FormRow({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs text-[rgb(var(--muted))]">{label}</div>
      <div className="mt-1">{children}</div>
    </div>
  );
}

// componente separado para usar t.rich no consentimento (precisa ser Server Component para getTranslations)
export async function Consent({locale}: {locale: string}) {
  const t = await getTranslations({locale, namespace: "ContactPage"});
  return (
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
      aria-label={t("form.consent.aria")}
    >
      <input
        id="consent"
        name="consent"
        type="checkbox"
        required
        className="
          h-4 w-4 rounded
          border border-[rgb(var(--line)/0.25)]
          accent-[rgb(var(--accent))]
          outline-none
          transition
        "
      />
      <span className="text-[rgb(var(--muted))]">
        {
          // "Concordo com a <link>Política de Privacidade</link>."
          t.rich("form.consent.label", {
            link: (chunks) => (
              <Link
                href="/policy"
                className="underline decoration-[rgb(var(--accent))]/50 underline-offset-2 hover:decoration-[rgb(var(--accent))]"
              >
                {chunks}
              </Link>
            )
          })
        }
      </span>
    </label>
  );
}