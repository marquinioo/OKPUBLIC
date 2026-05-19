import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { getIndustry } from "@/lib/content/industries";
import { pick } from "@/lib/locale";
import type { Locale } from "@/i18n/routing";

type Props = { slug: string };

export async function IndustryPage({ slug }: Props) {
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const locale = (await getLocale()) as Locale;

  return (
    <>
      <PageHero
        headline={pick(locale, industry.hero.headline)}
        subheadline={pick(locale, industry.hero.subheadline)}
      >
        <Button href="/contact">{pick(locale, industry.hero.cta)} →</Button>
      </PageHero>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-primary-dark">{pick(locale, industry.context.title)}</h2>
          <p className="mt-4 text-lg text-body/90">{pick(locale, industry.context.body)}</p>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
            {pick(locale, industry.deliverables.title)}
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {pick(locale, industry.deliverables.items).map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-muted bg-white p-4 text-body">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-subtle" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {industry.trustCallout ? (
        <Section>
          <Container>
            <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-6 md:p-8">
              <p className="text-lg text-body/90">{pick(locale, industry.trustCallout)}</p>
            </div>
          </Container>
        </Section>
      ) : null}

      <CtaBand
        headline={pick(locale, industry.ctaBand.headline)}
        cta={pick(locale, industry.ctaBand.cta)}
      />
    </>
  );
}
