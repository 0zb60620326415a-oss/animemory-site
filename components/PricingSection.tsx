import SectionTitle from './SectionTitle'

const plans = [
  {
    name:      'ライトプラン',
    en:        'Light',
    price:     '29,800',
    note:      '写真素材中心の構成におすすめ',
    highlight: false,
    includes: [
      { text: '30〜45秒',    note: ''        },
      { text: '写真 8〜12枚', note: ''        },
      { text: 'アニメ風加工', note: ''        },
      { text: '簡易テロップ', note: ''        },
      { text: 'BGM 1曲',    note: ''        },
      { text: '修正 1回',    note: ''        },
      { text: 'MP4納品',    note: ''        },
    ],
    cta: 'このプランで相談する',
  },
  {
    name:      'スタンダードプラン',
    en:        'Standard',
    price:     '49,800',
    note:      '写真＋動画の組み合わせも相談可',
    highlight: true,
    includes: [
      { text: '45〜90秒',        note: ''          },
      { text: '写真 15〜25枚',   note: ''          },
      { text: 'アニメ風加工',    note: ''          },
      { text: 'ストーリー構成',  note: ''          },
      { text: 'テロップ演出',    note: ''          },
      { text: 'BGM 1〜2曲',     note: ''          },
      { text: '修正 2回',        note: ''          },
      { text: 'MP4納品',         note: ''          },
      { text: '縦動画ショート版', note: '1本付き'   },
    ],
    cta: 'このプランで相談する',
  },
  {
    name:      'プレミアムプラン',
    en:        'Premium',
    price:     '79,800〜',
    note:      '動画素材ベースの構成もご提案',
    highlight: false,
    includes: [
      { text: '90〜180秒',       note: ''          },
      { text: '写真 25〜50枚',   note: ''          },
      { text: '高演出構成',       note: ''          },
      { text: 'メッセージ挿入',   note: ''          },
      { text: 'BGM 2曲まで',     note: ''          },
      { text: '修正 3回',         note: ''          },
      { text: 'MP4納品',          note: ''          },
      { text: '縦動画ショート版', note: '2本付き'   },
      { text: 'DVD用書き出し対応', note: ''         },
    ],
    cta: 'このプランで相談する',
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-28 md:py-32 bg-cream-50">
      <div className="section-wrapper">
        <SectionTitle
          en="Pricing"
          ja="料金プラン"
          lead={<>ご用途や素材の内容に応じて、<br className="md:hidden" />最適なプランをご提案します。</>}
        />

        {/* ━━━ モバイル：縦スタック / PC：3列 ━━━ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative rounded-2xl overflow-hidden flex flex-col
                transition-shadow duration-300
                ${plan.highlight
                  ? 'bg-sakura-600 shadow-sakura-lg ring-2 ring-sakura-400/30 order-first md:order-none md:-mt-3 md:mb-3'
                  : 'bg-white border border-cream-200 shadow-card hover:shadow-card-hover'}
              `}
            >
              {/* おすすめバッジ（ハイライトのみ） */}
              {plan.highlight && (
                <div className="bg-sakura-800 text-white text-center font-sans text-2xs tracking-[0.25em] py-2.5">
                  ✦ 人気プラン
                </div>
              )}

              {/* プラン情報 */}
              <div className="p-7 md:p-8 flex-1 flex flex-col">
                {/* プラン名 */}
                <p className={`font-display text-2xs tracking-[0.4em] uppercase mb-1.5 ${plan.highlight ? 'text-sakura-200' : 'text-sakura-400'}`}>
                  {plan.en}
                </p>
                <h3 className={`font-serif text-base font-medium mb-4 ${plan.highlight ? 'text-white' : 'text-gray-800'}`}>
                  {plan.name}
                </h3>

                {/* 価格 */}
                <div className={`
                  flex items-end gap-1 pb-5 mb-5
                  ${plan.highlight ? 'border-b border-sakura-500' : 'border-b border-cream-100'}
                `}>
                  <span className={`font-display text-4xl font-medium leading-none ${plan.highlight ? 'text-white' : 'text-sakura-600'}`}>
                    ¥{plan.price}
                  </span>
                  <span className={`font-sans text-xs mb-1 ${plan.highlight ? 'text-sakura-200' : 'text-gray-400'}`}>
                    税込
                  </span>
                </div>

                {/* 補足 */}
                <p className={`font-sans text-xs leading-relaxed mb-6 ${plan.highlight ? 'text-sakura-100' : 'text-gray-500'}`}>
                  {plan.note}
                </p>

                {/* 内容リスト */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.includes.map((item) => (
                    <li key={item.text} className="flex items-start gap-2.5">
                      <svg className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-sakura-200' : 'text-sakura-400'}`}
                           viewBox="0 0 16 16" fill="currentColor">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
                      </svg>
                      <span className={`font-sans text-xs leading-relaxed ${plan.highlight ? 'text-sakura-50' : 'text-gray-600'}`}>
                        {item.text}
                        {item.note && (
                          <span className={`ml-1 ${plan.highlight ? 'text-sakura-200' : 'text-sakura-400'}`}>
                            {item.note}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`
                    text-center font-sans text-xs font-medium tracking-[0.15em]
                    py-3.5 rounded-full transition-all duration-300 block
                    ${plan.highlight
                      ? 'bg-white text-sakura-700 hover:bg-cream-50 shadow-[0_2px_12px_rgba(0,0,0,0.12)]'
                      : 'border border-sakura-300 text-sakura-600 hover:border-sakura-500 hover:text-sakura-800'}
                  `}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 下部補足 */}
        <div className="mt-8 bg-white rounded-2xl border border-cream-200 p-7 text-center">
          <p className="font-sans text-sm text-gray-600 leading-[2] mb-5">
            ご用途や写真枚数、動画素材の内容に応じて最適なプランをご提案します。
            <br />
            団体案件や特別仕様もお気軽にご相談ください。
          </p>
          <a href="#contact" className="btn-secondary">
            プランについて相談する
          </a>
        </div>

        <p className="text-center font-sans text-2xs text-gray-400 mt-6">
          ※ 素材の内容によって価格が変動する場合があります。まずはお気軽にご相談ください。
        </p>
      </div>
    </section>
  )
}
