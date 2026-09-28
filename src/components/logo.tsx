export function Logo({ className = "text-ink" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true" className="shrink-0">
        <rect x="1.5" y="3.5" width="20" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15.2 3.5 21.5 9.6H15.2Z" fill="currentColor" />
        <g transform="translate(16 15) rotate(-8)">
          <rect width="16" height="16" fill="#e23d12" />
          <path
            d="M4.2 8.3 6.7 10.8 11.8 5.4"
            fill="none"
            stroke="#fffcf8"
            strokeWidth="1.6"
            strokeLinecap="square"
          />
        </g>
      </svg>
      <span className="text-[1.35rem] font-semibold leading-none tracking-[-0.045em]">formalizou</span>
    </span>
  );
}
