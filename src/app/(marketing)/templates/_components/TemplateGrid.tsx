import TemplateCard from "./TemplateCard";
import type { Template } from "@/lib/data"; // ajuste o path do tipo

export default function TemplateGrid({ items }: { items: Template[] }) {
  if (!items?.length) {
    return (
      <div className="rounded-2xl border border-[rgb(var(--line)/0.08)] bg-[rgb(var(--fg)/0.02)] dark:bg-white/5 p-8 text-sm text-[rgb(var(--muted))]">
        Em breve você encontrará aqui o catálogo completo de modelos.
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((t) => (
        <li key={t.slug}>
          <TemplateCard t={t} />
        </li>
      ))}
    </ul>
  );
}
