"use client";

import { useState } from "react";

type PartnerLogoProps = {
  fallbackSrc: string;
  name: string;
  primarySrc: string;
};

type LogoState = "primary" | "fallback" | "monogram";

function getInitials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function PartnerLogo({ fallbackSrc, name, primarySrc }: PartnerLogoProps) {
  const [logoState, setLogoState] = useState<LogoState>("primary");

  if (logoState === "monogram") {
    return (
      <div
        aria-hidden="true"
        className="grid h-12 w-12 place-items-center rounded-lg border border-neutral-200 bg-neutral-50 text-sm font-black text-[var(--bbm-red)]"
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <img
      alt=""
      className="h-12 max-w-32 object-contain"
      decoding="async"
      loading="lazy"
      onError={() => setLogoState(logoState === "primary" ? "fallback" : "monogram")}
      src={logoState === "primary" ? primarySrc : fallbackSrc}
    />
  );
}
