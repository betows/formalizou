"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((item) => (
          <article
            key={item.id}
            className={`flex flex-col rounded-3xl border p-6 ${item.popular ? "border-orange bg-ink text-cream shadow-[0_24px_50px_-28px_rgba(239,108,26,0.8)]" : "border-line bg-cream text-ink"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-3xl">{item.name}</h3>
              {item.popular ? (
                <span className="rounded-full bg-orange px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream">
                  Mais escolhido
                </span>
              ) : null}
            </div>
            <p className={`mt-2 text-sm ${item.popular ? "text-cream/70" : "text-ink-soft"}`}>
              Ideal para {item.audience.charAt(0).toLowerCase() + item.audience.slice(1)}
            </p>
            <ul className="mt-5 grid flex-1 gap-2 text-sm">
              {item.highlights.slice(0, 4).map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="text-orange" aria-hidden="true">
                    ●
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setOpenId(item.id)}
              className={`mt-6 rounded-full px-4 py-2.5 text-sm font-semibold ${item.popular ? "bg-cream text-ink" : "bg-ink text-cream"}`}
            >
              Saiba mais
            </button>
          </article>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto rounded-3xl border border-line bg-cream">
        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
          <caption className="sr-only">Comparativo dos planos Formaliza, Evolui e Transforma</caption>
          <thead>
            <tr className="border-b border-line">
              <th className="px-4 py-4 font-medium text-ink-soft">Recurso</th>
              {plans.map((item) => (
                <th
                  key={item.id}
                  className={`px-4 py-4 font-display text-xl ${item.popular ? "bg-orange/10 text-orange-deep" : "text-ink"}`}
                >
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planRows.map((row) => (
              <tr key={row.label} className="border-b border-line last:border-b-0">
                <th className="px-4 py-3.5 font-medium text-ink">{row.label}</th>
                {row.values.map((value, index) => (
                  <td
                    key={`${row.label}-${value}-${index}`}
                    className={`px-4 py-3.5 ${plans[index]?.popular ? "bg-orange/5" : ""} ${value === "Grátis" ? "font-semibold text-moss" : "text-ink-soft"}`}
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
        className="w-[min(32rem,calc(100%-2rem))] rounded-3xl border border-line bg-cream p-0 text-ink backdrop:bg-ink/60"
        onClose={() => setOpenId(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        {plan ? (
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange">Plano</p>
                <h2 className="font-display text-4xl">{plan.name}</h2>
                <p className="mt-1 text-ink-soft">
                  Ideal para {plan.audience.charAt(0).toLowerCase() + plan.audience.slice(1)}
                </p>
              </div>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-xl"
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
            <Link
              href="/contato"
              className="mt-5 inline-flex rounded-full bg-orange px-5 py-3 text-sm font-semibold text-cream"
              onClick={close}
            >
              Quero este plano
            </Link>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
