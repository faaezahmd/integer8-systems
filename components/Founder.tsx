import Container from "./Container";
import { Eyebrow } from "./SectionHeading";

export default function Founder() {
  return (
    <section className="border-y border-line bg-surface py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Abstract monogram instead of a stock portrait */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto aspect-square max-w-xs overflow-hidden rounded-2xl border border-line bg-cream shadow-sm">
              <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-7xl font-bold tracking-tight text-ink">
                  F<span className="text-accent">A</span>
                </span>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
                aria-hidden
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow>Founder</Eyebrow>
            {/* EDIT: Founder positioning */}
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Faiz Ahmed
            </h2>
            <p className="mt-2 text-sm font-medium text-accent">
              Founder, Integer8 Systems
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
              Faiz Ahmed combines accounting experience with 10+ years of
              software engineering to help businesses bridge the gap between
              finance and technology. That dual background means engagements
              start from how the books actually work — and end with systems your
              team can run with confidence.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
