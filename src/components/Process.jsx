import { process } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import './Process.css'

// One marker icon per step, in the same order as the `process` array.
const markers = [
  <svg key="scope" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M4 18L9 8L13 14L16 10L20 18H4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>,
  <svg key="build" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M6 6H18V18H6V6Z" stroke="currentColor" strokeWidth="1.6" />
    <path d="M6 12H18" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
  <svg key="ship" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>,
  <svg key="support" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M6 20V6M6 6L14 8L6 12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>,
]

function Waypoint({ step, index }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`waypoint reveal ${visible ? 'in-view' : ''}`}>
      <div className="marker">{markers[index]}</div>
      <div className="label">{step.label}</div>
      <h4>{step.title}</h4>
      <p>{step.tagline}</p>
    </div>
  )
}

export default function Process() {
  const [titleRef, titleVisible] = useReveal()

  return (
    <section className="block" id="work">
      <div className="wrap">
        <p ref={titleRef} className={`eyebrow reveal ${titleVisible ? 'in-view' : ''}`}>
          PROCESS TEASER
        </p>
        <div className="trail">
          <div className="trail-line" aria-hidden="true" />
          {process.map((step, index) => (
            <Waypoint key={step.step} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
