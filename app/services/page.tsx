import type { Metadata } from "next";
import PageHero from "@/components/i8/PageHero";
import CtaBlock from "@/components/i8/CtaBlock";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Odoo implementation, accounting automation, QuickBooks integrations, Stripe reconciliation, ERP consulting and AI-powered finance workflows.",
};

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function ServicesPage() {
  return (
    <div className="i8">
      <PageHero
        eyebrow="Services"
        title="Finance systems work, end to end"
        intro="Focused engagements that implement, connect and automate the systems your finance team depends on — built to be maintained, not just delivered."
      />

      <section className="s bt">
        <div className="wrap">
          <div className="grid3">
            {services.map((service, i) => (
              <article key={service.slug} className="svc svc-d">
                <div className="n">{num(i)}</div>
                <h3>{service.title}</h3>
                <p>{service.details}</p>
                <ul className="olist">
                  {service.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
