import type { Metadata } from "next";
import PageHero from "@/components/i8/PageHero";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation with Integer8 Systems to map the highest-impact finance systems and automation opportunities for your team.",
};

const points = [
  "A clear view of where systems and automation will save the most time",
  "Honest, vendor-neutral guidance — no pressure to buy anything",
  "A senior person who understands both accounting and engineering",
];

export default function ContactPage() {
  return (
    <div className="i8">
      <PageHero
        eyebrow="Contact"
        title="Book a consultation"
        intro="Tell us about your finance systems and where things slow down. We'll come back with practical, high-impact next steps."
      />

      <section className="s bt">
        <div className="wrap contact-g">
          <div>
            <h2 className="c-h">What to expect</h2>
            <ol className="plist-l">
              {points.map((p, i) => (
                <li key={p}>
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  {p}
                </li>
              ))}
            </ol>
            <div className="c-mail">
              <p>Prefer email?</p>
              <a className="mail" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
