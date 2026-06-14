import Link from "next/link";
import Logo from "./Logo";
import Container from "./Container";
import { nav, services, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate">
              {site.positioning}. We bridge the gap between finance and
              technology for accounting firms and finance teams.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-dark focus-ring"
            >
              {site.email}
            </a>
          </div>

          <div>
            <h3 className="font-heading text-sm font-medium text-ink">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate hover:text-accent focus-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-medium text-ink">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-slate hover:text-accent focus-ring"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Finance Systems &amp; Accounting Automation</p>
        </div>
      </Container>
    </footer>
  );
}
