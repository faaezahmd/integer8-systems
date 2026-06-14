export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
      <span className="h-px w-6 bg-accent" aria-hidden />
      {children}
    </span>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const alignment =
    align === "center" ? "mx-auto max-w-2xl text-center items-center" : "max-w-2xl";
  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="text-base leading-relaxed text-slate sm:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}
