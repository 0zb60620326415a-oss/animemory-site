import Image from 'next/image'
import SectionTitle from './SectionTitle'
import { SITE } from '@/lib/config'

// YouTube URL から動画IDを抽出（youtu.be・youtube.com 両対応）
function getYouTubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
  ]
  for (const p of patterns) {
    const m = url.match(p)
    if (m) return m[1]
  }
  return null
}

// ================================================================
// サンプル画像の差し替え方法
// ----------------------------------------------------------------
// 1. public/images/samples/ フォルダを作成
// 2. 画像を配置（推奨サイズ：800×540px、WebP形式）
// 3. 各 before / after の src を '/images/samples/ファイル名' に変更
//
// 動画サンプルを追加する場合:
// - public/videos/ に .mp4 を配置
// - <video> タグで表示するか、YouTubeリンクを別セクションで展開
// ================================================================

type Work = {
  id:          string
  type:        string
  label:       string
  desc:        string
  before:      string
  beforeVideo?: string
  after:       string
  afterVideo?: string
  tags:        string[]
  duration:    string
  plan:        string
}

const works: Work[] = [
  {
    id:       '01',
    type:     'Wedding',
    label:    '結婚式・前撮り',
    desc:     'ご結婚式の前撮り写真をもとに制作したサンプルです。ふたりのツーショットをアニメ風に仕上げ、柔らかい光と色調で特別なムービーに仕上げました。',
    before:   '/images/samples/wedding-before-1.jpg',
    after:    '/images/samples/wedding-after-1.png',
    tags:     ['写真素材', '結婚式', '縦動画付き'],
    duration: '60秒',
    plan:     'スタンダードプラン',
  },
  {
    id:       '02',
    type:     'Wedding',
    label:    '挙式・披露宴シーン',
    desc:     '挙式当日の笑顔のショットをアニメ風に加工したサンプルです。紙吹雪と笑顔の躍動感をそのままアニメーション映像として表現しました。',
    before:   '/images/samples/wedding-before-2.jpg',
    after:    '/images/samples/wedding-after-2.png',
    tags:     ['写真素材', '挙式', 'スタンダード'],
    duration: '60秒',
    plan:     'スタンダードプラン',
  },
  {
    id:       '03',
    type:     'Kimono Wedding',
    label:    '和装前撮り',
    desc:     '桜の季節に撮影した和装前撮り写真をアニメ風に仕上げたサンプルです。和の雰囲気と桜の色調を活かし、日本らしい美しい映像作品に仕上げました。',
    before:   '/images/samples/wedding-before-3.jpg',
    after:    '/images/samples/wedding-after-3.png',
    tags:     ['写真素材', '和装', '前撮り'],
    duration: '45秒',
    plan:     'ライトプラン',
  },
  {
    id:          '04',
    type:        'Sports',
    label:       '卒団・スポーツメモリアル',
    desc:        'バスケットボールの練習シーンをアニメ風に加工したサンプルです。選手の動きをそのままアニメーション映像として表現し、スラムダンクのような迫力ある仕上がりになりました。',
    before:      '',
    beforeVideo: '/videos/samples/sports-before.mp4',
    after:       '',
    afterVideo:  '/videos/samples/sports-after.mp4',
    tags:        ['動画素材', 'スポーツ', '卒団'],
    duration:    '60秒',
    plan:        'スタンダードプラン',
  },
]

