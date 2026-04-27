import SectionTitle from './SectionTitle'

const steps = [
  { step: '01', icon: '✉️', title: 'お問い合わせ',      body: 'まずはDMまたはお問い合わせフォームからご相談ください。内容のご確認だけでも大歓迎です。' },
  { step: '02', icon: '💬', title: 'ヒアリング',         body: '用途や雰囲気、ご希望の納期を確認します。どんな想いで依頼したいかを丁寧にお聞きします。' },
  { step: '03', icon: '📋', title: 'お見積り・ご入金',    body: '内容に応じてプランをご提案し、お見積りをお伝えします。確定後にご入金いただき、制作準備へ進みます。' },
  { step: '04', icon: '📁', title: '素材のご提出',        body: '使用するお写真や動画、必要情報をご提出いただきます。クラウドストレージ等で安全にお受け取りします。' },
  { step: '05', icon: '🎨', title: '制作開始',            body: 'ご希望の雰囲気に合わせて、アニメ風メモリアルムービーの制作を開始します。' },
  { step: '06', icon: '👀', title: '初稿確認',            body: '完成した初稿をご確認いただきます。イメージのすり合わせはここで行います。' },
  { step: '07', icon: '✏️', title: '修正対応',            body: 'プランに応じた回数で修正対応を行います。テロップ・BGM・タイミングなど細かい調整も可能です。' },
  { step: '08', icon: '🎬', title: '納品',                body: 'MP4形式でデータ納品いたします。式・イベント当日の使用が決まっている場合は事前にご相談ください。' },
]

export default function FlowSection() {
  return (
    <section id="flow" className="py-28 md:py-32 bg-white">
      <div className="section-wrapper">
        <SectionTitle
          en="How It Works"
          ja="ご依頼の流れ"
          lead={<>お問い合わせから納品まで、<br className="md:hidden" />安心してお任せいただけるよう<br className="md:hidden" />丁寧にサポートします。</>}
        />

        {/* ステップグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {steps.map((s) => (
            <div
              key={s.step}
              className="flex items-start gap-4 bg-cream-50 border border-cream-100 rounded-2xl p-6"
            >
              {/* 番号＋アイコン */}
              <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5">
                <div className="w-11 h-11 rounded-full bg-white border border-cream-200
                                 flex items-center justify-center text-lg shadow-sm">
                  {s.icon}
                </div>
                <span className="font-display text-2xs text-sakura-400 tracking-[0.3em]">
                  {s.step}
                </span>
              </div>

              {/* テキスト */}
              <div>
                <h3 className="font-serif text-sm font-medium text-gray-800 mb-2">
                  {s.title}
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-[1.9]">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 納期目安 */}
        <div className="max-w-3xl mx-auto mt-6">
          <div className="bg-sakura-50 border border-sakura-100 rounded-2xl px-7 py-5 flex items-start gap-3">
            <span className="text-sakura-400 text-lg mt-0.5 flex-shrink-0">⏱</span>
            <div>
              <p className="font-serif text-sm font-medium text-gray-700 mb-1">
                標準納期：14〜21日
              </p>
              <p className="font-sans text-xs text-gray-500 leading-[1.9]">
                素材受け取り・ご入金確認後から制作開始。結婚式・イベントのお日にちが決まっている場合は、
                余裕を持ってご相談ください。特急対応のご相談も承ります。
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            まずは相談してみる
          </a>
        </div>
      </div>
    </section>
  )
}
