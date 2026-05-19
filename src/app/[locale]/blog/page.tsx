import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getLocale } from "next-intl/server";

export default async function BlogPage() {
  const locale = await getLocale();
  const isEs = locale === "es";

  return (
    <>
      <PageHero
        headline={isEs ? "Blog" : "Blog"}
        subheadline={
          isEs
            ? "Perspectivas de nuestro equipo sobre Salesforce, IA y entrega nearshore."
            : "Insights from our team on Salesforce, AI, and nearshore delivery."
        }
      />
      <Section>
        <Container>
          <p className="text-body/80">
            {isEs ? "Publicaciones próximamente." : "Posts coming soon."}
          </p>
        </Container>
      </Section>
    </>
  );
}
