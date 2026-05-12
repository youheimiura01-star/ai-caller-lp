import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ClientLogosSection } from "@/components/sections/ClientLogosSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { StepSection } from "@/components/sections/StepSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ClientLogosSection />
      <ResultsSection />
      <PricingSection />
      <StepSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
