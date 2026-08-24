import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent as ReactMouseEvent, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { works } from '../data/sceneScore'

gsap.registerPlugin(ScrollTrigger)

const homeWorkCards = works.slice(1, 5)
const homeWorkCarouselCards = [...homeWorkCards, ...homeWorkCards, ...homeWorkCards]

const HOME_VIDEO_TIME_KEY = 'scene-score-home-video-time'
type HomeVideoStore = { time: number }

const homeVideoStore = ((globalThis as typeof globalThis & {
  __sceneScoreHomeVideoStore?: HomeVideoStore
}).__sceneScoreHomeVideoStore ??= { time: 0 })

const readHomeVideoTime = () => {
  if (homeVideoStore.time > 0) return homeVideoStore.time

  let storedTime = 0
  try {
    storedTime = Number(window.sessionStorage?.getItem(HOME_VIDEO_TIME_KEY))
  } catch {
    storedTime = 0
  }
  return Number.isFinite(storedTime) && storedTime > 0 ? storedTime : homeVideoStore.time
}

const writeHomeVideoTime = (time: number) => {
  homeVideoStore.time = time
  try {
    window.sessionStorage?.setItem(HOME_VIDEO_TIME_KEY, String(time))
  } catch {
    // The module-level value still covers normal SPA route changes if storage is unavailable.
  }
}

const Reveal = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-10% 0px' }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

const AmbientVideo = ({ src, className }: { src: string; className: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let isIntersecting = false

    const syncPlayback = () => {
      if (isIntersecting && document.visibilityState === 'visible') {
        // Keep below-the-fold videos out of the initial network critical path.
        video.preload = 'metadata'
        void video.play().catch(() => {})
      } else {
        video.pause()
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting
      syncPlayback()
    }, { rootMargin: '160px' })

    observer.observe(video)
    document.addEventListener('visibilitychange', syncPlayback)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', syncPlayback)
      video.pause()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    />
  )
}

