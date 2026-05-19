import type { IndustryPageContent } from "./types";

export const industries: IndustryPageContent[] = [
  {
    slug: "healthcare",
    meta: {
      title: { en: "Salesforce for Healthcare & Life Sciences | Oktana", es: "Salesforce para salud y ciencias de la vida | Oktana" },
      description: {
        en: "Oktana delivers HIPAA-compliant Salesforce implementations for health systems, payers, and life sciences companies. Health Cloud, patient portals, and AI — done right.",
        es: "Oktana implementa Salesforce compatible con HIPAA para sistemas de salud, pagadores y empresas de life sciences.",
      },
    },
    hero: {
      headline: { en: "Healthcare moves fast. Your Salesforce platform should too.", es: "La salud avanza rápido. Su plataforma Salesforce también debería." },
      subheadline: {
        en: "From patient engagement portals to care coordination workflows, Oktana helps healthcare and life sciences organizations unlock the full potential of Salesforce Health Cloud — with the HIPAA compliance and onshore availability your organization requires.",
        es: "Desde portales de pacientes hasta flujos de coordinación de atención, Oktana ayuda a organizaciones de salud a maximizar Salesforce Health Cloud con cumplimiento HIPAA y recursos onshore.",
      },
      cta: { en: "Talk to a Healthcare Specialist", es: "Hable con un especialista en salud" },
    },
    context: {
      title: { en: "Why Salesforce in healthcare", es: "Por qué Salesforce en salud" },
      body: {
        en: "Healthcare organizations face patient data security, complex payer-provider relationships, regulatory compliance, and pressure to do more with constrained IT budgets. Salesforce Health Cloud is purpose-built for this world — but getting it right requires a partner who has done it before.",
        es: "Las organizaciones de salud enfrentan seguridad de datos del paciente, relaciones complejas pagador-proveedor, cumplimiento regulatorio y presión por hacer más con menos presupuesto de TI. Health Cloud está diseñado para este mundo.",
      },
    },
    deliverables: {
      title: { en: "What We Deliver", es: "Qué entregamos" },
      items: {
        en: [
          "Salesforce Health Cloud implementation and customization",
          "Patient and member portal development (Experience Cloud)",
          "Care coordination and case management workflows",
          "HIPAA-compliant data architecture and integrations",
          "EHR/EMR integrations (Epic, Cerner, and others)",
          "AI-powered patient engagement and triage automation",
        ],
        es: [
          "Implementación y personalización de Salesforce Health Cloud",
          "Desarrollo de portales para pacientes y afiliados (Experience Cloud)",
          "Flujos de coordinación de atención y gestión de casos",
          "Arquitectura de datos e integraciones compatibles con HIPAA",
          "Integraciones EHR/EMR (Epic, Cerner y otros)",
          "Engagement de pacientes y automatización de triaje con IA",
        ],
      },
    },
    trustCallout: {
      en: "SOC 2 certified. Onshore resources available for HIPAA-sensitive environments. We maintain rigorous data governance standards across every healthcare engagement.",
      es: "Certificación SOC 2. Recursos onshore disponibles para entornos sensibles a HIPAA. Mantenemos estándares rigurosos de gobernanza de datos.",
    },
    ctaBand: {
      headline: { en: "Let's build a Salesforce environment your clinical and operational teams can trust.", es: "Construyamos un entorno Salesforce en el que sus equipos clínicos y operativos confíen." },
      cta: { en: "Schedule a Healthcare Discovery Call", es: "Agende una llamada de descubrimiento en salud" },
    },
  },
  {
    slug: "financial-services",
    meta: {
      title: { en: "Salesforce for Financial Services & Fintech | Oktana", es: "Salesforce para servicios financieros y fintech | Oktana" },
      description: {
        en: "Oktana builds SOC 2 compliant Salesforce solutions for banks, wealth managers, insurance companies, and fintechs.",
        es: "Oktana construye soluciones Salesforce compatibles con SOC 2 para bancos, gestores de patrimonio, aseguradoras y fintechs.",
      },
    },
    hero: {
      headline: { en: "In financial services, the margin for error is zero. So is ours.", es: "En servicios financieros, el margen de error es cero. El nuestro también." },
      subheadline: {
        en: "Oktana helps banks, wealth managers, insurance companies, and fintech firms build Salesforce systems that automate compliance, accelerate client onboarding, and surface the insights that drive better decisions.",
        es: "Oktana ayuda a bancos, gestores de patrimonio, aseguradoras y fintechs a construir sistemas Salesforce que automatizan cumplimiento y aceleran onboarding.",
      },
      cta: { en: "Talk to a Financial Services Specialist", es: "Hable con un especialista en servicios financieros" },
    },
    context: {
      title: { en: "Salesforce beyond contacts", es: "Salesforce más allá de los contactos" },
      body: {
        en: "Financial services firms need Salesforce to enforce compliance workflows, automate KYC/AML processes, connect to core banking and trading systems, and deliver personalized client experiences at scale.",
        es: "Las firmas financieras necesitan Salesforce para cumplimiento, KYC/AML, conexión con core banking y experiencias personalizadas a escala.",
      },
    },
    deliverables: {
      title: { en: "What We Deliver", es: "Qué entregamos" },
      items: {
        en: [
          "Salesforce Financial Services Cloud implementation",
          "Client onboarding and KYC workflow automation",
          "Advisor and relationship manager portals",
          "Core banking, trading, and insurance system integrations",
          "Regulatory compliance automation (SOX, FINRA, GDPR)",
          "AI-powered lead scoring and churn prediction",
        ],
        es: [
          "Implementación de Salesforce Financial Services Cloud",
          "Automatización de onboarding y flujos KYC",
          "Portales para asesores y relationship managers",
          "Integraciones con core banking, trading y seguros",
          "Automatización de cumplimiento (SOX, FINRA, GDPR)",
          "Lead scoring y predicción de churn con IA",
        ],
      },
    },
    trustCallout: {
      en: "SOC 2 certified. We bring the same compliance rigor to our own operations that we help our clients enforce in theirs.",
      es: "Certificación SOC 2. Aplicamos el mismo rigor de cumplimiento en nuestras operaciones que ayudamos a nuestros clientes a exigir.",
    },
    ctaBand: {
      headline: { en: "Let's build a Salesforce environment your compliance team will love.", es: "Construyamos un entorno Salesforce que su equipo de cumplimiento apruebe." },
      cta: { en: "Talk to a Financial Services Expert", es: "Hable con un experto en servicios financieros" },
    },
  },
  {
    slug: "high-tech",
    meta: {
      title: { en: "Salesforce for High Tech & SaaS Companies | Oktana", es: "Salesforce para alta tecnología y SaaS | Oktana" },
      description: {
        en: "Oktana helps high-growth tech and SaaS companies scale their Salesforce orgs, build AppExchange apps, and deploy AI-powered automation.",
        es: "Oktana ayuda a empresas tech y SaaS en crecimiento a escalar sus orgs Salesforce, construir apps AppExchange e implementar IA.",
      },
    },
    hero: {
      headline: { en: "Build fast. Scale smart. Don't break Salesforce.", es: "Construya rápido. Escale inteligente. No rompa Salesforce." },
      subheadline: {
        en: "High-tech companies move fast. Oktana helps SaaS companies, software vendors, and technology firms build scalable Salesforce architectures that keep pace with growth — without creating the technical debt that slows you down two years later.",
        es: "Las empresas de alta tecnología se mueven rápido. Oktana ayuda a SaaS y vendors de software a construir arquitecturas Salesforce escalables sin deuda técnica.",
      },
      cta: { en: "Talk to a High Tech Specialist", es: "Hable con un especialista en alta tecnología" },
    },
    context: {
      title: { en: "The SaaS Salesforce challenge", es: "El desafío Salesforce del SaaS" },
      body: {
        en: "SaaS and tech companies are often Salesforce customers and ecosystem players simultaneously. They need AppExchange apps, developer communities, partner portals, and complex CPQ and subscription billing integrations — all on a platform that has to scale with their product.",
        es: "Las empresas SaaS y tech suelen ser clientes y actores del ecosistema Salesforce a la vez. Necesitan AppExchange, comunidades de desarrolladores, portales de socios y CPQ.",
      },
    },
    deliverables: {
      title: { en: "What We Deliver", es: "Qué entregamos" },
      items: {
        en: [
          "AppExchange app development, security review, and publishing",
          "Salesforce CPQ and subscription billing implementations",
          "Developer community and API portal builds (MuleSoft Anypoint)",
          "Partner relationship management (PRM) portals",
          "Salesforce org architecture reviews and scalability planning",
          "AI-powered sales automation and pipeline intelligence",
        ],
        es: [
          "Desarrollo de apps AppExchange, security review y publicación",
          "Implementaciones de Salesforce CPQ y facturación por suscripción",
          "Comunidades de desarrolladores y portales API (MuleSoft Anypoint)",
          "Portales PRM",
          "Revisiones de arquitectura y planificación de escalabilidad",
          "Automatización comercial e inteligencia de pipeline con IA",
        ],
      },
    },
    ctaBand: {
      headline: { en: "Let's scale your Salesforce org as fast as you scale your product.", es: "Escalemos su org Salesforce tan rápido como escala su producto." },
      cta: { en: "Talk to Our High Tech Team", es: "Hable con nuestro equipo de alta tecnología" },
    },
  },
  {
    slug: "nonprofit",
    meta: {
      title: { en: "Salesforce for Nonprofits | NPSP & NPC Implementation | Oktana", es: "Salesforce para ONG | NPSP y NPC | Oktana" },
      description: {
        en: "Oktana helps nonprofits implement and optimize Salesforce Nonprofit Success Pack (NPSP) and Nonprofit Cloud.",
        es: "Oktana ayuda a organizaciones sin fines de lucro a implementar NPSP y Nonprofit Cloud.",
      },
    },
    hero: {
      headline: { en: "Your mission deserves technology that works as hard as you do.", es: "Su misión merece tecnología que trabaje tan duro como usted." },
      subheadline: {
        en: "Oktana helps nonprofit organizations implement Salesforce solutions that streamline donor management, program delivery, and case management — so your team can focus on impact, not spreadsheets.",
        es: "Oktana ayuda a ONG a implementar Salesforce que optimiza donantes, programas y gestión de casos para enfocarse en el impacto.",
      },
      cta: { en: "Talk to Our Nonprofit Team", es: "Hable con nuestro equipo sin fines de lucro" },
    },
    context: {
      title: { en: "Technology for mission-driven teams", es: "Tecnología para equipos con misión" },
      body: {
        en: "Nonprofits are asked to do more with less every year. Salesforce Nonprofit Cloud and NPSP can transform how you manage relationships, track outcomes, and report to funders — but only when implemented by a team that understands both the platform and the mission-driven context.",
        es: "Las ONG deben hacer más con menos cada año. Nonprofit Cloud y NPSP transforman relaciones, resultados e informes a financiadores cuando se implementan bien.",
      },
    },
    deliverables: {
      title: { en: "What We Deliver", es: "Qué entregamos" },
      items: {
        en: [
          "Salesforce NPSP and Nonprofit Cloud (NPC) implementation",
          "Donor management, major gift tracking, and fundraising automation",
          "Constituent and volunteer portals (Experience Cloud)",
          "Program and case management workflows",
          "Grant management and reporting",
          "Data migration from legacy CRMs",
        ],
        es: [
          "Implementación de NPSP y Nonprofit Cloud (NPC)",
          "Gestión de donantes, major gifts y automatización de fundraising",
          "Portales para constituents y voluntarios (Experience Cloud)",
          "Flujos de programas y gestión de casos",
          "Gestión de grants e informes",
          "Migración de datos desde CRMs legacy",
        ],
      },
    },
    ctaBand: {
      headline: { en: "Let's build the Salesforce org your mission deserves.", es: "Construyamos la org Salesforce que su misión merece." },
      cta: { en: "Schedule a Nonprofit Discovery Call", es: "Agende un discovery para ONG" },
    },
  },
  {
    slug: "public-sector",
    meta: {
      title: { en: "Salesforce for U.S. Government & Public Sector | Oktana", es: "Salesforce para gobierno y sector público de EE. UU. | Oktana" },
      description: {
        en: "Oktana supports U.S. federal, state, and local government agencies with onshore Salesforce implementation and compliance-first architecture.",
        es: "Oktana apoya agencias federales, estatales y locales de EE. UU. con implementación onshore y arquitectura compliance-first.",
      },
    },
    hero: {
      headline: { en: "Government agencies deserve modern technology — and the teams to implement it.", es: "Las agencias gubernamentales merecen tecnología moderna — y equipos para implementarla." },
      subheadline: {
        en: "Oktana provides U.S. public sector agencies with onshore Salesforce implementation expertise, compliance-first architectures, and citizen-centered digital experiences.",
        es: "Oktana ofrece a agencias del sector público de EE. UU. implementación onshore, arquitecturas compliance-first y experiencias digitales centradas en el ciudadano.",
      },
      cta: { en: "Talk to Our Public Sector Team", es: "Hable con nuestro equipo de sector público" },
    },
    context: {
      title: { en: "Built for government requirements", es: "Diseñado para requisitos gubernamentales" },
      body: {
        en: "Government agencies need modern citizen services, secure data handling, and procurement-ready delivery partners who understand FedRAMP, onshore requirements, and the pace of public sector change.",
        es: "Las agencias gubernamentales necesitan servicios ciudadanos modernos, manejo seguro de datos y socios que entiendan FedRAMP y requisitos onshore.",
      },
    },
    deliverables: {
      title: { en: "What We Deliver", es: "Qué entregamos" },
      items: {
        en: [
          "Salesforce Government Cloud implementations",
          "Citizen engagement and self-service portals",
          "Case management and constituent services automation",
          "FedRAMP-compliant data architecture",
          "Legacy system migration and modernization",
          "Onshore-only delivery available for sensitive environments",
        ],
        es: [
          "Implementaciones de Salesforce Government Cloud",
          "Portales de engagement y autoservicio ciudadano",
          "Automatización de gestión de casos y servicios a constituents",
          "Arquitectura de datos compatible con FedRAMP",
          "Migración y modernización de sistemas legacy",
          "Entrega solo onshore para entornos sensibles",
        ],
      },
    },
    trustCallout: {
      en: "SOC 2 certified. Onshore resources available. We understand the compliance, procurement, and security requirements of U.S. government engagement.",
      es: "Certificación SOC 2. Recursos onshore disponibles. Entendemos cumplimiento, procurement y seguridad del sector público de EE. UU.",
    },
    ctaBand: {
      headline: { en: "Ready to modernize your citizen services? Let's talk.", es: "¿Listo para modernizar sus servicios ciudadanos? Hablemos." },
      cta: { en: "Contact Our Public Sector Team", es: "Contacte a nuestro equipo de sector público" },
    },
  },
  {
    slug: "consumer-goods",
    meta: {
      title: { en: "Salesforce for Consumer Goods Companies | Oktana", es: "Salesforce para bienes de consumo | Oktana" },
      description: {
        en: "Oktana helps consumer goods brands optimize B2B and B2C commerce, build partner portals, and automate field service and trade promotion on Salesforce.",
        es: "Oktana ayuda a marcas de bienes de consumo a optimizar comercio B2B/B2C, portales de socios y field service en Salesforce.",
      },
    },
    hero: {
      headline: { en: "Connect your brand to your buyers — and everyone in between.", es: "Conecte su marca con sus compradores — y con todos en el medio." },
      subheadline: {
        en: "Consumer goods companies manage complex webs of retailers, distributors, field reps, and end consumers. Oktana helps you connect all of them on Salesforce — with commerce, partner portals, and field service solutions built for how your business actually works.",
        es: "Las empresas de bienes de consumo gestionan redes complejas de retailers, distribuidores y consumidores finales. Oktana los conecta en Salesforce.",
      },
      cta: { en: "Talk to a Consumer Goods Specialist", es: "Hable con un especialista en bienes de consumo" },
    },
    context: {
      title: { en: "Commerce that matches your network", es: "Comercio acorde a su red" },
      body: {
        en: "From trade promotion to distributor portals, consumer goods brands need Salesforce experiences that reflect real-world channel complexity — not generic CRM defaults.",
        es: "Desde trade promotion hasta portales de distribuidores, las marcas de consumo necesitan experiencias Salesforce que reflejen la complejidad real de sus canales.",
      },
    },
    deliverables: {
      title: { en: "What We Deliver", es: "Qué entregamos" },
      items: {
        en: [
          "B2B and D2C commerce on Salesforce Commerce Cloud",
          "Distributor and retailer partner portals (Experience Cloud)",
          "Field service and trade promotion management",
          "Supply chain and ERP integrations via MuleSoft",
          "Consumer loyalty and personalization programs",
          "AI-powered demand forecasting and account insights",
        ],
        es: [
          "Comercio B2B y D2C en Salesforce Commerce Cloud",
          "Portales para distribuidores y retailers (Experience Cloud)",
          "Field service y gestión de trade promotion",
          "Integraciones de cadena de suministro y ERP vía MuleSoft",
          "Programas de lealtad y personalización",
          "Pronóstico de demanda e insights de cuentas con IA",
        ],
      },
    },
    ctaBand: {
      headline: { en: "Let's build the Salesforce ecosystem your brand runs on.", es: "Construyamos el ecosistema Salesforce sobre el que opera su marca." },
      cta: { en: "Start a Consumer Goods Conversation", es: "Inicie una conversación sobre bienes de consumo" },
    },
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
