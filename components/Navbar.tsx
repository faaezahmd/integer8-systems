"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { ButtonLink } from "./Button";
import { nav } from "@/lib/content";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/80 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors focus-ring ${
                      active
                        ? "text-accent"
                        : "text-slate hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ButtonLink href="/contact">Book a Consultation</ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong text-ink focus-ring md:hidden"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-cream md:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-6 py-2 sm:px-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-charcoal hover:text-accent focus-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <ButtonLink
                href="/contact"
                className="w-full"
              >
                Book a Consultation
              </ButtonLink>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
