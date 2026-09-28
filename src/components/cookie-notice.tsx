"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "formalizou-privacy";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let show = true;
    try {
      show = localStorage.getItem(KEY) !== "ok";
    } catch {
      show = true;
    }
    if (!show) return;
    // localStorage is only readable after mount, so the banner starts hidden.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink bg-cream">
      <div className="mx-auto flex max-w-[72rem] flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink-soft">
          Usamos este aviso para deixar clara a forma como tratamos os dados enviados pelo site.{" "}
          <Link href="/privacidade" className="text-ink underline">
            Ler a política de privacidade
          </Link>
          .
        </p>
        <button
          type="button"
          className="shrink-0 bg-ink px-4 py-2 text-sm font-semibold text-cream"
          onClick={() => {
            try {
              localStorage.setItem(KEY, "ok");
            } catch {
              /* private mode */
            }
            setVisible(false);
          }}
        >
          Aceito os termos
        </button>
      </div>
    </div>
  );
}
