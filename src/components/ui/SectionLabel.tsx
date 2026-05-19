import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className }: Props) {
  return (
    <p className={cn("mb-3 text-sm font-semibold uppercase tracking-wider text-accent-subtle", className)}>
      {children}
    </p>
  );
}
