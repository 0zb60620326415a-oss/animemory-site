import { SITE } from '@/lib/config'

const navLinks = [
  { label: 'サービス紹介', href: '#about'   },
  { label: '利用シーン',   href: '#scenes'  },
  { label: 'サンプル',     href: '#samples' },
  { label: '料金',         href: '#pricing' },
  { label: 'ご依頼の流れ', href: '#flow'    },
  { label: 'よくある質問', href: '#faq'     },
  { label: 'お問い合わせ', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-500">
      <div className="max-w-wide mx-auto px-5 md:px-10 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 mb-12">

          {/* ブランド情報 */}
          <div>
            <p className="font-display text-2xl text-sakura-400 tracking-wider mb-1.5">
              {SITE.name}
            </p>
            <p className="font-sans text-xs text-gray-600 tracking-widest mb-5">
              {SITE.nameJa}
            </p>
            <p className="font-sans text-xs text-gray-500 leading-[2] max-w-xs">
              {SITE.description}。
              結婚式・誕生日・卒団など、人生の特別な瞬間を映像作品に仕上げます。
            </p>
          </div>

          {/* SNS ── lib/config.ts の SITE.social で URL を設定してください */}
          <div className="flex md:flex-col gap-3 items-start">
            <p className="hidden md:block font-sans text-2xs text-gray-700 tracking-widest mb-1">
              Follow Us
            </p>

            {/* Instagram */}
            <a
              href={SITE.social.instagram || '#'}
              target={SITE.social.instagram ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-gray-800
                          flex items-center justify-center text-gray-600
                          hover:text-sakura-400 hover:border-gray-700
                          transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href={SITE.social.twitter || '#'}
              target={SITE.social.twitter ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-9 h-9 rounded-full border border-gray-800
                          flex items-center justify-center text-gray-600
                          hover:text-sakura-400 hover:border-gray-700
                          transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* LINE（SITE.social.line を設定した場合に表示） */}
            {SITE.social.line && (
              <a
                href={SITE.social.line}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LINE"
                className="w-9 h-9 rounded-full border border-gray-800
                            flex items-center justify-center text-gray-600
                            hover:text-green-400 hover:border-gray-700
                            transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* ナビゲーション */}
        <nav className="flex flex-wrap gap-x-7 gap-y-3 mb-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs text-gray-600 hover:text-sakura-400 tracking-wider transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="border-t border-gray-900 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-sans text-2xs text-gray-700">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {/* ✏️ プライバシーポリシー・特定商取引法ページを作成後にリンクを追加 */}
            <span className="font-sans text-2xs text-gray-800">プライバシーポリシー</span>
            <span className="font-sans text-2xs text-gray-800">特定商取引法</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
