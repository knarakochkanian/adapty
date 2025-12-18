import {
  type NavItem,
  type HeroContent,
  type Logo,
  type Feature,
  type Testimonial,
  type CtaContent,
  type FooterLink
} from "@shared/types/content";

export const navItems: NavItem[] = [
  { label: "Product", href: "#features" },
  { label: "Use cases", href: "#hero" },
  { label: "Customers", href: "#testimonials" },
  { label: "Pricing", href: "#cta" }
];

export const heroContent: HeroContent = {
  badge: "Ebook   $100K playbook | download",
  title: "Revenue management for in-app purchases",
  subtitle:
    "Save months on integrating subscriptions and double your app revenue with paywall management.",
  formPlaceholder: "Email address",
  primaryCta: "Start for free",
  secondaryCta: "Book a demo",
  secondaryHref: "#cta",
  heroPhoneImage: {
    src: "https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp",
    alt: "Adapty paywall on mobile"
  },
  heroDashboardImage: {
    src: "https://adapty.io/assets/uploads/2025/02/adapty-overview@1x.webp",
    alt: "Adapty analytics overview"
  },
  metrics: [
    { label: "ARPU uplift", value: "+24%" },
    { label: "Launch time saved", value: "3x" },
    { label: "SDK size", value: "120KB" }
  ]
};

export const logos: Logo[] = [
  { name: "Strava" },
  { name: "HBO Max" },
  { name: "Babbel" },
  { name: "Flo" },
  { name: "Elevate" },
  { name: "AllTrails" }
];

export const features: Feature[] = [
  {
    title: "For developers",
    image: {
      src: "https://adapty.io/assets/uploads/2025/02/img-card-cover-sdk-install@2x.webp",
      alt: "Adapty SDK setup"
    },
    chips: ["Subscriptions SDK", "Refund Saver", "Remote config", "Fallback paywalls"]
  },
  {
    title: "For app owners",
    image: {
      src: "https://adapty.io/assets/uploads/2025/02/img-card-cover-charts@2x.webp",
      alt: "Adapty analytics charts"
    },
    chips: ["Revenue analytics", "LTV analytics", "AI LTV and revenue predictions"]
  },
  {
    title: "For marketers",
    image: {
      src: "https://adapty.io/assets/uploads/2025/02/img-card-cover-paywalls@2x.webp",
      alt: "Adapty paywall gallery"
    },
    chips: ["A/B testing", "No-code Builder", "Localizations", "Targeting"]
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Adapty let us ship localized paywalls in days instead of sprints. Experiments became a daily habit for the team.",
    author: "Lena Martin",
    role: "VP Product, Elevate"
  },
  {
    quote:
      "The SDK is tiny, the API is clean, and support is instant. Revenue reporting finally matches finance.",
    author: "Samir Patel",
    role: "CTO, Flowly"
  }
];

export const ctaContent: CtaContent = {
  title: "Ready to adapt your monetization?",
  description:
    "Book a 20-minute walkthrough with our product specialists or jump into docs to self-serve.",
  primary: "Book a demo",
  secondary: "Explore docs"
};

export const footerLinks: FooterLink[] = [
  { label: "Status", href: "#" },
  { label: "Security", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Privacy", href: "#" }
];
