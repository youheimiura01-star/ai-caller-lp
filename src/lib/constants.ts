import type {
  NavLink,
  Service,
  Stat,
  PricingPlan,
  FaqItem,
  CaseStudy,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { href: "#services", label: "サービス特長" },
  { href: "#results", label: "数字で見る強み" },
  { href: "#cases", label: "成果イメージ" },
  { href: "#pricing", label: "料金プラン" },
  { href: "#flow", label: "導入の流れ" },
  { href: "#faq", label: "よくある質問" },
  { href: "#contact", label: "お問い合わせ" },
];

export const SERVICES: Service[] = [
  {
    id: "on-demand-call",
    title: "好きなタイミングで好きな数の架電が可能",
    description:
      "繁忙期も閑散期も自由自在。AIだから1日100コールでも1万コールでもボタン1つでオンデマンド架電。波のある営業需要にも完全フィットします。",
    features: [
      "コール数・実施時間帯を自由に設定",
      "繁忙期はスケール、閑散期は停止もOK",
      "曜日・時間帯ごとの稼働ルール設定",
      "感情を理解する音声AIが自然に対話",
      "アポ取得時にカレンダー自動登録",
    ],
    icon: "Phone",
  },
  {
    id: "no-management",
    title: "AI架電だからマネジメントも一切不要",
    description:
      "シフト管理・モチベーション管理・教育研修・離職対応など、人を動かす重い負荷はすべてゼロ。AIに任せて経営者・営業責任者は本業に集中できます。",
    features: [
      "シフト・勤怠・採用・教育コストがゼロ",
      "モチベーション管理・退職対応が不要",
      "品質は常に一定、属人化リスクなし",
      "稼働状況はダッシュボードで一目で把握",
      "成果レポートを自動生成・自動通知",
    ],
    icon: "Sparkles",
  },
  {
    id: "nationwide-list",
    title: "全国210万社の法人データを無料利用",
    description:
      "約210万社の全国法人データベースをプラン関係なく自由に利用可能。業種・規模・地域でフィルタし、最適なターゲットリストを瞬時に生成します。",
    features: [
      "全国約210万社の法人データを無料で利用",
      "業種 / 売上規模 / 従業員数 / 地域で絞り込み",
      "上場区分・設立年・資本金など多軸検索",
      "AIスコアリングで受注確度順に並び替え",
      "CSVエクスポート・CRM連携に対応",
    ],
    icon: "Database",
  },
];

