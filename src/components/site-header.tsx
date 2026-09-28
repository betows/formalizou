"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { WHATSAPP_URL } from "@/lib/site";

const links = [
  { href: "/a-formalizou", label: "A Formalizou" },
  { href: "/#clientes", label: "Clientes" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contatos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  function close() {
    setOpen(false);
    setServicesOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 text-cream backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" aria-label="Formalizou, página inicial" onClick={close}>
          <Logo compact />
        </Link>
        <nav className="hidden items-center gap-7 text-sm lg:flex" aria-label="Principal">
          <Link href="/a-formalizou" className="text-cream/80 hover:text-cream">
            A Formalizou
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="text-cream/80 hover:text-cream"
              aria-expanded={servicesOpen}
              aria-controls="menu-servicos"
              onClick={() => setServicesOpen((value) => !value)}
            >
              Serviços
            </button>
            {servicesOpen ? (
              <div
                id="menu-servicos"
                className="absolute left-0 top-full z-10 min-w-52 pt-3"
              >
                <div className="rounded-2xl border border-white/10 bg-ink p-2 shadow-2xl">
                  <Link
                    href="/planos"
                    className="block rounded-xl px-3 py-2 hover:bg-white/5"
                    onClick={close}
                  >
                    Nossos planos
                  </Link>
                  <Link
                    href="/servicos-avulsos"
                    className="block rounded-xl px-3 py-2 hover:bg-white/5"
                    onClick={close}
                  >
                    Serviços avulsos
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
          {links.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="text-cream/80 hover:text-cream">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-orange px-4 py-2 text-sm font-semibold text-cream hover:bg-orange-deep sm:inline-flex"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            <span aria-hidden="true" className="text-lg leading-none">
              {open ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="menu-mobile" className="border-t border-white/10 px-5 py-4 lg:hidden" aria-label="Mobile">
          <div className="grid gap-1 text-sm">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-xl px-3 py-2 hover:bg-white/5" onClick={close}>
                {link.label}
              </Link>
            ))}
            <p className="px-3 pt-3 text-xs uppercase tracking-[0.16em] text-cream/45">Serviços</p>
            <Link href="/planos" className="rounded-xl px-3 py-2 hover:bg-white/5" onClick={close}>
              Nossos planos
            </Link>
            <Link href="/servicos-avulsos" className="rounded-xl px-3 py-2 hover:bg-white/5" onClick={close}>
              Serviços avulsos
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-orange px-4 py-3 text-center font-semibold"
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
