/** Minimal line icons keyed by service slug. Stroke uses currentColor. */
const paths: Record<string, React.ReactNode> = {
  "odoo-implementation": (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  "accounting-automation": (
    <>
      <path d="M3 12a9 9 0 1 1 3 6.7" />
      <path d="M3 21v-5h5" />
    </>
  ),
  "quickbooks-integrations": (
    <>
      <path d="M7 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M17 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
      <path d="M8 12h8" />
    </>
  ),
  "stripe-reconciliation": (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h10" />
      <path d="m16 17 2 2 4-4" />
    </>
  ),
  "erp-finance-consulting": (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  "ai-finance-workflows": (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
};

export default function ServiceIcon({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[slug] ?? paths["odoo-implementation"]}
    </svg>
  );
}
