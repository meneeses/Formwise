import Link from "next/link";

export default function CTA() {
  return (
    <div className="card p-6 md:p-8 text-center">
      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
        Pronto para ter um site que vende por você?
      </h3>
      <p className="mx-auto mt-3 max-w-2xl text-[rgb(var(--muted))]">
        Fale com a Formwise. Em poucos dias seu site minimalista, rápido e profissional está no ar.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/contato" className="btn btn-primary">Pedir orçamento</Link>
        <Link href="/precos" className="btn">Ver preços & licenças</Link>
      </div>
    </div>
  );
}
