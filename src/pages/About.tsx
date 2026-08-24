import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { i18n } = useTranslation()
  const isTraditional = i18n.resolvedLanguage === 'zh-TW'
  const copy = isTraditional
    ? {
        title: <>讓好的<br /><em>內容被看見</em></>,
        intro: 'Scene Score 是一個面向公眾的影像故事排名與資料體驗，專業、透明，讓作品與作品背後的語境保持靠近',
        positionTitle: <>資料可以找到場景<br /><em>人決定它為何留下</em></>,
        valuesOne: '清晰勝過噪音，公開流程勝過神秘數字。我們希望讓帶來經驗、品味與責任感的人被好好介紹',
        valuesTwo: '公開瀏覽、全時段排名預覽、評審焦點和評分方法說明，讓每項內容都保留清晰脈絡',
        contactTitle: <>下一個項目<br /><em>由此開始</em></>,
        contactAction: '發起合作',
        back: '查看公開索引',
      }
    : {
        title: <>MAKE GOOD<br /><em>CONTENT VISIBLE</em></>,
        intro: 'Scene Score is a public-facing ranking and information experience for screen stories — professional, transparent and built to keep context close to the frame.',
        positionTitle: <>Data can find the scene<br /><em>People decide why it stays</em></>,
        valuesOne: 'Clarity over noise. A visible process over a mysterious number. A careful introduction to the people who bring experience, taste and accountability to the conversation.',
        valuesTwo: 'The public experience brings together all-time ranking preview, jury spotlight and a visible methodology framework.',
        contactTitle: <>THE NEXT PROJECT<br /><em>STARTS HERE</em></>,
        contactAction: 'INITIATE A COLLABORATION',
        back: 'View the index',
      }

  return (
    <div className="about-page page-pad" lang={isTraditional ? 'zh-Hant' : 'en'}>
      <section className="about-hero page-hero">
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </section>
      <section className="about-statement"><h2>{copy.positionTitle}</h2></section>
      <section className="about-columns"><div /><div><p>{copy.valuesOne}</p><p>{copy.valuesTwo}</p></div></section>
      <section className="about-contact" id="contact"><h2>{copy.contactTitle}</h2><a className="round-arrow-link" href="mailto:hello@scenescore.ai"><span>{copy.contactAction}</span><ArrowUpRight aria-hidden="true" /></a></section>
      <Link className="about-back" to="/explore">{copy.back} <ArrowUpRight aria-hidden="true" /></Link>
    </div>
  )
}
