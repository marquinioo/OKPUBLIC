import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getLocale } from "next-intl/server";

export default async function CareersPage() {
  const locale = await getLocale();
  const isEs = locale === "es";

  return (
    <>
      <PageHero
        headline={isEs ? "Carreras en Oktana" : "Careers at Oktana"}
        subheadline={
          isEs
            ? "Únase a un equipo Summit con misión en las Américas."
            : "Join a Summit-tier team with a mission across the Americas."
        }
      />
      <Section>
        <Container>
          <Button href="/contact">{isEs ? "Ver oportunidades" : "View opportunities"} →</Button>
        </Container>
      </Section>
    </>
  );
}
