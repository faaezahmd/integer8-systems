import Link from "next/link";

export default function CtaBlock() {
  return (
    <section className="s dark cta">
      <div className="wrap cta-g">
        <div>
          <span className="eb">Let&apos;s talk</span>
          <h2>Ready to streamline your finance operations?</h2>
          <p>
            Book a consultation and we&apos;ll map the highest-impact systems
            and automation opportunities for your team — no obligation.
          </p>
          <div className="ctas">
            <Link className="btn btn-red" href="/contact">
              Book a Consultation
            </Link>
            <Link className="btn btn-line-d" href="/services">
              View Services
            </Link>
          </div>
        </div>
        <div className="form" aria-hidden="true">
          <label>Name</label>
          <div className="in" />
          <label>Email</label>
          <div className="in" />
          <label>Message</label>
          <div className="in ta" />
          <Link className="btn btn-red" href="/contact" tabIndex={-1}>
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
