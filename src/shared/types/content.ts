export type NavItem = { label: string; href: string };

export type HeroContent = {
  badge: string;
  title: string;
  subtitle: string;
  formPlaceholder: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: string;
  heroPhoneImage: { src: string; alt: string };
  heroDashboardImage: { src: string; alt: string };
  metrics: { label: string; value: string }[];
};

export type Logo = { name: string };

export type Feature = {
  title: string;
  image: { src: string; alt: string };
  chips: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type CtaContent = {
  title: string;
  description: string;
  primary: string;
  secondary: string;
};

export type FooterLink = { label: string; href: string };
