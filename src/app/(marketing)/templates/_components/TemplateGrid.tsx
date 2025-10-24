import TemplateCard from "./TemplateCard";
import type { Template } from "@/lib/data";

export default function TemplateGrid({ items }: { items: Template[] }) {
  return (
    <section
      id="templates"
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((t) => (
        <TemplateCard key={t.slug} t={t} />
      ))}
    </section>
  );
}
