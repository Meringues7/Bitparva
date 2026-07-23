import { Link } from 'react-router-dom'
import { cta } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import './CtaBand.css'

export default function CtaBand() {
  const [ref, visible] = useReveal()

  return (
    <section className="cta-band">
      <div ref={ref} className={`wrap cta-inner reveal ${visible ? 'in-view' : ''}`}>
        <p>{cta.quote}</p>
        <Link className="btn btn-dark" to="/contact">
          {cta.buttonLabel}
        </Link>
      </div>
    </section>
  )
}
