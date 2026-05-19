import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HomePage } from "@/components/sections/home/HomePage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta.home");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Page() {
  return <HomePage />;
}
