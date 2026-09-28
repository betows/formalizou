export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
        <rect width="36" height="36" rx="18" fill="#ef6c1a" />
        <path
          d="M9 22.5c2.2-7 6.4-10.5 11-10.5 3.2 0 5.4 1.6 6.6 4.2"
          fill="none"
          stroke="#fffdf8"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M20.5 12.2c2.4 1.2 4.4 3.4 5.6 6.4"
          fill="none"
          stroke="#e8b03a"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="13.2" cy="23.2" r="2" fill="#fffdf8" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] tracking-tight text-cream">
          formalizou
        </span>
        {compact ? null : (
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.16em] text-cream/55">
            contabilidade descomplicada
          </span>
        )}
      </span>
    </span>
  );
}
