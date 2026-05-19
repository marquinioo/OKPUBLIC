import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type Props = {
  headline: string;
  subheadline?: string;
  children?: React.ReactNode;
  dark?: boolean;
};

export function PageHero({ headline, subheadline, children, dark = true }: Props) {
  return (
    <div className={cn("py-20 md:py-28", dark ? "bg-primary-dark text-white" : "bg-surface")}>
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{headline}</h1>
          {subheadline ? (
            <p className="mt-6 text-lg text-white/85 md:text-xl">{subheadline}</p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap gap-4">{children}</div> : null}
        </div>
      </Container>
    </div>
  );
}
