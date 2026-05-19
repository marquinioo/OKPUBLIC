import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { getLocale } from "next-intl/server";

export default async function CompliancePage() {
  const locale = await getLocale();
  const isEs = locale === "es";

  const items = isEs
    ? [
        "Certificación SOC 2 Tipo II",
        "Recursos onshore para entornos regulados",
        "Mejores prácticas de seguridad Salesforce",
        "Gobernanza de datos para cumplimiento e IA",
      ]
    : [
        "SOC 2 Type II Certified",
        "Onshore resources for regulated environments",
        "Salesforce security best practices on every engagement",
        "Data governance frameworks for compliance and safe AI",
      ];

  return (
    <>
      <PageHero
        headline={isEs ? "Sus datos están seguros con nosotros. Podemos demostrarlo." : "Your data is safe with us. We can prove it."}
        subheadline={
          isEs
            ? "Certificación SOC 2 y programas de cumplimiento para industrias reguladas."
            : "SOC 2 certification and compliance programs for regulated industries."
        }
      />
      <Section>
        <Container>
          <ul className="grid gap-4 md:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="rounded-xl border border-muted bg-white p-5 font-medium text-primary-dark">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/contact">
              {isEs ? "Contactar al equipo de seguridad" : "Contact our Security Team"} →
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
