import type { Metadata } from "next";
import PageHero from "@/components/i8/PageHero";
import CtaBlock from "@/components/i8/CtaBlock";
import { whyPoints } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Integer8 Systems is a boutique consultancy bridging finance and technology — finance-first systems work for accounting firms and finance teams.",
};

export default function AboutPage() {
  return (
    <div className="i8">
      <PageHero
        eyebrow="About"
        title="A boutique consultancy where finance meets engineering"
        intro="Integer8 Systems exists to close the gap between how finance teams work and the systems meant to support them — with practical, well-built solutions."
      />

      <section className="s dark">
        <div className="wrap about-g">
          <div className="sh sh-col">
            <div>
              <span className="eb">How we work</span>
              <h2>Practical, finance-first, built to last</h2>
              <p>
                We keep engagements small, senior and outcome-focused. The
                result is systems your team understands and can run on its own.
              </p>
            </div>
          </div>
          <div className="pgrid">
            {whyPoints.map((point, i) => (
              <div key={point.title} className="pcell">
                <span className="mono pn">{String(i + 1).padStart(2, "0")}</span>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
