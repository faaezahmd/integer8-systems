import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import SectionHeading from "@/components/SectionHeading";
import { whyPoints } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Integer8 Systems is a boutique consultancy bridging finance and technology — finance-first systems work for accounting firms and finance teams.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A boutique consultancy where finance meets engineering"
        intro="Integer8 Systems exists to close the gap between how finance teams work and the systems meant to support them — with practical, well-built solutions."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="How we work"
              title="Practical, finance-first, built to last"
              intro="We keep engagements small, senior and outcome-focused. The result is systems your team understands and can run on its own."
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

      <Founder />
      <CTA />
    </>
  );
}
