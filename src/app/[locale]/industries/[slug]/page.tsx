import type { Metadata } from "next";
import { IndustryPage } from "@/components/sections/IndustryPage";
import { industries } from "@/lib/content/industries";
import { pick } from "@/lib/locale";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: pick(locale, industry.meta.title),
    description: pick(locale, industry.meta.description),
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <IndustryPage slug={slug} />;
}
