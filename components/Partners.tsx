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
                <PartnerLogo name={name} {...logoSources} />
                <span className="mt-4 text-xs font-bold text-neutral-700">{name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
