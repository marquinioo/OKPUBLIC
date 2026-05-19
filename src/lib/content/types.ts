import type { Localized } from "@/lib/locale";

export type PageMeta = {
  title: Localized<string>;
  description: Localized<string>;
};

export type ServicePageContent = {
  slug: string;
  meta: PageMeta;
  hero: {
    headline: Localized<string>;
    subheadline: Localized<string>;
    cta: Localized<string>;
  };
  deliverables: {
    title: Localized<string>;
    items: Localized<string[]>;
  };
  highlight?: {
    title: Localized<string>;
    body: Localized<string>;
  };
  ctaBand: {
    headline: Localized<string>;
    cta: Localized<string>;
  };
};

export type IndustryPageContent = {
  slug: string;
  meta: PageMeta;
  hero: {
    headline: Localized<string>;
    subheadline: Localized<string>;
    cta: Localized<string>;
  };
  context: {
    title: Localized<string>;
    body: Localized<string>;
  };
  deliverables: {
    title: Localized<string>;
    items: Localized<string[]>;
  };
  trustCallout?: Localized<string>;
  ctaBand: {
    headline: Localized<string>;
    cta: Localized<string>;
  };
};
