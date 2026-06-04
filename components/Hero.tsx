import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries/types";
import { ButtonLink } from "./ButtonLink";

type HeroProps = {
  company: Dictionary["company"];
  content: Dictionary["hero"];
};

export function Hero({ company, content }: HeroProps) {
  return (
    <section
      className="relative min-h-[92svh] overflow-hidden bg-neutral-950 pt-20 text-white"
      id="home"
    >
      <Image
        alt={content.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        fill
        priority
        sizes="100vw"
        src="/images/bbm-digital-network-hero.png"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/[0.82] to-black/[0.28]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f7f7f8] to-transparent" />
      <div className="relative mx-auto flex min-h-[calc(92svh-5rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl reveal">
          <p className="mb-5 inline-flex rounded-lg border border-white/[0.16] bg-white/10 px-4 py-2 text-xs font-bold uppercase text-red-100 backdrop-blur">
            {content.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/[0.76] sm:text-lg">
            {content.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink cta={content.primaryCta} />
            <ButtonLink cta={content.secondaryCta} variant="secondary" />
          </div>
          <div className="mt-12 grid max-w-2xl gap-3 border-l-2 border-[var(--bbm-red)] pl-5 text-sm text-white/70 sm:grid-cols-[auto_1fr] sm:items-center">
            <span className="font-semibold text-white">{company.name}</span>
            <span>{company.slogan}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
