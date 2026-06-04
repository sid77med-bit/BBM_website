import Link from "next/link";
import type { Cta } from "@/lib/dictionaries/types";

type ButtonLinkProps = {
  cta: Cta;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({ cta, variant = "primary", className = "" }: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-[var(--bbm-red)] text-white shadow-lg shadow-red-950/20 hover:bg-[var(--bbm-red-dark)]",
    secondary:
      "border border-white/30 bg-white/10 text-white backdrop-blur hover:border-white/60 hover:bg-white/[0.16]",
    light:
      "border border-neutral-200 bg-white text-[var(--bbm-ink)] shadow-sm hover:border-[var(--bbm-red)] hover:text-[var(--bbm-red)]"
  };

  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-lg px-5 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`}
      href={cta.href}
    >
      <span>{cta.label}</span>
      <span aria-hidden="true" className="ml-2 text-base leading-none">
        →
      </span>
    </Link>
  );
}
