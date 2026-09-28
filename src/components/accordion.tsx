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
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-paper/80"
              >
                <span className="font-medium text-ink">{item.question}</span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-orange transition-transform ${open ? "rotate-45 bg-orange text-cream" : "bg-paper"}`}
                  aria-hidden="true"
                >
                  +
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
