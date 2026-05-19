import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type Props = ComponentProps<"button"> & {
  href?: string;
  variant?: Variant;
  children: React.ReactNode;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-primary-dark hover:bg-accent/90 shadow-sm",
  secondary:
    "border-2 border-white/80 text-white hover:bg-white/10",
  ghost: "text-primary hover:text-accent-subtle",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
