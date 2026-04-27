// ================================================================
// AniMemory サイト設定ファイル
// 公開前にここを編集してください
// ================================================================

export const SITE = {

  // ── 基本情報 ──────────────────────────────────────────────────
  name:        'AniMemory',
  nameJa:      'アニメモリー',
  description: '大切な思い出をアニメ風の記念ムービーとして残すサービス',

  // ✏️ 公開後に実際のドメインへ変更（Vercel の場合は自動割り当てURLでもOK）
  url: 'https://animemory.vercel.app',

  // ── SNS リンク ────────────────────────────────────────────────
  social: {
    // ✏️ Instagram の URL を入れてください
    // 例: 'https://www.instagram.com/animemory_official'
    instagram: '',

    // ✏️ Twitter / X の URL を入れてください（不要なら '' のまま）
    // 例: 'https://twitter.com/animemory'
    twitter: '',

    // ✏️ LINE 公式アカウントの URL を入れてください（不要なら '' のまま）
    // 例: 'https://lin.ee/XXXXXXXX'
    line: '',
  },

  // ── お問い合わせフォーム ──────────────────────────────────────
  // いずれか1つを設定してください（複数設定した場合は上から優先）
  form: {
    // 【方法A: Formspree】
    // 1. https://formspree.io/register でアカウント作成（無料）
    // 2. "New Form" → フォームID（8文字）をコピー
    // ✏️ 例: 'xpzgkwld'
    formspreeId: 'xkokakal',

    // 【方法B: Netlify Forms】
    // Vercel ではなく Netlify でホストする場合に使用
    // formspreeId を空にし、ContactSection.tsx の form タグに
    // data-netlify="true" name="contact" を追加するだけで動作します
    // → 追加設定不要

    // 【方法C: Googleフォーム】
    // Googleフォームの「事前入力URL」から取得した action URL
    // ✏️ 例: 'https://docs.google.com/forms/d/e/1FAIpQLSXXXXXX/formResponse'
    googleFormUrl: '',

    // 【方法D: LINE 公式アカウントに誘導】
    // フォームの代わりに LINE のリンクボタンを表示したい場合
    // social.line に URL を設定し、ContactSection.tsx の
    // LINE誘導ブロックのコメントを外してください
  },

  // ── 動画サンプル ──────────────────────────────────────────────
  // SamplesSection に YouTube プレーヤーを表示します
  // ✏️ YouTube にアップロード後、動画のURLを貼り付けてください
  // 例（短縮URL）: 'https://youtu.be/xxxxxxxxxxx'
  // 例（通常URL）: 'https://www.youtube.com/watch?v=xxxxxxxxxxx'
  // 空のままにすると動画プレーヤーは非表示になります
  sampleVideoUrl: 'https://youtu.be/6lRwCtfcqDY',

  // ── モニター情報 ──────────────────────────────────────────────
  monitor: {
    slots:  3,    // ✏️ 先着X組の数字
    isOpen: true, // ✏️ false にするとバッジ非表示（未実装・将来対応）
  },

} as const
