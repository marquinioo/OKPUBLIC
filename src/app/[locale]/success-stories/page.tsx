import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("successStories.meta");
  return { title: t("title"), description: t("description") };
}

export default async function SuccessStoriesPage() {
  const t = await getTranslations("successStories");
  const tc = await getTranslations("common");

  const stories = [
    "Building a scalable API developer community with MuleSoft Anypoint",
    "Complex call center deployment with global GSI partner",
    "QA test automation for U.S. fintech company",
    "Enhancing a top employment review platform's user experience",
  ];

  return (
    <>
      <PageHero headline={t("hero.headline")} subheadline={t("hero.subheadline")} />
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {stories.map((title) => (
              <article key={title} className="rounded-2xl border border-muted bg-white p-6">
                <p className="font-medium text-primary-dark">{title}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">
                  {tc("readStory")} →
                </span>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand headline={t("cta")} cta={tc("talkToTeam")} />
    </>
  );
}
