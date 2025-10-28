// src/app/[locale]/templates/_components/TemplateGrid.tsx
import {getTranslations} from "next-intl/server";
import TemplateCard from "./TemplateCard";
import type {Template} from "@/lib/data";

export default async function TemplateGrid({items}: {items: Template[]}) {
  const t = await getTranslations("TemplatesPage");

  if (!items?.length) {
    return (
      <div className="rounded-2xl border border-[rgb(var(--line)/0.08)] bg-[rgb(var(--fg)/0.02)] dark:bg-white/5 p-8 text-sm text-[rgb(var(--muted))]">
        {t("empty")}
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((tpl) => (
        <li key={tpl.slug}>
          <TemplateCard tpl={tpl} />
        </li>
      ))}
    </ul>
  );
}
