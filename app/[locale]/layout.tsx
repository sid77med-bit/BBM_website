import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import "../globals.css";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, type Locale } from "@/lib/locales";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dictionary = getDictionary(locale);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bbmtech.com"),
    title: {
      default: dictionary.metadata.title,
      template: dictionary.metadata.titleTemplate
    },
    description: dictionary.metadata.description,
    applicationName: dictionary.company.name
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070707"
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale = rawLocale as Locale;

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
