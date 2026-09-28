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
    return <p className="border border-dashed border-line px-4 py-8 text-center text-ink-soft">{emptyLabel}</p>;
  }

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const open = openId === item.id;
        const panelId = `${baseId}-${item.id}`;
        return (
          <div key={item.id} className="border-b border-line">
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className="flex w-full items-baseline justify-between gap-6 py-4 text-left"
              >
                <span className="flex gap-4">
                  <span className="w-6 shrink-0 tabular-nums text-sm text-ink-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{item.question}</span>
                </span>
                <span className="shrink-0 text-lg leading-none text-ink-soft" aria-hidden="true">
                  {open ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div id={panelId} className="acc-panel" data-open={open} role="region">
              <div className="acc-inner">
                <div className="space-y-3 pb-5 pl-10 text-[0.98rem] leading-relaxed text-ink-soft">
                  {item.answer.split("\n\n").map((paragraph, paragraphIndex) => (
                    <p key={`${item.id}-${paragraphIndex}`} className="whitespace-pre-line">
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
