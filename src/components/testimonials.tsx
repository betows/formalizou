import { testimonials } from "@/lib/content";

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden">
      <div className="marquee-track flex w-max gap-4">
        {loop.map((item, index) => (
          <figure key={`${item.name}-${index}`} className="w-[min(22rem,80vw)] shrink-0 rounded-[1.75rem] bg-paper p-6">
            <blockquote className="text-lg leading-snug tracking-tight">“{item.quote}”</blockquote>
            <figcaption className="mt-6">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-ink-soft">{item.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
