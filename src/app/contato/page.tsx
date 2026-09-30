import type { Metadata } from "next";
import { ArrowButton } from "@/components/arrow-button";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SITE, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Formalizou em Florianópolis por WhatsApp, e-mail ou pelo formulário do site.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contatos"
        title="Vamos conversar?"
        lede="Conte a cidade, o tipo de empresa e o que você precisa. A mensagem abre no WhatsApp da equipe, pronta para enviar."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[1.75rem] bg-paper p-6">
          <p className="text-sm text-ink-soft">Florianópolis</p>
          <p className="mt-3 font-display text-3xl leading-tight">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
          </p>
          <a className="mt-5 block underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          <ArrowButton href={WHATSAPP_URL} className="mt-4">
            WhatsApp {SITE.phoneDisplay}
          </ArrowButton>
        </div>
        <div className="rounded-3xl border border-line bg-cream p-6 text-ink">
          <ContactForm variant="full" idPrefix="contato" />
        </div>
      </section>
    </>
  );
}
