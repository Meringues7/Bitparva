import { whyUs } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import './WhyUs.css'

function WhyItem({ item }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`why-item reveal ${visible ? 'in-view' : ''}`}>
      <span className="why-number">{item.number}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  )
}

export default function WhyUs() {
  const [titleRef, titleVisible] = useReveal()

  return (
    <section className="block why" id="about">
      <div className="wrap">
        <p ref={titleRef} className={`eyebrow reveal ${titleVisible ? 'in-view' : ''}`}>
          WHY BITPRAVA
        </p>
        <div className="why-grid">
          {whyUs.map((item) => (
            <WhyItem key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
