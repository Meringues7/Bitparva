import { story, team, whyUs } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import './About.css'

function TeamCard({ member }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`team-card reveal ${visible ? 'in-view' : ''}`}>
      <div className="team-avatar" aria-hidden="true">
        {member.name
          .split(' ')
          .map((part) => part[0])
          .join('')}
      </div>
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </div>
  )
}

export default function About() {
  const [introRef, introVisible] = useReveal()

  return (
    <>
      <section className="block about-hero">
        <div ref={introRef} className={`wrap reveal ${introVisible ? 'in-view' : ''}`}>
          <p className="eyebrow">{story.eyebrow}</p>
          <h1>{story.heading}</h1>
          {story.paragraphs.map((p, i) => (
            <p key={i} className="about-paragraph">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <p className="eyebrow">THE TEAM</p>
          <div className="team-grid">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="block why">
        <div className="wrap">
          <p className="eyebrow">WHY BITPRAVA</p>
          <div className="why-grid">
            {whyUs.map((item) => (
              <div key={item.number} className="why-item">
                <span className="why-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
