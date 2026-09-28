import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { principles, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "A Formalizou",
  description:
    "A história, a missão e a equipe de contadores da Formalizou, escritório de contabilidade online em Florianópolis.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="A Formalizou"
        title="Contabilidade simples para quem empreende."
        lede="Tudo começou com uma ideia direta: usar tecnologia para encurtar a distância entre o contador e o dono do negócio, sem tratar gente como número."
      />
      <section className="mx-auto grid max-w-[72rem] gap-10 px-5 py-16 md:grid-cols-[1fr_1.1fr] md:py-20">
        <p className="text-2xl font-medium leading-snug tracking-[-0.03em]">
          Tratar as pessoas com mais compreensão, e não como números. Serviço justo, descomplicado e transparente.
        </p>
        <div className="space-y-4 leading-relaxed text-ink-soft">
          <p>
            A Formalizou nasceu para simplificar a rotina contábil e facilitar a troca de informação com quem empreende. As portas se abrem quando o serviço é claro.
          </p>
          <p>
            O que a equipe quer, no fim, é que mais pessoas consigam empreender de um jeito prático. Sem truque, sem enrolação e sem letra miúda.
          </p>
          <p>
            Se a empresa ainda vive de documento físico, prazo perdido e ferramenta antiga, o atendimento foi desenhado para esse incômodo.
          </p>
        </div>
      </section>
      <section className="border-y border-line">
        <dl className="mx-auto grid max-w-[72rem] md:grid-cols-3">
          {principles.map((item) => (
            <div key={item.title} className="border-b border-line px-5 py-8 md:border-b-0 md:border-r md:last:border-r-0">
              <dt className="text-lg font-semibold tracking-[-0.03em]">{item.title}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-ink-soft">{item.text}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="mx-auto max-w-[72rem] px-5 py-16 md:py-20">
        <h2 className="text-3xl font-semibold tracking-[-0.03em]">Equipe</h2>
        <p className="mt-3 max-w-xl text-ink-soft">
          Contadores formados, com registro e história no ofício. O atendimento não passa por um robô.
        </p>
        <div className="mt-8 border-t border-ink">
          {team.map((person) => (
            <article key={person.name} className="grid gap-3 border-b border-line py-7 md:grid-cols-[14rem_1fr] md:gap-10">
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{person.name}</h3>
                <p className="text-sm text-orange-deep">{person.role}</p>
              </div>
              <p className="leading-relaxed text-ink-soft">{person.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
