import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "AIコーラー | 完全AI架電サービス - アイドマ・ホールディングス",
  description:
    "コール単価30円から。全国210万社の法人データを無料で使い、AIが好きなタイミングで自動架電。マネジメント工数ゼロ。初期30万円・システム利用料無料の松竹梅プラン。無料トライアル100コール実施中。",
  keywords:
    "AI架電, AIコール, アウトバウンド, 営業自動化, テレアポ代行, 法人リスト, BtoB",
  openGraph: {
    title: "AIコーラー | 完全AI架電サービス",
    description:
      "コール単価30円から。全国210万社の法人データを無料で使い、AIが好きなタイミングで自動架電。マネジメント工数ゼロ。",
    siteName: "AIコーラー",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
