import { SITE, WHATSAPP_URL } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-4 z-40 border border-ink bg-cream px-3 py-2 text-sm font-semibold text-ink hover:bg-ink hover:text-cream sm:bottom-5 sm:right-5"
    >
      WhatsApp
      <span className="sr-only">, {SITE.phoneDisplay}</span>
    </a>
  );
}
