import { Phone, Database, Sparkles, Send, Target, type LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import type { Service } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  Phone,
  Database,
  Sparkles,
  Send,
  Target,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Phone;

  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border">
      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-3">
        {service.title}
      </h3>
      <p className="text-text-secondary mb-6 leading-relaxed">
        {service.description}
      </p>
      <ul className="space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-accent-700 shrink-0 mt-0.5" />
            <span className="text-sm text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
