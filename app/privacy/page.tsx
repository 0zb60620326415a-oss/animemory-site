import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'AniMemory（アニメモリー）のプライバシーポリシーです。',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* ヘッダー */}
      <header className="bg-white border-b border-cream-100 py-4 px-6">
        <Link href="/" className="font-display text-lg text-gray-800 tracking-widest hover:text-sakura-500 transition-colors">
          AniMemory
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-serif text-2xl font-medium text-gray-800 mb-2">プライバシーポリシー</h1>
        <p className="font-sans text-xs text-gray-400 mb-10">最終更新日：2026年4月28日</p>

        <div className="space-y-10 font-sans text-sm text-gray-600 leading-[2]">

          <section>
            <h2 className="font-serif text-base font-medium text-gray-700 mb-3">1. 基本方針</h2>
            <p>AniMemory（以下「当サービス」）は、お客様の個人情報の保護を重要な責務と考え、個人情報の保護に関する法律（個人情報保護法）を遵守し、適切な取り扱いに努めます。</p>
          </section>

          <section>
            <h2 className="font-serif text-base font-medium text-gray-700 mb-3">2. 収集する情報</h2>
            <p>当サービスでは、お問い合わせフォームを通じて以下の情報を収集することがあります。</p>
            <ul className="mt-3 space-y-1 pl-4 list-disc">
              <li>お名前</li>
              <li>メールアドレス</li>
              <li>電話番号（任意）</li>
              <li>お問い合わせ内容</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-base font-medium text-gray-700 mb-3">3. 利用目的</h2>
            <p>収集した個人情報は、以下の目的にのみ使用します。</p>
            <ul className="mt-3 space-y-1 pl-4 list-disc">
              <li>お問い合わせへの回答・対応</li>
              <li>サービスに関するご連絡</li>
              <li>制作進捗のご報告</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-base font-medium text-gray-700 mb-3">4. 第三者への提供</h2>
            <p>当サービスは、法令に基づく場合を除き、お客様の個人情報を第三者に提供・開示することはありません。</p>
          </section>

          <section>
            <h2 className="font-serif text-base font-medium text-gray-700 mb-3">5. 安全管理</h2>
            <p>個人情報の漏えい・滅失・毀損の防止のため、適切な安全管理措置を講じます。</p>
          </section>

          <section>
            <h2 className="font-serif text-base font-medium text-gray-700 mb-3">6. Cookie・アクセス解析</h2>
            <p>当サービスでは、サービス改善を目的としてアクセス解析ツールを使用する場合があります。これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。</p>
          </section>

          <section>
            <h2 className="font-serif text-base font-medium text-gray-700 mb-3">7. 個人情報の開示・訂正・削除</h2>
            <p>ご本人からの個人情報の開示・訂正・削除のご要望は、下記お問い合わせ先までお申し出ください。適切に対応いたします。</p>
          </section>

          <section>
            <h2 className="font-serif text-base font-medium text-gray-700 mb-3">8. プライバシーポリシーの変更</h2>
            <p>本ポリシーは、必要に応じて改定することがあります。改定した場合は本ページにて告知します。</p>
          </section>

          <section>
            <h2 className="font-serif text-base font-medium text-gray-700 mb-3">9. お問い合わせ</h2>
            <p>個人情報の取り扱いに関するお問い合わせは、サイト内のお問い合わせフォームよりご連絡ください。</p>
          </section>

        </div>

        <div className="mt-14 pt-8 border-t border-cream-200">
          <Link href="/" className="font-sans text-sm text-sakura-500 hover:text-sakura-600 transition-colors">
            ← トップページに戻る
          </Link>
        </div>
      </main>
    </div>
  )
}
