import ServiceIcon from "./ServiceIcon";
import type { Service } from "@/lib/content";

export default function ServiceCard({
  service,
  showDetails = false,
}: {
  service: Service;
  showDetails?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-cream p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-md">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-accent transition-colors group-hover:border-accent/30">
        <ServiceIcon slug={service.slug} className="h-5 w-5" />
      </span>

      <h3 className="mt-5 font-heading text-lg font-medium leading-snug text-ink">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">
        {showDetails ? service.details : service.summary}
      </p>

      {showDetails ? (
        <ul className="mt-5 space-y-2 border-t border-line pt-5">
          {service.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-2.5 text-sm text-charcoal">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              {o}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
