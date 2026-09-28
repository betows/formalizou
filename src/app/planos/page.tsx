import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PlanExplorer } from "@/components/plan-explorer";

export const metadata: Metadata = {
  title: "Planos",
  description: "Compare os planos Formaliza, Evolui e Transforma da Formalizou.",
};

export default function PlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="O plano certo para o tamanho da empresa."
        lede="Formaliza, Evolui e Transforma cobrem da abertura à rotina mensal. O comparativo fica visível. Os detalhes abrem só no plano que você escolher."
      />
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <PlanExplorer />
        <p className="mt-6 text-sm text-ink-soft">
          Serviço fora do plano?{" "}
          <Link href="/servicos-avulsos" className="font-semibold text-ink underline">
            Veja a tabela de avulsos
          </Link>
          .
        </p>
      </section>
    </>
  );
}
