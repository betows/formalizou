import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="relative min-h-80 overflow-hidden rounded-[2rem]">
          <Image
            src="/images/workspace.jpg"
            alt="Trabalho contábil feito à distância, em uma mesa com notebook"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
          <p>
            A Formalizou nasceu para simplificar a rotina contábil e facilitar a troca de informação com quem empreende. As portas se abrem quando o serviço é justo, descomplicado e transparente.
          </p>
          <p>
            O que a equipe quer, no fim, é que mais pessoas consigam empreender de um jeito prático. Sem truque, sem enrolação e sem letra miúda.
          </p>
          <p>
            Se a sua empresa ainda vive de documento físico, prazo perdido e ferramenta antiga, o atendimento da Formalizou foi desenhado para esse incômodo.
          </p>
        </div>
      </section>
      <section className="border-y border-line bg-white/50">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="rounded-3xl border border-line bg-cream p-6">
              <h2 className="font-display text-3xl">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-display text-4xl md:text-5xl">Nossa equipe</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Contadores formados, com registro e história no ofício. O atendimento não passa por um robô.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {team.map((person) => (
            <article key={person.name} className="rounded-[1.75rem] bg-paper p-6">
              <p className="grid h-14 w-14 place-items-center rounded-full bg-amber font-display text-xl" aria-hidden="true">
                {person.name
                  .split(" ")
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")}
              </p>
              <h3 className="mt-4 font-display text-3xl">{person.name}</h3>
              <p className="text-sm text-ink-soft">{person.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{person.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
