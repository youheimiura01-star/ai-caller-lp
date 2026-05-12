import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const PLAN_LABELS: Record<string, string> = {
  ume: "梅 ライト(1,000コール〜)",
  take: "竹 スタンダード(5,000コール〜)",
  matsu: "松 プレミアム(10,000コール〜)",
  undecided: "未定 / 相談したい",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, plan, industry, message } =
      await request.json();

    if (!name || !company || !email || !plan) {
      return NextResponse.json(
        { error: "必須項目を入力してください" },
        { status: 400 }
      );
    }

    const planLabel = PLAN_LABELS[plan] ?? plan;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "メール送信が未設定です。お電話またはメールにてご連絡ください。" },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "AIコーラー <onboarding@resend.dev>",
      to: "r_yoshida@aidma-hd.jp",
      subject: `【AIコーラー】無料トライアル申込: ${company} ${name}様`,
      html: `
        <h2>AIコーラー 無料トライアル100コール お申込み</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:12px;font-weight:bold;width:140px;">お名前</td>
            <td style="padding:12px;">${escapeHtml(name)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:12px;font-weight:bold;">会社名</td>
            <td style="padding:12px;">${escapeHtml(company)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:12px;font-weight:bold;">メールアドレス</td>
            <td style="padding:12px;">${escapeHtml(email)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:12px;font-weight:bold;">電話番号</td>
            <td style="padding:12px;">${escapeHtml(phone || "未入力")}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:12px;font-weight:bold;">想定プラン</td>
            <td style="padding:12px;">${escapeHtml(planLabel)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:12px;font-weight:bold;">業種</td>
            <td style="padding:12px;">${escapeHtml(industry || "未入力")}</td>
          </tr>
          <tr>
            <td style="padding:12px;font-weight:bold;vertical-align:top;">ターゲット・お問い合わせ</td>
            <td style="padding:12px;white-space:pre-wrap;">${escapeHtml(
              message || "未入力"
            )}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 }
    );
  }
}
