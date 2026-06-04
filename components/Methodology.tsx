import type { Dictionary } from "@/lib/dictionaries/types";
import { SectionHeading } from "./SectionHeading";

type MethodologyProps = {
  content: Dictionary["methodology"];
};

export function Methodology({ content }: MethodologyProps) {
  return (
    <section className="overflow-hidden bg-neutral-950 px-4 py-20 text-white sm:px-6 lg:px-8" id="methodology">
      <div className="mx-auto max-w-7xl">
        <div className="reveal">
          <SectionHeading eyebrow={content.eyebrow} intro={content.intro} inverse title={content.title} />
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {content.items.map((item, index) => (
            <div
              className="reveal relative rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/10 backdrop-blur transition hover:border-red-300/50 hover:bg-white/[0.09] lg:col-span-1"
              key={item}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="mb-6 h-px w-full bg-gradient-to-r from-[var(--bbm-red)] to-transparent" />
              <p className="font-mono text-sm font-bold text-red-100">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-sm font-semibold leading-6 text-white/[0.84]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
