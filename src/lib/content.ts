export type PlanId = "formaliza" | "evolui" | "transforma";

export type Plan = {
  id: PlanId;
  name: string;
  audience: string;
  popular?: boolean;
  highlights: string[];
  note: string;
};

export const plans: Plan[] = [
  {
    id: "formaliza",
    name: "Formaliza",
    audience: "Quem está começando.",
    highlights: [
      "Apuração fiscal e contabilidade completa",
      "Atendimento por e-mail e WhatsApp",
      "1 extrato bancário por mês",
      "Relatório gerencial anual",
    ],
    note: "Folha de pagamento cobrada à parte.",
  },
  {
    id: "evolui",
    name: "Evolui",
    audience: "Empresas em crescimento.",
    popular: true,
    highlights: [
      "Abertura de empresa grátis",
      "Pró-labore de 1 sócio",
      "Até 2 extratos bancários por mês",
      "Relatório com dashboards",
      "Atendimento consultivo",
      "10% de desconto em serviços estratégicos",
    ],
    note: "Folha de pagamento cobrada à parte.",
  },
  {
    id: "transforma",
    name: "Transforma",
    audience: "Empresas que buscam parceria estratégica.",
    highlights: [
      "Simples Nacional ou Lucro Presumido",
      "Até 3 sócios",
      "Até 3 extratos bancários por mês",
      "Atendimento por ligação",
      "Relatório trimestral com dashboards",
      "Certificado digital PJ incluso",
    ],
    note: "Folha de pagamento cobrada à parte.",
  },
];

export const planRows: { label: string; values: [string, string, string] }[] = [
  {
    label: "Regime tributário",
    values: ["Simples Nacional", "Simples Nacional", "Simples Nacional e Lucro Presumido"],
  },
  {
    label: "Faturamento mensal",
    values: ["Até R$ 15.000", "Até R$ 25.000", "Até R$ 60.000"],
  },
  {
    label: "Atividade",
    values: ["Serviços", "Serviços", "Serviços e comércio"],
  },
  {
    label: "Extratos bancários",
    values: ["1 extrato", "2 extratos", "3 extratos"],
  },
  {
    label: "Pró-labore",
    values: ["Não incluso", "1 sócio", "Até 3 sócios"],
  },
  {
    label: "Abertura de empresa",
    values: ["Cobrado à parte", "Grátis", "Grátis"],
  },
  {
    label: "Atendimento",
    values: ["E-mail e WhatsApp", "E-mail e WhatsApp", "E-mail, WhatsApp e ligação"],
  },
  {
    label: "Relatório gerencial",
    values: ["Anual", "Anual com dashboard", "Trimestral com dashboard"],
  },
];

export const steps = [
  {
    title: "Escolha o plano ideal",
    text: "Escolha o plano que cabe no momento da empresa ou fale com um especialista antes de decidir.",
  },
  {
    title: "Documentação",
    text: "A equipe providencia a documentação necessária e envia o checklist do que falta da sua parte.",
  },
  {
    title: "Protocolo",
    text: "Você recebe os documentos prontos e as instruções para protocolar nos órgãos responsáveis.",
  },
];

export const testimonials = [
  {
    quote:
      "Eu gosto e recomendo o serviço da Formalizou. A plataforma é muito prática. Um time competente, ágil e que me passa segurança de que o serviço será bem feito.",
    name: "Deborah Viegas",
    role: "Founder da Balls Style",
  },
  {
    quote:
      "A Formalizou é fera. O atendimento é rápido e a disposição do time para tirar todas as minhas dúvidas foi o que me conquistou. Antes a contabilidade era um pesadelo e hoje não me preocupo mais com isso.",
    name: "Giovanna Innocencio",
    role: "Espaço Innocencio Pansica",
  },
  {
    quote:
      "Recomendo a Formalizou pela competência nos serviços prestados. Qualidade, presteza e muito conhecimento. Somos clientes há 15 anos sem nenhuma ocorrência que pudesse desabonar o trabalho. Podem confiar no time Formalizou.",
    name: "Luiz Barazzutti",
    role: "Diretor administrativo da Fetransporte Brasil",
  },
];

