import type { Metadata } from 'next'
import {
  Noto_Serif_JP,
  Noto_Sans_JP,
  Cormorant_Garamond,
  Shippori_Mincho,
} from 'next/font/google'
import { SITE } from '@/lib/config'
import './globals.css'

// ── フォント ────────────────────────────────────────────────────
const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
  preload: false,
})

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
  preload: false,
})

const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const shipporiMincho = Shippori_Mincho({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-shippori',
  display: 'swap',
  preload: false,
})

// ── SEO / OGP ───────────────────────────────────────────────────
// ✏️ OGP画像の差し替え手順:
//   1. public/ogp.jpg を 1200×630px で用意（Canva等で作成）
//   2. 下記 images の行のコメントを外す
//   3. SITE.url を実際のドメインに変更（lib/config.ts）
// ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default:  `${SITE.name}（${SITE.nameJa}）｜思い出をアニメ風記念ムービーに`,
    template: `%s | ${SITE.name}`,
  },
  description:
    '写真・動画をアニメ風に加工し、結婚式・誕生日・記念日・卒団の大切な思い出を特別なムービーに仕上げるサービス。先着3組モニター募集中。',
  keywords: [
    'アニメ風動画',
    '記念ムービー',
    '結婚式ムービー',
    '思い出動画',
    '卒団ムービー',
    'アニメモリー',
    'AniMemory',
  ],
  authors:  [{ name: SITE.name }],
  creator:  SITE.name,

  openGraph: {
    title:       `${SITE.name}（${SITE.nameJa}）｜思い出をアニメ風記念ムービーに`,
    description: '写真・動画をアニメ風に加工し、大切な思い出を特別なムービーに仕上げるサービスです。',
    url:         SITE.url,
    siteName:    SITE.name,
    locale:      'ja_JP',
    type:        'website',
    // ✏️ OGP画像を用意したらコメントを外してください
    // images: [{
    //   url:    '/ogp.jpg',   // public/ogp.jpg を配置
    //   width:  1200,
    //   height: 630,
    //   alt:    `${SITE.name} - 思い出をアニメ風記念ムービーに`,
    // }],
  },

  twitter: {
    card:        'summary_large_image',
    title:       `${SITE.name}（${SITE.nameJa}）｜思い出をアニメ風記念ムービーに`,
    description: '写真・動画をアニメ風に加工し、大切な思い出を特別なムービーに仕上げるサービスです。',
    // ✏️ OGP画像を用意したらコメントを外してください
    // images: ['/ogp.jpg'],
  },

  // Vercel / Google Search Console の確認用（取得後に追加）
  // verification: {
  //   google: 'XXXXXXXXXX', // Google Search Console の確認コード
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} ${cormorant.variable} ${shipporiMincho.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
