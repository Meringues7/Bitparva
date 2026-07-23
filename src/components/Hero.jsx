import { Link } from 'react-router-dom'
import { hero } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import './Hero.css'

function ContourBackground() {
  // Decorative topographic contour lines behind the hero copy.
  return (
    <div className="hero-bg" aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice">
        <path d="M-20 420 L180 260 L320 360 L520 160 L700 320 L900 190 L1220 380" stroke="#2F6F5E" strokeWidth="1.4" fill="none" opacity="0.35" />
        <path d="M-20 460 L180 300 L320 400 L520 200 L700 360 L900 230 L1220 420" stroke="#2F6F5E" strokeWidth="1.4" fill="none" opacity="0.25" />
        <path d="M-20 500 L180 340 L320 440 L520 240 L700 400 L900 270 L1220 460" stroke="#2F6F5E" strokeWidth="1.4" fill="none" opacity="0.18" />
        <path d="M-20 380 L180 220 L320 320 L520 120 L700 280 L900 150 L1220 340" stroke="#DF9640" strokeWidth="1.4" fill="none" opacity="0.22" />
      </svg>
    </div>
  )
}

export default function Hero() {
  const [ref, visible] = useReveal()

  return (
    <section className="hero" id="home">
      <ContourBackground />
      <div ref={ref} className={`wrap hero-content reveal ${visible ? 'in-view' : ''}`}>
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>
          {hero.titleStart}
          <em>{hero.titleEmphasis}</em>
          {hero.titleEnd}
        </h1>
        <p className="subtext">{hero.subtext}</p>
        <div className="cta-group">
          <Link className="btn btn-primary" to={hero.primaryCta.to}>
            {hero.primaryCta.label}
          </Link>
          <Link className="btn btn-secondary" to={hero.secondaryCta.to}>
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
