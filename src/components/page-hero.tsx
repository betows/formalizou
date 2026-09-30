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
    <section className="relative overflow-hidden text-cream">
      <div className="absolute inset-0 bg-linear-to-br from-ink via-[#0e5a86] to-ink" />
      <div className="absolute left-1/2 top-0 size-80 -translate-x-1/2 rounded-full bg-orange/25 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-32 text-center">
        <p className="rise-in mx-auto inline-flex rounded-full bg-cream/10 px-3 py-1.5 text-sm font-medium backdrop-blur-md">
          {eyebrow}
        </p>
        <h1 className="rise-in d1 mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="rise-in d2 mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/80">{lede}</p>
      </div>
    </section>
  );
}
