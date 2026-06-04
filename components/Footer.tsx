import Link from "next/link";
import type { Dictionary, NavItem } from "@/lib/dictionaries/types";

type FooterProps = {
  company: Dictionary["company"];
  content: Dictionary["footer"];
  nav: NavItem[];
};

export function Footer({ company, content, nav }: FooterProps) {
  const servicesLink = nav.find((item) => item.href === "#services");
  const contactLink = nav.find((item) => item.href === "#contact");

  return (
    <footer className="border-t border-neutral-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto_auto]">
        <div>
          <p className="text-lg font-black text-[var(--bbm-black)]">{company.name}</p>
          <p className="mt-2 text-sm text-neutral-600">{company.slogan}</p>
          <p className="mt-5 text-xs text-neutral-500">
            © {new Date().getFullYear()} {company.name}. {content.copyright}
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-[var(--bbm-black)]">{content.quickLinks}</p>
          <div className="mt-3 grid gap-2">
            {nav.slice(0, 3).map((item) => (
              <Link className="text-sm text-neutral-600 transition hover:text-[var(--bbm-red)]" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-[var(--bbm-black)]">{content.contact}</p>
          <div className="mt-3 grid gap-2 text-sm text-neutral-600">
            {servicesLink ? (
              <Link className="transition hover:text-[var(--bbm-red)]" href={servicesLink.href}>
                {content.services}
              </Link>
            ) : null}
            {contactLink ? (
              <Link className="transition hover:text-[var(--bbm-red)]" href={contactLink.href}>
                {content.contact}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
