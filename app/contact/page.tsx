import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
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
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a consultation"
        intro="Tell us about your finance systems and where things slow down. We'll come back with practical, high-impact next steps."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">
                What to expect
              </h2>
              <ul className="mt-6 space-y-4">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-slate">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-line pt-6">
                <p className="text-sm text-muted">Prefer email?</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block font-heading text-base font-medium text-accent hover:text-accent-dark focus-ring"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
