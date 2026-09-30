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
      <section className="mx-auto max-w-6xl px-5 pt-28 pb-10 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="from-left">
            <h1 className="rise-in font-display text-5xl leading-[1.02] tracking-tight md:text-6xl">
              Seja dono do seu negócio.
            </h1>
            <p className="rise-in d1 mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
              Deixe a gestão contábil e financeira da sua empresa com a gente e ganhe tempo para focar nas suas atividades.
            </p>
            <div className="rise-in d2 mt-8 flex flex-wrap gap-3">
              <a href="#contato" className="inline-flex h-12 items-center gap-3 rounded-full bg-ink pr-1.5 pl-5 text-sm font-medium text-white">
                Solicitar contato
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-3 rounded-full border border-ink/80 bg-cream pr-1.5 pl-5 text-sm font-medium"
              >
                WhatsApp
                <span className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 bg-white" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
          <div className="from-right relative mx-auto w-full max-w-md pb-10">
            <div className="rounded-[1.6rem] border border-black/5 bg-white p-4 shadow-[0_20px_50px_-24px_rgba(23,23,23,0.35)]">
              <div className="flex items-center justify-between text-sm">
                <p className="font-medium">Clientes</p>
                <p className="text-ink-soft">Recentes</p>
              </div>
              <ul className="mt-3 grid gap-1">
                {[
                  ["Deborah Viegas", "Founder da Balls Style", true],
                  ["Giovanna Innocencio", "Espaço Innocencio Pansica", false],
                  ["Luiz Barazzutti", "Fetransporte Brasil", false],
                ].map(([name, role, hot]) => (
                  <li
                    key={String(name)}
                    className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 ${hot ? "bg-amber" : ""}`}
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-xs text-white">
                      {String(name)
                        .split(" ")
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join("")}
                    </span>
                    <span>
                      <span className="block text-sm font-medium">{name}</span>
                      <span className="block text-xs text-ink-soft">{role}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-float absolute -right-2 -bottom-8 w-44 rounded-[1.4rem] border border-black/5 bg-white p-4 shadow-[0_16px_40px_-20px_rgba(23,23,23,0.4)] sm:-right-6">
              <p className="text-xs text-ink-soft">Faixas dos planos</p>
              <p className="mt-1 font-display text-2xl tracking-tight">R$ 60 mil</p>
              <div className="mt-3 flex h-16 items-end gap-1.5">
                {[
                  ["15", "bg-ink/15", "42%"],
                  ["25", "bg-amber", "62%"],
                  ["60", "bg-ink", "100%"],
                ].map(([label, color, height]) => (
                  <span key={label} className={`flex-1 rounded-md ${color}`} style={{ height }} />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[0.65rem] text-ink-soft">
                <span>15</span>
                <span>25</span>
                <span>60</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-12 text-sm text-ink-soft">
            {["Balls Style", "Espaço Innocencio Pansica", "Fetransporte Brasil", "Balls Style", "Espaço Innocencio Pansica", "Fetransporte Brasil"].map(
              (name, index) => (
                <span key={`${name}-${index}`} className="font-medium tracking-tight">
                  {name}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="rise-in d4 mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-3">
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
