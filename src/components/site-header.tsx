"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type MouseEvent } from "react";
import { Logo } from "@/components/logo";
import { WHATSAPP_URL } from "@/lib/site";

const links = [
  { href: "/#sobre", label: "A Formalizou" },
  { href: "/#clientes", label: "Clientes" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contato", label: "Contato" },
];

const serviceLinks = [
  { href: "/#planos", label: "Nossos planos" },
  { href: "/servicos-avulsos", label: "Serviços avulsos" },
];

function navClass(active: boolean) {
  return `inline-flex h-10 items-center rounded-full px-3 text-sm leading-none transition ${active ? "bg-ink/10 text-ink" : "text-ink/70 hover:bg-ink/5 hover:text-ink"}`;
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

  function onMenuClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const menuWasOpen = open;
    close();
    const id = href.startsWith("/#") ? href.slice(2) : "";
    if (!id || pathname !== "/") return;
    event.preventDefault();
    window.setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", `/#${id}`);
    }, menuWasOpen ? 80 : 0);
  }

  return (
    <header className="fixed top-3 right-0 left-0 z-50 px-3 sm:top-4 sm:px-4">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-full bg-cream px-3 text-ink shadow-sm sm:px-4">
        <Link href="/" aria-label="Formalizou, página inicial" className="flex shrink-0 items-center" onClick={close}>
          <Logo />
        </Link>
        <nav className="hidden h-full items-center gap-1 whitespace-nowrap lg:flex" aria-label="Principal">
          <Link href="/#sobre" className={navClass(pathname === "/a-formalizou")} onClick={(event) => onMenuClick(event, "/#sobre")}>
            A Formalizou
          </Link>
          <div
            className="relative flex items-center"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={`${navClass(servicesActive)} gap-1`}
              aria-expanded={servicesOpen}
              aria-controls="menu-servicos"
              onClick={() => setServicesOpen((value) => !value)}
            >
              Serviços
              <span className={`text-[0.65rem] leading-none ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true">
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
                      className={`block rounded-lg px-3 py-2 text-sm ${pathname === link.href || (link.href === "/#planos" && pathname === "/planos") ? "bg-paper font-medium" : "hover:bg-paper"}`}
                      onClick={(event) => onMenuClick(event, link.href)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {links.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className={navClass(pathname === link.href)} onClick={(event) => onMenuClick(event, link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 items-center rounded-full bg-orange px-4 text-sm font-semibold text-cream transition hover:bg-orange-deep sm:inline-flex"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 lg:hidden"
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
        <nav id="menu-mobile" className="mx-auto mt-2 max-w-6xl rounded-3xl bg-cream px-5 py-2 text-ink shadow-lg lg:hidden" aria-label="Mobile">
          <div className="divide-y divide-ink/10 text-sm">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="block py-3 text-ink" onClick={(event) => onMenuClick(event, link.href)}>
                {link.label}
              </Link>
            ))}
            {serviceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block py-3 pl-3 text-ink/70" onClick={(event) => onMenuClick(event, link.href)}>
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
