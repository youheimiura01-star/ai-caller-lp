"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqItem } from "@/components/ui/FaqItem";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="よくある質問"
            subtitle="お客様からいただく質問をまとめました"
          />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto">
            {FAQ_ITEMS.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
