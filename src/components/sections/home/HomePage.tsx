import { getTranslations, getLocale } from "next-intl/server";
import {
  Bot,
  BarChart3,
  Cloud,
  Code2,
  Layers,
  Palette,
  Shield,
  Users,
  Globe,
  Award,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CtaBand } from "@/components/ui/CtaBand";
import { StatCounter } from "@/components/ui/StatCounter";
import { AnimateOnView } from "@/components/ui/AnimateOnView";
import { industryLinks } from "@/lib/navigation";
import { pick } from "@/lib/locale";
import type { Locale } from "@/i18n/routing";

const serviceCards = [
  { key: "ai", href: "/services/ai-agentforce", icon: Bot },
  { key: "implementation", href: "/services/salesforce-consulting", icon: Cloud },
  { key: "managed", href: "/services/managed-services", icon: Layers },
  { key: "mulesoft", href: "/services/mulesoft-integrations", icon: Code2 },
  { key: "data", href: "/services/data-analytics", icon: BarChart3 },
  { key: "engineering", href: "/services/digital-engineering", icon: Users },
  { key: "design", href: "/services/ui-ux-design", icon: Palette },
] as const;

const pillars = ["summit", "nearshore", "trust", "accountability"] as const;
const pillarIcons = { summit: Award, nearshore: Globe, trust: Shield, accountability: Users };
const storyKeys = ["healthcare", "fintech", "hightech"] as const;

export async function HomePage() {
  const t = await getTranslations("home");
  const tc = await getTranslations("common");
  const locale = (await getLocale()) as Locale;

  return (
    <>
      <section className="bg-primary-dark text-white">
        <Container className="py-20 md:py-28">
          <AnimateOnView>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t("hero.headline")}
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-white/85 md:text-xl">{t("hero.subheadline")}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">{tc("talkToTeam")} →</Button>
              <Button href="/success-stories" variant="secondary">
                {tc("seeOurWork")}
              </Button>
            </div>
            <ul className="mt-12 flex flex-wrap gap-4 text-xs font-medium uppercase tracking-wide text-white/75 md:gap-6 md:text-sm">
              <li>{t("hero.trust.summit")}</li>
              <li>{t("hero.trust.soc2")}</li>
              <li>{t("hero.trust.csat")}</li>
              <li>{t("hero.trust.projects")}</li>
            </ul>
          </AnimateOnView>
        </Container>
      </section>

      <div className="bg-primary py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatCounter value={t("stats.experts.value")} label={t("stats.experts.label")} />
            <StatCounter value={t("stats.projects.value")} label={t("stats.projects.label")} />
            <StatCounter value={t("stats.csat.value")} label={t("stats.csat.label")} />
            <StatCounter value={t("stats.relationship.value")} label={t("stats.relationship.label")} />
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <SectionLabel>{t("services.eyebrow")}</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-bold text-primary-dark md:text-4xl">
            {t("services.headline")}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceCards.map(({ key, href, icon: Icon }) => (
              <AnimateOnView key={key}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-2xl border border-muted bg-white p-6 shadow-sm transition hover:border-accent-subtle hover:shadow-md"
                >
                  <Icon className="h-8 w-8 text-accent-subtle" />
                  <h3 className="mt-4 text-lg font-semibold text-primary-dark group-hover:text-primary">
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-body/80">{t(`services.items.${key}.description`)}</p>
                  <span className="mt-4 text-sm font-semibold text-primary">{tc("learnMore")} →</span>
                </Link>
              </AnimateOnView>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateOnView>
              <h2 className="text-3xl font-bold text-primary-dark md:text-4xl">{t("why.headline")}</h2>
              <p className="mt-6 text-lg text-body/90">{t("why.body")}</p>
            </AnimateOnView>
            <div className="grid gap-6 sm:grid-cols-2">
              {pillars.map((key) => {
                const Icon = pillarIcons[key];
                return (
                  <AnimateOnView key={key}>
                    <div className="rounded-xl border border-muted p-5">
                      <Icon className="h-7 w-7 text-accent-subtle" />
                      <h3 className="mt-3 font-semibold text-primary-dark">{t(`why.pillars.${key}.title`)}</h3>
                      <p className="mt-2 text-sm text-body/80">{t(`why.pillars.${key}.description`)}</p>
                    </div>
                  </AnimateOnView>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-bold text-primary-dark md:text-4xl">{t("industries.headline")}</h2>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-2">
            {industryLinks.map((ind) => (
              <Link
                key={ind.slug}
                href={ind.href}
                className="min-w-[200px] shrink-0 rounded-2xl bg-primary px-6 py-8 text-white transition hover:bg-primary-dark"
              >
                <p className="font-semibold">{pick(locale, ind.label)}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <h2 className="text-3xl font-bold text-primary-dark md:text-4xl">{t("stories.headline")}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {storyKeys.map((key) => (
              <AnimateOnView key={key}>
                <article className="flex h-full flex-col rounded-2xl border border-muted bg-white p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-subtle">
                    {t(`stories.items.${key}.tag`)}
                  </span>
                  <p className="mt-3 flex-1 font-medium text-primary-dark">{t(`stories.items.${key}.title`)}</p>
                  <span className="mt-4 text-sm font-semibold text-primary">{tc("readStory")} →</span>
                </article>
              </AnimateOnView>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/success-stories" variant="ghost" className="!text-primary">
              {t("stories.cta")} →
            </Button>
          </div>
        </Container>
      </Section>

      <CtaBand
        headline={t("ctaBand.headline")}
        subtext={t("ctaBand.subtext")}
        cta={tc("startConversation")}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <AnimateOnView>
              <SectionLabel>{t("mission.eyebrow")}</SectionLabel>
              <h2 className="text-3xl font-bold text-primary-dark md:text-4xl">{t("mission.headline")}</h2>
              <p className="mt-6 text-lg text-body/90">{t("mission.body")}</p>
              <Link href="/about/social-responsibility" className="mt-6 inline-block font-semibold text-primary">
                {t("mission.link")} →
              </Link>
            </AnimateOnView>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary to-primary-dark" aria-hidden />
          </div>
        </Container>
      </Section>

      <Section className="border-y border-muted bg-white">
        <Container className="text-center">
          <SectionLabel className="!text-center">{t("partners.eyebrow")}</SectionLabel>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-body/50">
            {["Salesforce", "MuleSoft", "Snowflake", "Agentforce", "SOC 2"].map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-bold text-primary-dark md:text-4xl">{t("blog.headline")}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article key={i} className="rounded-2xl border border-muted bg-white p-6">
                <span className="text-xs font-semibold uppercase text-accent-subtle">Insights</span>
                <h3 className="mt-3 font-semibold text-primary-dark">
                  {locale === "es" ? "Artículo del blog próximamente" : "Blog post coming soon"}
                </h3>
                <p className="mt-2 text-sm text-body/70">2026</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/blog" variant="ghost" className="!text-primary">
              {tc("visitBlog")} →
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
