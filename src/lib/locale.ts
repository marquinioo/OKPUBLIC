import type { Locale } from "@/i18n/routing";

export type Localized<T> = Record<Locale, T>;

export function pick<T>(locale: Locale, content: Localized<T>): T {
  return content[locale];
}
