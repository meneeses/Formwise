import Hero from "@/components/hero";
import ValueProps from "@/components/value-props";
import Steps from "@/app/how-it-works/steps";
import FeaturedTemplates from "@/components/featured-templates";
import CTA from "@/components/cta";
import { templates } from "@/lib/data";

export default function HomePage() {
  const heroItems = templates.slice(0, 3).map(t => ({
    slug: t.slug,
    title: t.title,
    thumb: t.thumb,
  }));
  const totalTemplates = templates.length;

  return (
    <>
      <Hero/>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <ValueProps />
      </section>

      <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Como funciona</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">Do zero ao site no ar em três passos simples.</p>
        </div>
        <Steps />
      </section>

      <section id="templates" className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Templates em destaque</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">Modelos prontos, minimalistas e fáceis de personalizar.</p>
        </div>
        <FeaturedTemplates />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <CTA />
      </section>
    </>
  );
}
