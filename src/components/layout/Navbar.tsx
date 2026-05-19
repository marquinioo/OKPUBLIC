"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  industryLinks,
  resourceLinks,
  serviceLinks,
  whyOktanaLinks,
} from "@/lib/navigation";
import { pick } from "@/lib/locale";
import type { Locale } from "@/i18n/routing";
import type { NavLink } from "@/lib/navigation";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-muted/60 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 md:h-20">
          <Link href="/" className="text-xl font-bold text-primary">
            Oktana
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <MegaMenu label={t("services")} links={serviceLinks} locale={locale} />
            <MegaMenu label={t("industries")} links={industryLinks} locale={locale} />
            <MegaMenu label={t("whyOktana")} links={whyOktanaLinks} locale={locale} />
            <MegaMenu label={t("resources")} links={resourceLinks} locale={locale} />
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle />
            <Button href="/contact" variant="primary">
              {t("contact")}
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen ? (
          <nav className="border-t border-muted py-4 lg:hidden">
            <div className="mb-4 flex justify-end">
              <LanguageToggle />
            </div>
            <MobileGroup title={t("services")} links={serviceLinks} locale={locale} />
            <MobileGroup title={t("industries")} links={industryLinks} locale={locale} />
            <MobileGroup title={t("whyOktana")} links={whyOktanaLinks} locale={locale} />
            <MobileGroup title={t("resources")} links={resourceLinks} locale={locale} />
            <div className="mt-4">
              <Button href="/contact" variant="primary" className="w-full">
                {t("contact")}
              </Button>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}

function MobileGroup({
  title,
  links,
  locale,
}: {
  title: string;
  links: NavLink[];
  locale: Locale;
}) {
  return (
    <div className="mb-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-subtle">{title}</p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.slug}>
            <Link href={link.href} className="text-sm text-body hover:text-primary">
              {pick(locale, link.label)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
