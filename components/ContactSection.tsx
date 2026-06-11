'use client'

import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { SITE } from '@/lib/config'

type FormState = {
  name:    string
  email:   string
  useCase: string
  message: string
}

const useCaseOptions = ['結婚式・前撮り', '記念日・家族の思い出', '誕生日', '卒団・卒業メモリアル', 'モニター応募', 'その他']

const initialForm: FormState = { name: '', email: '', useCase: '', message: '' }

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label className="form-label">
      {text}
      {required && <span className="text-sakura-400 ml-0.5">*</span>}
    </label>
  )
}

export default function ContactSection() {
  const [form, setForm]           = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending]     = useState(false)
  const [error, setError]         = useState('')

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      if (SITE.form.formspreeId) {
        const res = await fetch(`https://formspree.io/f/${SITE.form.formspreeId}`, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body:    JSON.stringify(form),
        })
        if (!res.ok) throw new Error('送信に失敗しました')
        setSubmitted(true)
        return
      }

      if (SITE.form.googleFormUrl) {
        window.open(SITE.form.googleFormUrl, '_blank')
        setSubmitted(true)
        return
      }

      await new Promise(r => setTimeout(r, 600))
      setSubmitted(true)

    } catch {
      setError('送信中にエラーが発生しました。時間をおいて再度お試しください。')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-28 md:py-32 bg-white">
      <div className="section-wrapper">
        <SectionTitle
          en="Contact"
          ja="お問い合わせ"
          lead={<>ご相談だけでも大歓迎です。<br className="md:hidden" />まずはお気軽にどうぞ。</>}
        />

        {submitted ? (
          <div className="max-w-lg mx-auto card p-14 text-center">
            <div className="w-16 h-16 rounded-full bg-sakura-50 flex items-center justify-center text-3xl mx-auto mb-6">
              💌
            </div>
            <h3 className="font-serif text-xl font-medium text-gray-800 mb-4">
              お問い合わせありがとうございます
            </h3>
            <p className="font-sans text-sm text-gray-500 leading-[2]">
              2〜3営業日以内に、ご入力いただいたメールアドレスへご連絡いたします。
              しばらくお待ちください。
            </p>
          </div>
        ) : (
          <div className="max-w-lg mx-auto space-y-6">

            {/* ── Instagram DM 誘導（上部・目立つ） ── */}
            {SITE.social.instagram && (
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-pink-200 bg-pink-50
                           px-6 py-5 hover:bg-pink-100 transition-colors duration-200 group"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-400 to-purple-500
                                flex items-center justify-center text-white text-xl flex-shrink-0">
                  📷
                </div>
                <div className="flex-1">
                  <p className="font-sans text-sm font-medium text-pink-700 mb-0.5">
                    まずはInstagram DMで気軽に相談
                  </p>
                  <p className="font-sans text-xs text-pink-400">
                    フォームより手軽。どんな質問でもOKです。
                  </p>
                </div>
                <span className="font-sans text-sm text-pink-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            )}

            {/* 区切り */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-cream-200" />
              <p className="font-sans text-xs text-gray-400">または、フォームで送る</p>
              <div className="flex-1 h-px bg-cream-200" />
            </div>

            {/* ── フォーム（4項目） ── */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label text="お名前" required />
                <input className="form-input" type="text" name="name" required
                  value={form.name} onChange={set} placeholder="山田 花子" />
              </div>
              <div>
                <Label text="メールアドレス" required />
                <input className="form-input" type="email" name="email" required
                  value={form.email} onChange={set} placeholder="example@email.com" />
              </div>
              <div>
                <Label text="ご希望の用途" required />
                <select className="form-input" name="useCase" required value={form.useCase} onChange={set}>
                  <option value="">選択してください</option>
                  {useCaseOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <Label text="ご相談内容・ご質問" />
                <textarea className="form-input resize-none" name="message" rows={4}
                  value={form.message} onChange={set}
                  placeholder="なんでもお気軽にどうぞ。「まずは話だけ聞きたい」でも大歓迎です。" />
              </div>

              {error && (
                <p className="text-center font-sans text-xs text-red-500 bg-red-50 rounded-xl px-4 py-3">
                  {error}
                </p>
              )}

              <p className="font-sans text-2xs text-gray-400 text-center leading-[2]">
                送信いただいた情報は、お問い合わせへの対応以外には使用しません。
              </p>

              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {sending ? '送信中...' : '無料で相談してみる'}
              </button>
            </form>

          </div>
        )}
      </div>
    </section>
  )
}
