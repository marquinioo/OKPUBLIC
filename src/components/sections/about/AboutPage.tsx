import { getTranslations, getLocale } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { AnimateOnView } from "@/components/ui/AnimateOnView";

const values = ["curious", "collaborative", "authentic", "owners"] as const;
const timeline = [
  { year: "2014", en: "Founded", es: "Fundación" },
  { year: "2016", en: "First major enterprise client", es: "Primer cliente enterprise" },
  { year: "2019", en: "MuleSoft practice launch", es: "Lanzamiento práctica MuleSoft" },
  { year: "2021", en: "SOC 2 certification", es: "Certificación SOC 2" },
  { year: "2022", en: "Summit Partner status", es: "Estatus Summit Partner" },
  { year: "2024", en: "Agentforce practice launch", es: "Lanzamiento práctica Agentforce" },
  { year: "2025", en: "1,000+ projects milestone", es: "Hito de 1,000+ proyectos" },
];

export async function AboutPage() {
  const t = await getTranslations("about");
  const locale = await getLocale();

  return (
    <>
      <PageHero headline={t("hero.headline")} subheadline={t("hero.subheadline")} />
      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold text-primary-dark">{t("story.headline")}</h2>
          <p className="mt-6 text-lg text-body/90">{t("story.body")}</p>
        </Container>
      </Section>
      <Section className="bg-surface">
        <Container>
          <h2 className="mb-8 text-2xl font-bold text-primary-dark">Timeline</h2>
          <ol className="space-y-4 border-l-2 border-primary pl-6">
            {timeline.map((item) => (
              <li key={item.year}>
                <span className="font-bold text-primary">{item.year}</span>
                <span className="ml-3 text-body">{locale === "es" ? item.es : item.en}</span>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((key) => (
              <AnimateOnView key={key}>
                <div className="rounded-2xl border border-muted bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary-dark">{t(`values.${key}.title`)}</h3>
                  <p className="mt-2 text-sm text-body/80">{t(`values.${key}.description`)}</p>
                </div>
              </AnimateOnView>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand headline={t("cta")} cta={locale === "es" ? "Hablemos" : "Let's Talk"} href="/contact" />
    </>
  );
}
