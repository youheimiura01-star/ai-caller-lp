import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="AIコーラー 3つの強み"
            subtitle="AIが架電・リスト・最適化のすべてを自動化します"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.15}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
