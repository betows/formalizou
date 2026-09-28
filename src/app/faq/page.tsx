import type { Metadata } from "next";
import { FaqBrowser } from "@/components/faq-browser";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Dúvidas sobre abertura, migração, atendimento e planos da Formalizou. Cada resposta abre sozinha.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Como podemos ajudar?"
        lede="Escolha um tema ou busque uma palavra. Só a pergunta que você clicar abre. Clicar de novo fecha."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <FaqBrowser />
      </section>
    </>
  );
}
