import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowButton({
  children,
  href,
  variant = "solid",
  className = "",
  type = "button",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "line";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = `hero-btn ${variant === "line" ? "hero-btn-line" : "hero-btn-solid"} ${className}`.trim();
  const content = (
    <>
      {children}
      <ArrowIcon />
    </>
  );

  if (!href) {
    return (
      <button type={type} className={classes} onClick={onClick}>
        {content}
      </button>
    );
  }

  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  const external = href.startsWith("http");
  return (
    <a href={href} className={classes} onClick={onClick} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {content}
    </a>
  );
}

function ArrowIcon() {
  return (
    <span className="hero-btn-icon" aria-hidden="true">
      <span className="hero-btn-arrow">
        <Arrow />
      </span>
      <span className="hero-btn-arrow">
        <Arrow />
      </span>
    </span>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
