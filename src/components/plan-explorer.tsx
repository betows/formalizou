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
      <div className="overflow-x-auto border border-line bg-cream">
        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
          <caption className="sr-only">Comparativo dos planos Formaliza, Evolui e Transforma</caption>
          <thead>
            <tr className="border-b border-ink">
              <th className="px-4 py-4 align-bottom font-medium text-ink-soft">Recurso</th>
              {plans.map((item) => (
                <th
                  key={item.id}
                  className={`px-4 py-4 align-bottom ${item.popular ? "border-t-[3px] border-t-orange" : "border-t border-t-transparent"}`}
                >
                  <span className="block text-lg font-semibold tracking-[-0.03em]">{item.name}</span>
                  <span className="mt-1 block text-xs font-normal text-ink-soft">
                    {item.audience.replace(/\.$/, "")}
                  </span>
                  <button
                    type="button"
                    onClick={() => setOpenId(item.id)}
                    className="mt-3 text-xs font-semibold underline decoration-orange decoration-2 underline-offset-4"
                  >
                    Saiba mais
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planRows.map((row) => (
              <tr key={row.label} className="border-b border-line last:border-b-0">
                <th className="px-4 py-3.5 font-medium">{row.label}</th>
                {row.values.map((value, index) => (
                  <td
                    key={`${row.label}-${index}`}
                    className={`px-4 py-3.5 ${plans[index]?.popular ? "bg-orange/[0.04]" : ""} ${value === "Grátis" ? "font-semibold text-moss" : "text-ink-soft"}`}
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
        className="w-[min(28rem,calc(100%-2rem))] border border-ink bg-cream p-0 text-ink backdrop:bg-ink/50"
        onClose={() => setOpenId(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        {plan ? (
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.03em]">{plan.name}</h2>
                <p className="mt-1 text-sm text-ink-soft">{plan.audience}</p>
              </div>
              <button type="button" className="px-2 text-xl leading-none" onClick={close} aria-label="Fechar detalhes do plano">
                ×
              </button>
            </div>
            <ul className="mt-5 border-t border-line text-sm">
              {plan.highlights.map((highlight) => (
                <li key={highlight} className="border-b border-line py-2.5">
                  {highlight}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-soft">* {plan.note}</p>
            <Link href="/contato" className="mt-5 inline-flex bg-orange px-4 py-2.5 text-sm font-semibold text-cream" onClick={close}>
              Quero este plano
            </Link>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
