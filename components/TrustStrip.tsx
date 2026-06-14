import Container from "./Container";

/** Positioning / trust strip — the systems we work across. EDIT items freely. */
const items = ["Odoo", "QuickBooks", "Stripe", "ERP Systems", "AI Workflows"];

export default function TrustStrip() {
  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="max-w-xs text-sm leading-relaxed text-slate">
            Trusted to implement and connect the systems finance teams run on.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="font-heading text-sm font-medium tracking-tight text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
