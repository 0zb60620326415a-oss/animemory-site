import SectionTitle from './SectionTitle'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18M12 12.75a3 3 0 110-6 3 3 0 010 6z" />
      </svg>
    ),
    title: '写真から制作できる',
    body:  'スマホ写真から一眼素材まで対応。アルバムに眠っていた写真が、アニメ風の記念ムービーに生まれ変わります。',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
      </svg>
    ),
    title: '動画もアニメ風に対応',
    body:  'スマホ動画や前撮り映像もアニメーション映画のような質感に変換。動いている映像をそのまま活かせます。',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: '記念日の贈り物にも最適',
    body:  '言葉では届かない気持ちを、映像で贈る。誕生日・記念日・両親へのサプライズに。特別な一本として残ります。',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
      </svg>
    ),
    title: 'スマホ保存・上映にも対応',
    body:  'MP4形式で納品。SNS投稿・スマホ閲覧・結婚式場での上映まで、あらゆるシーンに対応したフォーマットでお届けします。',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-28 md:py-32 bg-white">
      <div className="section-wrapper">
        <SectionTitle en="About AniMemory" ja="AniMemoryとは？" />

        {/* 本文 */}
        <div className="max-w-2xl mx-auto text-center mb-18 space-y-6">
          <p className="font-sans text-base md:text-lg text-gray-700 leading-[2]">
            AniMemoryは、大切な写真や動画を<br className="md:hidden" />
            アニメ風に仕上げ、<br />
            記念ムービーとして残すサービスです。
          </p>
          <p className="font-sans text-sm md:text-base text-gray-500 leading-[2]">
            結婚式や前撮り、家族の記念日、<br className="md:hidden" />
            卒団の思い出など、人生の大切な瞬間を、<br />
            見るたびに心が動く映像作品へと仕上げます。
          </p>
          <p className="font-sans text-sm text-gray-400 leading-[2]">
            ただ素材を並べるだけではなく、<br className="md:hidden" />
            雰囲気や想いに合わせて特別感のある一本に<br />
            仕上げるのがAniMemoryの特徴です。
          </p>
        </div>

        {/* 特長カード：2列→4列 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="card p-6 md:p-7 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-sakura-50 text-sakura-500
                               flex items-center justify-center mb-5 flex-shrink-0">
                {f.icon}
              </div>
              <h3 className="font-serif text-sm font-medium text-gray-800 mb-3 leading-snug">
                {f.title}
              </h3>
              <p className="font-sans text-xs text-gray-500 leading-[1.9]">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#contact" className="btn-secondary">
            詳しく聞いてみる
          </a>
        </div>
      </div>
    </section>
  )
}
