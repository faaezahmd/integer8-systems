import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Odoo implementation, accounting automation, QuickBooks integrations, Stripe reconciliation, ERP consulting and AI-powered finance workflows.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Finance systems work, end to end"
        intro="Focused engagements that implement, connect and automate the systems your finance team depends on — built to be maintained, not just delivered."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} showDetails />
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
