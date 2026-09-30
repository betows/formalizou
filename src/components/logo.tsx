import Image from "next/image";

export function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  const footer = variant === "footer";

  return (
    <Image
      src="/brand/logo-mono.png"
      alt="Formalizou"
      width={1141}
      height={footer ? 266 : 218}
      priority={!footer}
      className={footer ? "h-12 w-auto" : "h-7 w-auto"}
    />
  );
}
