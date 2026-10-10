import Link from "next/link";
import Logo from "./Logo";
import { nav, services, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="i8 bt">
      <div className="wrap">
        <div className="fg">
          <div>
            <Logo className="logo-img" />
            <p>
              {site.positioning}. We bridge the gap between finance and
              technology for accounting firms and finance teams.
            </p>
            <a className="mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div>
            <h6>Navigate</h6>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6>Services</h6>
            <ul>
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href="/services">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div />
        </div>
        <div className="fb">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>Finance Systems &amp; Accounting Automation</span>
        </div>
      </div>
    </footer>
  );
}
