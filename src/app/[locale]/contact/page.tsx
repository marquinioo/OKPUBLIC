import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactPage } from "@/components/sections/contact/ContactPage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact.meta");
  return { title: t("title"), description: t("description") };
}

export default function Page() {
  return <ContactPage />;
}
