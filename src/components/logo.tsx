export function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5 text-cream">
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <rect width="32" height="32" rx="8" fill="#ef6c1a" />
        <path
          d="M10 8.5h12.5M10 8.5v15"
          fill="none"
          stroke="#fffdf8"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M10 16.2h6.4l2.6 2.8 4.8-5.6"
          fill="none"
          stroke="#fffdf8"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-[1.45rem] font-medium leading-none tracking-[-0.03em]">formalizou</span>
    </span>
  );
}
