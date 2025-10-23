import { templates } from "@/lib/data";
import TemplateGrid from "./template-grid";

export default function FeaturedTemplates() {
  const featured = templates.slice(0, 6);
  return <TemplateGrid items={featured} />;
}
