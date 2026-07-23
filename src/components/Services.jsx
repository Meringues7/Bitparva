import { Link } from 'react-router-dom'
import { services } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import './Services.css'

// One icon per service, keyed by the service `id` in content.js.
const icons = {
  web: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9H21" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="7" r="0.6" fill="currentColor" />
    </svg>
  ),
  vertical: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4" y="9.75" width="16" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4" y="15.5" width="16" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  integrations: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="7" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 12H14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
}

function ServiceCard({ service }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`card reveal ${visible ? 'in-view' : ''}`}>
      <div className="icon">{icons[service.id]}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  )
}

export default function Services() {
  const [titleRef, titleVisible] = useReveal()

  return (
    <section className="block" id="services">
      <div className="wrap">
        <p ref={titleRef} className={`eyebrow reveal ${titleVisible ? 'in-view' : ''}`}>
          WHAT WE DO
        </p>
        <div className="card-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <Link to="/services" className="see-all-link">
          See all services →
        </Link>
      </div>
    </section>
  )
}
