export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  target: string;
  metricLabel: string;
  metricValue: string;
  detail: string;
  cost: string;
  costSuffix: string;
  accent: "purple" | "blue" | "teal";
}
