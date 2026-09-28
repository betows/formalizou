import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PlanExplorer } from "@/components/plan-explorer";
import { feeTables } from "@/lib/content";

export const metadata: Metadata = {
  title: "Planos",
  description:
    "Compare os planos Formaliza, Evolui e Transforma e consulte as tabelas de honorários para serviços e comércio.",
};

export default function PlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="O plano certo para o tamanho da empresa."
        lede="Formaliza, Evolui e Transforma cobrem da abertura à rotina mensal. O comparativo fica visível. Os detalhes abrem só no plano que você escolher."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <PlanExplorer />
      </section>
      <section className="border-t border-line bg-white/40">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-4xl">Honorários por faturamento</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Tabelas de referência publicadas pela Formalizou, separadas em básico e avançado. O valor do contrato é confirmado com um especialista, porque a faixa e a atividade mudam o honorário.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {feeTables.map((table) => (
              <div key={table.title} className="overflow-x-auto rounded-3xl border border-line bg-cream">
                <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
                  <caption className="px-4 py-4 text-left font-display text-2xl text-ink">{table.title}</caption>
                  <thead>
                    <tr className="border-y border-line text-ink-soft">
                      <th className="px-4 py-3 font-medium">Faturamento mensal</th>
                      <th className="px-4 py-3 font-medium">Básico</th>
                      <th className="px-4 py-3 font-medium">Avançado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row[0]} className="border-b border-line last:border-b-0">
                        {row.map((cell, index) => (
                          <td key={`${row[0]}-${index}`} className="px-4 py-3 text-ink-soft first:font-medium first:text-ink">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            Serviço fora do plano?{" "}
            <Link href="/servicos-avulsos" className="font-semibold text-ink underline">
              Veja a tabela de avulsos
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
