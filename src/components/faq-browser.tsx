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
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <div>
        <label className="grid gap-2 text-sm">
          <span className="font-medium">Buscar</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ex.: certificado, migração"
            className="rounded-xl border border-line bg-cream px-3 py-3 outline-none"
          />
        </label>
        <div className="mt-4 grid gap-2" role="tablist" aria-label="Temas do FAQ">
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
                className={`rounded-xl px-3 py-2 text-left text-sm ${selected ? "bg-ink text-cream" : "bg-cream text-ink hover:bg-white"}`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <p className="mb-3 text-sm text-ink-soft">
          {normalized
            ? `${items.length} resultado${items.length === 1 ? "" : "s"} para “${query.trim()}”.`
            : "Abra uma pergunta por vez. Clique de novo para fechar."}
        </p>
        <Accordion
          key={normalized ? `search-${normalized}` : categoryId}
          items={items}
          emptyLabel="Nenhuma pergunta com esse termo. Tente certificado, abertura ou plano."
        />
      </div>
    </div>
  );
}
