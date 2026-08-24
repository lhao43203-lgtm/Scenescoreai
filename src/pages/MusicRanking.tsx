import { motion } from 'framer-motion'
import musicData from '../data/music-ranking.json'
import { Music, TrendingUp, Minus, TrendingDown } from 'lucide-react'
import { setSeoData } from '../utils/seo'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const MusicRanking = () => {
  const { t, i18n } = useTranslation()
  const [timeframe, setTimeframe] = useState<'daily' | 'monthly' | 'yearly'>('monthly')

  useEffect(() => {
    setSeoData(
      `${t('ranking.musicTitle')} - Scenescoreai`,
      t('ranking.musicDesc')
    )
  }, [i18n.language, t])

  const displayData = timeframe === 'daily' ? musicData.slice(0, 3) : musicData

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white flex items-center gap-3">
          <Music className="text-purple-400 w-10 h-10" />
          {t('ranking.musicTitle')}
        </h1>
        <p className="mt-4 text-slate-400 max-w-3xl text-lg">
          {t('ranking.musicDesc')}
        </p>
      </div>

      <div className="flex space-x-2 mb-8 border-b border-slate-800 pb-4">
        {(['daily', 'monthly', 'yearly'] as const).map((tf) => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`px-6 py-2 rounded-full font-medium transition ${timeframe === tf ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'}`}
          >
            {t(`ranking.${tf}`)}
          </button>
        ))}
      </div>

      <div className="grid gap-6">
        {displayData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex flex-col md:flex-row bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition duration-300"
          >
            {/* Cover & Rank */}
            <div className="relative md:w-56 flex-shrink-0">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 md:h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/400x400/1e293b/a855f7?text=${encodeURIComponent(item.title)}`;
                }}
              />
              <div className="absolute top-0 left-0 bg-gradient-to-br from-purple-600 to-pink-600 text-white font-bold w-12 h-12 flex items-center justify-center rounded-br-2xl shadow-lg">
                #{index + 1}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                    <p className="text-purple-300 mt-1 font-medium">{item.artist}</p>
                  </div>
                  <div className="flex items-center gap-1 text-2xl font-black text-purple-400">
                    {item.score} <span className="text-sm font-normal text-slate-500">{t('ranking.pts')}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-800/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-slate-300 leading-relaxed">{item.description}</p>

                <p className="mt-3 text-sm text-slate-500">
                  <span className="text-slate-400 font-medium">{t('ranking.platform')}：</span>
                  {item.platform}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="font-medium text-slate-500">{t('ranking.trend')}</span>
                  {item.trend === 'up' && <span className="flex items-center text-green-400"><TrendingUp className="w-4 h-4 mr-1" />{t('ranking.trendUp')}</span>}
                  {item.trend === 'down' && <span className="flex items-center text-red-400"><TrendingDown className="w-4 h-4 mr-1" />{t('ranking.trendDown')}</span>}
                  {item.trend === 'stable' && <span className="flex items-center text-slate-400"><Minus className="w-4 h-4 mr-1" />{t('ranking.trendStable')}</span>}
                </div>
                <button
                  onClick={() => alert(t('ranking.comingSoon'))}
                  className="px-6 py-2 bg-purple-600/10 text-purple-400 hover:bg-purple-600 hover:text-white rounded-lg font-medium transition-colors"
                >
                  {t('ranking.listen')}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default MusicRanking
