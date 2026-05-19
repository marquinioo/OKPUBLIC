import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site";

export async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <>
      <PageHero headline={t("hero.headline")} subheadline={t("hero.subheadline")} />
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <form className="space-y-4 lg:col-span-3">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={t("form.firstName")} name="firstName" />
                <Field label={t("form.lastName")} name="lastName" />
              </div>
              <Field label={t("form.company")} name="company" />
              <Field label={t("form.jobTitle")} name="jobTitle" />
              <Field label={t("form.email")} name="email" type="email" />
              <Field label={t("form.phone")} name="phone" />
              <Field label={t("form.message")} name="message" multiline />
              <Field label={t("form.source")} name="source" />
              <button
                type="submit"
                className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-primary-dark hover:bg-accent/90"
              >
                {t("form.submit")} →
              </button>
            </form>
            <aside className="lg:col-span-2">
              <ul className="space-y-4 text-body/90">
                <li>{t("trust.response")}</li>
                <li>{t("trust.contracts")}</li>
                <li>{t("trust.discovery")}</li>
                <li>{t("trust.csat")}</li>
              </ul>
              <p className="mt-8 text-sm text-body/80">
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-primary hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  multiline,
}: {
  label: string;
  name: string;
  type?: string;
  multiline?: boolean;
}) {
  const className =
    "w-full rounded-lg border border-muted bg-white px-4 py-3 text-body focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-body">{label}</span>
      {multiline ? (
        <textarea name={name} rows={4} className={className} />
      ) : (
        <input type={type} name={name} className={className} />
      )}
    </label>
  );
}
