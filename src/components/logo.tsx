import Image from "next/image";

export function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  const footer = variant === "footer";

  return (
    <Image
      src="/brand/logo-mono.png"
      alt="Formalizou"
      width={1109}
      height={202}
      priority={!footer}
      className={footer ? "block h-11 w-auto" : "block h-6 w-auto -translate-y-[5px]"}
    />
  );
}
