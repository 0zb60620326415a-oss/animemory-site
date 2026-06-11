'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'サービス紹介', href: '#about'   },
    { label: '利用シーン',   href: '#scenes'  },
    { label: 'サンプル',     href: '#samples' },
    { label: '料金',         href: '#pricing' },
    { label: 'よくある質問', href: '#faq'     },
  ]

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-400
        ${scrolled
          ? 'bg-white/96 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'}
      `}
    >
      <div className="max-w-wide mx-auto px-5 md:px-10 h-16 flex items-center justify-between gap-6">

        {/* ロゴ */}
        <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
          <span className={`font-display text-xl tracking-wider transition-colors duration-300 ${scrolled ? 'text-sakura-600' : 'text-white'}`}>
            AniMemory
          </span>
          <span className={`hidden sm:block font-sans text-2xs tracking-widest transition-colors duration-300 ${scrolled ? 'text-gray-400' : 'text-white/50'}`}>
            アニメモリー
          </span>
        </a>

        {/* PC ナビゲーション */}
        <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                font-sans text-xs tracking-wider
                transition-colors duration-200
                ${scrolled ? 'text-gray-600 hover:text-sakura-600' : 'text-white/70 hover:text-white'}
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* PC CTA */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <a
            href="#monitor"
            className={`
              font-sans text-xs tracking-wider px-5 py-2.5 rounded-full
              border transition-all duration-300
              ${scrolled
                ? 'border-sakura-300 text-sakura-600 hover:border-sakura-500'
                : 'border-white/40 text-white hover:border-white/70'}
            `}
          >
            モニター応募
          </a>
          <a
            href="#contact"
            className={`
              font-sans text-xs tracking-wider px-5 py-2.5 rounded-full
              transition-all duration-300
              ${scrolled
                ? 'bg-sakura-500 hover:bg-sakura-600 text-white shadow-sakura hover:shadow-sakura-lg'
                : 'bg-white/15 hover:bg-white/25 text-white border border-white/30'}
            `}
          >
            無料で相談してみる
          </a>
        </div>

        {/* ハンバーガー（SP） */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`
                block w-6 h-px transition-all duration-300
                ${scrolled ? 'bg-gray-700' : 'bg-white'}
                ${i === 0 && menuOpen ? 'rotate-45 translate-y-[9px]' : ''}
                ${i === 1 && menuOpen ? 'opacity-0' : ''}
                ${i === 2 && menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}
              `}
            />
          ))}
        </button>
      </div>

      {/* SP ドロワー */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          bg-white border-t border-cream-100
          ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-5 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm text-gray-700 tracking-wide py-3.5 border-b border-cream-50"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-5">
            <a href="#monitor" onClick={() => setMenuOpen(false)} className="btn-secondary text-center text-sm py-3">
              モニター応募
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary text-center text-sm py-3">
              無料で相談してみる
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
