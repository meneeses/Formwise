import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Formwise Studio",
  description: "Fale com a Formwise Studio.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contato</h1>
      <p className="mt-2 max-w-2xl text-[rgb(var(--muted))]">
        Envie sua mensagem que respondemos rapidinho.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <form className="card p-5 space-y-3">
          <input className="w-full rounded-xl border border-[rgb(var(--line)/0.12)] bg-transparent px-3 py-2"
                 placeholder="Seu nome" required />
          <input className="w-full rounded-xl border border-[rgb(var(--line)/0.12)] bg-transparent px-3 py-2"
                 placeholder="Seu e-mail" type="email" required />
          <textarea className="w-full rounded-xl border border-[rgb(var(--line)/0.12)] bg-transparent px-3 py-2"
                    placeholder="Como podemos ajudar?" rows={5} required />
          <button className="btn btn-primary" type="submit">Enviar</button>
        </form>

        <div className="card p-5">
          <div className="font-medium">Outros canais</div>
          <ul className="mt-2 space-y-1.5 text-sm">
            <li>Email: <a className="link-underline" href="mailto:contato@formwise.studio">contato@formwise.studio</a></li>
            <li>WhatsApp: <a className="link-underline" href="https://wa.me/5541996727030" target="_blank" rel="noreferrer">+55 41 99672-7030</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
