import { Check } from "lucide-react";
import { Button } from "./Button";
import type { PricingPlan } from "@/lib/types";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 ${
        plan.isPopular
          ? "border-2 border-accent-700 scale-105 shadow-xl"
          : "border border-border hover:shadow-xl"
      }`}
    >
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="gradient-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full">
            人気
          </span>
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          {plan.name}
        </h3>
        <p className="text-sm text-text-secondary mb-4">{plan.description}</p>
        <div className="text-4xl font-bold text-text-primary mb-1">
          {plan.price}
        </div>
        <div className="text-sm text-text-muted">{plan.priceNote}</div>
      </div>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-accent-700 shrink-0 mt-0.5" />
            <span className="text-sm text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={plan.isPopular ? "primary" : "ghost"}
        size="md"
        href="#contact"
        className={`w-full ${!plan.isPopular ? "border border-border" : ""}`}
      >
        {plan.ctaText}
      </Button>
    </div>
  );
}
