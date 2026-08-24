import { setSeoData } from '../utils/seo'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const Rules = () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    setSeoData(
      `${t('rules.title')} - Scenescoreai`,
      t('rules.scoreDesc')
    )
  }, [i18n.language, t])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-8">{t('rules.title')}</h1>
      
      <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 border-b border-slate-800 pb-2">{t('rules.h1')}</h2>
          <ul className="list-disc list-inside space-y-3 text-slate-300 leading-relaxed">
            <li>{t('rules.cond1')}</li>
            <li>{t('rules.cond2')}</li>
            <li>{t('rules.cond3')}</li>
            <li>{t('rules.cond4')}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 border-b border-slate-800 pb-2">{t('rules.h2')}</h2>
          <p className="text-slate-300 mb-4">{t('rules.scoreDesc')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">{t('rules.s1Title')}</h3>
              <p className="text-sm text-slate-400">{t('rules.s1Desc')}</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">{t('rules.s2Title')}</h3>
              <p className="text-sm text-slate-400">{t('rules.s2Desc')}</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">{t('rules.s3Title')}</h3>
              <p className="text-sm text-slate-400">{t('rules.s3Desc')}</p>
            </div>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">{t('rules.s4Title')}</h3>
              <p className="text-sm text-slate-400">{t('rules.s4Desc')}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4 border-b border-slate-800 pb-2">{t('rules.h3')}</h2>
          <ul className="list-disc list-inside space-y-3 text-slate-300">
            <li>{t('rules.freq1')}</li>
            <li>{t('rules.freq2')}</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Rules
