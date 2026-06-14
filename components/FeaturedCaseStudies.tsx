import Container from "./Container";
import SectionHeading from "./SectionHeading";
import CaseStudyCard from "./CaseStudyCard";
import { ButtonLink } from "./Button";
import { caseStudies } from "@/lib/content";

export default function FeaturedCaseStudies() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Outcomes, not just implementations"
            intro="A look at how we've helped finance teams consolidate systems, automate the busywork and trust their numbers."
          />
          <ButtonLink href="/case-studies" variant="secondary" className="shrink-0">
            All case studies
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Container>
    </section>
  );
}
