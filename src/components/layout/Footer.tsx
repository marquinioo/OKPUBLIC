import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import {
  industryLinks,
  serviceLinks,
  whyOktanaLinks,
} from "@/lib/navigation";
import { pick } from "@/lib/locale";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/i18n/routing";
import type { NavLink } from "@/lib/navigation";

export async function Footer() {
  const t = await getTranslations("footer");
  const locale = (await getLocale()) as Locale;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-2xl font-bold">Oktana</p>
            <p className="mt-3 text-sm text-white/80">{pick(locale, siteConfig.tagline)}</p>
            <div className="mt-4 flex gap-4 text-sm">
              <a href={siteConfig.linkedIn} className="hover:text-accent" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={siteConfig.github} className="hover:text-accent" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <FooterColumn title={t("services")} links={serviceLinks} locale={locale} />
          <FooterColumn title={t("industries")} links={industryLinks} locale={locale} />
          <FooterColumn title={t("company")} links={whyOktanaLinks} locale={locale} />
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/20 pt-8 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>{t("copyright", { year })}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-white">
              {t("privacy")}
            </Link>
            <span>SOC 2</span>
            <span>Salesforce Summit Partner</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  locale,
}: {
  title: string;
  links: NavLink[];
  locale: Locale;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">{title}</p>
      <ul className="space-y-2 text-sm text-white/80">
        {links.map((link) => (
          <li key={link.slug}>
            <Link href={link.href} className="hover:text-white">
              {pick(locale, link.label)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
