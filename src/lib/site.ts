export const SITE = {
  name: "Formalizou",
  tagline: "Simplificando sua contabilidade",
  email: "comercial@formalizou.com.br",
  phoneDisplay: "(48) 99142-4577",
  whatsappPhone: "5548991424577",
  address: {
    city: "Florianópolis",
    line1: "Rua Tenente Silveira, 482, Sala 203",
    line2: "Centro",
  },
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/formalizou/" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/formalizou/",
    },
    { label: "Instagram", href: "https://www.instagram.com/formalizou_/" },
  ],
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappPhone}`;

export const STATES = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
] as const;

export const SERVICE_OPTIONS = [
  "Planos de Serviços",
  "Planos de Comércio",
  "Abertura de Empresa",
  "Serviços Avulsos",
  "Outros",
] as const;

export function whatsappLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
