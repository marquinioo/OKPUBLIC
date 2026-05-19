import type { Localized } from "@/lib/locale";

export type NavLink = {
  slug: string;
  href: string;
  label: Localized<string>;
};

export const serviceLinks: NavLink[] = [
  {
    slug: "ai-agentforce",
    href: "/services/ai-agentforce",
    label: {
      en: "AI & Agentforce",
      es: "IA y Agentforce",
    },
  },
  {
    slug: "salesforce-consulting",
    href: "/services/salesforce-consulting",
    label: {
      en: "Salesforce Consulting & Implementation",
      es: "Consultoría e implementación Salesforce",
    },
  },
  {
    slug: "managed-services",
    href: "/services/managed-services",
    label: {
      en: "Salesforce Optimization & Managed Services",
      es: "Optimización y servicios gestionados Salesforce",
    },
  },
  {
    slug: "mulesoft-integrations",
    href: "/services/mulesoft-integrations",
    label: {
      en: "MuleSoft & Integrations",
      es: "MuleSoft e integraciones",
    },
  },
  {
    slug: "data-analytics",
    href: "/services/data-analytics",
    label: {
      en: "Data & Analytics",
      es: "Datos y analítica",
    },
  },
  {
    slug: "digital-engineering",
    href: "/services/digital-engineering",
    label: {
      en: "Digital Engineering & Staff Augmentation",
      es: "Ingeniería digital y staff augmentation",
    },
  },
  {
    slug: "ui-ux-design",
    href: "/services/ui-ux-design",
    label: {
      en: "UI/UX Design",
      es: "Diseño UI/UX",
    },
  },
];

export const industryLinks: NavLink[] = [
  {
    slug: "healthcare",
    href: "/industries/healthcare",
    label: {
      en: "Healthcare & Life Sciences",
      es: "Salud y ciencias de la vida",
    },
  },
  {
    slug: "financial-services",
    href: "/industries/financial-services",
    label: {
      en: "Financial Services & Fintech",
      es: "Servicios financieros y fintech",
    },
  },
  {
    slug: "high-tech",
    href: "/industries/high-tech",
    label: {
      en: "High Tech & SaaS",
      es: "Alta tecnología y SaaS",
    },
  },
  {
    slug: "nonprofit",
    href: "/industries/nonprofit",
    label: {
      en: "Nonprofit",
      es: "Sin fines de lucro",
    },
  },
  {
    slug: "public-sector",
    href: "/industries/public-sector",
    label: {
      en: "U.S. Public Sector",
      es: "Sector público de EE. UU.",
    },
  },
  {
    slug: "consumer-goods",
    href: "/industries/consumer-goods",
    label: {
      en: "Consumer Goods",
      es: "Bienes de consumo",
    },
  },
];

export const whyOktanaLinks: NavLink[] = [
  {
    slug: "about",
    href: "/about",
    label: { en: "About Us", es: "Nosotros" },
  },
  {
    slug: "social-responsibility",
    href: "/about/social-responsibility",
    label: { en: "Social Responsibility", es: "Responsabilidad social" },
  },
  {
    slug: "compliance",
    href: "/about/compliance",
    label: { en: "Compliance & Security", es: "Cumplimiento y seguridad" },
  },
  {
    slug: "careers",
    href: "/careers",
    label: { en: "Careers", es: "Carreras" },
  },
];

export const resourceLinks: NavLink[] = [
  {
    slug: "success-stories",
    href: "/success-stories",
    label: { en: "Success Stories", es: "Casos de éxito" },
  },
  {
    slug: "blog",
    href: "/blog",
    label: { en: "Blog", es: "Blog" },
  },
];
