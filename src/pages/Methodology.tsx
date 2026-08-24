import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { methodologyContent, type MethodologyLanguage } from '../data/methodologyContent'

const compactMethodologyQuery = '(max-width: 780px)'

function useCompactMethodologyLayout() {
  const [isCompact, setIsCompact] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia(compactMethodologyQuery).matches
  ))

  useEffect(() => {
    const mediaQuery = window.matchMedia(compactMethodologyQuery)
    const handleChange = (event: MediaQueryListEvent) => setIsCompact(event.matches)

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isCompact
}

export default function Methodology() {
  const { i18n } = useTranslation()
  const language: MethodologyLanguage = i18n.resolvedLanguage === 'zh-TW' ? 'zh-TW' : 'en'
  const copy = methodologyContent[language]
  const isCompact = useCompactMethodologyLayout()
  const [expandedDimensions, setExpandedDimensions] = useState<Set<string>>(
    () => new Set([methodologyContent.en.dimensions.items[0].id]),
  )

  const toggleDimension = (id: string) => {
    if (!isCompact) return

    setExpandedDimensions((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="rules-page page-pad" lang={language === 'zh-TW' ? 'zh-Hant' : 'en'}>
      <section className="rules-board" aria-labelledby="methodology-title">
        <header className="rules-board__header">
          <span className="rules-board__mark">{copy.meta.mark}</span>
          <span className="rules-board__scale">{copy.meta.scale}</span>
        </header>

        <section className="methodology-hero" id="method-overview">
          <div className="methodology-hero__title">
            <span className="rules-kicker">{copy.overview.kicker}</span>
            <h1 id="methodology-title">{copy.meta.title}</h1>
          </div>

          <div className="methodology-scorecard" aria-label={`${copy.meta.summaryLabel} ${copy.meta.totalScore} ${copy.meta.pointsUnit}`}>
            <span>{copy.meta.summaryLabel}</span>
            <strong>{copy.meta.totalScore}</strong>
            <small>{copy.meta.pointsUnit}</small>
          </div>

          <div className="methodology-score-strip" aria-label={copy.dimensions.title}>
            {copy.dimensions.items.map((dimension) => (
              <div key={dimension.id}>
                <span>{dimension.number}</span>
                <strong>{dimension.score}</strong>
                <small>{copy.meta.pointsUnit}</small>
              </div>
            ))}
          </div>

          <div className="methodology-overview-copy">
            <div>
              <h2>{copy.overview.title}</h2>
              {copy.overview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="methodology-principles">
              <h3>{copy.overview.principlesTitle}</h3>
              {copy.overview.principles.map((principle, index) => (
                <p key={principle}><span>0{index + 1}</span>{principle}</p>
              ))}
            </div>
          </div>
        </section>

        <div className="methodology-layout">
          <aside className="methodology-index" aria-label={language === 'zh-TW' ? '頁內目錄' : 'On-page contents'}>
            <span>INDEX / 50</span>
            <nav>
              {copy.navigation.map((item, index) => (
                <a href={item.href} key={item.href}><span>0{index + 1}</span>{item.label}</a>
              ))}
            </nav>
          </aside>

          <main className="methodology-content">
            <section className="methodology-section methodology-section--bands" id="method-bands" aria-labelledby="method-bands-title">
              <div className="methodology-section__heading">
                <span className="rules-kicker">{copy.bands.kicker}</span>
                <h2 id="method-bands-title">{copy.bands.title}</h2>
                <p>{copy.bands.intro}</p>
              </div>
              <div className="methodology-bands">
                {copy.bands.items.map((band, index) => (
                  <article key={band.range}>
                    <span className="methodology-bands__index">0{index + 1}</span>
                    <strong>{band.range}</strong>
                    <div>
                      <h3>{band.label}</h3>
                      <p>{band.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="methodology-section methodology-section--organization" id="method-organization" aria-labelledby="method-organization-title">
              <div className="methodology-section__heading">
                <span className="rules-kicker">{copy.organization.kicker}</span>
                <h2 id="method-organization-title">{copy.organization.title}</h2>
              </div>
              <ol className="methodology-numbered-list">
                {copy.organization.points.map((point, index) => (
                  <li key={point}><span>0{index + 1}</span><p>{point}</p></li>
                ))}
              </ol>
              <div className="methodology-formula">
                <span>{copy.organization.formulaLabel}</span>
                <strong>{copy.organization.formula}</strong>
              </div>
              <div className="methodology-ties">
                <h3>{copy.organization.tieTitle}</h3>
                <ol>
                  {copy.organization.tieBreakers.map((rule, index) => (
                    <li key={rule}><span>{index + 1}</span><p>{rule}</p></li>
                  ))}
                </ol>
              </div>
            </section>

            <section className="methodology-section methodology-section--dimensions" id="method-dimensions" aria-labelledby="method-dimensions-title">
              <div className="methodology-section__heading">
                <span className="rules-kicker">{copy.dimensions.kicker}</span>
                <h2 id="method-dimensions-title">{copy.dimensions.title}</h2>
                <p>{copy.dimensions.intro}</p>
              </div>
              <div className="methodology-dimensions">
                {copy.dimensions.items.map((dimension) => {
                  const isExpanded = !isCompact || expandedDimensions.has(dimension.id)
                  const contentId = `dimension-${dimension.id}-content`

                  return (
                    <article className={`methodology-dimension${isExpanded ? ' is-expanded' : ''}`} key={dimension.id}>
                      <h3>
                        <button
                          type="button"
                          aria-controls={contentId}
                          aria-expanded={isExpanded}
                          disabled={!isCompact}
                          onClick={() => toggleDimension(dimension.id)}
                        >
                          <span className="methodology-dimension__topline">
                            <span>{dimension.number}</span>
                            <strong>{dimension.score}<small>{copy.meta.pointsUnit}</small></strong>
                          </span>
                          <span className="methodology-dimension__title">{dimension.title}</span>
                          <span className="methodology-dimension__action">
                            {isExpanded ? copy.dimensions.collapseLabel : copy.dimensions.expandLabel}
                            <ChevronDown aria-hidden="true" />
                          </span>
                        </button>
                      </h3>
                      <div className="methodology-dimension__content" id={contentId} hidden={!isExpanded}>
                        <p className="methodology-dimension__description">{dimension.description}</p>
                        <div className="methodology-dimension__criteria">
                          <span>{copy.dimensions.criteriaLabel}</span>
                          <ol>
                            {dimension.criteria.map((criterion, index) => (
                              <li key={criterion}><span>{String(index + 1).padStart(2, '0')}</span><p>{criterion}</p></li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>

            <section className="methodology-section methodology-section--eligibility" id="method-eligibility" aria-labelledby="method-eligibility-title">
              <div className="methodology-section__heading">
                <span className="rules-kicker">{copy.eligibility.kicker}</span>
                <h2 id="method-eligibility-title">{copy.eligibility.title}</h2>
                <p>{copy.eligibility.intro}</p>
              </div>
              <ol className="methodology-rule-list">
                {copy.eligibility.points.map((point, index) => (
                  <li key={point}><span>{String(index + 1).padStart(2, '0')}</span><p>{point}</p></li>
                ))}
              </ol>
            </section>

            <section className="methodology-section methodology-section--deductions" id="method-deductions" aria-labelledby="method-deductions-title">
              <div className="methodology-section__heading">
                <span className="rules-kicker">{copy.deductions.kicker}</span>
                <h2 id="method-deductions-title">{copy.deductions.title}</h2>
              </div>
              <ol className="methodology-rule-list methodology-rule-list--warning">
                {copy.deductions.points.map((point, index) => (
                  <li key={point}><span>{String(index + 1).padStart(2, '0')}</span><p>{point}</p></li>
                ))}
              </ol>
            </section>
          </main>
        </div>
      </section>

      <footer className="rules-cta rules-cta--methodology">
        <Link className="round-arrow-link" to="/explore">
          <span>{copy.returnToRanking}</span>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </footer>
    </div>
  )
}
