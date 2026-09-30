import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { avulsoGroups } from "@/lib/content";

export const metadata: Metadata = {
  title: "Serviços avulsos",
  description:
    "Tabela de serviços avulsos da Formalizou: folha, alterações, abertura, baixa, declarações e planejamento tributário.",
};

export default function ExtrasPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Serviços sob medida, com preço na mesa."
        lede="O que não entra na mensalidade fica aqui, com o valor de cada pedido. Alguns itens, como alteração contratual e baixa, podem ser contratados sem plano. Serviços recorrentes pedem um plano ativo."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10">
          {avulsoGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-display text-3xl">{group.title}</h2>
              <ul className="mt-4 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-cream">
                {group.items.map((item) => (
                  <li key={item.name} className="grid gap-2 px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-ink-soft">{item.detail}</p>
                    </div>
                    <p className="font-display text-xl text-ink sm:text-right">{item.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-ink-soft">
          Quer encaixar um desses pedidos num plano?{" "}
          <Link href="/contato" className="font-semibold text-ink underline">
            Fale com a equipe
          </Link>
          .
        </p>
      </section>
    </>
  );
}
