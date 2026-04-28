import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  description: 'AniMemory（アニメモリー）の特定商取引法に基づく表記です。',
}

const items: { label: string; value: string }[] = [
  { label: '販売業者',         value: 'AniMemory（アニメモリー）' },
  { label: '運営責任者',       value: '福田 昌希' },
  { label: '所在地',           value: '広島県三次市和知町1116-2' },
  { label: '電話番号',         value: '080-6325-1865' },
  { label: 'メールアドレス',   value: 'お問い合わせフォームよりご連絡ください' },
  { label: 'サービス内容',     value: 'アニメ風記念ムービーの制作・納品' },
  { label: '販売価格',         value: '各プランページをご確認ください（税込表示）' },
  { label: '代金の支払時期',   value: 'お見積り確定後、制作開始前にお支払いいただきます' },
  { label: '支払方法',         value: '銀行振込（詳細はお問い合わせ後にご案内します）' },
  { label: '商品の引渡し時期', value: '入金確認後、標準14〜21日以内（プランにより異なります）' },
  { label: '返品・キャンセル', value: '制作開始前のキャンセルは全額返金。制作開始後は原則キャンセル不可。初稿確認後の修正はプランに応じた回数まで対応いたします。' },
  { label: '動作環境',         value: 'MP4形式で納品。スマートフォン・PC・タブレット等でご視聴いただけます。' },
]

export default function TokushohoPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* ヘッダー */}
      <header className="bg-white border-b border-cream-100 py-4 px-6">
        <Link href="/" className="font-display text-lg text-gray-800 tracking-widest hover:text-sakura-500 transition-colors">
          AniMemory
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-serif text-2xl font-medium text-gray-800 mb-2">特定商取引法に基づく表記</h1>
        <p className="font-sans text-xs text-gray-400 mb-10">最終更新日：2026年4月28日</p>

        <div className="bg-white rounded-2xl border border-cream-200 overflow-hidden">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col sm:flex-row ${i !== items.length - 1 ? 'border-b border-cream-100' : ''}`}
            >
              <div className="sm:w-44 flex-shrink-0 px-6 py-4 bg-cream-50 font-sans text-xs font-medium text-gray-500">
                {item.label}
              </div>
              <div className="flex-1 px-6 py-4 font-sans text-sm text-gray-700 leading-[1.8]">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 font-sans text-xs text-gray-400 leading-[2]">
          ※ 表記内容は予告なく変更する場合があります。<br />
          ※ ご不明な点はお問い合わせフォームよりお気軽にご連絡ください。
        </p>

        <div className="mt-10 pt-8 border-t border-cream-200">
          <Link href="/" className="font-sans text-sm text-sakura-500 hover:text-sakura-600 transition-colors">
            ← トップページに戻る
          </Link>
        </div>
      </main>
    </div>
  )
}
