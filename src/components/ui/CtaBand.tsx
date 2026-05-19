import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type Props = {
  headline: string;
  subtext?: string;
  cta: string;
  href?: string;
};

export function CtaBand({ headline, subtext, cta, href = "/contact" }: Props) {
  return (
    <div className="bg-primary-dark py-16 text-white md:py-20">
      <Container className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{headline}</h2>
        {subtext ? <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">{subtext}</p> : null}
        <div className="mt-8">
          <Button href={href} variant="primary">
            {cta} →
          </Button>
        </div>
      </Container>
    </div>
  );
}
