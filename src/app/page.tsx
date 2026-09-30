import Link from "next/link";
import { Accordion } from "@/components/accordion";
import { ContactForm } from "@/components/contact-form";
import { FeatureSwitch } from "@/components/feature-switch";
import { PlanExplorer } from "@/components/plan-explorer";
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/testimonials";
import { homeFaq, steps } from "@/lib/content";
import { WHATSAPP_URL } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="rise-in font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Seja dono do seu negócio.
          </h1>
          <p className="rise-in d1 mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Deixe a gestão contábil e financeira da sua empresa com a gente e ganhe tempo para focar nas suas atividades.
          </p>
          <div className="rise-in d2 mt-8 flex flex-wrap gap-3">
            <a href="#contato" className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-cream">
              Solicitar contato
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-ink px-5 text-sm font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="rise-in d3 mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="bg-cream p-6">
              <p className="font-display text-sm text-ink-soft">0{index + 1}</p>
              <h2 className="mt-4 font-display text-2xl tracking-tight">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <Reveal id="sobre" className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <FeatureSwitch />
          <Link href="/a-formalizou" className="mt-8 inline-flex text-sm font-medium underline">
            Conheça a história e a equipe
          </Link>
        </div>
      </Reveal>

      <Reveal id="planos" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm text-ink-soft">Nossos planos</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Escolha o plano e abra só o que importa</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Especialistas cuidam da contabilidade com atendimento humano. O comparativo fica aberto. Os detalhes de cada plano abrem um de cada vez.
          </p>
        </div>
        <div className="mt-10">
          <PlanExplorer />
        </div>
        <p className="mt-6 text-sm text-ink-soft">
          Precisa de algo fora da mensalidade?{" "}
          <Link href="/servicos-avulsos" className="font-medium text-ink underline">
            Veja os serviços avulsos
          </Link>
          .
        </p>
      </Reveal>

      <Reveal id="clientes" className="border-y border-line bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm text-ink-soft">Clientes</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-tight md:text-5xl">
            Quem já deixou a contabilidade com a gente
          </h2>
        </div>
        <div className="mt-10">
          <Testimonials />
        </div>
      </Reveal>

      <Reveal id="faq" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
        <div>
          <p className="text-sm text-ink-soft">Ainda com dúvidas?</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Perguntas frequentes</h2>
          <p className="mt-4 text-ink-soft">
            Clique em uma pergunta para ler a resposta. Clique de novo para fechar. As outras permanecem fechadas.
          </p>
          <Link href="/faq" className="mt-6 inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-cream">
            Acesse o FAQ completo
          </Link>
        </div>
        <Accordion items={homeFaq} />
      </Reveal>

      <Reveal id="contato" className="border-t border-line bg-paper">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-sm text-ink-soft">Vamos conversar?</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">Conte o momento da sua empresa</h2>
            <p className="mt-4 max-w-md text-ink-soft">
              O formulário monta a mensagem e abre o WhatsApp da Formalizou. Nada fica salvo neste site.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-line bg-cream p-5">
            <ContactForm variant="full" idPrefix="home-contato" />
          </div>
        </div>
      </Reveal>
    </>
  );
}
