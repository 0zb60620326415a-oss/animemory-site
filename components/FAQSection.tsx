'use client'

import { useState } from 'react'
import SectionTitle from './SectionTitle'

const faqs = [
  {
    q: '納期はどれくらいですか？',
    a: '通常は必要素材がすべて揃い、ご入金確認後から14日〜21日程度です。結婚式などお日にちが決まっている場合や、お急ぎの場合は特急対応もご相談いただけます。まずはご連絡ください。',
  },
  {
    q: '修正はできますか？',
    a: 'はい。修正回数はプランごとに異なります。ライトプランは1回、スタンダードプランは2回、プレミアムプランは3回まで対応しています。テロップ・BGM・タイミングなどの細かい調整も含まれます。',
  },
  {
    q: '写真だけでなく動画素材でも依頼できますか？',
    a: 'はい。AniMemoryでは、写真からの制作だけでなく、お客様の動画素材をアニメ風に加工して仕上げることも可能です。撮影済みの前撮り動画や日常の映像など、内容に応じてご相談いただけます。',
  },
  {
    q: 'スマホで撮った動画でも大丈夫ですか？',
    a: 'はい。スマホ動画でもご相談可能です。画質や長さ、明るさなどの条件によって仕上がりが異なる場合がありますが、素材の内容に応じて最適な仕上げ方法をご提案します。',
  },
  {
    q: 'BGMの指定はできますか？',
    a: '雰囲気のご希望や楽曲のご要望はお気軽にお伝えください。ただし、著作権上の理由から対応できない楽曲もあります。適切な音楽をご提案することも可能ですので、ご相談ください。',
  },
  {
    q: '結婚式場で流したいのですが、対応できますか？',
    a: '会場によって再生形式や仕様が異なるため、事前に会場様へご確認いただくことをおすすめします。必要に応じて特定の形式への書き出し対応もご相談可能です。',
  },
  {
    q: '実績として掲載されますか？',
    a: '納品後、掲載可否を事前にご確認いたします。掲載NGや、お顔の一部のみ掲載希望など、プライバシーへの配慮にも柔軟に対応しています。',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-28 md:py-32 bg-cream-100">
      <div className="section-wrapper">
        <SectionTitle en="FAQ" ja="よくあるご質問" />

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`
                  border-b transition-colors duration-200
                  ${i === 0 ? 'border-t' : ''}
                  ${isOpen ? 'border-sakura-200' : 'border-cream-200'}
                `}
              >
                <button
                  className="w-full flex items-start justify-between gap-5 py-6 text-left group"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <span className={`
                      font-display text-xs tracking-[0.3em] flex-shrink-0 mt-0.5
                      transition-colors duration-200
                      ${isOpen ? 'text-sakura-500' : 'text-sakura-300'}
                    `}>
                      Q.
                    </span>
                    <span className={`
                      font-sans text-sm font-medium leading-snug
                      transition-colors duration-200
                      ${isOpen ? 'text-sakura-700' : 'text-gray-800 group-hover:text-gray-900'}
                    `}>
                      {faq.q}
                    </span>
                  </div>

                  {/* アコーディオン矢印 */}
                  <span className={`
                    flex-shrink-0 w-6 h-6 rounded-full
                    border flex items-center justify-center
                    transition-all duration-300 mt-0.5
                    ${isOpen
                      ? 'border-sakura-300 bg-sakura-50 text-sakura-500 rotate-180'
                      : 'border-cream-200 bg-white text-gray-400'}
                  `}>
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 4l4 4 4-4" />
                    </svg>
                  </span>
                </button>

                {/* 回答エリア（高さアニメーション代わりにpadding） */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? 'max-h-64 pb-6' : 'max-h-0'}
                  `}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display text-xs tracking-[0.3em] text-sakura-300 flex-shrink-0 mt-0.5">
                      A.
                    </span>
                    <p className="font-sans text-sm text-gray-600 leading-[2]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center font-sans text-sm text-gray-500 mt-12 leading-[2]">
          その他のご質問は<br className="sm:hidden" />
          <a href="#contact" className="text-sakura-600 underline underline-offset-4 decoration-sakura-200 hover:decoration-sakura-400 transition-colors mx-1">
            お問い合わせフォーム
          </a>
          よりお気軽にどうぞ。
        </p>
      </div>
    </section>
  )
}
