import { ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useState, type CSSProperties, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { academicJudges, judges } from '../data/sceneScore'

const RevealLine = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <span className={`judge-feature__line ${className}`}>
    <motion.span
      initial={{ y: '110%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-110%', opacity: 0 }}
      transition={{ duration: 0.52, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
)

const splitAcademicName = (name: string, isTraditional: boolean) => {
  const suffix = isTraditional ? '博士' : 'PhD'
  const suffixIndex = name.lastIndexOf(suffix)

  if (suffixIndex === -1) return { person: name, degree: '' }

  return {
    person: name.slice(0, suffixIndex).trim(),
    degree: suffix,
  }
}

export default function Judges() {
  const [activeId, setActiveId] = useState(judges[0].id)
  const [academicActiveId, setAcademicActiveId] = useState(academicJudges[0].id)
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const active = judges.find((judge) => judge.id === activeId) ?? judges[0]
  const academicActive = academicJudges.find((judge) => judge.id === academicActiveId) ?? academicJudges[0]
  const isTraditional = i18n.resolvedLanguage === 'zh-TW'
  const localeKey = isTraditional ? 'zh-Hant' : 'en'
  const pageCopy = isTraditional
    ? {
        listLabel: '評審名單',
        frame: '/ 當前人物',
      }
    : {
        listLabel: 'Jury list',
        frame: '/ CURRENT FRAME',
      }

  return (
    <div className="judges-page page-pad" lang={localeKey}>
      <section className="judges-showcase">
        <div className="judge-list" aria-label={pageCopy.listLabel}>
          <div className="judge-list__heading">
            <h2>{isTraditional ? '星級評審' : 'Star Jury'}</h2>
          </div>
          {judges.map((judge, index) => (
            <button
              className={`judge-list__item ${judge.id === activeId ? 'is-active' : ''}`}
              key={judge.id}
              type="button"
              onMouseEnter={() => setActiveId(judge.id)}
              onFocus={() => setActiveId(judge.id)}
              onClick={() => navigate(`/judges/${judge.id}`)}
            >
              <span>0{index + 1}</span><strong>{isTraditional ? judge.name : judge.romanized}</strong><i>↗</i>
            </button>
          ))}
        </div>
        <div className="judge-feature">
          <AnimatePresence mode="wait">
            <Link
              key={`image-${active.id}`}
              to={`/judges/${active.id}`}
              className="judge-feature__image-link"
              data-judge={active.id}
              style={{ '--judge-feature-image': `url("${active.image}")` } as CSSProperties}
              aria-label={`${isTraditional ? active.name : active.romanized} — ${isTraditional ? '查看完整資料' : 'View full profile'}`}
            >
              <motion.img
                src={active.image}
                alt={active.romanized}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.42 }}
              />
            </Link>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              className="judge-feature__overlay"
              key={`${active.id}-${localeKey}`}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <RevealLine className="judge-feature__kicker" delay={0.04}>{pageCopy.frame}</RevealLine>
              <RevealLine className="judge-feature__name" delay={0.1}>{isTraditional ? active.name : active.romanized}</RevealLine>
              <RevealLine className="judge-feature__headline" delay={0.15}>{isTraditional ? active.headlineZhHant : active.headline}</RevealLine>
              <RevealLine className="judge-feature__role" delay={0.2}>{isTraditional ? active.roleZhHant : active.role}</RevealLine>
              {(isTraditional ? active.bioZhHant : active.bio).map((line, index) => (
                <RevealLine className="judge-feature__bio" delay={0.27 + index * 0.07} key={line}>{line}</RevealLine>
              ))}
              <Link className="text-link judge-feature__profile-link" to={`/judges/${active.id}`}>
                {isTraditional ? '查看完整資料' : 'VIEW FULL PROFILE'} <ArrowUpRight aria-hidden="true" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <section className="academic-jury" aria-labelledby="academic-jury-title">
        <div className="academic-jury__list">
          <div className="judge-list__heading academic-jury__header">
            <h2 id="academic-jury-title">{isTraditional ? '教授評審' : 'Academic Jury'}</h2>
            <p>
              {isTraditional
                ? '由人工智慧、音樂生成與多模態研究領域的學者組成，為作品的技術想像與創作方法補上另一種專業視角'
                : 'Researchers across artificial intelligence, music generation and multimodal systems bring a second professional lens to the work.'}
            </p>
          </div>
          {academicJudges.map((academicJudge, index) => (
            <button
              className={`judge-list__item ${academicJudge.id === academicActiveId ? 'is-active' : ''}`}
              key={academicJudge.id}
              type="button"
              onMouseEnter={() => setAcademicActiveId(academicJudge.id)}
              onFocus={() => setAcademicActiveId(academicJudge.id)}
              onClick={() => setAcademicActiveId(academicJudge.id)}
            >
              <span>0{index + 1}</span>
              <strong className="academic-jury__name">
                <span>{splitAcademicName(isTraditional ? academicJudge.nameZhHant : academicJudge.nameEn, isTraditional).person}</span>
                <span>{splitAcademicName(isTraditional ? academicJudge.nameZhHant : academicJudge.nameEn, isTraditional).degree}</span>
              </strong>
              <i>↗</i>
            </button>
          ))}
        </div>
        <div className="academic-feature">
          <AnimatePresence mode="wait">
            <motion.div
              className="academic-feature__content"
              key={`${academicActive.id}-${localeKey}`}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <RevealLine className="academic-feature__kicker" delay={0.04}>{isTraditional ? '/ 當前研究' : '/ CURRENT RESEARCH'}</RevealLine>
              <RevealLine className="academic-feature__name" delay={0.1}>{isTraditional ? academicActive.nameZhHant : academicActive.nameEn}</RevealLine>
              <RevealLine className="academic-feature__focus" delay={0.16}>{isTraditional ? academicActive.focusZhHant : academicActive.focusEn}</RevealLine>
              {(isTraditional ? academicActive.profileZhHant : academicActive.profileEn).map((paragraph, index) => (
                <RevealLine className="academic-feature__bio" delay={0.24 + index * 0.08} key={`${academicActive.id}-${index}`}>{paragraph}</RevealLine>
              ))}
              <span className="academic-feature__note">
                {isTraditional ? '教授評審 · 研究資料' : 'ACADEMIC JURY · RESEARCH PROFILE'}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
