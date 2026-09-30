import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/accordion";
import { ContactForm } from "@/components/contact-form";
import { HowItWorks } from "@/components/how-it-works";
import { PlanExplorer } from "@/components/plan-explorer";
import { Reveal } from "@/components/reveal";
import { Testimonials } from "@/components/testimonials";
import { homeFaq } from "@/lib/content";
import { WHATSAPP_URL } from "@/lib/site";

const badges = ["100% online", "Atendimento humanizado", "Transparência total", "Foco em ME e EPP"];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center rounded-full border border-ink/10 bg-cream/80 px-3 py-1.5 text-sm font-medium text-ink backdrop-blur-sm">
      {children}
    </p>
  );
}

export default function HomePage() {
  const loop = [...badges, ...badges];

  return (
    <>
      <section className="relative overflow-hidden text-cream">
        <div className="absolute inset-0 bg-linear-to-br from-ink via-[#0e5a86] to-ink" />
        <div className="absolute top-1/3 left-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/25 blur-3xl" />
        <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col items-center px-5 pt-28 pb-16 text-center">
          <p className="rise-in inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
            Contabilidade online
          </p>
          <h1 className="rise-in d1 mt-6 max-w-4xl font-display text-5xl leading-[0.98] tracking-tight md:text-7xl">
            Seja dono do seu <span className="text-orange">negócio.</span>
          </h1>
          <p className="rise-in d2 mt-6 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
            Deixe a gestão contábil e financeira da sua empresa com a gente e ganhe tempo para focar nas suas atividades.
          </p>
          <div className="rise-in d3 mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contato"
              className="inline-flex h-11 items-center rounded-full bg-orange px-5 text-sm font-semibold text-cream transition hover:scale-[1.02] hover:bg-orange-deep"
            >
              Solicitar contato
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-cream px-5 text-sm font-semibold text-ink transition hover:scale-[1.02]"
            >
              WhatsApp
            </a>
          </div>
          <div className="rise-in d4 relative mt-12 w-full max-w-4xl">
            <div className="relative h-56 overflow-hidden rounded-[2rem] shadow-2xl sm:h-72 md:h-96">
              <Image
                src="/images/hero.jpg"
                alt="Balcão de um café, o tipo de negócio que a Formalizou ajuda a formalizar"
                fill
                priority
                className="hero-photo object-cover"
                sizes="(min-width: 1024px) 896px, 100vw"
              />
            </div>
            <div className="hero-card relative z-10 mx-auto -mt-16 w-[min(100%,24rem)] rounded-[1.6rem] bg-cream p-4 text-left text-ink shadow-2xl sm:-mt-24">
              <p className="text-xs font-semibold tracking-wide text-orange uppercase">Abra agora</p>
              <p className="font-display text-2xl leading-none">sua empresa</p>
              <div className="mt-3">
                <ContactForm variant="compact" idPrefix="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-line bg-cream py-4">
        <div className="marquee-track flex w-max gap-3 px-3">
          {loop.map((badge, index) => (
            <span key={`${badge}-${index}`} className="rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink-soft">
              {badge}
            </span>
          ))}
        </div>
      </div>

      <Reveal id="sobre" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
        <div>
          <Eyebrow>O que é</Eyebrow>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">A Formalizou</h2>
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
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Nossos planos</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Escolha o plano e abra só o que importa</h2>
            <p className="mt-4 text-lg text-ink-soft">
              Especialistas cuidam da contabilidade com atendimento humano. O comparativo fica aberto. Os detalhes de cada plano abrem um de cada vez.
            </p>
          </div>
          <div className="mt-10">
            <PlanExplorer />
          </div>
          <p className="mt-6 text-center text-sm text-ink-soft">
            Precisa de algo fora da mensalidade?{" "}
            <Link href="/servicos-avulsos" className="font-semibold text-ink underline">
              Veja os serviços avulsos
            </Link>
            .
          </p>
        </div>
      </Reveal>

      <Reveal id="como-funciona" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Três passos, um de cada vez</h2>
        </div>
        <HowItWorks />
      </Reveal>

      <Reveal id="faq" className="bg-white/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
          <div>
            <Eyebrow>Ainda com dúvidas?</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Perguntas frequentes</h2>
            <p className="mt-4 text-ink-soft">
              Clique em uma pergunta para ler a resposta. Clique de novo para fechar. As outras permanecem fechadas.
            </p>
            <Link href="/faq" className="mt-6 inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-cream">
              Acesse o FAQ completo
            </Link>
          </div>
          <Accordion items={homeFaq} />
        </div>
      </Reveal>

      <Reveal id="clientes" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Eyebrow>Clientes</Eyebrow>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Quem já deixou a contabilidade com a gente</h2>
        </div>
        <Testimonials />
      </Reveal>

      <Reveal id="contato" className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-24 md:grid-cols-2">
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
          <p className="text-sm font-medium text-orange">Vamos conversar?</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight">Conte o momento da sua empresa</h2>
          <p className="mt-3 text-sm text-cream/75">
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
