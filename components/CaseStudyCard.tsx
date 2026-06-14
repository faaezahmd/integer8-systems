import type { CaseStudy } from "@/lib/content";

export default function CaseStudyCard({
  study,
  detailed = false,
  className = "",
}: {
  study: CaseStudy;
  detailed?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-line bg-cream p-6 shadow-sm transition-all hover:border-line-strong hover:shadow-md sm:p-8 ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center rounded-full border border-line-strong bg-surface px-3 py-1 text-xs font-medium text-slate">
          {study.tag}
        </span>
        <span className="text-xs text-muted">{study.client}</span>
      </div>

      <h3 className="mt-5 font-heading text-xl font-medium leading-snug text-ink">
        {study.title}
      </h3>

      {detailed ? (
        <div className="mt-5 space-y-4 text-sm leading-relaxed">
          <p>
            <span className="font-medium text-ink">Challenge. </span>
            <span className="text-slate">{study.challenge}</span>
          </p>
          <p>
            <span className="font-medium text-ink">Approach. </span>
            <span className="text-slate">{study.approach}</span>
          </p>
          <p>
            <span className="font-medium text-ink">Result. </span>
            <span className="text-slate">{study.result}</span>
          </p>
        </div>
      ) : (
        <p className="mt-3 text-sm leading-relaxed text-slate">{study.result}</p>
      )}

      <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-6">
        {study.metrics.map((m) => (
          <div key={m.label}>
            <dt className="text-xs text-muted">{m.label}</dt>
            <dd className="mt-1 font-heading text-sm font-medium text-accent">
              {m.value}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
