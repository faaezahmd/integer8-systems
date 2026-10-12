export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="phero">
      <div className="wrap">
        <span className="eb">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="lead">{intro}</p>
      </div>
    </section>
  );
}
