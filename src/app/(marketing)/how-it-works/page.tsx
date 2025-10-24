import Steps from "./_components/Steps";
import Included from "./_components/Included";
import AddOns from "./_components/AddOns";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-8 md:pt-12 pb-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Como funciona</h1>
        <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">
          Um processo direto: escolha, envie o conteúdo e publicamos pra você.
          Linha do tempo clara, entregáveis definidos e prazos realistas.
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
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Pronto para começar?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-[rgb(var(--muted))]">
            Veja os templates disponíveis e escolha o melhor para o seu negócio.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/templates" className="btn btn-primary">Ver templates</Link>
            <Link href="/contato" className="btn">Falar com a Formwise</Link>
          </div>
        </div>
      </section>
    </>
  );
}
