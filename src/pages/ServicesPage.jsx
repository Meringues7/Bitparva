import { Link } from 'react-router-dom'
import { serviceDetails } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import './ServicesPage.css'

function ServiceBlock({ service, index }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`service-block reveal ${visible ? 'in-view' : ''}`}>
      <div className="service-index">{String(index + 1).padStart(2, '0')}</div>
      <div className="service-content">
        <h2>{service.title}</h2>
        <p className="service-description">{service.description}</p>
        <ul className="service-features">
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [headerRef, headerVisible] = useReveal()

  return (
    <>
      <section className="block services-hero">
        <div ref={headerRef} className={`wrap reveal ${headerVisible ? 'in-view' : ''}`}>
          <p className="eyebrow">WHAT WE DO</p>
          <h1>Services built around your actual constraints</h1>
        </div>
      </section>

      <section className="block">
        <div className="wrap service-list">
          {serviceDetails.map((service, index) => (
            <ServiceBlock key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-inner">
          <p>Not sure which service fits?</p>
          <Link className="btn btn-dark" to="/contact">
            Let's talk
          </Link>
        </div>
      </section>
    </>
  )
}
