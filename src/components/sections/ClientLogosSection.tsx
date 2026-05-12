import { CLIENT_LOGOS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ClientLogosSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-sm font-medium text-text-muted mb-8 tracking-wider uppercase">
            ご利用業界例
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {CLIENT_LOGOS.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-16 rounded-lg bg-surface-alt opacity-50"
              >
                <span className="text-sm font-medium text-text-muted">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
