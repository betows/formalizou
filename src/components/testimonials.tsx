"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active] ?? testimonials[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
      <figure className="rounded-[2rem] bg-ink p-7 text-cream md:p-10">
        <blockquote className="font-display text-2xl leading-snug md:text-4xl">“{current.quote}”</blockquote>
        <figcaption className="mt-8">
          <p className="font-semibold">{current.name}</p>
          <p className="text-sm text-cream/60">{current.role}</p>
        </figcaption>
      </figure>
      <div className="grid gap-3" role="tablist" aria-label="Depoimentos">
        {testimonials.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(index)}
              className={`rounded-2xl border px-4 py-4 text-left ${selected ? "border-orange bg-cream" : "border-line bg-cream/60 hover:bg-cream"}`}
            >
              <span className="block font-medium">{item.name}</span>
              <span className="mt-1 block text-sm text-ink-soft">{item.role}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
