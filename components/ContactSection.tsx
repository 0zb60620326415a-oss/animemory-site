'use client'

import { useState } from 'react'
import SectionTitle from './SectionTitle'
import { SITE } from '@/lib/config'

// ================================================================
// フォーム送信の設定は lib/config.ts の SITE.form で行ってください
// ================================================================

type FormState = {
  name:         string
  email:        string
  phone:        string
  useCase:      string
  plan:         string
  deliveryDate: string
  eventDate:    string
  materialType: string
  atmosphere:   string
  photoCount:   string
  videoDetail:  string
  message:      string
  permission:   string
  other:        string
}

const useCaseOptions  = ['結婚式・前撮り', '記念日・家族の思い出', '誕生日', '卒団・卒業メモリアル', 'モニター応募', 'その他']
const planOptions     = ['ライトプラン（¥29,800〜）', 'スタンダードプラン（¥49,800〜）', 'プレミアムプラン（¥79,800〜）', 'モニタープラン（¥19,800〜）', 'まだ決まっていない']
const materialOptions = ['写真のみ', '動画のみ', '写真＋動画', 'まだ決まっていない']
const permOptions     = ['掲載OK', '顔出しなしならOK', '掲載NG', 'まだ決まっていない']

const initialForm: FormState = {
  name: '', email: '', phone: '', useCase: '', plan: '',
  deliveryDate: '', eventDate: '', materialType: '', atmosphere: '',
  photoCount: '', videoDetail: '', message: '', permission: '', other: '',
}

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label className="form-label">
      {text}
      {required && <span className="text-sakura-400 ml-0.5">*</span>}
    </label>
  )
}

function FieldGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-cream-200 bg-cream-50/30 overflow-hidden">
      <div className="px-6 py-3 border-b border-cream-200 bg-cream-50">
        <p className="font-sans text-2xs text-sakura-500 tracking-[0.3em] uppercase">{title}</p>
      </div>
      <div className="p-6 space-y-5">{children}</div>
    </div>
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
      // ── 方法A: Formspree ────────────────────────────────────────
      // lib/config.ts の SITE.form.formspreeId を設定すると有効になります
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

      // ── 方法C: Googleフォーム ────────────────────────────────────
      // lib/config.ts の SITE.form.googleFormUrl を設定すると有効になります
      // ※ Googleフォームはネイティブ POST のため、この方法より
      //   フォームの action 属性を直接変更する方が確実です
      if (SITE.form.googleFormUrl) {
        // Googleフォームは別タブで開く導線の方が安定します
        window.open(SITE.form.googleFormUrl, '_blank')
        setSubmitted(true)
        return
      }

      // ── 方法B: Netlify Forms ─────────────────────────────────────
      // Vercel ではなく Netlify でデプロイする場合:
      // 1. <form> タグに data-netlify="true" name="contact" を追加
      // 2. <input type="hidden" name="form-name" value="contact" /> を追加
      // 3. action を '/success' などに変更
      // → formspreeId / googleFormUrl が空の場合でも Netlify が自動処理

      // ── 開発用（設定なし）──────────────────────────────────────
      // 実際の送信設定がない場合は完了画面を表示します
      await new Promise(r => setTimeout(r, 600)) // 送信感を演出
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
          lead={<>ご相談だけでも大歓迎です。<br className="md:hidden" />用途やご希望に合わせて、<br className="md:hidden" />最適な内容をご案内いたします。</>}
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
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5">

            {/* ── グループ1：基本情報 ── */}
            <FieldGroup title="基本情報">
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
                <Label text="ご連絡先（電話番号・任意）" />
                <input className="form-input" type="tel" name="phone"
                  value={form.phone} onChange={set} placeholder="090-0000-0000" />
              </div>
            </FieldGroup>

            {/* ── グループ2：プロジェクト詳細 ── */}
            <FieldGroup title="ご依頼について">
              <div>
                <Label text="ご希望の用途" required />
                <select className="form-input" name="useCase" required value={form.useCase} onChange={set}>
                  <option value="">選択してください</option>
                  {useCaseOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <Label text="ご希望プラン" />
                <select className="form-input" name="plan" value={form.plan} onChange={set}>
                  <option value="">選択してください</option>
                  {planOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label text="希望納期（目安）" />
                  <input className="form-input" type="text" name="deliveryDate"
                    value={form.deliveryDate} onChange={set} placeholder="例：3月末まで" />
                </div>
                <div>
                  <Label text="使用予定日" />
                  <input className="form-input" type="text" name="eventDate"
                    value={form.eventDate} onChange={set} placeholder="例：4月12日" />
                </div>
              </div>
            </FieldGroup>

            {/* ── グループ3：素材・雰囲気 ── */}
            <FieldGroup title="素材・雰囲気">
              <div>
                <Label text="素材の種類" />
                <select className="form-input" name="materialType" value={form.materialType} onChange={set}>
                  <option value="">選択してください</option>
                  {materialOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <Label text="ご希望の雰囲気" />
                <input className="form-input" type="text" name="atmosphere"
                  value={form.atmosphere} onChange={set}
                  placeholder="例：温かみのある・感動的・おしゃれ" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label text="写真枚数の目安" />
                  <input className="form-input" type="text" name="photoCount"
                    value={form.photoCount} onChange={set} placeholder="例：約20枚" />
                </div>
                <div>
                  <Label text="動画素材について" />
                  <input className="form-input" type="text" name="videoDetail"
                    value={form.videoDetail} onChange={set} placeholder="例：3本・各2分" />
                </div>
              </div>
            </FieldGroup>

            {/* ── グループ4：その他 ── */}
            <FieldGroup title="その他">
              <div>
                <Label text="入れたいメッセージ・テロップ（任意）" />
                <textarea className="form-input resize-none" name="message" rows={2}
                  value={form.message} onChange={set}
                  placeholder="例：「ありがとう」などの言葉、日付、名前など" />
              </div>
              <div>
                <Label text="実績掲載の可否" />
                <select className="form-input" name="permission" value={form.permission} onChange={set}>
                  <option value="">選択してください</option>
                  {permOptions.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <Label text="その他ご要望・ご質問" />
                <textarea className="form-input resize-none" name="other" rows={4}
                  value={form.other} onChange={set}
                  placeholder="なんでもお気軽にどうぞ。ご質問だけでも大歓迎です。" />
              </div>
            </FieldGroup>

            {/* エラー表示 */}
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
              {sending ? '送信中...' : '送信する'}
            </button>

            {/* ── LINE 誘導 ── */}
            {SITE.social.line && (
              <div className="text-center pt-2">
                <p className="font-sans text-xs text-gray-400 mb-3">または</p>
                <a
                  href={SITE.social.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-green-700
                             border border-green-300 bg-green-50 hover:bg-green-100
                             px-6 py-3 rounded-full transition-colors duration-200"
                >
                  LINE でも相談できます
                </a>
              </div>
            )}

            {/* Instagram DM 案内 */}
            {SITE.social.instagram && (
              <div className="text-center pt-2">
                <p className="font-sans text-xs text-gray-400 mb-3">または</p>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm text-pink-700
                             border border-pink-300 bg-pink-50 hover:bg-pink-100
                             px-6 py-3 rounded-full transition-colors duration-200"
                >
                  Instagram DM でも相談できます
                </a>
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
