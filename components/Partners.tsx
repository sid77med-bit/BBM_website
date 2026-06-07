import type { Dictionary } from "@/lib/dictionaries/types";
import { PartnerLogo } from "./PartnerLogo";
import { SectionHeading } from "./SectionHeading";

type PartnersProps = {
  content: Dictionary["partners"];
};

const partnerLogoDomains: Record<string, string> = {
  Cloudera: "cloudera.com",
  Informatica: "informatica.com",
  "Pivotal EMC": "pivotal.io",
  "One Identity": "oneidentity.com",
  Symantec: "symantec.com",
  Fidelis: "fidelissecurity.com",
  Zaloni: "zaloni.com",
  "McKinsey & Company": "mckinsey.com",
  Vasco: "onespan.com",
  Microsoft: "microsoft.com",
  IBM: "ibm.com",
  Accenture: "accenture.com",
  Oracle: "oracle.com",
  VMware: "vmware.com",
  OpenText: "opentext.com",
  Hortonworks: "hortonworks.com",
  SAP: "sap.com",
  Subex: "subex.com"
};

function getPartnerLogoSources(name: string) {
  const domain = partnerLogoDomains[name];

  return {
    fallbackSrc: `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    primarySrc: `https://logo.clearbit.com/${domain}?size=180`
  };
}

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
          {content.names.map((name, index) => {
            const logoSources = getPartnerLogoSources(name);

            return (
              <div
                className="reveal flex min-h-32 flex-col items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-950/5"
                key={name}
                style={{ animationDelay: `${index * 35}ms` }}
              >
                {name === "McKinsey & Company" ? <img className="h-10"src={"data:image/png;base64,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"} /> :<PartnerLogo name={name} {...logoSources} />}
                <span className="mt-4 text-xs font-bold text-neutral-700">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
