import { Briefcase, Building2, Store, TrendingUp } from "lucide-react";
import type { CaseStudy } from "@/lib/types";
import { CASE_STUDIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const iconByAccent = {
  purple: Briefcase,
  blue: Building2,
  teal: Store,
};

const accentClasses: Record<
  CaseStudy["accent"],
  { iconBg: string; metric: string; badge: string }
> = {
  purple: {
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-700",
    metric:
      "bg-gradient-to-r from-violet-600 to-purple-700 bg-clip-text text-transparent",
    badge: "bg-violet-50 text-violet-700 border-violet-200",
  },
  blue: {
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-700",
    metric:
      "bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
  },
  teal: {
    iconBg: "bg-gradient-to-br from-teal-500 to-emerald-700",
    metric:
      "bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent",
    badge: "bg-teal-50 text-teal-700 border-teal-200",
  },
};

export function CaseStudiesSection() {
  return (
    <section id="cases" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="成果イメージ"
            subtitle="AIコーラーで実現する、業種別の成果シミュレーション(コール単価30円ベース)"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CASE_STUDIES.map((cs, i) => {
            const Icon = iconByAccent[cs.accent];
            const accent = accentClasses[cs.accent];
            return (
              <AnimatedSection key={cs.id} delay={i * 0.12}>
                <article className="relative h-full bg-white rounded-2xl border border-border shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  {/* ヘッダー */}
                  <div className="p-6 pb-5 border-b border-border">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md ${accent.iconBg}`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-text-primary leading-snug">
                          {cs.industry}
                        </h3>
                        <p className="text-xs text-text-secondary mt-1">
                          {cs.target}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* メトリック */}
                  <div className="p-6 pb-4">
                    <div
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${accent.badge} mb-3`}
                    >
                      <TrendingUp className="w-3 h-3" />
                      {cs.metricLabel}
                    </div>
                    <div
                      className={`text-5xl md:text-6xl font-extrabold leading-none mb-2 tabular-nums ${accent.metric}`}
                    >
                      {cs.metricValue}
                    </div>
                    <p className="text-sm text-text-secondary">{cs.detail}</p>
                  </div>

                  {/* コスト */}
                  <div className="px-6 pb-6">
                    <div className="rounded-xl bg-surface-alt p-4">
                      <div className="text-xs font-medium text-text-muted mb-1">
                        想定コスト
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl md:text-3xl font-bold text-text-primary tabular-nums">
                          {cs.cost}
                        </span>
                        <span className="text-xs text-text-secondary">
                          / {cs.costSuffix}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>

        <p className="text-center text-xs text-text-muted mt-10 max-w-3xl mx-auto">
          ※ 上記は導入事例をもとにした成果イメージです。実際の成果は商材・ターゲット・トークスクリプトにより変動します。コール単価は梅プラン(30円/コール)を前提に算出。
        </p>
      </div>
    </section>
  );
}
