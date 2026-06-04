export type NavItem = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  items?: string[];
  description?: string;
};

export type Dictionary = {
  metadata: {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    openGraphLocale: string;
  };
  company: {
    name: string;
    slogan: string;
    address: string;
    phone: string;
    email: string;
  };
  header: {
    nav: NavItem[];
    cta: string;
    navigationLabel: string;
    languageLabel: string;
    french: string;
    english: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    proofPoints: {
      value: string;
      label: string;
    }[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Service[];
  };
  methodology: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  partners: {
    eyebrow: string;
    title: string;
    intro: string;
    names: string[];
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    points: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      phone: string;
      message: string;
    };
    button: string;
    detailsTitle: string;
  };
  footer: {
    quickLinks: string;
    services: string;
    contact: string;
    copyright: string;
  };
};
