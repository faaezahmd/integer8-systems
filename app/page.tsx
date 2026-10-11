import Link from "next/link";
import { services, caseStudies } from "@/lib/content";
import HeroMock from "@/components/home/HeroMock";
import WhyTabs from "@/components/home/WhyTabs";
import CtaBlock from "@/components/i8/CtaBlock";

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function HomePage() {
  return (
    <div className="i8">
      <section className="hero">
        <div className="wrap hero-g">
          <div>
            <h1>Finance Systems &amp; Accounting Automation</h1>
            <p className="lead">
              We help accounting firms and finance teams streamline operations
              through ERP implementation, integrations, and custom automation.
            </p>
            <div className="ctas">
              <Link className="btn btn-dark" href="/contact">
                Book a Consultation
              </Link>
              <Link className="btn btn-line" href="/services">
                View Services
              </Link>
            </div>
          </div>
          <HeroMock />
        </div>
      </section>

      <section className="s bt" id="services">
        <div className="wrap">
          <div className="sh">
            <div>
              <span className="eb">What we do</span>
              <h2>Services built around the ledger</h2>
              <p>
                Focused engagements that connect your finance systems and
                remove the manual work between them.
              </p>
            </div>
            <Link className="tl" href="/services">
              All services →
            </Link>
          </div>
          <div className="grid3">
            {services.map((s, i) => (
              <Link key={s.slug} className="svc" href="/services">
                <div className="n">
                  {num(i)}
                  <span className="ar">→</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="s dark">
        <div className="wrap">
          <div className="sh">
            <div>
              <span className="eb">Why Integer8 Systems</span>
              <h2>A finance partner who can also write the code</h2>
              <p>
                Most firms understand accounting or software. We work fluently
                in both, so nothing gets lost in translation between your
                finance team and your systems.
              </p>
            </div>
          </div>
          <WhyTabs />
        </div>
      </section>

      <section className="s" id="work">
        <div className="wrap">
          <div className="sh">
            <div>
              <span className="eb">Selected work</span>
              <h2>Outcomes, not just implementations</h2>
              <p>
                A look at how we&apos;ve helped finance teams consolidate
                systems, automate the busywork and trust their numbers.
              </p>
            </div>
            <Link className="tl" href="/case-studies">
              All case studies →
            </Link>
          </div>
          <div className="grid3">
            {caseStudies.map((c) => {
              const [first, ...rest] = c.metrics;
              return (
                <article key={c.slug} className="case">
                  <div className="tag">
                    <b>{c.tag}</b> · {c.client}
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.cardResult ?? c.result}</p>
                  <div className="big">
                    <span>{first.label}</span>
                    <b>{first.value}</b>
                    {rest.map((m) => (
                      <div key={m.label} className="m">
                        <span>{m.label}</span>
                        <b className={/\d/.test(m.value) ? "mono" : undefined}>
                          {m.value}
                        </b>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBlock />
    </div>
  );
}
