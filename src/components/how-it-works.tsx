"use client";

import { useState } from "react";
import { steps } from "@/lib/content";

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const current = steps[active] ?? steps[0];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => {
        const selected = index === active;
        return (
          <button
            key={step.title}
            type="button"
            aria-pressed={selected}
            onClick={() => setActive(index)}
            className={`rounded-[1.75rem] border p-5 text-left transition duration-300 hover:-translate-y-0.5 ${selected ? "border-orange bg-ink text-cream shadow-lg" : "border-line bg-cream text-ink hover:border-orange/40"}`}
          >
            <span className={`font-display text-4xl ${selected ? "text-amber" : "text-orange"}`}>
              0{index + 1}
            </span>
            <span className="mt-3 block font-display text-2xl leading-tight">{step.title}</span>
            <span className={`mt-2 block text-sm leading-relaxed ${selected ? "text-cream/75" : "text-ink-soft"}`}>
              {selected ? current.text : "Toque para ver esta etapa."}
            </span>
          </button>
        );
      })}
    </div>
  );
}
