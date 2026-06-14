import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTA from "@/components/CTA";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected finance systems work: Odoo accounting implementation, AI-powered QuickBooks categorization, and Stripe reconciliation automation.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Work that ties out"
        intro="A closer look at engagements where we consolidated systems, automated the manual work and gave finance teams numbers they can trust."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <CaseStudyCard
                key={study.slug}
                study={study}
                detailed
                className={
                  i === caseStudies.length - 1 &&
                  caseStudies.length % 2 === 1
                    ? "md:col-span-2"
                    : ""
                }
              />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
