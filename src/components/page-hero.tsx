export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[72rem] px-5 py-12 md:py-16">
        <p className="text-sm font-medium text-orange-deep">{eyebrow}</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{lede}</p>
      </div>
    </section>
  );
}
