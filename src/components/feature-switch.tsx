"use client";

import { useState } from "react";

const items = [
  {
    title: "100% online",
    text: "A Formalizou é um escritório de contabilidade online feito para simplificar a vida de micro e pequenas empresas. O trabalho é transparente, com uma equipe de contadores formados e registrados no CRC/SC.",
  },
  {
    title: "Atendimento humanizado",
    text: "A ideia é tirar o peso da rotina fiscal e devolver tempo para quem empreende. Sem truque, sem letra miúda e sem pilha de papel.",
  },
  {
    title: "Transparência total",
    text: "A Formalizou nasceu para simplificar a rotina contábil e facilitar a troca de informação com quem empreende. As portas se abrem quando o serviço é justo, descomplicado e transparente.",
  },
  {
    title: "Foco em ME e EPP",
    text: "Simplificar a contabilidade dos pequenos e microempreendedores para que possam alcançar o sucesso de suas empresas.",
  },
];

export function FeatureSwitch() {
  const [active, setActive] = useState(0);
  const current = items[active] ?? items[0];

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p className="text-sm text-ink-soft">A Formalizou</p>
        <h2 className="mt-3 font-display text-4xl leading-tight tracking-tight md:text-5xl">
          Contabilidade simples para quem empreende.
        </h2>
      </div>
      <div>
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.title}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(index)}
                className={`rounded-full px-4 py-2 text-sm transition duration-300 ${selected ? "bg-ink text-cream" : "bg-white text-ink hover:bg-amber"}`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <div key={current.title} className="swap-in mt-5 min-h-52 rounded-[1.75rem] bg-paper p-7">
          <p className="font-display text-3xl tracking-tight">{current.title}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{current.text}</p>
        </div>
      </div>
    </div>
  );
}
