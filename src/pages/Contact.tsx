import { Mail, MessageSquare, Briefcase, CheckCircle } from 'lucide-react'
import { setSeoData } from '../utils/seo'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
  const { t, i18n } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    setSeoData(
      `${t('contact.title')} - Scenescoreai`,
      t('contact.subtitle')
    )
  }, [i18n.language, t])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('contact.title')}</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center transition hover:border-blue-500/50">
          <div className="bg-blue-600/10 p-4 rounded-full mb-6">
            <Mail className="w-8 h-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{t('contact.emailCol')}</h3>
          <p className="text-slate-400 mb-4">{t('contact.emailDesc')}</p>
          <a href="mailto:Marketing@scenescore.ai" className="text-blue-400 font-medium hover:underline">
            Marketing@scenescore.ai
          </a>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center transition hover:border-indigo-500/50">
          <div className="bg-indigo-500/10 p-4 rounded-full mb-6">
            <Briefcase className="w-8 h-8 text-indigo-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{t('contact.submitCol')}</h3>
          <p className="text-slate-400 mb-4">{t('contact.submitDesc')}</p>
          <a
            href="mailto:Marketing@scenescore.ai?subject=作品自荐"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
          >
            {t('contact.submitBtn')}
          </a>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col items-center text-center transition hover:border-slate-500/50">
          <div className="bg-slate-800 p-4 rounded-full mb-6">
            <MessageSquare className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{t('contact.socialCol')}</h3>
          <p className="text-slate-400 mb-4">{t('contact.socialDesc')}</p>
          <div className="flex gap-4 text-slate-300">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Discord</a>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-6">{t('contact.formTitle')}</h2>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
            <p className="text-xl font-semibold text-white mb-2">{t('contact.successTitle')}</p>
            <p className="text-slate-400">{t('contact.successDesc')}</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition"
            >
              {t('contact.sendAnother')}
            </button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">{t('contact.fName')}</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder={t('contact.fNamePh')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">{t('contact.fEmail')}</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder={t('contact.fEmailPh')}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">{t('contact.fMsg')}</label>
              <textarea
                id="message"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder={t('contact.fMsgPh')}
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
              {t('contact.fSend')}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Contact
