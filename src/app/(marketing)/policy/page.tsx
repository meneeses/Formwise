import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Formwise Studio",
  description: "Entenda como coletamos, usamos e protegemos seus dados pessoais.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Política de Privacidade</h1>
      <p className="mt-2 max-w-3xl text-[rgb(var(--muted))]">
        Esta Política de Privacidade descreve como a Formwise Studio (“nós”) coleta, usa e protege
        suas informações ao utilizar nosso site e serviços.
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold">1. Informações que coletamos</h2>
          <ul className="mt-2 list-inside list-disc text-[rgb(var(--muted))]">
            <li>Dados de contato enviados por você (ex.: nome, e-mail, telefone).</li>
            <li>Conteúdos e preferências para montagem do seu site.</li>
            <li>Dados técnicos básicos de uso (ex.: páginas acessadas, dispositivo, cookies).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">2. Como utilizamos seus dados</h2>
          <ul className="mt-2 list-inside list-disc text-[rgb(var(--muted))]">
            <li>Atender solicitações, enviar propostas e prestar suporte.</li>
            <li>Montar, personalizar e publicar seu site conforme solicitado.</li>
            <li>Melhorar a experiência de navegação e nossas ofertas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">3. Base legal e consentimento</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Tratamos seus dados com base no seu consentimento e/ou em contratos/prestação de serviços,
            conforme a legislação aplicável (incluindo LGPD).
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">4. Cookies e tecnologias similares</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Podemos usar cookies para lembrar preferências e entender o uso do site.
            Você pode gerenciar cookies no seu navegador. Se usar ferramentas de análise,
            elas poderão coletar dados agregados de navegação.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">5. Compartilhamento de dados</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Não vendemos seus dados. Podemos compartilhar com provedores necessários à operação
            (ex.: hospedagem, e-mail, analytics), sempre com medidas de segurança e apenas
            para as finalidades aqui descritas.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">6. Segurança da informação</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Adotamos medidas técnicas e organizacionais para proteger seus dados. Nenhum método
            é 100% infalível, mas buscamos boas práticas de mercado.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">7. Seus direitos</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Você pode solicitar acesso, correção, atualização ou exclusão dos seus dados, além de
            revogar consentimentos. Para exercer seus direitos, entre em contato.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">8. Contato</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            E-mail: <a className="underline" href="mailto:formwisestudio@gmail.com">formwisestudio@gmail.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">9. Atualizações desta política</h2>
          <p className="mt-2 text-[rgb(var(--muted))]">
            Podemos atualizar este documento a qualquer momento. Publicaremos a nova versão nesta página.
            <br />
            <span className="text-xs">Última atualização: {new Date().toLocaleDateString("pt-BR")}.</span>
          </p>
        </section>
      </div>
    </section>
  );
}
