import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Formwise Studio",
  description: "Fale com a Formwise Studio.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <header>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Contato</h1>
        <p className="mt-2 max-w-2xl text-[rgb(var(--muted))] text-center mx-auto">
          Envie sua mensagem e respondemos rapidinho. Basta preencher os campos abaixo.
        </p>
      </header>

      <div className="mx-auto mt-6 max-w-2xl">
        <form
          action="https://formsubmit.co/formwisestudio@gmail.com"
          method="POST"
          className="card p-6 md:p-8 space-y-4"
        >
          {/* honeypot anti-spam */}
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

          {/* configs do Formsubmit */}
          <input type="hidden" name="_subject" value="Novo contato — Formwise Studio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://formwise-studio.vercel.app/thanks" />

          {/* campos */}
          <FormRow label="Seu nome">
            <input
              name="name"
              placeholder="Como quer ser chamado(a)?"
              required
              className="input"
            />
          </FormRow>

          <FormRow label="Seu e-mail">
            <input
              name="email"
              type="email"
              placeholder="voce@email.com"
              required
              className="input"
            />
          </FormRow>

          <FormRow label="Seu WhatsApp">
            <input
              name="phone"
              inputMode="tel"
              placeholder="(11) 91234-5678"
              required
              className="input"
            />
          </FormRow>

          <FormRow label="Mensagem">
            <textarea
              name="message"
              rows={5}
              placeholder="Conte em poucas linhas como podemos ajudar 🙂"
              required
              className="input"
            />
          </FormRow>

          {/* consent pill bonito */}
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
              Concordo com a{" "}
              <a
                href="/policy"
                className="underline decoration-[rgb(var(--accent))]/50 underline-offset-2 hover:decoration-[rgb(var(--accent))]"
              >
                Política de Privacidade
              </a>
              .
            </span>
          </label>

          <div className="pt-2">
            <button className="btn btn-primary w-full justify-center" type="submit">
              Enviar mensagem
            </button>
            <p className="mt-2 text-center text-[11px] text-[rgb(var(--muted))]">
              Não armazenamos seus dados no site — só usamos para responder seu contato.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ——— helpers ——— */

function FormRow({
  label,
  children,
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
