import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { whyPoints } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="border-y border-line bg-surface py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Why Integer8 Systems"
            title="A finance partner who can also write the code"
            intro="Most firms understand accounting or software. We work fluently in both, so nothing gets lost in translation between your finance team and your systems."
          />

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {whyPoints.map((point) => (
              <div key={point.title} className="bg-cream p-6">
                <h3 className="font-heading text-base font-medium text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
