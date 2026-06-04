import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Methodology } from "@/components/Methodology";
import { Partners } from "@/components/Partners";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { dictionaries, getDictionary } from "@/lib/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/locales";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dictionary = dictionaries[locale];

  return {
    title: {
      absolute: dictionary.metadata.title
    },
    description: dictionary.metadata.description,
    keywords: dictionary.metadata.keywords,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        "x-default": "/fr"
      }
    },
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      url: `/${locale}`,
      siteName: dictionary.company.name,
      locale: dictionary.metadata.openGraphLocale,
      alternateLocale: locale === "fr" ? ["en_US"] : ["fr_DZ"],
      type: "website"
    }
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <Header company={dictionary.company} content={dictionary.header} locale={locale} />
      <main>
        <Hero company={dictionary.company} content={dictionary.hero} />
        <About content={dictionary.about} />
        <Services content={dictionary.services} />
        <Methodology content={dictionary.methodology} />
        <Partners content={dictionary.partners} />
        <WhyChooseUs content={dictionary.whyChooseUs} />
        <Contact company={dictionary.company} content={dictionary.contact} />
      </main>
      <Footer company={dictionary.company} content={dictionary.footer} nav={dictionary.header.nav} />
    </>
  );
}
