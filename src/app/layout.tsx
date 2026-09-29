import type { Metadata } from "next";
import { Nunito, Outfit } from "next/font/google";
import { CookieNotice } from "@/components/cookie-notice";
import { HashScroll } from "@/components/hash-scroll";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Formalizou — Simplificando sua contabilidade",
    template: "%s · Formalizou",
  },
  description:
    "Contabilidade online para micro e pequenas empresas. Abra sua empresa, migre de contador e acompanhe a rotina fiscal com um time de contadores de verdade.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${nunito.variable} h-full antialiased`}>
      <body className="min-h-full">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cream focus:px-4 focus:py-2"
        >
          Ir para o conteúdo
        </a>
        <HashScroll />
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
        <CookieNotice />
      </body>
    </html>
  );
}
