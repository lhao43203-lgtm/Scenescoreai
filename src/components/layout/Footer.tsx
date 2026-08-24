import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { i18n } = useTranslation()
  const isTraditional = i18n.resolvedLanguage === 'zh-TW'
  const copy = isTraditional
    ? {
        explore: '流行榜',
        jury: '評審',
        methodology: '評分方法',
        submission: '投稿',
        terms: '使用條款',
        company: '香港國際人工智能影視有限公司',
      }
    : {
        explore: 'Ranking',
        jury: 'Jury',
        methodology: 'Methodology',
        submission: 'Submission',
        terms: 'Terms of Use',
        company: 'Hong Kong International Artificial intelligence visual limited',
      }

  return (
    <footer className="site-footer" lang={isTraditional ? 'zh-Hant' : 'en'}>
      <div className="footer-bottom">
        <Link to="/" className="footer-mark">
          <span>SCENE SCORE</span>
          <span className="footer-mark__ai">AI</span>
        </Link>
        <div className="footer-links">
          <Link to="/explore">{copy.explore}</Link>
          <Link to="/judges">{copy.jury}</Link>
          <Link to="/methodology">{copy.methodology}</Link>
          <Link to="/submission">{copy.submission}</Link>
          <Link to="/terms">{copy.terms}</Link>
        </div>
        <p className="footer-company">{copy.company}</p>
      </div>
    </footer>
  )
}

export default Footer
