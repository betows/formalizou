import Link from "next/link";
import { Logo } from "@/components/logo";
import { SITE, WHATSAPP_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink bg-ink text-cream">
      <div className="mx-auto grid max-w-[72rem] gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo className="text-cream" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            Contabilidade online para micro e pequenas empresas. Escritório em Florianópolis, atendimento no país.
          </p>
        </div>
        <div className="text-sm leading-relaxed">
          <p className="font-semibold">{SITE.address.city}</p>
          <p className="mt-2 text-cream/70">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
          </p>
          <a className="mt-3 inline-block underline decoration-cream/30 underline-offset-4" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          <a className="mt-1 block underline decoration-cream/30 underline-offset-4" href={WHATSAPP_URL}>
            WhatsApp {SITE.phoneDisplay}
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm text-cream/80">
          <Link href="/a-formalizou" className="hover:text-cream">
            A Formalizou
          </Link>
          <Link href="/planos" className="hover:text-cream">
            Planos
          </Link>
          <Link href="/servicos-avulsos" className="hover:text-cream">
            Serviços avulsos
          </Link>
          <Link href="/faq" className="hover:text-cream">
            Perguntas frequentes
          </Link>
          <Link href="/privacidade" className="hover:text-cream">
            Privacidade
          </Link>
          <div className="mt-3 flex gap-4 text-cream/60">
            {SITE.socials.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className="hover:text-cream">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-3 text-xs text-cream/45">
        <div className="mx-auto max-w-[72rem]">© {new Date().getFullYear()} Formalizou</div>
      </div>
    </footer>
  );
}
