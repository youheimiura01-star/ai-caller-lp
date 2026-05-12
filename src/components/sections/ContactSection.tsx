"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, PhoneCall } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    plan: "",
    industry: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          plan: "",
          industry: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="無料トライアル100コールのお申込み"
            subtitle="まずは100コール無料でAI架電の品質をご体感ください。営業担当より2営業日以内にご連絡いたします。"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <AnimatedSection direction="left">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                100コール無料でできること
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                ヒアリングをもとに簡易スクリプトを作成し、実際のターゲットリストに対してAIで100コールを実行。
                通話録音・文字起こし・成果レポートまでご提供します。導入判断にそのままご活用ください。
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">
                      無料で体験できる内容
                    </div>
                    <div className="text-sm text-text-secondary">
                      AIによる実コール100件 / 通話録音・要約 / 簡易レポート
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">メール</div>
                    <div className="text-sm text-text-secondary">
                      info@aidma-hd.jp
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">電話</div>
                    <div className="text-sm text-text-secondary">
                      03-6455-7935(平日 9:00〜18:00)
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">
                      所在地
                    </div>
                    <div className="text-sm text-text-secondary">
                      〒141-0021 東京都品川区上大崎2-13-30
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="right">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg border border-border"
            >
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent-700 focus:ring-2 focus:ring-accent-700/20 outline-none transition-all text-sm"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      会社名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent-700 focus:ring-2 focus:ring-accent-700/20 outline-none transition-all text-sm"
                      placeholder="株式会社サンプル"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent-700 focus:ring-2 focus:ring-accent-700/20 outline-none transition-all text-sm"
                      placeholder="example@company.co.jp"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      電話番号
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent-700 focus:ring-2 focus:ring-accent-700/20 outline-none transition-all text-sm"
                      placeholder="03-1234-5678"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="plan"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      想定プラン <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="plan"
                      required
                      value={formData.plan}
                      onChange={(e) =>
                        setFormData({ ...formData, plan: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent-700 focus:ring-2 focus:ring-accent-700/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">選択してください</option>
                      <option value="ume">梅 ライト(1,000コール〜)</option>
                      <option value="take">竹 スタンダード(5,000コール〜)</option>
                      <option value="matsu">松 プレミアム(10,000コール〜)</option>
                      <option value="undecided">未定 / 相談したい</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium text-text-primary mb-1.5"
                    >
                      業種
                    </label>
                    <input
                      id="industry"
                      type="text"
                      value={formData.industry}
                      onChange={(e) =>
                        setFormData({ ...formData, industry: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent-700 focus:ring-2 focus:ring-accent-700/20 outline-none transition-all text-sm"
                      placeholder="SaaS / 不動産 / 人材 など"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    お問い合わせ・架電したいターゲット
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent-700 focus:ring-2 focus:ring-accent-700/20 outline-none transition-all text-sm resize-none"
                    placeholder="例) 関東圏のIT企業(従業員50〜300名)に向けて、SaaSサービスのアポ取得を希望"
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="w-full"
                >
                  {status === "sending" ? "送信中..." : "無料で100コール試す"}
                </Button>
                {status === "sent" && (
                  <p className="text-sm text-green-600 text-center font-medium">
                    お申込みありがとうございます。担当者より2営業日以内にご連絡いたします。
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600 text-center font-medium">
                    送信に失敗しました。時間をおいて再度お試しください。
                  </p>
                )}
                <p className="text-xs text-text-muted text-center">
                  送信いただいた情報は当社プライバシーポリシーに基づき取り扱います。
                </p>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
