import { SITE, WHATSAPP_URL } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#1c7a4a] px-4 py-3 text-sm font-semibold text-cream shadow-[0_12px_30px_-12px_rgba(20,17,14,0.7)] hover:bg-[#16633c] sm:bottom-5 sm:left-5 sm:right-auto"
    >
      <span aria-hidden="true" className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-xs">
        W
      </span>
      WhatsApp
      <span className="sr-only">, {SITE.phoneDisplay}</span>
    </a>
  );
}
