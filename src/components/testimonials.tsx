"use client";

import { useState } from "react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active] ?? testimonials[0];

  return (
    <div>
      <figure>
        <blockquote className="max-w-3xl text-2xl font-medium leading-snug tracking-[-0.03em] md:text-[1.85rem]">
          “{current.quote}”
        </blockquote>
        <figcaption className="mt-6 text-sm">
          <span className="font-semibold">{current.name}</span>
          <span className="text-ink-soft">, {current.role}</span>
        </figcaption>
      </figure>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-4" role="tablist" aria-label="Depoimentos">
        {testimonials.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(index)}
              className={`text-sm ${selected ? "font-semibold underline decoration-orange decoration-2 underline-offset-4" : "text-ink-soft hover:text-ink"}`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
