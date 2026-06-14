import Container from "./Container";
import { ButtonLink } from "./Button";

export default function CTA() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-ink px-8 py-14 sm:px-14 sm:py-16">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden
          />
          <div className="relative flex flex-col items-start gap-6 sm:max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              <span className="h-px w-6 bg-accent" aria-hidden />
              Let&apos;s talk
            </span>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl">
              Ready to streamline your finance operations?
            </h2>
            <p className="text-base leading-relaxed text-white/70">
              Book a consultation and we&apos;ll map the highest-impact systems
              and automation opportunities for your team — no obligation.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
              <ButtonLink
                href="/services"
                variant="secondary"
                className="border-white/20 bg-transparent text-cream hover:border-accent hover:text-accent"
              >
                View Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
