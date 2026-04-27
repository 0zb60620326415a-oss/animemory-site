export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── 背景レイヤー ──────────────────────────────────────────
          動画と静止画の2段構え。
          ・動画あり → 動画が前面に自動再生される
          ・動画なし → 静止画（フォールバック）が表示される

          【静止画の差し替え】
          public/images/hero.jpg を配置（推奨：1920×1080px）してから
          下の url(...) を '/images/hero.jpg' に変更してください。

          【背景動画の設定】
          Premiere Proでの推奨書き出し設定:
            - フォーマット: H.264
            - プリセット: YouTube 1080p Full HD
            - ビットレート: 4〜6 Mbps（目標サイズ 10MB 以下）
            - 長さ: 15〜30 秒のループに最適な区間を選ぶ
          書き出したファイルを public/videos/hero.mp4 に配置すると
          自動的に動画背景が有効になります。
      ──────────────────────────────────────────────────────────── */}

      {/* フォールバック静止画（動画が読み込めない間も表示） */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('https://picsum.photos/seed/animemory-hero/1920/1080')" }}
      />

      {/* 背景動画（public/videos/hero.mp4 を置くと有効になる） */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        {/* ブラウザが動画未対応の場合は静止画にフォールバック */}
      </video>

      {/* 多層オーバーレイ */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/30" />

      {/* コンテンツ本体 */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center pt-20 pb-16">

        {/* モニター募集バッジ */}
        <div className="inline-flex items-center gap-2.5 mb-8
                        bg-white/12 backdrop-blur-md border border-white/25
                        text-white font-sans text-2xs tracking-[0.3em] uppercase
                        px-5 py-2.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-sakura-300 animate-pulse flex-shrink-0" />
          先着3組限定　モニター募集中
        </div>

        {/* メインコピー */}
        <h1 className="font-heading font-normal text-white mb-5
                        text-[25px] sm:text-5xl md:text-6xl
                        leading-[1.75] sm:leading-[1.55]
                        tracking-[0.08em] sm:tracking-[0.12em]
                        [text-shadow:0_2px_28px_rgba(0,0,0,0.35)]">
          思い出を、<br />
          アニメ作品のような<br />
          記念ムービーに。
        </h1>

        {/* サブコピー */}
        <p className="font-display text-xl sm:text-2xl md:text-3xl
                       text-sakura-200 tracking-wide mb-6
                       [text-shadow:0_1px_12px_rgba(0,0,0,0.2)]">
          写真も動画も、心に残る<br className="sm:hidden" />特別な映像作品へ。
        </p>

        {/* 対応素材タグ */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {['写真から制作', '動画もアニメ化', '組み合わせもOK'].map((tag) => (
            <span
              key={tag}
              className="font-sans text-2xs text-white/80 border border-white/25
                          bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full"
            >
              ✓ {tag}
            </span>
          ))}
        </div>

        {/* 補足文 */}
        <p className="font-sans text-sm text-white/65 leading-[2] mb-12 max-w-sm mx-auto">
          結婚式、前撮り、記念日、卒団。<br />
          大切な瞬間を、世界にひとつだけの<br />
          アニメ風メモリアルムービーに仕上げます。
        </p>

        {/* CTA ボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#monitor" className="btn-primary">
            モニター募集を見る
          </a>
          <a href="#contact" className="btn-white">
            お問い合わせ
          </a>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2
                         flex flex-col items-center gap-3 text-white/40">
          <span className="font-display text-2xs tracking-[0.4em] uppercase">Scroll</span>
          <div className="relative w-px h-12 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b
                             from-white/60 to-transparent animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  )
}
