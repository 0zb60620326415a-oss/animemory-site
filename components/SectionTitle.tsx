import React from 'react'

interface SectionTitleProps {
  en: string
  ja: string
  center?: boolean
  light?: boolean
  lead?: React.ReactNode
}

export default function SectionTitle({
  en,
  ja,
  center = true,
  light  = false,
  lead,
}: SectionTitleProps) {
  return (
    <div className={`mb-14 md:mb-16 ${center ? 'text-center' : ''}`}>

      {/* 英語サブタイトル */}
      <p
        className={`
          font-display text-xs md:text-sm
          tracking-[0.45em] uppercase mb-4
          ${light ? 'text-sakura-200' : 'text-sakura-400'}
        `}
      >
        {en}
      </p>

      {/* 日本語見出し */}
      <h2
        className={`
          font-serif
          text-2xl md:text-[1.875rem] lg:text-4xl
          font-medium leading-snug tracking-wide
          ${light ? 'text-white' : 'text-gray-800'}
        `}
      >
        {ja}
      </h2>

      {/* 装飾ライン */}
      <div
        className={`
          mt-5 flex items-center gap-2
          ${center ? 'justify-center' : ''}
        `}
      >
        <div className={`h-px w-8 ${light ? 'bg-sakura-300' : 'bg-sakura-200'}`} />
        <div className={`w-1 h-1 rounded-full ${light ? 'bg-sakura-300' : 'bg-sakura-300'}`} />
        <div className={`h-px w-8 ${light ? 'bg-sakura-300' : 'bg-sakura-200'}`} />
      </div>

      {/* オプション：リード文 */}
      {lead && (
        <p
          className={`
            mt-7 font-sans text-sm md:text-base leading-[2]
            max-w-xl ${center ? 'mx-auto' : ''}
            ${light ? 'text-white/70' : 'text-gray-500'}
          `}
        >
          {lead}
        </p>
      )}
    </div>
  )
}
