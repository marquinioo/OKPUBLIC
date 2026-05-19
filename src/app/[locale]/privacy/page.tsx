import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getLocale } from "next-intl/server";

export default async function PrivacyPage() {
  const locale = await getLocale();
  const isEs = locale === "es";

  return (
    <Section>
      <Container className="max-w-3xl prose prose-neutral">
        <h1 className="text-3xl font-bold text-primary-dark">
          {isEs ? "Política de privacidad" : "Privacy Policy"}
        </h1>
        <p className="mt-6 text-body/80">
          {isEs
            ? "Documento legal en preparación. Contacte a hello@oktana.com con consultas."
            : "Legal document in preparation. Contact hello@oktana.com with questions."}
        </p>
      </Container>
    </Section>
  );
}
