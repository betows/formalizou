import Image from "next/image";

export function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  const footer = variant === "footer";

  return (
    <Image
      src={footer ? "/brand/logo-white-tagline.png" : "/brand/logo-color.png"}
      alt="Formalizou"
      width={1141}
      height={footer ? 266 : 218}
      priority={!footer}
      className={footer ? "h-14 w-auto sm:h-16" : "h-8 w-auto"}
    />
  );
}