export const principles = [
  {
    title: "Missão",
    text: "Simplificar a contabilidade dos pequenos e microempreendedores para que possam alcançar o sucesso de suas empresas.",
  },
  {
    title: "Visão",
    text: "Ser referência na contabilidade nacional, reconhecida pelo profissionalismo da equipe e por um ambiente de trabalho estimulante.",
  },
  {
    title: "Valores",
    text: "Comunicação clara, trabalho em equipe, relação verdadeira com clientes e atitudes guiadas por ética e responsabilidade.",
  },
];

export const team = [
  {
    name: "Iago Perotti",
    role: "Contador",
    bio: "Formado em Ciências Contábeis e especialista na área tributária, com mais de 5 anos de experiência contábil e fiscal. Criou a Formalizou para tirar a contabilidade do modelo convencional e levá-la para o digital.",
  },
  {
    name: "Karla Perotti",
    role: "Contadora",
    bio: "Começou na contabilidade aos 18 anos. Graduada em Direito, especialista em trabalhista e recursos humanos, com quase 20 anos de experiência. É reconhecida pela assessoria em gestão e questões trabalhistas.",
  },
  {
    name: "Luciane Perotti",
    role: "Contadora",
    bio: "Mais de dez anos nas áreas contábil, fiscal e departamento pessoal. Graduada em Ciências Contábeis na UNISOCIESC / FGV, em Florianópolis, em 2013. Atua em escritório desde 2004 e tem escritório próprio desde 2012.",
  },
];

export type FaqItem = { id: string; question: string; answer: string };

export type FaqCategory = { id: string; label: string; items: FaqItem[] };

export const homeFaq: FaqItem[] = [
  {
    id: "mensalidade",
    question: "O que está incluso na mensalidade?",
    answer:
      "Nos planos de contabilidade entregamos o pacote obrigatório de serviços contábeis e fiscais da empresa. Serviços avulsos não entram na mensalidade e têm honorários próprios. Para saber o que fica de fora, fale com um analista ou consulte a tabela de serviços avulsos.",
  },
  {
    id: "contadores",
    question: "A Formalizou tem contadores de verdade?",
    answer:
      "Não é um robô. Os colaboradores têm graduação em Ciências Contábeis e registro no CRC/SC. O atendimento é com contador de verdade.",
  },
  {
    id: "cidades",
    question: "Vocês atendem todas as cidades?",
    answer:
      "A Formalizou atende a maioria dos estados e municípios do país. A confirmação da sua cidade é feita com um especialista, porque algumas etapas presenciais dependem do município.",
  },
  {
    id: "atendimento",
    question: "Como funciona o atendimento ao cliente?",
    answer:
      "O atendimento é online, por e-mail e WhatsApp. Ligação telefônica entra a partir dos planos avançados. No Plano Transforma também é possível agendar ligação.",
  },
  {
    id: "abertura",
    question: "Como ocorre a abertura da empresa?",
    answer:
      "Depois da assinatura do contrato, você recebe as instruções de envio e recebimento de documentos, de forma confidencial, e um checklist do que é necessário. Nos planos Evolui e Transforma a abertura é grátis. No Formaliza ela é cobrada à parte.",
  },
  {
    id: "migracao",
    question: "Como funciona a migração do antigo contador?",
    answer:
      "O primeiro passo é comunicar a troca ao contador anterior. Em seguida a Formalizou pede login e senha da prefeitura, código de acesso do Simples Nacional, código e senha do e-CAC (ou o certificado digital) e o contrato social. A equipe conduz a passagem.",
  },
];

