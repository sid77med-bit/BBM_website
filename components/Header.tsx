"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries/types";
import type { Locale } from "@/lib/locales";

type HeaderProps = {
  company: Dictionary["company"];
  content: Dictionary["header"];
  locale: Locale;
};

export function Header({ company, content, locale }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuLabel = isOpen ? content.closeMenu : content.openMenu;
  const brandInitials = company.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  const localizedPath = (targetLocale: Locale) => {
    const currentPath = pathname ?? `/${locale}`;
    const pathWithoutLocale = currentPath.replace(/^\/(fr|en)(?=\/|$)/, "");
    return `/${targetLocale}${pathWithoutLocale || ""}`;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/[0.82] text-white shadow-2xl shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="group flex min-w-0 items-center gap-3" href={`/${locale}#home`}>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white text-base font-black text-[var(--bbm-red)] shadow-lg shadow-black/20 transition group-hover:bg-red-50">
              BBM
            </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold uppercase">
              {company.name}
            </span>
            <span className="block truncate text-xs text-white/[0.64]">{company.slogan}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={content.navigationLabel}>
          {content.nav.map((item) => (
            <Link
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/[0.72] transition hover:bg-white/10 hover:text-white"
              href={`/${locale}${item.href}`}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div
            aria-label={content.languageLabel}
            className="flex rounded-lg border border-white/[0.14] bg-white/[0.08] p-1"
            role="group"
          >
            <Link
              aria-current={locale === "fr" ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-xs font-semibold transition ${
                locale === "fr"
                  ? "bg-white text-neutral-950"
                  : "text-white/[0.68] hover:bg-white/10 hover:text-white"
              }`}
              href={localizedPath("fr")}
            >
              {content.french}
            </Link>
            <Link
              aria-current={locale === "en" ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-xs font-semibold transition ${
                locale === "en"
                  ? "bg-white text-neutral-950"
                  : "text-white/[0.68] hover:bg-white/10 hover:text-white"
              }`}
              href={localizedPath("en")}
            >
              {content.english}
            </Link>
          </div>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--bbm-red)] px-4 text-sm font-bold text-white shadow-lg shadow-red-950/20 transition hover:bg-[var(--bbm-red-dark)]"
            href={`/${locale}#contact`}
          >
            {content.cta}
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={menuLabel}
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/[0.14] bg-white/[0.08] text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-neutral-950 px-4 pb-5 pt-2 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1" aria-label={content.navigationLabel}>
            {content.nav.map((item) => (
              <Link
                className="rounded-lg px-3 py-3 text-sm font-semibold text-white/[0.78] transition hover:bg-white/10 hover:text-white"
                href={`/${locale}${item.href}`}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mx-auto mt-4 flex max-w-7xl flex-col gap-3 sm:flex-row">
            <div
              aria-label={content.languageLabel}
              className="flex rounded-lg border border-white/[0.14] bg-white/[0.08] p-1"
              role="group"
            >
              <Link
                className={`flex-1 rounded-md px-3 py-2 text-center text-xs font-semibold transition ${
                  locale === "fr"
                    ? "bg-white text-neutral-950"
                    : "text-white/[0.68] hover:bg-white/10 hover:text-white"
                }`}
                href={localizedPath("fr")}
                onClick={() => setIsOpen(false)}
              >
                {content.french}
              </Link>
              <Link
                className={`flex-1 rounded-md px-3 py-2 text-center text-xs font-semibold transition ${
                  locale === "en"
                    ? "bg-white text-neutral-950"
                    : "text-white/[0.68] hover:bg-white/10 hover:text-white"
                }`}
                href={localizedPath("en")}
                onClick={() => setIsOpen(false)}
              >
                {content.english}
              </Link>
            </div>
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--bbm-red)] px-4 text-sm font-bold text-white"
              href={`/${locale}#contact`}
              onClick={() => setIsOpen(false)}
            >
              {content.cta}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
