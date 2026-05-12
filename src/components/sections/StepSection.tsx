import { ClipboardList, FileText, PhoneCall, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const STEPS = [
  {
    id: 1,
    icon: ClipboardList,
    title: "無料相談・ヒアリング",
    duration: "1日",
    description:
      "貴社の課題・ターゲット・架電目的をヒアリング。最適なプランと運用設計をご提案します。",
  },
  {
    id: 2,
    icon: FileText,
    title: "スクリプト・リスト設計",
    duration: "3〜5営業日",
    description:
      "全国法人DBから対象リストを抽出。トークスクリプト案を作成し、貴社で確認・修正。",
  },
  {
    id: 3,
    icon: PhoneCall,
    title: "AIテストコール100件",
    duration: "2〜3営業日",
    description:
      "無料で100コールを実施。録音・文字起こし・成果レポートをもとに本番設計を微調整。",
  },
  {
    id: 4,
    icon: Rocket,
    title: "本番運用スタート",
    duration: "稼働開始後",
    description:
      "好きなタイミングでAIが自動架電。マネジメント不要で、週次レポートと改善提案により継続的にアポ取得率を最大化します。",
  },
];

export function StepSection() {
  return (
    <section id="flow" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="導入の流れ"
            subtitle="最短10営業日で本番稼働。無料トライアル後に本契約のご判断をいただけます。"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.id} delay={i * 0.1}>
                <div className="relative bg-surface-alt rounded-2xl p-6 h-full border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full gradient-primary text-white flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.id}
                  </div>
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 mt-2">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-accent-700 mb-1">
                    {step.duration}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
