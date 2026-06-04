import type { Dictionary } from "@/lib/dictionaries/types";
import { SectionHeading } from "./SectionHeading";

type ContactProps = {
  company: Dictionary["company"];
  content: Dictionary["contact"];
};

export function Contact({ company, content }: ContactProps) {
  return (
    <section className="bg-neutral-950 px-4 py-20 text-white sm:px-6 lg:px-8" id="contact">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="reveal">
          <SectionHeading
            eyebrow={content.eyebrow}
            intro={content.intro}
            inverse
            title={content.title}
          />
          <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.06] p-6">
            <h3 className="text-lg font-bold">{content.detailsTitle}</h3>
            <div className="mt-5 grid gap-4 text-sm leading-6 text-white/[0.74]">
              <a className="transition hover:text-white" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              <a className="transition hover:text-white" href={`tel:${company.phone.replaceAll(" ", "")}`}>
                {company.phone}
              </a>
              <p>{company.address}</p>
            </div>
          </div>
        </div>

        <form className="reveal rounded-lg border border-white/10 bg-white p-5 text-[var(--bbm-ink)] shadow-2xl shadow-black/20 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              <span>{content.fields.name}</span>
              <input
                className="min-h-12 rounded-lg border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none transition focus:border-[var(--bbm-red)] focus:bg-white focus:ring-4 focus:ring-red-100"
                name="name"
                placeholder={content.placeholders.name}
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              <span>{content.fields.email}</span>
              <input
                className="min-h-12 rounded-lg border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none transition focus:border-[var(--bbm-red)] focus:bg-white focus:ring-4 focus:ring-red-100"
                name="email"
                placeholder={content.placeholders.email}
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
              <span>{content.fields.phone}</span>
              <input
                className="min-h-12 rounded-lg border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none transition focus:border-[var(--bbm-red)] focus:bg-white focus:ring-4 focus:ring-red-100"
                name="phone"
                placeholder={content.placeholders.phone}
                type="tel"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
              <span>{content.fields.message}</span>
              <textarea
                className="min-h-36 resize-y rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-[var(--bbm-red)] focus:bg-white focus:ring-4 focus:ring-red-100"
                name="message"
                placeholder={content.placeholders.message}
              />
            </label>
          </div>
          <button
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[var(--bbm-red)] px-5 text-sm font-bold text-white shadow-lg shadow-red-950/20 transition hover:bg-[var(--bbm-red-dark)] sm:w-auto"
            type="button"
          >
            {content.button}
          </button>
        </form>
      </div>
    </section>
  );
}
