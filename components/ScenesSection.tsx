import SectionTitle from './SectionTitle'

// ── アイコン定義 ──────────────────────────────────────────────────
const WeddingIcon = () => (
  <svg viewBox="0 0 56 36" fill="none" stroke="currentColor" strokeWidth="1.5"
       strokeLinecap="round" strokeLinejoin="round" className="w-14 h-9">
    {/* ふたつの結婚指輪 */}
    <circle cx="18" cy="18" r="14"/>
    <circle cx="38" cy="18" r="14"/>
    {/* ダイヤのきらめき */}
    <path d="M28 4 L28 2 M28 4 L26.5 3 M28 4 L29.5 3" strokeWidth="1" opacity="0.7"/>
  </svg>
)

const AnniversaryIcon = () => (
  <svg viewBox="0 0 56 48" fill="none" stroke="currentColor" strokeWidth="1.5"
       strokeLinecap="round" strokeLinejoin="round" className="w-14 h-12">
    {/* カメラ本体 */}
    <rect x="4" y="16" width="48" height="28" rx="5"/>
    {/* レンズ */}
    <circle cx="28" cy="30" r="9"/>
    <circle cx="28" cy="30" r="5" opacity="0.25" fill="currentColor" stroke="none"/>
    {/* ファインダー */}
    <path d="M18 16 L22 8 H34 L38 16"/>
    <rect x="8" y="21" width="6" height="3" rx="1"/>
    {/* ハート */}
    <path d="M25 28.5 C25 26.8 26.2 26 28 27.5 C29.8 26 31 26.8 31 28.5 C31 30.2 28 33 28 33 S25 30.2 25 28.5Z"
          fill="currentColor" stroke="none" opacity="0.6"/>
  </svg>
)

const GraduationIcon = () => (
  <svg viewBox="0 0 48 56" fill="none" stroke="currentColor" strokeWidth="1.5"
       strokeLinecap="round" strokeLinejoin="round" className="w-12 h-14">
    {/* トロフィー本体 */}
    <path d="M12 6 H36 V24 C36 32 30 37 24 37 C18 37 12 32 12 24 Z"/>
    {/* 両サイドのハンドル */}
    <path d="M12 10 H6 V18 C6 23 9 26 12 27"/>
    <path d="M36 10 H42 V18 C42 23 39 26 36 27"/>
    {/* 台座 */}
    <path d="M20 37 V46 M28 37 V46"/>
    <path d="M14 46 H34"/>
    <path d="M10 50 H38" strokeWidth="2"/>
    {/* 星 */}
    <path d="M24 14 L25.5 18.5 H30 L26.5 21 L28 25.5 L24 23 L20 25.5 L21.5 21 L18 18.5 H22.5 Z"
          fill="currentColor" stroke="none" opacity="0.5"/>
  </svg>
)

const scenes = [
  {
    number: '01',
    icon:   <WeddingIcon />,
    title:  '結婚式・前撮り',
    body:   '前撮り写真やおふたりの思い出を、特別なオープニングムービーや記念映像として残せます。写真だけでなく、日常動画や前撮り動画素材も活かせます。',
    tags:   ['結婚式', '前撮り', 'ウェディング'],
    bg:     'from-sakura-50 to-white',
  },
  {
    number: '02',
    icon:   <AnniversaryIcon />,
    title:  '記念日・家族の思い出',
    body:   '誕生日や結婚記念日、ご家族への贈り物として、写真やスマホ動画をあたたかな映像作品に仕上げます。言葉では伝えきれない気持ちを映像で届けます。',
    tags:   ['誕生日', '記念日', '家族'],
    bg:     'from-cream-100 to-white',
  },
  {
    number: '03',
    icon:   <GraduationIcon />,
    title:  '卒団・卒業メモリアル',
    body:   '仲間との時間や成長の記録を、感動的なアニメ風メモリアルムービーとして残せます。試合動画や集合シーンの映像素材もご相談可能です。',
    tags:   ['卒団', '卒業', 'チーム'],
    bg:     'from-sakura-50 to-white',
  },
]

export default function ScenesSection() {
  return (
    <section id="scenes" className="py-28 md:py-32 bg-cream-100">
      <div className="section-wrapper">
        <SectionTitle
          en="Use Cases"
          ja="選ばれているシーン"
          lead="大切な瞬間を映像として残したいとき、AniMemoryをご利用いただいています。"
        />

        <div className="space-y-5">
          {scenes.map((scene, i) => (
            <div
              key={scene.number}
              className={`
                card overflow-hidden
                grid grid-cols-1 md:grid-cols-[2fr_3fr]
                ${i % 2 !== 0 ? 'md:grid-cols-[3fr_2fr]' : ''}
              `}
            >
              {/* ビジュアルサイド */}
              <div
                className={`
                  bg-gradient-to-br ${scene.bg}
                  flex flex-col items-center justify-center
                  py-10 px-8 gap-5 text-center
                  ${i % 2 !== 0 ? 'md:order-2' : ''}
                `}
              >
                {/* SVG アイコン（白丸ベース） */}
                <div className="w-20 h-20 rounded-full bg-white shadow-sm
                                flex items-center justify-center text-sakura-400">
                  {scene.icon}
                </div>

                <div>
                  <p className="font-display text-2xs tracking-[0.4em] text-sakura-400 uppercase mb-1.5">
                    Scene {scene.number}
                  </p>
                  <h3 className="font-serif text-lg font-medium text-gray-800">
                    {scene.title}
                  </h3>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {scene.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-2xs text-sakura-600 bg-sakura-100 px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* テキストサイド */}
              <div
                className={`
                  p-8 md:p-12 flex items-center
                  ${i % 2 !== 0 ? 'md:order-1' : ''}
                `}
              >
                <p className="font-sans text-sm md:text-base text-gray-600 leading-[2]">
                  {scene.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* その他 */}
        <div className="mt-6 card p-8 text-center">
          <p className="font-sans text-sm text-gray-500 leading-[2] mb-5">
            上記以外のシーンでもご相談いただけます。<br />
            まずはお気軽にお問い合わせください。
          </p>
          <a href="#contact" className="btn-secondary">
            相談してみる
          </a>
        </div>
      </div>
    </section>
  )
}
