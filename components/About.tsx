import type { Dictionary } from "@/lib/dictionaries/types";
import { SectionHeading } from "./SectionHeading";

type AboutProps = {
  content: Dictionary["about"];
};

export function About({ content }: AboutProps) {
  return (
    <section className="bg-[#f7f7f8] px-4 py-20 sm:px-6 lg:px-8" id="about">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div className="reveal">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} />
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">{content.text}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {content.proofPoints.map((point, index) => (
            <div
              className="reveal rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-950/5"
              key={point.label}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <p className="text-3xl font-black text-[var(--bbm-red)]">{point.value}</p>
              <p className="mt-2 text-sm font-semibold text-neutral-600">{point.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
