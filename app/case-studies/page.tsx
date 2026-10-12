import type { Metadata } from "next";
import PageHero from "@/components/i8/PageHero";
import CtaBlock from "@/components/i8/CtaBlock";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected finance systems work: Odoo accounting implementation, AI-powered QuickBooks categorization, and Stripe reconciliation automation.",
};

export default function CaseStudiesPage() {
  return (
    <div className="i8">
      <PageHero
        eyebrow="Case Studies"
        title="Work that ties out"
        intro="A closer look at engagements where we consolidated systems, automated the manual work and gave finance teams numbers they can trust."
      />

      <section className="s bt">
        <div className="wrap">
          <div className="cs-list">
            {caseStudies.map((study, i) => (
              <article key={study.slug} className="cs">
                <div className="cs-head">
                  <span className="cs-n">{String(i + 1).padStart(2, "0")}</span>
                  <div className="tag">
                    <b>{study.tag}</b> · {study.client}
                  </div>
                  <h2>{study.title}</h2>
                </div>
                <div className="cs-body">
                  <dl className="cs-text">
                    <div>
                      <dt>Challenge</dt>
                      <dd>{study.challenge}</dd>
                    </div>
                    <div>
                      <dt>Approach</dt>
                      <dd>{study.approach}</dd>
                    </div>
                    <div>
                      <dt>Result</dt>
                      <dd>{study.result}</dd>
                    </div>
                  </dl>
                  <dl className="cs-metrics">
                    {study.metrics.map((m) => (
                      <div key={m.label}>
                        <dt>{m.label}</dt>
                        <dd>{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
