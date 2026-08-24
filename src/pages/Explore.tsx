import { ArrowUpRight, Grid2X2, List } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { works } from '../data/sceneScore'

type ViewMode = 'grid' | 'list'

export default function Explore() {
  const [view, setView] = useState<ViewMode>('list')
  const [filter, setFilter] = useState('All')
  const [hovered, setHovered] = useState<string | null>(null)
  const [playingPreview, setPlayingPreview] = useState<string | null>(null)
  const { i18n } = useTranslation()
  const isTraditional = i18n.resolvedLanguage === 'zh-TW'
  const copy = isTraditional
    ? {
      filters: { All: '全部', Featured: '精選', 'Short Film': '短片', Series: '系列' },
        viewMode: '檢視模式',
        grid: '網格',
        list: '列表',
        entry: '作品名稱',
        description: '簡介',
        score: '評分',
        style: '類型',
        tags: '標籤',
        preview: '公開預覽',
        type: '類型',
        play: '播放預覽',
        detail: '查看作品資料',
        footnote: '分數／狀態會在評分方法確認後公開',
      }
    : {
        filters: { All: 'All', Featured: 'Featured', 'Short Film': 'Short Film', Series: 'Series' },
        viewMode: 'View mode',
        grid: 'GRID',
        list: 'LIST',
        entry: 'ENTRY',
        description: 'DESCRIPTION',
        score: 'SCORE',
        style: 'STYLE',
        tags: 'TAGS',
        preview: 'PUBLIC PREVIEW',
        type: 'Type',
        play: 'PLAY PREVIEW',
        detail: 'VIEW CASE STUDY',
        footnote: 'SCORE / STATUS remains unpublished while methodology is being finalized.',
      }
  const filters = ['All', 'Featured', 'Short Film', 'Series']
  const filteredWorks = useMemo(() => filter === 'All' ? works : works.filter((work) => work.type === filter), [filter])
  const workTypeLabel = (work: typeof works[number]) => isTraditional
    ? ({ Featured: '精選', 'Short Film': '短片', Series: '系列' }[work.type] ?? work.type)
    : work.type
  const workTitle = (work: typeof works[number]) => isTraditional ? work.rankingTitleZhHant : work.rankingTitle
  const workDescription = (work: typeof works[number]) => isTraditional ? work.rankingDescriptionZhHant : work.rankingDescription
  const workStyle = (work: typeof works[number]) => isTraditional ? work.rankingStyleZhHant : work.rankingStyle
  const workTags = (work: typeof works[number]) => isTraditional ? work.rankingTagsZhHant : work.rankingTags

  const renderRankingRow = (work: typeof works[number]) => {
    const isFocused = hovered === work.id
    return (
      <Link
        key={work.id}
        to={`/series/${work.id}`}
        className={`ranking-row ranking-row--${work.accent} ${isFocused ? 'is-hovered' : ''}`}
        onMouseEnter={() => setHovered(work.id)}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered(work.id)}
        onBlur={() => setHovered(null)}
      >
        <div className={`ranking-row__media scene-poster scene-poster--${work.accent} ${playingPreview === work.id ? 'is-playing' : ''}`}>
          <img className="scene-poster__image" src={work.image} alt="" loading="lazy" decoding="async" />
          <video
            className="scene-poster__video"
            src={work.video}
            poster={work.image}
            muted
            loop
            playsInline
            preload="none"
            aria-label={`${work.title} ${copy.play}`}
            onMouseEnter={(event) => {
              setPlayingPreview(work.id)
              void event.currentTarget.play().catch(() => setPlayingPreview(null))
            }}
            onMouseLeave={(event) => {
              setPlayingPreview((current) => current === work.id ? null : current)
              event.currentTarget.pause()
              event.currentTarget.currentTime = 0
            }}
          />
          <span className="ranking-row__media-index">{work.index}</span>
          <span className="ranking-row__media-label">{copy.play} <ArrowUpRight aria-hidden="true" /></span>
        </div>
        <div className="ranking-row__body">
          <div className="ranking-row__topline">
            <div className="ranking-row__title-wrap">
              <strong>{workTitle(work)}</strong>
              <div className="ranking-row__chips"><span>{workStyle(work)}</span><span>{work.year}</span></div>
            </div>
            <span className="ranking-row__score"><strong>{work.score.toFixed(1)}</strong><small>{copy.score}</small></span>
          </div>
          <p className="ranking-row__description">{workDescription(work)}</p>
          <div className="ranking-row__footer">
            <span className="ranking-row__trend">{copy.tags} / {workTags(work).join(isTraditional ? '、' : ', ')}</span>
            <span className="ranking-row__tags">{work.year} · {copy.preview}</span>
            <span className="ranking-row__detail">{copy.detail} <ArrowUpRight aria-hidden="true" /></span>
          </div>
        </div>
      </Link>
    )
  }

  const renderGridEntry = (work: typeof works[number]) => {
    const isFocused = hovered === work.id
    return (
      <Link
        key={work.id}
        to={`/series/${work.id}`}
        className={`work-entry work-entry--${work.accent} ${isFocused ? 'is-hovered' : ''}`}
        onMouseEnter={() => setHovered(work.id)}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered(work.id)}
        onBlur={() => setHovered(null)}
      >
        <div className="work-entry__meta"><span>{copy.type} <em>/</em> {workTypeLabel(work)}</span></div>
        <div className={`work-entry__visual scene-poster scene-poster--${work.accent}`}>
          <img className="scene-poster__image" src={work.image} alt="" loading="lazy" decoding="async" />
          <video
            className="scene-poster__video"
            src={work.video}
            poster={work.image}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            onMouseEnter={(event) => void event.currentTarget.play()}
            onMouseLeave={(event) => event.currentTarget.pause()}
          />
          <span className="poster-index">{work.index} <em>/</em> {work.year.slice(2)}</span>
          <span className="poster-title">{workTitle(work)}</span>
          <span className="poster-rec"><i /> REC</span>
          <span className="poster-hover-label">{copy.detail} <ArrowUpRight aria-hidden="true" /></span>
        </div>
        <div className="work-entry__info"><span>{work.index}</span><strong>{workTitle(work)}</strong><span>{work.year} <em>/</em> {workStyle(work)}</span><span className="status-label">{isTraditional ? '待發布' : work.status}</span><ArrowUpRight aria-hidden="true" /></div>
      </Link>
    )
  }

  return (
    <div className="explore-page page-pad" lang={isTraditional ? 'zh-Hant' : 'en'}>
      <div className="explore-toolbar">
        <div className="explore-filters">
          {filters.map((item) => <button className={filter === item ? 'is-active' : ''} key={item} type="button" onClick={() => setFilter(item)}>{copy.filters[item as keyof typeof copy.filters]} <span>[{item === 'All' ? works.length : works.filter((work) => work.type === item).length}]</span></button>)}
        </div>
        <div className="explore-actions">
          <div className="view-toggle" aria-label={copy.viewMode}>
            <button type="button" className={view === 'grid' ? 'is-active' : ''} aria-label={copy.grid} onClick={() => setView('grid')}><Grid2X2 aria-hidden="true" /> {copy.grid}</button>
            <button type="button" className={view === 'list' ? 'is-active' : ''} aria-label={copy.list} onClick={() => setView('list')}><List aria-hidden="true" /> {copy.list}</button>
          </div>
        </div>
      </div>

      <section className={view === 'list' ? 'ranking-table' : 'work-collection work-collection--grid'} aria-live="polite">
        {view === 'list' ? (
          <>
            <div className="ranking-table__head" aria-hidden="true">
              <span>{copy.entry}</span><span>{copy.description} · {copy.score} · {copy.style} · {copy.tags}</span>
            </div>
            {filteredWorks.map(renderRankingRow)}
          </>
        ) : filteredWorks.map(renderGridEntry)}
      </section>

      <div className="explore-footnote"><span>—</span> {copy.footnote}</div>
    </div>
  )
}
