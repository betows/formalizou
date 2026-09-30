"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowButton } from "@/components/arrow-button";
import { planRows, plans, type PlanId } from "@/lib/content";

export function PlanExplorer() {
  const [openId, setOpenId] = useState<PlanId | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const plan = plans.find((item) => item.id === openId) ?? null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !openId || dialog.open) return;
    dialog.showModal();
  }, [openId]);

  function close() {
    dialogRef.current?.close();
  }

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {plans.map((item, index) => (
          <article
            key={item.id}
            className={`hover-card flex flex-col rounded-[1.75rem] border border-line bg-cream p-6 text-ink ${index === 2 ? "md:col-span-2 xl:col-span-1" : ""}`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-3xl">{item.name}</h3>
              {item.popular ? (
                <span className="rounded-full bg-amber px-3 py-1 text-xs font-medium text-ink">Mais escolhido</span>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-ink-soft">
              Ideal para {item.audience.charAt(0).toLowerCase() + item.audience.slice(1)}
            </p>
            <p className="mt-5 font-display text-3xl tracking-tight">
              {planRows.find((row) => row.label === "Faturamento mensal")?.values[index]}
            </p>
            <p className="text-sm text-ink-soft">de faturamento mensal</p>
            <ul className="mt-5 grid flex-1 gap-2 text-sm">
              {item.highlights.slice(0, 4).map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span aria-hidden="true">–</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <ArrowButton className="mt-6 w-full justify-between" onClick={() => setOpenId(item.id)}>
              Saiba mais
            </ArrowButton>
          </article>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto rounded-3xl border border-line bg-cream">
        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
          <caption className="sr-only">Comparativo dos planos Formaliza, Evolui e Transforma</caption>
          <thead>
            <tr className="border-b border-line">
              <th className="sticky left-0 z-10 bg-cream px-4 py-4 font-medium text-ink-soft">Recurso</th>
              {plans.map((item) => (
                <th
                  key={item.id}
                  className={`px-4 py-4 font-display text-xl ${item.popular ? "bg-amber text-ink" : "text-ink"}`}
                >
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planRows.map((row) => (
              <tr key={row.label} className="border-b border-line last:border-b-0">
                <th className="sticky left-0 z-10 bg-cream px-4 py-3.5 font-medium text-ink shadow-[8px_0_12px_-10px_rgba(20,17,14,0.45)]">{row.label}</th>
                {row.values.map((value, index) => (
                  <td
                    key={`${row.label}-${value}-${index}`}
                    className={`px-4 py-3.5 ${plans[index]?.popular ? "bg-amber/40" : ""} ${value === "Grátis" ? "font-semibold text-ink" : "text-ink-soft"}`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog
        ref={dialogRef}
        className="plan-dialog w-[min(32rem,calc(100%-2rem))] rounded-3xl border border-line bg-cream p-0 text-ink backdrop:bg-ink/60"
        onClose={() => setOpenId(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        {plan ? (
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">Plano</p>
                <h2 className="font-display text-4xl">{plan.name}</h2>
                <p className="mt-1 text-ink-soft">
                  Ideal para {plan.audience.charAt(0).toLowerCase() + plan.audience.slice(1)}
                </p>
              </div>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-xl transition duration-300 hover:bg-ink hover:text-cream"
                onClick={close}
                aria-label="Fechar detalhes do plano"
              >
                ×
              </button>
            </div>
            <ul className="mt-5 grid gap-2 text-sm">
              {plan.highlights.map((highlight) => (
                <li key={highlight} className="rounded-xl bg-paper px-3 py-2">
                  {highlight}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-soft">* {plan.note}</p>
            <ArrowButton href="/contato" className="mt-5" onClick={close}>
              Quero este plano
            </ArrowButton>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