export const STATS: Stat[] = [
  {
    id: "call-unit",
    value: "30円〜",
    label: "業界最安級のコール単価",
    description: "1コール30円から(松プラン25円)",
  },
  {
    id: "management",
    value: "ZERO",
    label: "マネジメント工数",
    description: "シフト・教育・離職対応すべて不要",
  },
  {
    id: "database",
    value: "210万社",
    label: "全国法人データ",
    description: "プラン問わず無料で利用可能",
  },
  {
    id: "system-fee",
    value: "¥0",
    label: "システム利用料",
    description: "月額固定費はかかりません",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "ume",
    name: "梅 ライト",
    price: "月額 3万円〜",
    priceNote: "1,000コール × 30円 + 初期30万円",
    description: "まず小さく試したい企業様向け",
    features: [
      "月間 1,000コール〜(1,000コール単位で追加)",
      "コール単価 30円 / コール",
      "初期設定費 30万円(共通)",
      "システム利用料 無料",
      "全国法人DB 業種フィルタで利用可能",
      "基本トークスクリプト 1本",
      "月次メールレポート",
      "アポ取得メール通知",
      "メールサポート",
    ],
    isPopular: false,
    ctaText: "無料で100コール試す",
  },
  {
    id: "take",
    name: "竹 スタンダード",
    price: "月額 13.5万円〜",
    priceNote: "5,000コール × 27円 + 初期30万円",
    description: "本格運用したい企業様向け / 一番人気",
    features: [
      "月間 5,000コール〜",
      "コール単価 27円 / コール(10%OFF)",
      "初期設定費 30万円(共通)",
      "システム利用料 無料",
      "全国法人DB 業種+規模+地域で絞り込み",
      "カスタムトークスクリプト 3本",
      "週次ダッシュボード+CSVエクスポート",
      "アポ取得SMS+CRM自動連携",
      "チャットサポート(平日)",
    ],
    isPopular: true,
    ctaText: "無料で100コール試す",
  },
  {
    id: "matsu",
    name: "松 プレミアム",
    price: "月額 25万円〜",
    priceNote: "10,000コール × 25円 + 初期30万円",
    description: "アポ取得を最大化したい企業様向け",
    features: [
      "月間 10,000コール〜",
      "コール単価 25円 / コール(17%OFF)",
      "初期設定費 30万円(共通)",
      "システム利用料 無料",
      "全国法人DB + AIスコアリング優先順位付け",
      "トークスクリプト無制限 + A/Bテスト自動最適化",
      "リアルタイムBIダッシュボード",
      "アポ取得時に即時電話転送+CRM連携",
      "専任カスタマーサクセス(電話+チャット)",
    ],
    isPopular: false,
    ctaText: "個別相談を申し込む",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-jinzai",
    industry: "人材紹介会社 C社",
    target: "人事の責任者宛て",
    metricLabel: "アポ取得率",
    metricValue: "0.4%",
    detail: "250コールで1アポ取得",
    cost: "約7,500円",
    costSuffix: "1アポあたり",
    accent: "purple",
  },
  {
    id: "case-sales",
    industry: "営業支援会社 A社",
    target: "中小企業の社長宛て",
    metricLabel: "リード取得率",
    metricValue: "0.12%",
    detail: "830コールで1リード取得",
    cost: "約25,000円",
    costSuffix: "1リードあたり",
    accent: "blue",
  },
  {
    id: "case-utility",
    industry: "光熱費削減会社 E社",
    target: "店舗の責任者宛て",
    metricLabel: "リード取得率",
    metricValue: "0.3%",
    detail: "330コールで1リード取得",
    cost: "約9,900円",
    costSuffix: "1リードあたり",
    accent: "teal",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-natural",
    question: "AIで本当に自然な会話ができるのですか?",
    answer:
      "最新の大規模言語モデルと感情認識技術を組み合わせ、相手の口調・間・反応を解析しながらリアルタイムで応答を生成します。実際の通話サンプルは無料トライアル100コールの中でご確認いただけます。",
  },
  {
    id: "faq-list",
    question: "全国法人データは本当に無料で使えるのですか? 法的に問題ありませんか?",
    answer:
      "はい、全プラン共通で約210万社の全国法人データを追加料金なしで利用可能です。掲載情報は公開情報をもとに自社で整備しており、特定商取引法・電話勧誘販売法など関連法令を遵守した運用を行っております。お断りリストの管理機能も標準搭載しています。",
  },
  {
    id: "faq-initial",
    question: "初期設定費の30万円には何が含まれますか?",
    answer:
      "ヒアリング、ターゲットリスト設計、トークスクリプト作成、AI音声チューニング、テストコール、運用開始までのオンボーディングがすべて含まれます。最短10営業日で本番稼働が可能です。",
  },
  {
    id: "faq-contract",
    question: "最低契約期間やコール購入の単位を教えてください。",
    answer:
      "コールは1,000コール単位で購入いただけます。最低契約期間は3ヶ月で、それ以降は1ヶ月単位での更新・プラン変更が可能です。未消化コールは契約期間内であれば翌月以降に繰り越せます。",
  },
  {
    id: "faq-compliance",
    question: "通話の録音やコンプライアンスへの対応はどうなっていますか?",
    answer:
      "全通話は暗号化保存され、ISO27001準拠の管理体制で運用しています。冒頭の録音アナウンス、Do Not Callリスト管理、再架電制御を標準で実施。電話勧誘販売法に基づく開示・再勧誘防止にも対応しています。",
  },
];

export const CLIENT_LOGOS = [
  "BtoB SaaS A社",
  "人材サービス B社",
  "不動産 C社",
  "保険代理店 D社",
  "通信 E社",
  "コンサル F社",
  "製造業 G社",
  "EC事業 H社",
];
