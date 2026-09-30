"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/lib/content";

export function Accordion({
  items,
  emptyLabel = "Nenhuma pergunta encontrada.",
}: {
  items: FaqItem[];
  emptyLabel?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-line bg-cream px-5 py-8 text-center text-ink-soft">
        {emptyLabel}
      </p>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-cream shadow-[0_18px_40px_-28px_rgba(20,17,14,0.45)]">
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `${baseId}-${item.id}`;
        return (
          <div key={item.id} className="border-b border-line last:border-b-0">
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition duration-500 hover:bg-white"
              >
                <span className="font-medium text-ink">{item.question}</span>
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center text-ink transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                    <path d="M8 2.5v11M2.5 8h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div id={panelId} className="acc-panel" data-open={open} role="region">
              <div className="acc-inner">
                <div className="space-y-3 px-5 pb-5 text-[0.98rem] leading-relaxed text-ink-soft">
                  {item.answer.split("\n\n").map((paragraph, index) => (
                    <p key={`${item.id}-${index}`} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
