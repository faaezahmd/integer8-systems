import Link from "next/link";

/**
 * Wordmark logo. "Integer8" set in Ubuntu, with the "8" rendered as a
 * small abstract mark and a red accent dot — premium, minimal, not SaaS-y.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Integer8 Systems home"
      className={`group inline-flex items-baseline gap-1.5 font-heading ${className}`}
    >
      <span className="text-lg font-bold tracking-tight text-ink">
        Integer
        <span className="text-accent">8</span>
      </span>
      <span className="text-sm font-medium tracking-tight text-slate">
        Systems
      </span>
    </Link>
  );
}
