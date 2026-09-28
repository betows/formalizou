"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { WHATSAPP_URL } from "@/lib/site";

const links = [
  { href: "/a-formalizou", label: "A Formalizou" },
  { href: "/#clientes", label: "Clientes" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

const serviceLinks = [
  { href: "/planos", label: "Nossos planos" },
  { href: "/servicos-avulsos", label: "Serviços avulsos" },
];

function navClass(active: boolean) {
  return `border-b-2 pb-0.5 text-sm ${active ? "border-orange text-cream" : "border-transparent text-cream/75 hover:text-cream"}`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesActive = pathname === "/planos" || pathname === "/servicos-avulsos";

  function close() {
    setOpen(false);
    setServicesOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 text-cream backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" aria-label="Formalizou, página inicial" onClick={close}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex" aria-label="Principal">
          <Link href="/a-formalizou" className={navClass(pathname === "/a-formalizou")}>
            A Formalizou
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={navClass(servicesActive)}
              aria-expanded={servicesOpen}
              aria-controls="menu-servicos"
              onClick={() => setServicesOpen((value) => !value)}
            >
              Serviços
              <span className={`ml-1 inline-block text-[0.6rem] ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true">
                ▾
              </span>
            </button>
            {servicesOpen ? (
              <div id="menu-servicos" className="absolute left-0 top-full z-10 min-w-48 pt-3">
                <div className="rounded-xl border border-line bg-cream p-1.5 text-ink shadow-lg">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-lg px-3 py-2 text-sm ${pathname === link.href ? "bg-paper font-medium" : "hover:bg-paper"}`}
                      onClick={close}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {links.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className={navClass(pathname === link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-orange px-3.5 py-1.5 text-sm font-semibold text-cream hover:bg-orange-deep sm:inline-flex"
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
        <nav id="menu-mobile" className="border-t border-white/10 px-5 py-2 lg:hidden" aria-label="Mobile">
          <div className="divide-y divide-white/10 text-sm">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="block py-3 text-cream/90" onClick={close}>
                {link.label}
              </Link>
            ))}
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block py-3 pl-3 text-cream/70" onClick={close}>
                {link.label}
              </Link>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="block py-3 font-semibold text-orange">
              WhatsApp
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
