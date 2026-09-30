import Link from "next/link";
import { Logo } from "@/components/logo";
import { SITE, WHATSAPP_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-cream text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            Escritório de contabilidade online para micro e pequenas empresas. Transparência, atendimento humano e menos papel na gaveta.
          </p>
          <div className="mt-5 flex gap-3 text-sm">
            {SITE.socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-3 py-1.5 text-ink-soft hover:text-ink"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-ink-soft">Central de atendimento</p>
          <p className="mt-3 font-display text-2xl">{SITE.address.city}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
          </p>
          <a className="mt-3 inline-block text-sm underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </div>
        <div>
          <p className="text-sm text-ink-soft">Mapa</p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link href="/a-formalizou" className="hover:text-ink-soft">
                A Formalizou
              </Link>
            </li>
            <li>
              <Link href="/planos" className="hover:text-ink-soft">
                Planos
              </Link>
            </li>
            <li>
              <Link href="/servicos-avulsos" className="hover:text-ink-soft">
                Serviços avulsos
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-ink-soft">
                Perguntas frequentes
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-ink-soft">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/privacidade" className="hover:text-ink-soft">
                Privacidade
              </Link>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-ink-soft">
                WhatsApp {SITE.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line px-5 py-4 text-center text-xs text-ink-soft">
        © {new Date().getFullYear()} Formalizou. Contabilidade para quem empreende.
      </div>
    </footer>
  );
}
