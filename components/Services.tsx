import type { Dictionary } from "@/lib/dictionaries/types";
import { SectionHeading } from "./SectionHeading";

type ServicesProps = {
  content: Dictionary["services"];
};

export function Services({ content }: ServicesProps) {
  return (
    <section className="tech-grid bg-white px-4 py-20 sm:px-6 lg:px-8" id="services">
      <div className="mx-auto max-w-7xl">
        <div className="reveal">
          <SectionHeading eyebrow={content.eyebrow} intro={content.intro} title={content.title} />
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.items.map((service, index) => (
            <article
              className="reveal group flex min-h-[340px] flex-col rounded-lg border border-neutral-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-2xl hover:shadow-red-950/10"
              key={service.title}
              style={{ animationDelay: `${index * 110}ms` }}
            >
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-lg bg-neutral-950 text-white ring-8 ring-neutral-100 transition group-hover:bg-[var(--bbm-red)] group-hover:ring-red-50">
                <span className="h-5 w-5 rounded-sm border-2 border-current" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--bbm-black)]">{service.title}</h3>
              {service.items ? (
                <ul className="mt-6 grid gap-4">
                  {service.items.map((item) => (
                    <li className="flex gap-3 text-sm leading-6 text-neutral-600" key={item}>
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--bbm-red)]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {service.description ? (
                <p className="mt-6 text-sm leading-7 text-neutral-600">{service.description}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
