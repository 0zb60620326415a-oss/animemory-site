export default function MonitorSection() {
  const targets = ['結婚式', '前撮り', '記念日', '卒団', '卒業']

  return (
    <section
      id="monitor"
      className="py-28 md:py-32 relative overflow-hidden bg-sakura-600"
    >
      {/* 背景テクスチャ：ノイズ感のある上品なグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-sakura-500 via-sakura-600 to-sakura-800 opacity-90" />
      <div className="absolute inset-0 bg-gradient-radial from-white/8 via-transparent to-transparent" />

      {/* 装飾サークル（控えめ） */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/8 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-white/8 pointer-events-none" />

      <div className="section-wrapper relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          {/* ラベル */}
          <p className="font-display text-xs tracking-[0.45em] uppercase text-sakura-200 mb-6">
            Monitor Recruitment
          </p>

          {/* 見出し */}
          <h2 className="font-serif text-3xl md:text-4xl text-white font-medium leading-snug mb-6">
            モニター募集
          </h2>

          {/* 本文 */}
          <p className="font-sans text-sm md:text-base text-white/75 leading-[2] mb-10 max-w-xl mx-auto">
            サービス開始に伴い、AniMemoryでは<br className="md:hidden" />
            モニター様を募集しています。<br className="md:hidden" />
            大切な思い出を、アニメ作品のような<br className="md:hidden" />
            記念ムービーとして残したい方を対象に、<br className="md:hidden" />
            特別価格でご案内中です。
          </p>

          {/* 価格表示カード */}
          <div className="inline-block bg-white/12 backdrop-blur-sm border border-white/20 rounded-2xl px-10 py-7 mb-10">
            <p className="font-sans text-xs text-sakura-200 tracking-widest mb-3">モニター特別価格</p>
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="font-sans text-sm text-white/45 line-through">通常 ¥49,800</span>
              <span className="font-sans text-2xs text-white bg-sakura-400/60 px-3 py-1 rounded-full tracking-wide">
                大幅割引
              </span>
            </div>
            <p className="font-display text-5xl text-white font-medium leading-none mb-1">
              ¥19,800<span className="text-2xl">〜</span>
            </p>
            <p className="font-sans text-xs text-sakura-200 mt-1">税込</p>
          </div>

          {/* 対象シーン */}
          <div className="mb-4">
            <p className="font-sans text-xs text-sakura-200 mb-3 tracking-widest">対象シーン</p>
            <div className="flex flex-wrap justify-center gap-2">
              {targets.map((t) => (
                <span
                  key={t}
                  className="font-sans text-xs text-white border border-white/25
                               bg-white/10 px-4 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="font-sans text-xs text-sakura-200 leading-[2] mb-10">
            写真でも動画でもご相談OK　／　先着3組限定
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-white">
              無料で相談してみる
            </a>
            <a
              href="#samples"
              className="inline-flex items-center justify-center
                          font-sans text-sm font-medium tracking-[0.15em]
                          px-10 py-3.5 rounded-full
                          border border-white/30 text-white
                          hover:border-white/60 hover:bg-white/10
                          transition-all duration-300"
            >
              まずはサンプルを見る
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
