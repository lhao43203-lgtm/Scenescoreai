import { ArrowUpRight, FileText, Mail, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const submissionEmail = 'marketing@scenescore.ai'

export default function Submission() {
  const { i18n } = useTranslation()
  const isTraditional = i18n.resolvedLanguage === 'zh-TW'
  const [form, setForm] = useState({ name: '', email: '', title: '', message: '' })

  const copy = isTraditional
      ? {
        deskTitle: '把下一個場景帶進公開索引',
        deskDescription: '提交作品資料、預告片或完整觀看連結，團隊會先完成資料整理，再回覆後續安排。',
        emailLabel: '投稿信箱',
        emailDescription: '作品自薦、合作邀請與發布資料',
        emailAction: '寄送投稿郵件',
        guideTitle: '投稿前\n先準備好\n作品的脈絡',
        guideIntro: '資料越清晰，作品越容易被完整閱讀。以下內容是投稿時的建議資料，不代表固定格式。',
        guides: [
          ['01', '作品資訊', '作品名稱、類型、導演或主創名單，以及一句話簡介'],
          ['02', '觀看連結', '預告片、完整作品或可公開瀏覽的影片連結'],
          ['03', '創作說明', '作品的創作背景、AI 使用方式與希望被看見的重點'],
        ],
        formTitle: '用一封郵件開始',
        formIntro: '填寫基本資料後，按下按鈕會開啟你的郵件程式，內容可再確認後寄出。',
        name: '稱呼／團隊名稱',
        namePlaceholder: '你的姓名或公司名稱',
        email: '回覆信箱',
        emailPlaceholder: 'your@email.com',
        titleField: '作品名稱',
        titlePlaceholder: '作品標題',
        message: '作品簡介與連結',
        messagePlaceholder: '請簡述作品、創作團隊與觀看連結…',
        send: '建立投稿郵件',
        back: '返回入圍作品',
      }
      : {
        deskTitle: 'Bring the next scene into the index',
        deskDescription: 'Send the work details, a trailer or a full viewing link. We will organize the information first and reply with the next steps.',
        emailLabel: 'SUBMISSION EMAIL',
        emailDescription: 'Work submissions, collaborations and release materials',
        emailAction: 'SEND AN EMAIL',
        guideTitle: 'Give the work a clear frame',
        guideIntro: 'The clearer the context, the easier it is to read the work in full. These are suggested materials, not a fixed format.',
        guides: [
          ['01', 'WORK DETAILS', 'Title, format, director or core team, and a one-line logline'],
          ['02', 'VIEWING LINK', 'A trailer, full work or publicly accessible video link'],
          ['03', 'CREATIVE NOTE', 'The context, AI workflow and the point of view you want us to notice'],
        ],
        formTitle: 'Start with an email',
        formIntro: 'Complete the basics and the button will open your mail app with a draft you can review before sending.',
        name: 'NAME / TEAM',
        namePlaceholder: 'Your name or company',
        email: 'REPLY EMAIL',
        emailPlaceholder: 'your@email.com',
        titleField: 'WORK TITLE',
        titlePlaceholder: 'Title of the work',
        message: 'WORK NOTE / LINK',
        messagePlaceholder: 'Briefly describe the work, team and viewing link…',
        send: 'CREATE SUBMISSION EMAIL',
        back: 'RETURN TO OFFICIAL SELECTION',
      }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`${isTraditional ? '作品投稿' : 'Work submission'}${form.title ? ` — ${form.title}` : ''}`)
    const body = encodeURIComponent([
      `${isTraditional ? '稱呼／團隊名稱' : 'Name / team'}: ${form.name}`,
      `${isTraditional ? '回覆信箱' : 'Reply email'}: ${form.email}`,
      `${isTraditional ? '作品名稱' : 'Work title'}: ${form.title}`,
      '',
      form.message,
    ].join('\n'))
    window.location.href = `mailto:${submissionEmail}?subject=${subject}&body=${body}`
  }

  return (
    <div className="submission-page page-pad" lang={isTraditional ? 'zh-Hant' : 'en'}>
      <section className="submission-contact">
        <div className="submission-contact__copy">
          <h2>{copy.deskTitle}</h2>
          <p>{copy.deskDescription}</p>
        </div>
        <a className="submission-email" href={`mailto:${submissionEmail}`}>
          <span className="submission-email__icon"><Mail aria-hidden="true" /></span>
          <span className="submission-email__label">{copy.emailLabel}</span>
          <strong>{submissionEmail}</strong>
          <span className="submission-email__description">{copy.emailDescription}</span>
          <span className="submission-email__action">{copy.emailAction} <ArrowUpRight aria-hidden="true" /></span>
        </a>
      </section>

      <section className="submission-guidelines">
        <div className="submission-guidelines__intro">
          <h2>{copy.guideTitle}</h2>
          <p>{copy.guideIntro}</p>
        </div>
        <div className="submission-guidelines__grid">
          {copy.guides.map(([index, title, description]) => (
            <article className="submission-guide" key={index}>
              <span className="submission-guide__index">{index}</span>
              <FileText aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="submission-form-section" id="submission-form">
        <div className="submission-form-section__intro">
          <h2>{copy.formTitle}</h2>
          <p>{copy.formIntro}</p>
        </div>
        <form className="submission-form" onSubmit={handleSubmit}>
          <div className="submission-form__row">
            <label>
              <span>{copy.name}</span>
              <input required value={form.name} placeholder={copy.namePlaceholder} onChange={(event) => setForm({ ...form, name: event.target.value })} />
            </label>
            <label>
              <span>{copy.email}</span>
              <input required type="email" value={form.email} placeholder={copy.emailPlaceholder} onChange={(event) => setForm({ ...form, email: event.target.value })} />
            </label>
          </div>
          <label>
            <span>{copy.titleField}</span>
            <input required value={form.title} placeholder={copy.titlePlaceholder} onChange={(event) => setForm({ ...form, title: event.target.value })} />
          </label>
          <label>
            <span>{copy.message}</span>
            <textarea required rows={5} value={form.message} placeholder={copy.messagePlaceholder} onChange={(event) => setForm({ ...form, message: event.target.value })} />
          </label>
          <button type="submit"><span>{copy.send}</span><Send aria-hidden="true" /></button>
        </form>
      </section>

      <Link className="submission-back" to="/explore">{copy.back} <ArrowUpRight aria-hidden="true" /></Link>
    </div>
  )
}
