/**
 * Central, editable site copy & data.
 * Edit text here to update navigation, services and case studies across the site.
 */

export const site = {
  name: "Integer8 Systems",
  shortName: "Integer8",
  positioning: "Finance Systems & Accounting Automation",
  email: "hello@integer8systems.com",
  bookingUrl: "/contact",
  description:
    "Integer8 Systems helps accounting firms and finance teams streamline operations through ERP implementation, integrations, and custom automation.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string;
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "odoo-implementation",
    title: "Odoo Implementation & Customization",
    summary:
      "Configure and tailor Odoo to match how your finance team actually works — from chart of accounts to approvals.",
    details:
      "We scope, implement and customize Odoo around real accounting workflows: multi-company structures, localized tax, analytic accounting and the approval flows your controllers rely on.",
    outcomes: [
      "Clean chart of accounts and tax setup",
      "Workflows mapped to your close process",
      "Team trained on day-to-day operation",
    ],
  },
  {
    slug: "accounting-automation",
    title: "Accounting Automation",
    summary:
      "Remove manual data entry and repetitive month-end steps with dependable, auditable automation.",
    details:
      "We identify the repetitive, error-prone steps in your ledger and automate them — bank feeds, recurring journals, document capture and reconciliation routines that hold up under audit.",
    outcomes: [
      "Fewer manual journal entries",
      "Faster, more reliable month-end close",
      "Clear audit trail on every step",
    ],
  },
  {
    slug: "quickbooks-integrations",
    title: "QuickBooks Integrations",
    summary:
      "Connect QuickBooks to the tools around it so data flows once, cleanly, without re-keying.",
    details:
      "We build and maintain integrations between QuickBooks and your billing, payments, CRM and operational systems — with sensible mapping, deduplication and error handling.",
    outcomes: [
      "Single source of truth across systems",
      "No duplicate or mismatched records",
      "Sync you can monitor and trust",
    ],
  },
  {
    slug: "stripe-reconciliation",
    title: "Stripe Reconciliation",
    summary:
      "Match Stripe payouts, fees and refunds to your ledger automatically — down to the cent.",
    details:
      "We reconcile Stripe activity against your books, accounting for fees, refunds, chargebacks and currency so payouts tie out precisely and reporting stays accurate.",
    outcomes: [
      "Payouts reconciled to the cent",
      "Fees and refunds posted correctly",
      "Reliable revenue reporting",
    ],
  },
  {
    slug: "erp-finance-consulting",
    title: "ERP & Finance Systems Consulting",
    summary:
      "Independent guidance on selecting, structuring and improving the systems behind your finance function.",
    details:
      "Whether you are choosing an ERP, untangling an existing setup or planning a migration, we provide practical, vendor-honest advice grounded in how finance teams operate.",
    outcomes: [
      "A clear systems roadmap",
      "Right-sized tooling decisions",
      "Lower long-term operating cost",
    ],
  },
  {
    slug: "ai-finance-workflows",
    title: "AI-Powered Finance Workflows",
    summary:
      "Apply AI where it earns its place — categorization, document extraction and review — with humans in control.",
    details:
      "We design AI-assisted workflows for transaction categorization, document extraction and anomaly review, with clear confidence thresholds and human approval where it matters.",
    outcomes: [
      "Faster transaction categorization",
      "Less time on document data entry",
      "Review focused on the exceptions",
    ],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  tag: string;
  challenge: string;
  approach: string;
  result: string;
  metrics: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "odoo-saudi-accounting",
    title: "Odoo Accounting Implementation",
    client: "Saudi-based trading business",
    tag: "Odoo / ERP",
    challenge:
      "Disconnected spreadsheets and a manual close process made it hard to trust the numbers or report on time.",
    approach:
      "Implemented Odoo accounting with a localized chart of accounts, tax configuration and approval workflows mapped to the team's close process.",
    result:
      "A single, dependable system of record with a faster, more confident month-end close.",
    metrics: [
      { label: "Close time", value: "Cut by half" },
      { label: "Systems consolidated", value: "5 → 1" },
      { label: "Manual entries", value: "Sharply reduced" },
    ],
  },
  {
    slug: "ledgersort-ai-categorization",
    title: "LedgerSort — AI Transaction Categorization",
    client: "QuickBooks-based finance team",
    tag: "AI / QuickBooks",
    challenge:
      "Bookkeepers spent hours each week manually categorizing QuickBooks transactions, with inconsistent results.",
    approach:
      "Built LedgerSort: an AI-powered categorization layer with confidence thresholds and human review for low-certainty matches.",
    result:
      "Routine categorization handled automatically, with people focused only on the exceptions.",
    metrics: [
      { label: "Categorization time", value: "−80%" },
      { label: "Consistency", value: "Standardized" },
      { label: "Review", value: "Exceptions only" },
    ],
  },
  {
    slug: "stripe-reconciliation-reporting",
    title: "Stripe Reconciliation & Reporting",
    client: "Subscription business",
    tag: "Stripe / Automation",
    challenge:
      "Stripe payouts, fees and refunds never cleanly matched the ledger, making revenue reporting slow and uncertain.",
    approach:
      "Automated reconciliation of Stripe activity against the books and built reporting that accounts for fees, refunds and currency.",
    result:
      "Payouts that tie out to the cent and revenue reporting the team can rely on.",
    metrics: [
      { label: "Reconciliation", value: "Automated" },
      { label: "Payout accuracy", value: "To the cent" },
      { label: "Reporting", value: "Same-day" },
    ],
  },
];

export const whyPoints = [
  {
    title: "Finance-first, not IT-first",
    body: "We start from accounting reality — the close, controls and audit trail — then build systems around it, not the other way around.",
  },
  {
    title: "Boutique focus",
    body: "You work directly with senior people who understand both the ledger and the codebase. No hand-offs to junior teams.",
  },
  {
    title: "Outcome-focused",
    body: "We measure success in hours saved, faster closes and numbers you can trust — not in dashboards no one opens.",
  },
  {
    title: "Built to be maintained",
    body: "Clean, documented implementations your team can actually run, with clear audit trails on every automated step.",
  },
];
