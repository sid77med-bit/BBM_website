import type { Dictionary } from "@/lib/dictionaries/types";
import { SectionHeading } from "./SectionHeading";

type WhyChooseUsProps = {
  content: Dictionary["whyChooseUs"];
};

export function WhyChooseUs({ content }: WhyChooseUsProps) {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8" id="why">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <div className="reveal lg:sticky lg:top-28">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        </div>
        <div className="grid gap-4">
          {content.points.map((point, index) => (
            <div
              className="reveal flex items-center gap-5 rounded-lg border border-neutral-200 bg-[#f7f7f8] p-5 transition hover:border-red-200 hover:bg-white hover:shadow-xl hover:shadow-red-950/5"
              key={point}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--bbm-red)] text-sm font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base font-bold text-[var(--bbm-black)]">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
