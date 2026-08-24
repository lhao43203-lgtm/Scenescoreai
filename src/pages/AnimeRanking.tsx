import { motion } from 'framer-motion'
import animeData from '../data/anime-ranking.json'
import { Trophy, TrendingUp, Minus, TrendingDown } from 'lucide-react'
import { setSeoData } from '../utils/seo'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const AnimeRanking = () => {
  const { t, i18n } = useTranslation()
  const [timeframe, setTimeframe] = useState<'daily'|'monthly'|'yearly'>('monthly')

  useEffect(() => {
    setSeoData(
      `${t('ranking.animeTitle')} - Scenescoreai`,
      t('ranking.animeDesc')
    )
  }, [i18n.language, t])

  const displayData = timeframe === 'daily' ? animeData.slice(0, 3) : animeData

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white flex items-center gap-3">
          <Trophy className="text-blue-500 w-10 h-10" />
          {t('ranking.animeTitle')}
        </h1>
        <p className="mt-4 text-slate-400 max-w-3xl text-lg">
          {t('ranking.animeDesc')}
        </p>
      </div>

      <div className="flex space-x-2 mb-8 border-b border-slate-800 pb-4">
        <button
          onClick={() => setTimeframe('daily')}
          className={`px-6 py-2 rounded-full font-medium transition ${timeframe === 'daily' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'}`}
        >
          {t('ranking.daily')}
        </button>
        <button
          onClick={() => setTimeframe('monthly')}
          className={`px-6 py-2 rounded-full font-medium transition ${timeframe === 'monthly' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'}`}
        >
          {t('ranking.monthly')}
        </button>
        <button
          onClick={() => setTimeframe('yearly')}
          className={`px-6 py-2 rounded-full font-medium transition ${timeframe === 'yearly' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'}`}
        >
          {t('ranking.yearly')}
        </button>
      </div>

      <div className="grid gap-6">
        {displayData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col md:flex-row bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition duration-300"
          >
            {/* Left Image & Rank */}
            <div className="relative md:w-64 flex-shrink-0">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 md:h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/400x300/1e293b/3b82f6?text=${encodeURIComponent(item.title)}`;
                }}
              />
              <div className="absolute top-0 left-0 bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold w-12 h-12 flex items-center justify-center rounded-br-2xl shadow-lg">
                #{index + 1}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-white">{item.title}</h2>
                  <div className="flex items-center gap-2 text-2xl font-black text-blue-400">
                    {item.score} <span className="text-sm font-normal text-slate-500">{t('ranking.pts')}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 text-blue-300 text-xs rounded-full border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="font-medium text-slate-500">{t('ranking.trend')}</span>
                  {item.trend === 'up' && <span className="flex items-center text-green-400"><TrendingUp className="w-4 h-4 mr-1"/> {t('ranking.trendUp')}</span>}
                  {item.trend === 'down' && <span className="flex items-center text-red-400"><TrendingDown className="w-4 h-4 mr-1"/> {t('ranking.trendDown')}</span>}
                  {item.trend === 'stable' && <span className="flex items-center text-slate-400"><Minus className="w-4 h-4 mr-1"/> {t('ranking.trendStable')}</span>}
                </div>
                <button
                  onClick={() => alert(t('ranking.comingSoon'))}
                  className="px-6 py-2 bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-colors"
                >
                  {t('ranking.details')}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AnimeRanking
