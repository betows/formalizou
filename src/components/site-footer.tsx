import Link from "next/link";
import { Logo } from "@/components/logo";
import { SITE, WHATSAPP_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            Escritório de contabilidade online para micro e pequenas empresas. Transparência, atendimento humano e menos papel na gaveta.
          </p>
          <div className="mt-5 flex gap-3 text-sm">
            {SITE.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-3 py-1.5 text-cream/80 hover:text-cream"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber">Central de atendimento</p>
          <p className="mt-3 font-display text-2xl">{SITE.address.city}</p>
          <p className="mt-2 text-sm leading-relaxed text-cream/70">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
          </p>
          <a className="mt-3 inline-block text-sm text-cream underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber">Mapa</p>
          <ul className="mt-3 grid gap-2 text-sm text-cream/80">
            <li>
              <Link href="/a-formalizou" className="hover:text-cream">
                A Formalizou
              </Link>
            </li>
            <li>
              <Link href="/planos" className="hover:text-cream">
                Planos
              </Link>
            </li>
            <li>
              <Link href="/servicos-avulsos" className="hover:text-cream">
                Serviços avulsos
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-cream">
                Perguntas frequentes
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-cream">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/privacidade" className="hover:text-cream">
                Privacidade
              </Link>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-cream">
                WhatsApp {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-cream/45">
        © {new Date().getFullYear()} Formalizou. Contabilidade para quem empreende.
      </div>
    </footer>
  );
}
