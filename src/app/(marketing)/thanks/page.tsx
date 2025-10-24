import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Obrigado | Formwise Studio",
  description: "Recebemos sua mensagem.",
};

export default function ObrigadoPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Mensagem enviada!</h1>
      <p className="mx-auto mt-3 max-w-xl text-[rgb(var(--muted))]">
        Recebemos seus dados e vamos responder em breve. Obrigado por entrar em contato.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="btn">Voltar ao início</Link>
        <Link href="/templates" className="btn btn-primary">Ver templates</Link>
      </div>
    </section>
  );
}
