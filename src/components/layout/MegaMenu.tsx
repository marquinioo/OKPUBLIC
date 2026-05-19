"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { pick } from "@/lib/locale";
import type { Locale } from "@/i18n/routing";
import type { NavLink } from "@/lib/navigation";
import { cn } from "@/lib/cn";

type Props = {
  label: string;
  links: NavLink[];
  locale: Locale;
};

export function MegaMenu({ label, links, locale }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 py-2 text-sm font-medium text-body hover:text-primary"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open ? (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-[280px] rounded-xl border border-muted bg-white p-4 shadow-xl">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.slug}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm text-body hover:bg-surface hover:text-primary"
                >
                  {pick(locale, link.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
