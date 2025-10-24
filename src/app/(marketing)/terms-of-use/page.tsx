import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Formwise Studio",
  description: "Termos e condições para uso do site e contratação de serviços.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Termos de Uso</h1>
      <p className="mt-2 max-w-3xl text-[rgb(var(--muted))]">
        Ao acessar o nosso site e/ou contratar nossos serviços, você concorda com estes Termos de Uso.
        Leia atentamente.
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold">1. Serviços</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Oferecemos templates de sites e serviços de personalização/publicação. Os detalhes do escopo,
            prazos e valores são definidos em proposta específica para cada projeto.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">2. Conteúdo do cliente</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Você é responsável pelos conteúdos fornecidos (textos, imagens, marcas). Ao nos enviar,
            declara possuir os direitos necessários para uso e publicação.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">3. Publicação e domínio</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Auxiliamos na publicação do site e na configuração do domínio. Custos de registro/renovação
            de domínio e de serviços de hospedagem/plataformas podem ser de responsabilidade do cliente,
            conforme combinado em proposta.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">4. Pagamentos</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            As condições de pagamento são definidas na proposta. Em caso de atraso, o cronograma
            de entrega poderá ser ajustado.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">5. Propriedade intelectual</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Os templates e materiais desenvolvidos por nós são licenciados para o seu uso conforme o plano
            contratado. É proibida a redistribuição ou revenda não autorizada.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">6. Limitação de responsabilidade</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Não nos responsabilizamos por indisponibilidades de terceiros, perdas de dados de serviços externos,
            ou danos indiretos decorrentes do uso do site. Empregamos esforços razoáveis para manter a qualidade
            e continuidade do serviço.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">7. Cancelamento</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Você pode solicitar cancelamento a qualquer momento. Condições de reembolso, se houver,
            serão avaliadas conforme o estágio do projeto e a proposta acordada.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">8. Alterações dos Termos</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Podemos atualizar estes Termos periodicamente. A versão vigente será sempre a publicada nesta página.
            <br />
            <span className="text-xs">Última atualização: {new Date().toLocaleDateString("pt-BR")}.</span>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">9. Contato</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Em caso de dúvidas, fale com a gente:
            {" "}
            <a className="underline" href="mailto:contato@formwise.studio">contato@formwise.studio</a>.
          </p>
        </section>
      </div>
    </section>
  );
}
