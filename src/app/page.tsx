import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/accordion";
import { ContactForm } from "@/components/contact-form";
import { HowItWorks } from "@/components/how-it-works";
import { PlanExplorer } from "@/components/plan-explorer";
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/testimonials";
import { homeFaq } from "@/lib/content";

const badges = ["100% online", "Atendimento humanizado", "Transparência total", "Foco em ME e EPP"];

export default function HomePage() {
  return (
    <>
      <section className="hero-screen relative flex items-center overflow-hidden bg-ink text-cream">
        <div className="relative mx-auto grid w-full max-w-6xl items-start gap-6 px-5 py-6 sm:py-8 lg:grid-cols-[1.05fr_0.9fr] lg:items-center lg:gap-8 lg:py-6 xl:py-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber">Contabilidade online</p>
            <h1 className="mt-3 font-display text-[2.6rem] leading-[0.98] sm:text-5xl lg:text-[3.15rem] xl:text-[3.6rem]">
              <span className="block">Seja dono</span>
              <span className="mt-1 block">do seu</span>
              <span className="mt-1 block text-orange">negócio.</span>
            </h1>
            <div className="mt-4 flex max-w-xl gap-4 lg:mt-5">
              <span className="accent-bar w-1 shrink-0 rounded-full bg-orange" aria-hidden="true" />
              <p className="text-base leading-relaxed text-cream/80 lg:text-lg">
                Deixe a gestão contábil e financeira da sua empresa com a gente e{" "}
                <strong className="font-semibold text-amber">ganhe tempo</strong> para focar nas suas atividades.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-cream/80">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative h-44 overflow-hidden rounded-[1.6rem] sm:h-52 lg:h-56 xl:h-72">
              <Image
                src="/images/hero.jpg"
                alt="Balcão de um café, o tipo de negócio que a Formalizou ajuda a formalizar"
                fill
                priority
                className="hero-photo object-cover"
                sizes="(min-width: 1024px) 480px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
            </div>
            <div className="hero-card relative z-10 -mt-16 ml-auto w-[min(100%,22rem)] rounded-[1.4rem] bg-cream p-4 text-ink shadow-2xl sm:-mt-24 lg:-mt-32 xl:-mt-28">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange">Abra agora</p>
              <p className="font-display text-2xl leading-none">sua empresa</p>
              <div className="mt-3">
                <ContactForm variant="compact" idPrefix="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal id="sobre" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange">O que é</p>
          <h2 className="mt-2 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">A Formalizou</h2>
        </div>
        <div className="text-lg leading-relaxed text-ink-soft">
          <p>
            A Formalizou é um escritório de contabilidade online feito para simplificar a vida de micro e pequenas empresas. O trabalho é transparente, com uma equipe de contadores formados e registrados no CRC/SC.
          </p>
          <p className="mt-4">
            A ideia é tirar o peso da rotina fiscal e devolver tempo para quem empreende. Sem truque, sem letra miúda e sem pilha de papel.
          </p>
          <Link href="/a-formalizou" className="mt-6 inline-flex text-sm font-semibold text-orange-deep underline">
            Conheça a história e a equipe
          </Link>
        </div>
      </Reveal>

      <Reveal id="planos" className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange">Nossos planos</p>
            <h2 className="mt-2 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">Escolha o plano e abra só o que importa</h2>
            <p className="mt-4 text-lg text-ink-soft">
              Especialistas cuidam da contabilidade com atendimento humano. O comparativo fica aberto. Os detalhes de cada plano abrem um de cada vez.
            </p>
          </div>
          <div className="mt-10">
            <PlanExplorer />
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            Precisa de algo fora da mensalidade?{" "}
            <Link href="/servicos-avulsos" className="font-semibold text-ink underline">
              Veja os serviços avulsos
            </Link>
            .
          </p>
        </div>
      </Reveal>

      <Reveal id="como-funciona" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange">Como funciona</p>
          <h2 className="mt-2 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">Três passos, um de cada vez</h2>
        </div>
        <HowItWorks />
      </Reveal>

      <Reveal id="faq" className="bg-white/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange">Ainda com dúvidas?</p>
            <h2 className="mt-2 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">Perguntas frequentes</h2>
            <p className="mt-4 text-ink-soft">
              Clique em uma pergunta para ler a resposta. Clique de novo para fechar. As outras permanecem fechadas.
            </p>
            <Link href="/faq" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream">
              Acesse o FAQ completo
            </Link>
          </div>
          <Accordion items={homeFaq} />
        </div>
      </Reveal>

      <Reveal id="clientes" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange">Clientes</p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl leading-tight sm:text-4xl md:text-5xl">Quem já deixou a contabilidade com a gente</h2>
        </div>
        <Testimonials />
      </Reveal>

      <Reveal id="contato" className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-20 md:grid-cols-2">
        <div className="relative min-h-72 overflow-hidden rounded-[2rem]">
          <Image
            src="/images/workspace.jpg"
            alt="Mesa de trabalho com notebook, onde a rotina contábil acontece online"
            fill
            className="hero-photo object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="rounded-[2rem] bg-ink p-6 text-cream md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber">Vamos conversar?</p>
          <h2 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">Conte o momento da sua empresa</h2>
          <p className="mt-3 text-sm text-cream/70">
            O formulário monta a mensagem e abre o WhatsApp da Formalizou. Nada fica salvo neste site.
          </p>
          <div className="mt-5 rounded-2xl bg-cream p-4 text-ink">
            <ContactForm variant="full" idPrefix="home-contato" />
          </div>
        </div>
      </Reveal>
    </>
  );
}
