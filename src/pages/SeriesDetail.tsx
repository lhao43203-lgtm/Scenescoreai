import { ArrowDown, ArrowLeft, ArrowUpRight, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getWork, works } from '../data/sceneScore'

export default function SeriesDetail() {
  const { id = works[0].id } = useParams()
  const work = getWork(id)
  const next = works[(works.findIndex((entry) => entry.id === work.id) + 1) % works.length]
  const [crewOpen, setCrewOpen] = useState(false)
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const isTraditional = i18n.resolvedLanguage === 'zh-TW'
  const typeLabel = isTraditional
    ? ({ Featured: '精選', 'Short Film': '短片', Series: '系列' }[work.type] ?? work.type)
    : work.type
  const workNote = isTraditional
    ? {
        'sample-film-a': '第一個公開排名項目的預覽資料，等待正式評分規程確認',
        'sample-film-b': '以節奏、氛圍與克制建立視覺語言的作品',
        'sample-film-c': '等待首次正式評審閱讀的短篇作品',
        'sample-film-d': '為下一輪策展保留的系列項目標記',
        'sample-film-e': '目前預覽資料中的第五個項目',
      }[work.id] ?? work.note
    : work.note
  const copy = isTraditional
    ? {
        back: '返回索引',
        crew: '製作團隊',
        preview: '預覽畫面',
        overviewTitle: '一個場景從來不只是一個分數',
        transparency: 'Scene Score 會保持這個項目的資料透明：評分、排名邏輯與完整評審拆解，將在評分方法確認後公開',
        behind: '了解評分方法',
        production: '正式項目資料確認後，將補充完整製作資訊',
        closeCrew: '關閉製作團隊資料',
      }
    : {
        back: 'BACK TO INDEX',
        crew: 'THE CREW',
        preview: 'PREVIEW FRAME',
        overviewTitle: 'A scene is never only a score',
        transparency: 'Scene Score is keeping this entry transparent: the score, ranking logic and full jury breakdown will appear only after the methodology has been confirmed.',
        behind: 'BEHIND THE SCORE',
        production: 'Production details will be added when the official entry data is confirmed.',
        closeCrew: 'Close crew',
      }

  return (
    <div className="detail-page" lang={isTraditional ? 'zh-Hant' : 'en'}>
      <section className={`detail-hero scene-poster scene-poster--${work.accent}`}>
        <video
          className="detail-hero__video"
          src={work.video}
          poster={work.image}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          aria-hidden="true"
        />
        <Link to="/explore" className="detail-back"><ArrowLeft aria-hidden="true" /> {copy.back}</Link>
        <div className="detail-hero__meta"><span>{work.year} / {typeLabel}</span><span>{work.index} / 05</span><span>SCENE SCORE / —</span></div>
        <div className="detail-hero__title"><h1>{work.title}</h1></div>
        <button className="detail-crew-button" type="button" onClick={() => setCrewOpen(true)}>{copy.crew} <ArrowUpRight aria-hidden="true" /></button>
        <ArrowDown className="detail-down" aria-hidden="true" />
        <span className="detail-hero__rec"><i /> REC / {copy.preview}</span>
      </section>

      <section className="detail-overview page-pad">
        <div><h2>{copy.overviewTitle}</h2></div>
        <div className="detail-overview__copy"><p>{workNote}</p><p>{copy.transparency}</p><Link className="text-link" to="/methodology">{copy.behind} <ArrowUpRight aria-hidden="true" /></Link></div>
      </section>

      <section className="detail-stills">
        <div className="detail-still detail-still--one scene-poster scene-poster--red"><img src={work.image} alt="" loading="lazy" decoding="async" /><span>01 / FRAME</span></div>
        <div className="detail-still detail-still--two scene-poster scene-poster--blue"><img src={next.image} alt="" loading="lazy" decoding="async" /><span>02 / LIGHT</span></div>
      </section>

      <section className="detail-next page-pad">
        <Link to={`/series/${next.id}`} className="detail-next__link"><span>{next.index} / {next.title}</span><ArrowUpRight aria-hidden="true" /></Link>
      </section>

      {crewOpen && (
        <motion.div className="crew-drawer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} role="dialog" aria-modal="true" aria-label="Crew information">
          <button className="crew-drawer__close" type="button" onClick={() => setCrewOpen(false)} aria-label={copy.closeCrew}><X aria-hidden="true" /></button>
          <h2>{work.title}</h2><p>{copy.production}</p>
        </motion.div>
      )}
      <button className="detail-mobile-back" type="button" onClick={() => navigate('/explore')}>{copy.back}</button>
    </div>
  )
}