export const faqCategories: FaqCategory[] = [
  {
    id: "ainda-nao",
    label: "Ainda não sou cliente",
    items: [
      homeFaq[1],
      homeFaq[2],
      {
        id: "comercio",
        question: "Vocês atendem empresas de comércio?",
        answer:
          "Sim. No Plano Transforma atendemos empresas de serviços e de comércio.",
      },
      {
        id: "avulsos-sem-plano",
        question: "Posso contratar serviços avulsos sem ter um plano?",
        answer:
          "Alguns serviços sim, como alteração contratual e baixa de empresa. Serviços recorrentes pedem um plano ativo.",
      },
      {
        id: "planejamento",
        question: "O que é o planejamento tributário?",
        answer:
          "É uma análise da empresa para encontrar economia fiscal dentro da lei. Pode reduzir impostos de forma relevante. O valor parte de R$ 1.000,00 e varia com a complexidade.",
      },
      {
        id: "portes",
        question: "Quais portes de empresa a Formalizou atende?",
        answer:
          "Abrimos e fazemos a contabilidade de microempresas e empresas de pequeno porte. Em algumas cidades também migramos MEI para ME ou LTDA.\n\nMEI: faturamento de até R$ 81.000,00 ao ano. Não atendemos.\nME: faturamento de até R$ 360.000,00 ao ano. Atendemos.\nEPP: de R$ 360.000,00 até R$ 4.800.000,00 ao ano. Atendemos.\nDemais portes: sem limite de faturamento, mas sem adesão ao Simples Nacional.",
      },
      {
        id: "associacoes",
        question: "A Formalizou abre associações e organizações sem fins lucrativos?",
        answer:
          "Sim, mas esse processo não está disponível em todos os municípios. Consulte um especialista antes de começar.",
      },
      {
        id: "atividades",
        question: "Quais atividades não são atendidas?",
        answer:
          "Ainda não atendemos administradora de condomínios, agricultura, cartórios, cooperativas, fábricas e indústrias, farmácias, instituições financeiras, hotelaria, serviços de segurança e transporte de cargas. A lista não é fechada: confirme a atividade com a equipe antes de iniciar a abertura.",
      },
      {
        id: "minha-cidade",
        question: "Vocês abrem empresas na minha cidade?",
        answer:
          "Depende do município. Confirme com um especialista pelo formulário ou pelo WhatsApp do site.",
      },
    ],
  },
  {
    id: "migrar",
    label: "Migrar empresa",
    items: [
      {
        id: "docs-migracao",
        question: "Quais documentos são necessários para migrar a contabilidade?",
        answer:
          "Contrato social ou requerimento de empresário, alvará de funcionamento, dados de acesso ao site da prefeitura, código de acesso do Simples Nacional, inscrição estadual se for comércio e certificado digital modelo A1. Tudo em formato digital.",
      },
      homeFaq[5],
      {
        id: "implementacao",
        question: "Qual a diferença entre implementação e abertura?",
        answer:
          "Abertura é para empresa nova. Implementação, ou migração, é para empresa que já existe e vem de outro contador. Inclui verificação de pendências e regularização inicial.",
      },
    ],
  },
  {
    id: "abrir",
    label: "Abrir empresa",
    items: [
      {
        id: "como-abrir",
        question: "Como abrir minha empresa com a Formalizou?",
        answer:
          "1. Cadastro. Você escolhe um plano e informa nome pretendido, cidade, tipo de empresa e a atividade. Quanto mais detalhe, melhor a análise do CNAE.\n\n2. Pagamento. Assina o contrato e paga a primeira mensalidade. No processo de abertura, além disso, ficam as taxas governamentais.\n\n3. Coleta. A equipe pede sócios, documentos pessoais e a cópia do IPTU do imóvel.\n\n4. Aprovação. Com a atividade definida, começa a consulta prévia de nome e endereço. Se houver indeferimento, a Formalizou procura um caminho.\n\n5. Registro. Os documentos seguem em PDF para assinatura, digital ou em cartório, conforme a junta comercial. Com o CNPJ liberado ainda falta o cadastro na prefeitura para emitir nota.\n\n6. Enquadramento. Depois da prefeitura, a empresa entra no regime mais adequado. No Simples Nacional o pedido segue para a Receita Federal.\n\n7. Empresa pronta. Com a nota liberada, a contabilidade mensal passa a ser com a Formalizou.",
      },
      {
        id: "durante-abertura",
        question: "Como falar com a Formalizou durante a abertura?",
        answer:
          "E-mail ou WhatsApp. A equipe responde as dúvidas do processo por esses canais.",
      },
      {
        id: "residencial",
        question: "Posso abrir uma empresa em endereço residencial?",
        answer:
          "Na maioria das vezes, sim. A prefeitura é quem define. Alguns municípios não aceitam comércio em endereço residencial, então a viabilidade é consultada antes da abertura.",
      },
      {
        id: "endereco",
        question: "Quais informações do endereço são necessárias?",
        answer:
          "Endereço completo e inscrição imobiliária, que sai na cópia do IPTU. Esse número é obrigatório e traz dados como a área do imóvel.",
      },
      {
        id: "ecpf",
        question: "Preciso de certificado digital para abrir a empresa?",
        answer:
          "Na maior parte dos órgãos, sim. Em Santa Catarina, onde está a maior parte do atendimento, os sócios precisam de e-CPF para assinar o contrato de forma digital. A Formalizou orienta a compra e a emissão.",
      },
      {
        id: "ecnpj",
        question: "Preciso de um certificado digital empresarial?",
        answer:
          "Grande parte dos municípios já exige e-CNPJ para emitir nota fiscal. A equipe indica se a sua cidade pede o certificado e onde emitir.",
      },
      {
        id: "prazo",
        question: "Quanto tempo leva para abrir a empresa?",
        answer:
          "Em geral, de 30 a 60 dias depois da confirmação dos CNAEs. O prazo varia com a análise dos órgãos. A emissão de notas só começa depois do registro na prefeitura.",
      },
      {
        id: "protocolo",
        question: "A Formalizou protocola os documentos?",
        answer:
          "A equipe prepara toda a documentação. O protocolo presencial, quando a prefeitura ainda exige, é do cliente, com instruções por e-mail. Em alguns municípios de Santa Catarina o protocolo é feito pela Formalizou, entre eles Florianópolis, São José, Biguaçu, Palhoça, Governador Celso Ramos, Santo Amaro da Imperatriz, Blumenau, Balneário Camboriú e Tijucas. Confirme a sua cidade com a equipe.",
      },
    ],
  },
  {
    id: "etapas",
    label: "Etapas da abertura",
    items: [
      {
        id: "junta",
        question: "Como funciona o protocolo na Junta Comercial?",
        answer:
          "Em Santa Catarina o processo é digital e não pede comparecimento, com exceção de serviços que ainda não entraram na plataforma online.",
      },
      {
        id: "prefeitura",
        question: "Como funciona o protocolo na prefeitura?",
        answer:
          "Depois do CNPJ começa o cadastro municipal, para nota fiscal e alvará quando for o caso. A Formalizou elabora os documentos e envia por e-mail com o passo a passo. O protocolo em si fica com o cliente. A análise costuma levar de 15 a 25 dias úteis, e muda de cidade para cidade.",
      },
      {
        id: "simples",
        question: "Como funciona o enquadramento no Simples Nacional?",
        answer:
          "O pedido segue para a Receita Federal depois do registro na prefeitura. A liberação costuma cair nos dias 06, 16 e 26, com variação da Receita. Com o enquadramento aprovado, a abertura termina e a nota pode ser emitida.",
      },
    ],
  },
  {
    id: "cliente",
    label: "Sou cliente",
    items: [
      homeFaq[0],
      homeFaq[3],
      {
        id: "solicitar",
        question: "Como solicitar serviços ou tirar dúvidas?",
        answer:
          "Pelo canal do seu plano: e-mail, WhatsApp ou ligação, quando o plano inclui telefone.",
      },
      {
        id: "documentos-mes",
        question: "Quais informações a Formalizou precisa todo mês?",
        answer:
          "Extrato bancário com as despesas identificadas, notas fiscais de serviço para apurar impostos e, se houver mudança, as informações da folha de pagamento.",
      },
      {
        id: "fora-do-plano",
        question: "O que não está incluso no plano?",
        answer:
          "Serviços extras, reemissão de guias, alterações cadastrais e outros pedidos pontuais ficam na tabela de serviços avulsos. Os valores também podem ser confirmados com um analista.",
      },
      {
        id: "trocar-plano",
        question: "Posso trocar de plano depois?",
        answer:
          "Sim. Upgrade ou downgrade a qualquer momento. O novo valor entra na fatura seguinte.",
      },
      {
        id: "estourou",
        question: "Ultrapassei o faturamento do meu plano. E agora?",
        answer:
          "O valor não muda no meio do mês: a alteração vale no próximo vencimento. A equipe indica o plano que acompanha o novo faturamento.",
      },
      {
        id: "abertura-plano",
        question: "Como a abertura entra em cada plano?",
        answer:
          "Nos planos Evolui e Transforma a abertura é gratuita. No Formaliza ela é um serviço adicional, de R$ 250,00, além das taxas do governo.",
      },
    ],
  },
];

