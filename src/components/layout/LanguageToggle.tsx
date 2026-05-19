"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = locale === "en" ? "es" : "en";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: switchTo })}
      className={cn(
        "rounded-full border border-muted px-3 py-1.5 text-xs font-semibold uppercase tracking-wide",
        "text-primary hover:border-primary hover:text-primary",
      )}
      aria-label={switchTo === "es" ? "Cambiar a español" : "Switch to English"}
    >
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
