import Container from "./Container";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { ButtonLink } from "./Button";
import { services } from "@/lib/content";

export default function ServicesOverview() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="Services built around the ledger"
            intro="Focused engagements that connect your finance systems and remove the manual work between them."
          />
          <ButtonLink href="/services" variant="secondary" className="shrink-0">
            All services
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
