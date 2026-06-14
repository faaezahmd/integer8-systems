import Container from "./Container";
import { Eyebrow } from "./SectionHeading";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <Container className="relative py-16 sm:py-20">
        <div className="flex max-w-2xl flex-col gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="text-lg leading-relaxed text-slate">{intro}</p>
        </div>
      </Container>
    </section>
  );
}