export default function SamplesSection() {
  return (
    <section id="samples" className="py-28 md:py-32 bg-white">
      <div className="section-wrapper">
        <SectionTitle
          en="Portfolio"
          ja="サンプルイメージ"
          lead={<>完成イメージや世界観をご覧ください。<br className="md:hidden" />実際の仕上がりはお写真・動画・<br className="md:hidden" />ご希望の雰囲気に合わせてご提案します。</>}
        />

        {/* ── 動画プレーヤー（SITE.sampleVideoUrl を設定すると表示） ── */}
        {SITE.sampleVideoUrl && (() => {
          const videoId = getYouTubeId(SITE.sampleVideoUrl)
          if (!videoId) return null
          return (
            <div className="mb-14">
              {/* プレーヤーラベル */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-8 bg-sakura-200" />
                <p className="font-display text-2xs text-sakura-400 tracking-[0.4em] uppercase">
                  Sample Movie
                </p>
                <div className="h-px w-8 bg-sakura-200" />
              </div>

              {/* 動画プレーヤー */}
              <div className="rounded-2xl overflow-hidden shadow-card-hover border border-cream-200
                              aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                  title="AniMemory サンプルムービー"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-center font-sans text-xs text-gray-400 mt-4">
                ▶ 実際に制作したサンプルムービー（結婚式・前撮り）
              </p>
            </div>
          )
        })()}

        <div className="space-y-12">
          {works.map((work) => (
            <article key={work.id} className="card overflow-hidden">

              {/* ヘッダーバー */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-cream-100">
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xs text-sakura-400 tracking-[0.35em] uppercase">
                    {work.type}
                  </span>
                  <span className="w-px h-3 bg-cream-200" />
                  <span className="font-sans text-xs text-gray-400">{work.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-sans text-2xs text-gray-400 bg-cream-50 border border-cream-200 px-2.5 py-1 rounded-full">
                    {work.duration}
                  </span>
                  <span className="font-sans text-2xs text-sakura-500 bg-sakura-50 border border-sakura-100 px-2.5 py-1 rounded-full">
                    {work.plan}
                  </span>
                </div>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2">
                {/* BEFORE */}
                <div className="relative aspect-[3/2] overflow-hidden bg-cream-50">
                  {work.beforeVideo ? (
                    <video
                      autoPlay muted loop playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={work.beforeVideo} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={work.before}
                      alt={`${work.label} - 加工前`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 480px"
                    />
                  )}
                  <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm
                                   text-white font-sans text-2xs px-3 py-1 rounded-full tracking-[0.2em]">
                    BEFORE
                  </div>
                </div>
                {/* AFTER：動画 or 画像 */}
                <div className="relative aspect-[3/2] overflow-hidden bg-cream-50">
                  {work.afterVideo ? (
                    <video
                      autoPlay muted loop playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={work.afterVideo} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={work.after}
                      alt={`${work.label} - アニメ風加工後`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 480px"
                    />
                  )}
                  <div className="absolute top-3 left-3 bg-sakura-500/70 backdrop-blur-sm
                                   text-white font-sans text-2xs px-3 py-1 rounded-full tracking-[0.2em]">
                    AFTER
                  </div>
                </div>
              </div>

              {/* フッター */}
              <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-start gap-4 justify-between bg-cream-50/50">
                <p className="font-sans text-xs text-gray-500 leading-[1.9] flex-1">{work.desc}</p>
                <div className="flex flex-wrap gap-1.5 sm:justify-end">
                  {work.tags.map((tag) => (
                    <span key={tag} className="font-sans text-2xs text-gray-500 border border-cream-200 bg-white px-2.5 py-1 rounded-full whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {/* 追加サンプル案内 */}
          <div className="card-flat border-dashed border-cream-300 p-10 text-center">
            <p className="font-display text-xs text-sakura-300 tracking-[0.4em] uppercase mb-3">
              More Samples
            </p>
            <p className="font-serif text-base text-gray-400 font-medium mb-2">
              動画サンプルも順次公開予定
            </p>
            <p className="font-sans text-xs text-gray-400 leading-[2] mb-6">
              より多くのサンプルや実際の動画はお問い合わせ時にご確認いただけます。
            </p>
            <a href="#contact" className="btn-secondary">
              サンプルをもっと見たい
            </a>
          </div>
        </div>

        <p className="text-center font-sans text-2xs text-gray-400 mt-10 leading-[2]">
          ※ 掲載しているサンプルはイメージです。実際の仕上がりは素材・雰囲気・ご要望によって異なります。
        </p>
      </div>
    </section>
  )
}
