import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <ol className="grid border-t border-ink md:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.title} className="border-b border-line py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
          <span className="tabular-nums text-sm text-orange-deep">0{index + 1}</span>
          <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
