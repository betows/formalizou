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
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-amber">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl leading-[1.05] tracking-tight sm:text-4xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/75">{lede}</p>
      </div>
    </section>
  );
}
