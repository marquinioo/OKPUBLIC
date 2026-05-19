import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { services } from "@/lib/content/services";
import { pick } from "@/lib/locale";
import type { Locale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: pick(locale, service.meta.title),
    description: pick(locale, service.meta.description),
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ServicePage slug={slug} />;
}
