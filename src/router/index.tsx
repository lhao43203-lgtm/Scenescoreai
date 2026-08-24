import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import About from '../pages/About'
import Home from '../pages/Home'
import Judges from '../pages/Judges'
import JudgeDetail from '../pages/JudgeDetail'
import Methodology from '../pages/Methodology'
import Explore from '../pages/Explore'
import SeriesDetail from '../pages/SeriesDetail'
import Submission from '../pages/Submission'
import Terms from '../pages/Terms'

export const AppRouter = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/series/:id" element={<SeriesDetail />} />
      <Route path="/judges/:id" element={<JudgeDetail />} />
      <Route path="/judges" element={<Judges />} />
      <Route path="/methodology" element={<Methodology />} />
      <Route path="/about" element={<About />} />
      <Route path="/submission" element={<Submission />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contact" element={<Navigate to="/submission#submission-form" replace />} />
      <Route path="/rules" element={<Navigate to="/methodology" replace />} />
      <Route path="/ranking/*" element={<Navigate to="/explore" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
)
