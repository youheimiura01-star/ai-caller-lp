import { PhoneCall } from "lucide-react";

const serviceLinks = [
  { label: "AI完全自動架電", href: "#services" },
  { label: "全国法人データ", href: "#services" },
  { label: "スクリプト最適化", href: "#services" },
  { label: "料金プラン", href: "#pricing" },
];

const companyLinks = [
  { label: "会社概要", href: "#" },
  { label: "プライバシーポリシー", href: "#" },
  { label: "利用規約", href: "#" },
  { label: "特定商取引法に基づく表記", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PhoneCall className="w-7 h-7 text-accent-400" />
              <span className="text-lg font-bold">AIコーラー</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              全国210万社の法人データを使い、好きなタイミングでAIが自動架電。
              マネジメント工数ゼロ・コール単価30円から始められる完全AI架電サービスです。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">サービス</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">会社情報</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-semibold mb-4">無料トライアル100コール</h4>
            <p className="text-sm text-white/60 mb-4 leading-relaxed">
              実コール100件と通話録音・要約レポートを無料でお試しいただけます。
            </p>
            <a
              href="#contact"
              className="inline-block gradient-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              無料で100コール試す
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/40">
            &copy; 2026 株式会社アイドマ・ホールディングス All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
