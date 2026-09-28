"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";

const links = [
  { href: "/a-formalizou", label: "A Formalizou" },
  { href: "/#clientes", label: "Clientes" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  function close() {
    setOpen(false);
    setServicesOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-[72rem] items-center justify-between gap-6 px-5 py-3.5">
        <Link href="/" aria-label="Formalizou, página inicial" onClick={close}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-ink-soft lg:flex" aria-label="Principal">
          <Link href="/a-formalizou" className="hover:text-ink">
            A Formalizou
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="hover:text-ink"
              aria-expanded={servicesOpen}
              aria-controls="menu-servicos"
              onClick={() => setServicesOpen((value) => !value)}
            >
              Serviços
            </button>
            {servicesOpen ? (
              <div id="menu-servicos" className="absolute left-0 top-full z-10 min-w-48 pt-2">
                <div className="border border-line bg-cream py-1 shadow-sm">
                  <Link href="/planos" className="block px-3 py-2 text-ink hover:bg-paper" onClick={close}>
                    Planos
                  </Link>
                  <Link href="/servicos-avulsos" className="block px-3 py-2 text-ink hover:bg-paper" onClick={close}>
                    Serviços avulsos
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
          {links.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
          <Link href="/contato" className="bg-ink px-3 py-2 text-sm font-semibold text-cream hover:bg-orange">
            Falar com a equipe
          </Link>
        </nav>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <span aria-hidden="true">{open ? "×" : "☰"}</span>
        </button>
      </div>
      {open ? (
        <nav id="menu-mobile" className="border-t border-line px-5 py-3 lg:hidden" aria-label="Mobile">
          <div className="grid text-sm">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="border-b border-line py-3" onClick={close}>
                {link.label}
              </Link>
            ))}
            <Link href="/planos" className="border-b border-line py-3" onClick={close}>
              Planos
            </Link>
            <Link href="/servicos-avulsos" className="border-b border-line py-3" onClick={close}>
              Serviços avulsos
            </Link>
            <Link href="/contato" className="py-3 font-semibold" onClick={close}>
              Falar com a equipe
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
