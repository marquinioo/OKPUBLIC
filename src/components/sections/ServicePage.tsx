import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { getService } from "@/lib/content/services";
import { pick } from "@/lib/locale";
import type { Locale } from "@/i18n/routing";

type Props = { slug: string };

export async function ServicePage({ slug }: Props) {
  const service = getService(slug);
  if (!service) notFound();

  const locale = (await getLocale()) as Locale;

  return (
    <>
      <PageHero
        headline={pick(locale, service.hero.headline)}
        subheadline={pick(locale, service.hero.subheadline)}
      >
        <Button href="/contact">{pick(locale, service.hero.cta)} →</Button>
      </PageHero>

      <Section>
        <Container>
          <h2 className="text-2xl font-bold text-primary-dark md:text-3xl">
            {pick(locale, service.deliverables.title)}
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {pick(locale, service.deliverables.items).map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-muted bg-white p-4 text-body">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {service.highlight ? (
        <Section className="bg-surface">
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-bold text-primary-dark">{pick(locale, service.highlight.title)}</h2>
            <p className="mt-4 text-lg text-body/90">{pick(locale, service.highlight.body)}</p>
          </Container>
        </Section>
      ) : null}

      <CtaBand
        headline={pick(locale, service.ctaBand.headline)}
        cta={pick(locale, service.ctaBand.cta)}
      />
    </>
  );
}
