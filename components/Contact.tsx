import type { Dictionary } from "@/lib/dictionaries/types";
import { SectionHeading } from "./SectionHeading";

type ContactProps = {
  company: Dictionary["company"];
  content: Dictionary["contact"];
};

export function Contact({ company, content }: ContactProps) {
  return (
    <section className="bg-neutral-950 px-4 py-20 text-white sm:px-6 lg:px-8" id="contact">
      <div className="mx-auto max-w-4xl">
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
              <a className="transition hover:text-white" href={`tel:${company.phone.replaceAll(" ", "")}`}>
                {company.phone}
              </a>
              <p>infos@bbmtech.com</p>
              <p>{company.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