const HoverPreviewVideo = ({ src, className, isActive }: { src: string; className: string; isActive: boolean }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let isIntersecting = false

    const syncPlayback = () => {
      if (isActive && isIntersecting && document.visibilityState === 'visible') {
        void video.play().catch(() => {})
      } else {
        video.pause()
      }
    }

    const observer = typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver(([entry]) => {
          isIntersecting = entry.isIntersecting && entry.intersectionRatio >= 0.5
          syncPlayback()
        }, { threshold: [0, 0.5] })

    observer?.observe(video)
    syncPlayback()
    document.addEventListener('visibilitychange', syncPlayback)
    return () => {
      observer?.disconnect()
      document.removeEventListener('visibilitychange', syncPlayback)
      video.pause()
    }
  }, [isActive])

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      draggable={false}
      aria-hidden="true"
    />
  )
}

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const homeWorksTrackRef = useRef<HTMLDivElement>(null)
  const homeWorksDragRef = useRef({ pointerId: -1, startX: 0, startScroll: 0, moved: false })
  const homeWorksMetricsRef = useRef({ step: 0, groupWidth: 0 })
  const homeWorksProgrammaticRef = useRef({ active: false, timer: 0 })
  const suppressHomeWorkClickRef = useRef(false)
  const [heroVideoReady, setHeroVideoReady] = useState(false)
  const [activeHomeWork, setActiveHomeWork] = useState<string | null>(null)
  const [homeWorksDragging, setHomeWorksDragging] = useState(false)
  const { i18n } = useTranslation()
  const isTraditional = i18n.resolvedLanguage === 'zh-TW'
  const heroRankingLabel = isTraditional ? '流行榜' : 'LEADERBOARD'
  const heroCopy = isTraditional
    ? {
        titleLines: ['權威評審', '定義AI影像新標竿'],
        description: 'Scene Score AI 以專業評審、透明標準與全球視野，發掘最具突破性的 AI 漫劇與短劇，讓真正代表未來的作品，被世界看見',
      }
    : {
        titleLines: ['The Leaderboard', "for AI's Best", 'Storytellers'],
        description: "Judged by the researchers building tomorrow's AI and the artists shaping today's industry — SceneScore finds the AI manga and short dramas worth watching, before anyone else does.",
      }
  const featuredCopy = isTraditional
    ? {
        heading: '入圍作品集錦',
        description: '每一部入圍作品，都經過評審團隊嚴謹、獨立且多維度的專業評估。評審從故事表達、視覺呈現、創意創新、技術完成度及整體感染力等方面進行綜合考量，最終遴選出兼具品質與潛力的優秀作品。這不僅是一場精彩內容的集中呈現，更是對創作者專業能力與探索精神的肯定。',
        details: '查看作品詳情',
      }
    : {
        heading: 'Official Selection Showcase',
        description: 'Every selected work has undergone a rigorous, independent and multidimensional professional evaluation by the jury. The jury considers storytelling, visual presentation, creative innovation, technical execution and overall emotional impact, ultimately selecting outstanding works with both quality and potential. More than a showcase of compelling content, this selection recognizes the creators’ professional ability and spirit of exploration.',
        details: 'VIEW WORK DETAILS',
      }

  const sectionCopy = isTraditional
    ? {
        worksAria: 'Scene Score 入圍優秀作品輪播',
        highlightAria: 'Scene Score 入圍作品集錦',
        highlight: 'HIGHLIGHT',
        director: '導演',
        viewWork: '查看作品',
        worksTitle: '入圍優秀作品',
        rankingAria: '查看全部入圍作品',
        viewRanking: '查看全部入圍作品',
        howTitle: '透明始於設計',
        howSoul: '具體落實於實踐',
        howDescription: 'Scene Score 將在正式排名發布前公開評分維度、權重與異常處理方式',
        readMethod: '閱讀評分方式',
        howItems: ['評分維度', '權重配置', '評審規程'],
        pending: '待確認',
      }
    : {
        worksAria: 'Scene Score official selection highlights carousel',
        highlightAria: 'Scene Score official selection showcase',
        highlight: 'HIGHLIGHT',
        director: 'DIRECTOR',
        viewWork: 'VIEW WORK',
        worksTitle: 'Official Selection Highlights',
        rankingAria: 'View the Official Selection',
        viewRanking: 'VIEW THE OFFICIAL SELECTION',
        howTitle: 'Transparent by design',
        howSoul: 'Specific by practice',
        howDescription: 'Scene Score will publish its scoring dimensions, weights and anomaly handling before formal rankings go live.',
        readMethod: 'READ THE METHOD',
        howItems: ['Dimensions', 'Weighting', 'Jury protocol'],
        pending: 'Pending confirmation',
      }

  const measureHomeWorks = () => {
    const track = homeWorksTrackRef.current
    if (!track) return homeWorksMetricsRef.current

    const cards = Array.from(track.querySelectorAll<HTMLElement>('.home-work-card-shell'))
    const firstCard = cards[0]
    const secondCard = cards[1]
    const middleGroupFirstCard = cards[homeWorkCards.length]
    if (!firstCard || !secondCard || !middleGroupFirstCard) return homeWorksMetricsRef.current

    homeWorksMetricsRef.current = {
      step: secondCard.offsetLeft - firstCard.offsetLeft,
      groupWidth: (secondCard.offsetLeft - firstCard.offsetLeft) * homeWorkCards.length,
    }
    return homeWorksMetricsRef.current
  }

  const normalizeHomeWorksTarget = (target: number) => {
    const { groupWidth } = homeWorksMetricsRef.current
    if (!groupWidth) return target

    const lowerBound = groupWidth * 0.5
    const upperBound = groupWidth * 1.5
    let normalizedTarget = target
    while (normalizedTarget < lowerBound) normalizedTarget += groupWidth
    while (normalizedTarget > upperBound) normalizedTarget -= groupWidth
    return normalizedTarget
  }

  const prepareHomeWorksTarget = (track: HTMLDivElement, target: number, groupWidth: number) => {
    const lowerBound = groupWidth * 0.5
    const upperBound = groupWidth * 1.5

    if (target < lowerBound) {
      track.scrollTo({ left: track.scrollLeft + groupWidth, behavior: 'auto' })
      return target + groupWidth
    }

    if (target > upperBound) {
      track.scrollTo({ left: track.scrollLeft - groupWidth, behavior: 'auto' })
      return target - groupWidth
    }

    return target
  }

  const normalizeHomeWorksScroll = () => {
    const track = homeWorksTrackRef.current
    if (!track) return

    const metrics = homeWorksMetricsRef.current.step ? homeWorksMetricsRef.current : measureHomeWorks()
    if (!metrics.groupWidth) return

    const normalizedScroll = normalizeHomeWorksTarget(track.scrollLeft)
    if (Math.abs(normalizedScroll - track.scrollLeft) > 0.5) {
      track.scrollTo({ left: normalizedScroll, behavior: 'auto' })
    }
  }

  const scrollHomeWorksTo = (track: HTMLDivElement, target: number, behavior: ScrollBehavior) => {
    const programmatic = homeWorksProgrammaticRef.current
    if (programmatic.timer) window.clearTimeout(programmatic.timer)

    programmatic.active = behavior === 'smooth'
    track.scrollTo({ left: target, behavior })

    if (!programmatic.active) {
      programmatic.timer = 0
      return
    }

    // Native smooth scrolling emits several scroll events. Keep those events
    // from wrapping the track mid-animation, then normalize once it settles.
    programmatic.timer = window.setTimeout(() => {
      programmatic.active = false
      programmatic.timer = 0
      normalizeHomeWorksScroll()
    }, 700)
  }

  const snapHomeWorks = () => {
    const track = homeWorksTrackRef.current
    const metrics = homeWorksMetricsRef.current.step ? homeWorksMetricsRef.current : measureHomeWorks()
    if (!track || !metrics.step) return

    const rawTarget = Math.round(track.scrollLeft / metrics.step) * metrics.step
    const target = prepareHomeWorksTarget(track, rawTarget, metrics.groupWidth)
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    scrollHomeWorksTo(track, target, behavior)
  }

  const handleHomeWorksPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return

    const track = event.currentTarget
    homeWorksDragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScroll: track.scrollLeft,
      moved: false,
    }
    setActiveHomeWork(null)
    setHomeWorksDragging(false)
    track.setPointerCapture(event.pointerId)
  }

  const handleHomeWorksPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = homeWorksDragRef.current
    if (drag.pointerId !== event.pointerId) return

    const distance = event.clientX - drag.startX
    if (!drag.moved && Math.abs(distance) > 7) {
      drag.moved = true
      setHomeWorksDragging(true)
    }
    if (!drag.moved) return

    event.preventDefault()
    event.currentTarget.scrollTo({ left: drag.startScroll - distance, behavior: 'auto' })
    normalizeHomeWorksScroll()
  }

  const finishHomeWorksDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = homeWorksDragRef.current
    if (drag.pointerId !== event.pointerId) return

    const wasMoved = drag.moved
    homeWorksDragRef.current.pointerId = -1
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    if (wasMoved) {
      suppressHomeWorkClickRef.current = true
      window.setTimeout(() => {
        suppressHomeWorkClickRef.current = false
      }, 0)
    }
    setHomeWorksDragging(false)
    snapHomeWorks()
  }

  const handleHomeWorkClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (!suppressHomeWorkClickRef.current) return
    event.preventDefault()
    event.stopPropagation()
    suppressHomeWorkClickRef.current = false
  }

  const scrollHomeWorks = (direction: -1 | 1) => {
    const track = homeWorksTrackRef.current
    const metrics = homeWorksMetricsRef.current.step ? homeWorksMetricsRef.current : measureHomeWorks()
    if (!track || !metrics.step) return

    normalizeHomeWorksScroll()
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    const rawTarget = track.scrollLeft + direction * metrics.step
    const target = prepareHomeWorksTarget(track, rawTarget, metrics.groupWidth)
    scrollHomeWorksTo(track, target, behavior)
  }

  useLayoutEffect(() => {
    const track = homeWorksTrackRef.current
    if (!track) return
    const programmatic = homeWorksProgrammaticRef.current

    const initialize = () => {
      measureHomeWorks()
      if (homeWorksMetricsRef.current.groupWidth) {
        track.scrollTo({ left: homeWorksMetricsRef.current.groupWidth, behavior: 'auto' })
      }
    }
    // Browsers can restore an overflow container's previous scroll position
    // after the first paint. Re-apply the middle copy after that restoration
    // so the carousel always opens on TOP2 without a visible jump.
    const frame = window.requestAnimationFrame(() => {
      initialize()
      window.requestAnimationFrame(initialize)
    })
    const delayedInitialization = window.setTimeout(initialize, 80)
    const handleResize = () => {
      const previousStep = homeWorksMetricsRef.current.step
      const previousIndex = previousStep
        ? Math.round(track.scrollLeft / previousStep) % homeWorkCards.length
        : 0
      measureHomeWorks()
      if (homeWorksMetricsRef.current.step) {
        const normalizedIndex = (previousIndex + homeWorkCards.length) % homeWorkCards.length
        track.scrollTo({
          left: homeWorksMetricsRef.current.groupWidth + normalizedIndex * homeWorksMetricsRef.current.step,
          behavior: 'auto',
        })
      }
    }

    window.addEventListener('resize', handleResize)
    const layoutObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(() => {
      const previousStep = homeWorksMetricsRef.current.step
      const previousGroupWidth = homeWorksMetricsRef.current.groupWidth
      const nextMetrics = measureHomeWorks()
      const layoutChanged = !previousStep
        || Math.abs(nextMetrics.step - previousStep) > 0.5
        || Math.abs(nextMetrics.groupWidth - previousGroupWidth) > 0.5
      if (layoutChanged && nextMetrics.groupWidth) {
        track.scrollTo({ left: nextMetrics.groupWidth, behavior: 'auto' })
      }
    })
    layoutObserver?.observe(track)
    track.querySelectorAll<HTMLElement>('.home-work-card-shell').forEach(card => layoutObserver?.observe(card))
    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(delayedInitialization)
      window.removeEventListener('resize', handleResize)
      layoutObserver?.disconnect()
      if (programmatic.timer) {
        window.clearTimeout(programmatic.timer)
      }
      programmatic.active = false
      programmatic.timer = 0
    }
  }, [])

  useLayoutEffect(() => {
    const video = videoRef.current
    const routeStage = pageRef.current?.closest<HTMLElement>('.route-transition-stage')

    if (!video || !routeStage) return

    let lastPersistedTime = -1
    const markVideoReady = () => setHeroVideoReady(true)

    if (video.readyState >= 2) markVideoReady()
    video.addEventListener('loadeddata', markVideoReady)

    const restoreVideoTime = () => {
      const savedTime = readHomeVideoTime()
      if (!Number.isFinite(savedTime) || savedTime <= 0) return
      const safeTime = Number.isFinite(video.duration) && video.duration > 0
        ? Math.min(savedTime, Math.max(0, video.duration - 0.05))
        : savedTime
      video.currentTime = safeTime
    }

    const saveAndPauseVideo = () => {
      persistVideoTime(true)
      video.pause()
    }

    const persistVideoTime = (force = false) => {
      if (!Number.isFinite(video.currentTime) || video.currentTime <= 0) return
      if (!force && Math.abs(video.currentTime - lastPersistedTime) < 0.25) return
      lastPersistedTime = video.currentTime
      writeHomeVideoTime(video.currentTime)
    }

    const persistVideoTimeOnEvent = () => persistVideoTime()

    const handleRouteChange = (event: Event) => {
      const pathname = (event as CustomEvent<{ pathname?: string }>).detail?.pathname
      if (pathname && pathname !== '/') saveAndPauseVideo()
    }

    window.addEventListener('scene-score-route-change', handleRouteChange)
    video.addEventListener('timeupdate', persistVideoTimeOnEvent)
    video.addEventListener('pause', persistVideoTimeOnEvent)

    const startVideo = () => {
      restoreVideoTime()
      void video.play().catch(() => {
        // Autoplay can still be blocked by a browser policy. The hero remains
        // usable with its fallback background in that case.
      })
    }

    const playVideo = () => {
      if (video.readyState >= 1) startVideo()
      else video.addEventListener('loadedmetadata', startVideo, { once: true })
    }

    if (routeStage.dataset.routeReady === 'false') {
      // Wait until the paper transition is complete before starting the large
      // hero video. This prevents a hitch when returning to Home.
      video.pause()
      const handleRouteReady = () => requestAnimationFrame(playVideo)
      routeStage.addEventListener('route-transition-complete', handleRouteReady, { once: true })

      return () => {
        routeStage.removeEventListener('route-transition-complete', handleRouteReady)
        video.removeEventListener('loadedmetadata', startVideo)
        video.removeEventListener('loadeddata', markVideoReady)
        video.removeEventListener('timeupdate', persistVideoTimeOnEvent)
        video.removeEventListener('pause', persistVideoTimeOnEvent)
        window.removeEventListener('scene-score-route-change', handleRouteChange)
        saveAndPauseVideo()
      }
    }

    playVideo()
    return () => {
      video.removeEventListener('loadedmetadata', startVideo)
      video.removeEventListener('loadeddata', markVideoReady)
      video.removeEventListener('timeupdate', persistVideoTimeOnEvent)
      video.removeEventListener('pause', persistVideoTimeOnEvent)
      window.removeEventListener('scene-score-route-change', handleRouteChange)
      saveAndPauseVideo()
    }
  }, [])

  useGSAP((_, contextSafe) => {
    let initialized = false
    let heroTimeline: gsap.core.Timeline | undefined
    let removeLoadListener: (() => void) | undefined
    let routeFallbackTimer = 0
    let settledRefreshTimer = 0
    let routeReadyRefreshFrame = 0
    let routeReadyRefreshTimer = 0

    const refreshAfterRouteSettles = () => {
      window.cancelAnimationFrame(routeReadyRefreshFrame)
      window.clearTimeout(routeReadyRefreshTimer)
      routeReadyRefreshFrame = window.requestAnimationFrame(() => {
        ScrollTrigger.refresh()
        routeReadyRefreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 240)
      })
    }

    const initializeHomeScroll = () => {
      if (initialized) return

      const hero = pageRef.current?.querySelector<HTMLElement>('.home-hero--immersive')
      const curtain = hero?.querySelector<HTMLElement>('.hero-curtain')
      const header = document.querySelector<HTMLElement>('.site-header')

      if (!hero || !curtain) return
      initialized = true

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ScrollTrigger.getById('home-curtain-scroll')?.kill(true)
      gsap.set(curtain, { xPercent: 0, yPercent: 0, rotation: 0, autoAlpha: 1 })
      heroTimeline = gsap.timeline({
        scrollTrigger: {
          id: 'home-curtain-scroll',
          trigger: hero,
          start: 'top top',
          end: () => '+=' + Math.round(window.innerHeight),
          scrub: true,
          pin: true,
          // The route sheet's completed transform is removed before this
          // trigger starts, so the hero can stay fixed to the viewport.
          pinType: 'fixed',
          pinSpacing: true,
          anticipatePin: 0,
          invalidateOnRefresh: true,
          refreshPriority: -10,
          onUpdate: (self) => {
            if (header) header.classList.toggle('site-header--on-dark', self.progress < 0.94)
          },
        },
      })

      // Keep the opening sheet in control first. The video remains untouched
      // while the orange sheet exits, then continues with the page's natural
      // scroll after the pinned hero releases.
      heroTimeline
        .to(
          curtain,
          {
            duration: 0.9,
            xPercent: -108,
            yPercent: -108,
            rotation: reduceMotion ? 0 : -3,
            ease: 'none',
            force3D: true,
          },
          0,
        )
        .to(
          curtain,
          {
            duration: 0.1,
            autoAlpha: 0,
            ease: 'none',
          },
          0.9,
        )

      pageRef.current?.querySelectorAll<HTMLElement>('.home-section').forEach((section) => {
        gsap.fromTo(
          section,
          { y: 16, scale: 0.998, opacity: 0.96 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 86%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })

      ScrollTrigger.refresh()
      const refresh = () => ScrollTrigger.refresh()
      const refreshFrame = window.requestAnimationFrame(refresh)
      settledRefreshTimer = window.setTimeout(refresh, 240)
      window.addEventListener('load', refresh, { once: true })
      removeLoadListener = () => {
        window.cancelAnimationFrame(refreshFrame)
        window.clearTimeout(settledRefreshTimer)
        window.removeEventListener('load', refresh)
      }
    }

    const cleanupHomeScroll = () => {
      window.clearTimeout(routeFallbackTimer)
      window.cancelAnimationFrame(routeReadyRefreshFrame)
      window.clearTimeout(routeReadyRefreshTimer)
      removeLoadListener?.()
      heroTimeline?.scrollTrigger?.kill(true)
      heroTimeline?.kill()
      heroTimeline = undefined
      if (initialized) document.querySelector<HTMLElement>('.site-header')?.classList.remove('site-header--on-dark')
    }

    const safeInitializeHomeScroll = contextSafe ? contextSafe(initializeHomeScroll) : initializeHomeScroll

    const routeStage = pageRef.current?.closest<HTMLElement>('.route-transition-stage')
    if (routeStage?.dataset.routeReady === 'false') {
      const handleRouteReady = () => {
        window.clearTimeout(routeFallbackTimer)
        const initializedBeforeRouteReady = initialized
        safeInitializeHomeScroll()
        if (initializedBeforeRouteReady) refreshAfterRouteSettles()
      }
      routeStage.addEventListener('route-transition-complete', handleRouteReady, { once: true })
      routeFallbackTimer = window.setTimeout(safeInitializeHomeScroll, 1500)
      return () => {
        routeStage.removeEventListener('route-transition-complete', handleRouteReady)
        cleanupHomeScroll()
      }
    }

    safeInitializeHomeScroll()
    return cleanupHomeScroll
  }, { scope: pageRef })

  return (
    <div className="home-page home-page--immersive" ref={pageRef} lang={isTraditional ? 'zh-Hant' : 'en'}>
      <section className="home-hero home-hero--immersive">
        <div className="home-hero__media">
          <div className="home-hero__media-fallback" aria-hidden="true" />
          <video
            ref={videoRef}
            className={`home-hero__video${heroVideoReady ? ' is-ready' : ''}`}
            src="/media/scene-score-home.webm"
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Abstract art motion background"
          />
          <div className="hero-media-vignette" aria-hidden="true" />

          <div className="home-hero__content home-hero__copy home-brand-statement" lang={isTraditional ? 'zh-Hant' : 'en'}>
            <h1>
              {heroCopy.titleLines.map((line) => <span key={line}>{line}</span>)}
            </h1>
            <p>{heroCopy.description}</p>
          </div>
        </div>

        <div className="hero-curtain">
          <div className="hero-curtain__texture" aria-hidden="true" />
          <div className="hero-title-lockup" aria-hidden="true">
            <div className="hero-wordmark" aria-label="Scene Score AI">
              <span className="hero-wordmark__scene">SCENE</span>
              <span className="hero-score-lockup">
                <span className="hero-wordmark__score">SCORE</span>
                <span className="hero-wordmark__ai">AI</span>
                <span className="hero-leaderboard" aria-label={heroRankingLabel}>
                  {isTraditional
                    ? Array.from(heroRankingLabel).map((character, index) => (
                        <span className="hero-leaderboard__character" key={`${character}-${index}`}>{character}</span>
                      ))
                    : heroRankingLabel}
                </span>
              </span>
            </div>
          </div>
          <span className="hero-curtain__rec" aria-hidden="true"><i /> REC</span>
        </div>

        <button
          className="home-next-cue"
          type="button"
          aria-label={isTraditional ? '前往下一段內容' : 'Scroll to next section'}
          onClick={() => {
            const nextSection = pageRef.current?.querySelector<HTMLElement>('#home-highlight')
            nextSection?.scrollIntoView({
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
              block: 'start',
            })
          }}
        >
          <span className="home-next-cue__chevron" aria-hidden="true" />
          <span className="home-next-cue__chevron" aria-hidden="true" />
        </button>
      </section>

      <section id="home-highlight" className="home-section home-highlight" aria-label={sectionCopy.highlightAria}>
        <div className="home-highlight__feature">
          <Reveal className="home-highlight__media">
            <Link to={'/series/' + works[0].id} aria-label={`${sectionCopy.viewWork}: ${works[0].title}`}>
              <AmbientVideo src={works[0].video} className="home-highlight__video" />
            </Link>
          </Reveal>

          <Reveal className="home-highlight__info">
            <h2 className="home-highlight__showcase-title">{featuredCopy.heading}</h2>
            <div className="home-highlight__meta">
              <span>{sectionCopy.director} / {works[0].director}</span>
            </div>
            <p className="home-highlight__description">{featuredCopy.description}</p>
            <Link className="home-highlight__link" to={'/series/' + works[0].id}>
              <span>{featuredCopy.details}</span><ArrowUpRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="home-ranking" className="home-section home-section--works">
        <div className="home-works__heading">
          <h2>{sectionCopy.worksTitle}</h2>
        </div>

        <div className="home-works__carousel" role="region" aria-label={sectionCopy.worksAria} aria-roledescription="carousel">
          <button className="home-works__control home-works__control--prev" type="button" aria-label={isTraditional ? '向左瀏覽作品' : 'Browse works left'} onClick={() => scrollHomeWorks(-1)}>
            <ArrowLeft aria-hidden="true" />
          </button>
          <div
            ref={homeWorksTrackRef}
            className={`home-works__track${homeWorksDragging ? ' is-dragging' : ''}`}
            onPointerDown={handleHomeWorksPointerDown}
            onPointerMove={handleHomeWorksPointerMove}
            onPointerUp={finishHomeWorksDrag}
            onPointerCancel={finishHomeWorksDrag}
            onLostPointerCapture={finishHomeWorksDrag}
            onScroll={() => {
              if (!homeWorksProgrammaticRef.current.active) normalizeHomeWorksScroll()
            }}
          >
            {homeWorkCarouselCards.map((work, index) => {
              const cardKey = `${work.id}-${index}`

              return (
                <Reveal className="home-work-card-shell" key={cardKey}>
                  <Link
                    to={'/series/' + work.id}
                    className="home-work-card"
                    draggable={false}
                    aria-label={`${sectionCopy.viewWork}: ${work.title}`}
                    onClick={handleHomeWorkClick}
                    onPointerEnter={() => {
                      if (homeWorksDragRef.current.pointerId === -1) setActiveHomeWork(cardKey)
                    }}
                    onPointerLeave={() => setActiveHomeWork(null)}
                    onFocus={() => setActiveHomeWork(cardKey)}
                    onBlur={() => setActiveHomeWork(null)}
                  >
                    <span className="home-work-card__media">
                      <HoverPreviewVideo src={work.video} className="home-work-card__video" isActive={activeHomeWork === cardKey} />
                    </span>
                    <span className="home-work-card__info">
                      <strong>{work.title}</strong>
                      <ArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
          <button className="home-works__control home-works__control--next" type="button" aria-label={isTraditional ? '向右瀏覽作品' : 'Browse works right'} onClick={() => scrollHomeWorks(1)}>
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
        <div className="home-works__footer">
          <Link className="home-works__ranking-link" to="/explore" aria-label={sectionCopy.rankingAria}>
            <span>{sectionCopy.viewRanking}</span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="home-section home-section--how">
        <Reveal className="how-intro">
          <h2>{sectionCopy.howTitle}<br /><em>{sectionCopy.howSoul}</em></h2>
          <p>{sectionCopy.howDescription}</p>
          <Link className="round-arrow-link" to="/methodology"><span>{sectionCopy.readMethod}</span><ArrowUpRight aria-hidden="true" /></Link>
        </Reveal>
        <div className="how-grid">
          {sectionCopy.howItems.map((item, index) => (
            <Reveal className="method-card" key={item}>
              <AmbientVideo src={works[index + 1].video} className="method-card__video" />
              <h3>{item}</h3><p>{sectionCopy.pending}</p>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  )
}
