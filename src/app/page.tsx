import Link from "next/link";
import { Accordion } from "@/components/accordion";
import { ContactForm } from "@/components/contact-form";
import { HowItWorks } from "@/components/how-it-works";
import { PlanExplorer } from "@/components/plan-explorer";
import { Testimonials } from "@/components/testimonials";
import { homeFaq } from "@/lib/content";

const facts = ["Escritório em Florianópolis", "Contadores com CRC/SC", "Atendimento online", "ME e EPP"];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[72rem] items-end gap-12 px-5 py-14 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
          <div>
            <h1 className="max-w-[14ch] text-[3.15rem] font-semibold leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Seja dono do seu <span className="underline decoration-orange decoration-[3px] underline-offset-[6px]">negócio.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Deixe a gestão contábil e financeira da sua empresa com a gente e ganhe tempo para focar nas suas atividades.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4 text-sm text-ink-soft">
              {facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
          <div className="border border-ink bg-cream">
            <div className="flex items-baseline justify-between bg-ink px-4 py-3 text-cream">
              <p className="text-sm font-semibold">Abra agora sua empresa</p>
              <p className="text-xs text-cream/60">Resposta no WhatsApp</p>
            </div>
            <div className="p-4">
              <ContactForm variant="compact" idPrefix="hero" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[72rem] gap-8 px-5 py-16 md:grid-cols-[14rem_1fr] md:gap-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">A Formalizou</h2>
          <div className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            <p>
              Escritório de contabilidade online para micro e pequenas empresas. O trabalho é transparente, feito por contadores formados e registrados no CRC/SC.
            </p>
            <p className="mt-4">
              A rotina fiscal sai da sua mesa. Sem truque, sem letra miúda e sem pilha de papel.
            </p>
            <Link href="/a-formalizou" className="mt-6 inline-block text-sm font-semibold text-ink underline decoration-orange decoration-2 underline-offset-4">
              História, missão e equipe
            </Link>
          </div>
        </div>
      </section>

      <section id="planos" className="scroll-mt-20 border-b border-line bg-paper">
        <div className="mx-auto max-w-[72rem] px-5 py-16 md:py-20">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Nossos planos</h2>
              <p className="mt-3 max-w-xl text-ink-soft">
                Formaliza, Evolui e Transforma. A tabela compara o que entra em cada um. Os detalhes abrem um plano por vez.
              </p>
            </div>
            <Link href="/planos" className="text-sm font-semibold underline decoration-orange decoration-2 underline-offset-4">
              Honorários por faturamento
            </Link>
          </div>
          <div className="mt-8">
            <PlanExplorer />
          </div>
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-[72rem] px-5 py-16 md:py-20">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Como funciona</h2>
          <div className="mt-8">
            <HowItWorks />
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto grid max-w-[72rem] gap-8 px-5 py-16 md:grid-cols-[14rem_1fr] md:gap-16 md:py-20">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">Perguntas frequentes</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Uma resposta de cada vez. Clique de novo para fechar.
            </p>
            <Link href="/faq" className="mt-5 inline-block text-sm font-semibold underline decoration-orange decoration-2 underline-offset-4">
              FAQ completo
            </Link>
          </div>
          <Accordion items={homeFaq} />
        </div>
      </section>

      <section id="clientes" className="scroll-mt-20 border-b border-line bg-paper">
        <div className="mx-auto max-w-[72rem] px-5 py-16 md:py-20">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Clientes</h2>
          <div className="mt-8">
            <Testimonials />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[72rem] gap-10 px-5 py-16 md:grid-cols-[1fr_1.1fr] md:py-20">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Vamos conversar?</h2>
          <p className="mt-4 max-w-md text-ink-soft">
            Cidade, tipo de empresa e o que você precisa. A mensagem abre no WhatsApp da equipe, pronta para enviar. Nada fica salvo neste site.
          </p>
          <p className="mt-6 text-sm text-ink-soft">
            Rua Tenente Silveira, 482, Sala 203
            <br />
            Centro, Florianópolis
          </p>
        </div>
        <div className="border border-line bg-cream p-5">
          <ContactForm variant="full" idPrefix="home-contato" />
        </div>
      </section>
    </>
  );
}
