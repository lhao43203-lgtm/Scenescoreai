import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getJudge, judgeProfilesEn, judgeProfilesZhHant, judges, type JudgeProfileSection } from '../data/sceneScore'

export default function JudgeDetail() {
  const { id = '' } = useParams()
  const judge = getJudge(id)
  const { i18n } = useTranslation()

  if (!judge) return <Navigate to="/judges" replace />

  const isTraditional = i18n.resolvedLanguage === 'zh-TW'
  const localeKey = isTraditional ? 'zh-Hant' : 'en'
  const index = judges.findIndex((entry) => entry.id === judge.id)
  const previous = judges[(index - 1 + judges.length) % judges.length]
  const next = judges[(index + 1) % judges.length]
  const profileSections: JudgeProfileSection[] = isTraditional
    ? judgeProfilesZhHant[judge.id] ?? []
    : judgeProfilesEn[judge.id] ?? [{ heading: 'Profile', paragraphs: judge.bio }]
  const copy = isTraditional
    ? {
        back: '返回評審總覽',
        previous: '上一位評審',
        next: '下一位評審',
        view: '查看評審總覽',
      }
    : {
        back: 'BACK TO JURY',
        previous: 'PREVIOUS JUDGE',
        next: 'NEXT JUDGE',
        view: 'VIEW ALL JUDGES',
      }

  return (
    <div className="judge-detail-page detail-page" lang={localeKey}>
      <section className="judge-detail-hero">
        <Link to="/judges" className="judge-detail-back"><ArrowLeft aria-hidden="true" /> {copy.back}</Link>
        <div className="judge-detail-hero__image" data-judge={judge.id}>
          <img src={judge.image} alt={judge.romanized} />
          <span className="judge-detail-hero__index">0{index + 1} / 05</span>
        </div>
        <div className="judge-detail-hero__copy">
          <h1>{isTraditional ? judge.name : judge.romanized}</h1>
          <p className="judge-detail-hero__headline">{isTraditional ? judge.headlineZhHant : judge.headline}</p>
          <p className="judge-detail-hero__role">{isTraditional ? judge.roleZhHant : judge.role}</p>
          <p className="judge-detail-hero__intro">{isTraditional ? judge.bioZhHant[0] : judge.bio[0]}</p>
        </div>
      </section>

      <section className="judge-detail-profile page-pad">
        <div className="judge-detail-profile__heading">
          <p>{isTraditional ? '從創作、產業到文化觀察，了解評審帶進 Scene Score 的視角' : 'The experience and point of view behind the jury seat.'}</p>
        </div>
        <div className="judge-detail-profile__body">
          {profileSections.map((section) => (
            <article className="judge-detail-profile__section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
          ))}
        </div>
      </section>

      <nav className="judge-detail-nav page-pad" aria-label={isTraditional ? '評審瀏覽' : 'Judge navigation'}>
        <Link to={`/judges/${previous.id}`} className="judge-detail-nav__item">
          <span>{copy.previous}</span>
          <strong>{isTraditional ? previous.name : previous.romanized}</strong>
          <ArrowUpRight aria-hidden="true" />
        </Link>
        <Link to="/judges" className="judge-detail-nav__center">{copy.view}</Link>
        <Link to={`/judges/${next.id}`} className="judge-detail-nav__item judge-detail-nav__item--next">
          <span>{copy.next}</span>
          <strong>{isTraditional ? next.name : next.romanized}</strong>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </nav>
    </div>
  )
}
