"use client";

import { useMemo, useState } from "react";
import { Accordion } from "@/components/accordion";
import { faqCategories } from "@/lib/content";

export function FaqBrowser() {
  const [categoryId, setCategoryId] = useState(faqCategories[0]?.id ?? "");
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();

  const items = useMemo(() => {
    if (normalized) {
      return faqCategories
        .flatMap((category) => category.items)
        .filter((item) => `${item.question} ${item.answer}`.toLowerCase().includes(normalized));
    }
    return faqCategories.find((category) => category.id === categoryId)?.items ?? [];
  }, [categoryId, normalized]);

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-16">
      <div>
        <label className="grid gap-2 text-sm">
          <span className="font-medium">Buscar</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="certificado, migração"
            className="border border-line bg-cream px-3 py-2 outline-none"
          />
        </label>
        <div className="mt-5 grid border-t border-line" role="tablist" aria-label="Temas do FAQ">
          {faqCategories.map((category) => {
            const selected = !normalized && category.id === categoryId;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => {
                  setCategoryId(category.id);
                  setQuery("");
                }}
                className={`border-b border-line py-2.5 text-left text-sm ${selected ? "font-semibold text-ink" : "text-ink-soft hover:text-ink"}`}
              >
                {selected ? <span className="mr-2 text-orange">—</span> : null}
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm text-ink-soft">
          {normalized
            ? `${items.length} resultado${items.length === 1 ? "" : "s"} para “${query.trim()}”.`
            : "Abra uma pergunta por vez."}
        </p>
        <Accordion
          key={normalized ? `search-${normalized}` : categoryId}
          items={items}
          emptyLabel="Nenhuma pergunta com esse termo."
        />
      </div>
    </div>
  );
}
