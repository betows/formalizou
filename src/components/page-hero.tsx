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
    <section className="border-b border-white/10 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/75">{lede}</p>
      </div>
    </section>
  );
}
