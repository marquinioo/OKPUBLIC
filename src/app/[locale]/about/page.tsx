import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutPage } from "@/components/sections/about/AboutPage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about.meta");
  return { title: t("title"), description: t("description") };
}

export default function Page() {
  return <AboutPage />;
}
