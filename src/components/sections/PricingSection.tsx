import { PRICING_PLANS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/ui/PricingCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="松竹梅プラン料金"
            subtitle="必要なコール数に応じて柔軟に。全プラン共通の安心価格設計です。"
          />
        </AnimatedSection>

        {/* 共通費サマリーバー */}
        <AnimatedSection>
          <div className="mb-12 rounded-2xl bg-white border border-border shadow-sm p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-xs font-medium text-text-muted uppercase tracking-wide mb-1">
                  初期設定費(全プラン共通)
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  ¥300,000
                </div>
                <div className="text-xs text-text-secondary mt-1">
                  オンボーディング・スクリプト作成込み
                </div>
              </div>
              <div className="md:border-x md:border-border">
                <div className="text-xs font-medium text-text-muted uppercase tracking-wide mb-1">
                  コール料金(従量課金)
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  ¥25〜30 / コール
                </div>
                <div className="text-xs text-text-secondary mt-1">
                  1,000コール単位で購入
                </div>
              </div>
              <div>
                <div className="text-xs font-medium text-text-muted uppercase tracking-wide mb-1">
                  システム利用料
                </div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  ¥0
                </div>
                <div className="text-xs text-text-secondary mt-1">
                  月額固定費は一切かかりません
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan, i) => (
            <AnimatedSection key={plan.id} delay={i * 0.15}>
              <PricingCard plan={plan} />
            </AnimatedSection>
          ))}
        </div>

        <p className="text-center text-xs text-text-muted mt-8">
          ※ 表示はすべて税別価格です。長期契約・年間一括払いでの割引もご相談可能です。
        </p>
      </div>
    </section>
  );
}
