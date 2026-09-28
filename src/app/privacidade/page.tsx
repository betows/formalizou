import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Como a Formalizou trata os dados enviados por este site.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Seus dados não são um detalhe de rodapé."
        lede="A Formalizou trata a privacidade e a segurança das informações pessoais e empresariais compartilhadas no site, no sistema e nos serviços vinculados."
      />
      <article className="mx-auto max-w-3xl space-y-5 px-5 py-16 leading-relaxed text-ink-soft">
        <p>
          Este site pede nome, telefone, e-mail, cidade e o assunto do contato para a equipe comercial responder. O formulário não grava essas informações em um banco da página: ele monta a mensagem e abre o WhatsApp da Formalizou.
        </p>
        <p>
          O aviso de privacidade guarda apenas a sua escolha de “aceito” neste navegador, para não aparecer de novo. Não usamos essa escolha para identificar você.
        </p>
        <p>
          A política completa do site e do sistema Formalizou continua publicada em{" "}
          <a
            className="text-ink underline"
            href="https://www.formalizou.com.br/contrato-politica-privacidade"
            target="_blank"
            rel="noreferrer"
          >
            formalizou.com.br/contrato-politica-privacidade
          </a>
          . Dúvidas sobre dados podem ir para {SITE.email}.
        </p>
      </article>
    </>
  );
}