export const avulsoGroups: {
  title: string;
  items: { name: string; detail: string; price: string }[];
}[] = [
  {
    title: "Todo mês",
    items: [
      {
        name: "Folha de pagamento",
        detail: "Por funcionário registrado, mensal",
        price: "R$ 30,00 / funcionário",
      },
      {
        name: "Pró-labore adicional",
        detail: "Por sócio além do incluso no plano, mensal",
        price: "R$ 30,00 / sócio",
      },
      {
        name: "Extrato bancário adicional",
        detail: "Por extrato além do incluso no plano, mensal",
        price: "R$ 40,00 / extrato",
      },
      {
        name: "Emissão de notas fiscais",
        detail: "Quando a emissão é feita pela Formalizou",
        price: "R$ 10,00 / nota",
      },
    ],
  },
  {
    title: "Alterações",
    items: [
      {
        name: "Alteração contratual",
        detail: "Objeto, endereço, sócios ou capital",
        price: "R$ 800,00",
      },
      {
        name: "Alteração de escrituração contábil",
        detail: "Retificação de escrituração já transmitida",
        price: "R$ 120,00",
      },
      {
        name: "Alteração na folha de pagamento",
        detail: "Retificação de informações da folha",
        price: "R$ 25,90",
      },
      {
        name: "Alteração na Receita Federal",
        detail: "Atualização cadastral na RFB",
        price: "R$ 50,00",
      },
      {
        name: "Regularização de pendências",
        detail: "Orçamento conforme a complexidade",
        price: "Sob consulta",
      },
      {
        name: "Reabertura de mês contábil",
        detail: "Retificação de período já fechado",
        price: "R$ 60,00",
      },
    ],
  },
  {
    title: "Abertura, baixa e licenças",
    items: [
      {
        name: "Abertura no plano Formaliza",
        detail: "Registro completo de empresa nova",
        price: "R$ 250,00",
      },
      {
        name: "Abertura nos planos Evolui e Transforma",
        detail: "Inclusa no plano",
        price: "Isento",
      },
      {
        name: "Baixa até 12 meses de contrato",
        detail: "Encerramento completo",
        price: "R$ 1.250,00",
      },
      {
        name: "Baixa após 12 meses de contrato",
        detail: "Encerramento completo",
        price: "R$ 850,00",
      },
      {
        name: "Solicitação de alvará",
        detail: "Funcionamento, sanitário ou bombeiro",
        price: "R$ 150,00 / alvará",
      },
      {
        name: "Solicitação de licenças",
        detail: "Orçamento conforme o tipo",
        price: "Sob consulta",
      },
      {
        name: "Cadastro de prestadores (CPOM/CEPOM)",
        detail: "Cadastro no município",
        price: "R$ 200,00",
      },
    ],
  },
  {
    title: "Impostos e declarações",
    items: [
      {
        name: "Parcelamento no Simples Nacional",
        detail: "Adesão a parcelamento de tributos",
        price: "R$ 80,00",
      },
      {
        name: "Parcelamento no Lucro Presumido",
        detail: "Adesão a parcelamento de tributos",
        price: "R$ 100,00",
      },
      {
        name: "Demonstrações contábeis",
        detail: "Balanço, DRE e demais demonstrações",
        price: "R$ 150,00",
      },
      {
        name: "Declaração de faturamento",
        detail: "Para comprovação",
        price: "R$ 40,00",
      },
      {
        name: "Declaração de ausência de faturamento",
        detail: "Para empresa sem movimento",
        price: "R$ 29,90",
      },
      {
        name: "Declaração de previsão de faturamento",
        detail: "Projeção para uma finalidade específica",
        price: "R$ 40,00",
      },
      {
        name: "Envio da CND",
        detail: "Certidão negativa de débitos",
        price: "R$ 25,90",
      },
      {
        name: "Livros contábeis",
        detail: "Impressão ou emissão",
        price: "R$ 200,00 / livro",
      },
      {
        name: "ReDARF online",
        detail: "Retificação de DARF",
        price: "R$ 25,90",
      },
      {
        name: "Reemissão de guia no Lucro Presumido",
        detail: "Por guia",
        price: "R$ 10,00 / guia",
      },
      {
        name: "Reemissão de guia no Simples Nacional",
        detail: "Por guia",
        price: "R$ 7,00 / guia",
      },
      {
        name: "Reemissão de guia de FGTS",
        detail: "Período em que a Formalizou era a contabilidade",
        price: "R$ 10,00 / guia",
      },
      {
        name: "Enquadramento ou reenquadramento ME/EPP",
        detail: "Alteração de enquadramento",
        price: "R$ 100,00",
      },
      {
        name: "Planejamento tributário",
        detail: "Valor conforme a complexidade",
        price: "A partir de R$ 1.000,00",
      },
      {
        name: "Documentos para licitação",
        detail: "Apoio na emissão",
        price: "R$ 300,00",
      },
    ],
  },
];
