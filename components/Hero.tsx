import Container from "./Container";
import { ButtonLink } from "./Button";
import { Eyebrow } from "./SectionHeading";
import SystemVisual from "./SystemVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <Container className="relative py-20 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-7">
            <Eyebrow>Finance Systems &amp; Accounting Automation</Eyebrow>

            {/* EDIT: Hero headline */}
            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Finance Systems &amp;{" "}
              <span className="text-accent">Accounting Automation</span>
            </h1>

            {/* EDIT: Hero subheadline */}
            <p className="max-w-xl text-lg leading-relaxed text-slate">
              We help accounting firms and finance teams streamline operations
              through ERP implementation, integrations, and custom automation.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Services
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-line bg-cream/60 p-4 shadow-sm">
              <SystemVisual className="h-auto w-full" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
