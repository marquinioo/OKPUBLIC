import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getLocale } from "next-intl/server";

export default async function SocialResponsibilityPage() {
  const locale = await getLocale();
  const isEs = locale === "es";

  return (
    <>
      <PageHero
        headline={
          isEs
            ? "Construimos gran tecnología. Y las comunidades que la crean."
            : "We build great technology. And the communities that create it."
        }
        subheadline={
          isEs
            ? "Oportunidad económica, Great Place to Work y aprendizaje continuo en Latinoamérica."
            : "Economic opportunity, Great Place to Work certification, and continuous learning across Latin America."
        }
      />
      <Section>
        <Container className="max-w-3xl space-y-6 text-lg text-body/90">
          <p>
            {isEs
              ? "La misión de Oktana siempre ha sido más que Salesforce: creemos que el talento de ingeniería de clase mundial existe en cada comunidad."
              : "Oktana's mission has always been about more than Salesforce — we believe world-class engineering talent exists in every community."}
          </p>
          <blockquote className="border-l-4 border-primary pl-4 italic text-primary-dark">
            {isEs
              ? "«Empezamos Oktana porque creíamos que con el entorno y la oportunidad correctos, la gente talentosa construye cosas increíbles.» — Jaime Solari, CEO"
              : "\"We started Oktana because we believed that if you give talented people the right environment and opportunity, they'll build incredible things.\" — Jaime Solari, CEO"}
          </blockquote>
        </Container>
      </Section>
    </>
  );
}
