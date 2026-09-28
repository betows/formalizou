import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import { CookieNotice } from "@/components/cookie-notice";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import "./globals.css";

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-familjen",
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
    <html lang="pt-BR" className={`${familjen.variable} h-full antialiased`}>
      <body className="min-h-full">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-cream"
        >
          Ir para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
        <CookieNotice />
      </body>
    </html>
  );
}
