"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="i8">
      <div className="wrap nav">
        <Logo className="logo-img" />
        <nav className="links" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "on" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="btn btn-dark" href="/contact">
          Book a Consultation
        </Link>
        <button
          type="button"
          className="burger"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="mnav">
          <div className="wrap">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={isActive(item.href) ? "on" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="btn btn-dark"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
