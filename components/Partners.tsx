import type { Dictionary } from "@/lib/dictionaries/types";
import { SectionHeading } from "./SectionHeading";

type PartnersProps = {
  content: Dictionary["partners"];
};

export function Partners({ content }: PartnersProps) {
  return (
    <section className="bg-[#f7f7f8] px-4 py-20 sm:px-6 lg:px-8" id="partners">
      <div className="mx-auto max-w-7xl">
        <div className="reveal">
          <SectionHeading
            align="center"
            eyebrow={content.eyebrow}
            intro={content.intro}
            title={content.title}
          />
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {content.names.map((name, index) => (
            <div
              className="reveal grid min-h-20 place-items-center rounded-lg border border-neutral-200 bg-white px-4 text-center text-sm font-bold text-neutral-700 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:text-[var(--bbm-red)] hover:shadow-xl hover:shadow-red-950/5"
              key={name}
              style={{ animationDelay: `${index * 35}ms` }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
