import { projects } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import './Work.css'

function ProjectCard({ project }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`project-card reveal ${visible ? 'in-view' : ''}`}>
      <span className="project-category">{project.category}</span>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </div>
  )
}

export default function Work() {
  const [headerRef, headerVisible] = useReveal()

  return (
    <>
      <section className="block work-hero">
        <div ref={headerRef} className={`wrap reveal ${headerVisible ? 'in-view' : ''}`}>
          <p className="eyebrow">SELECTED WORK</p>
          <h1>A few projects we've shipped</h1>
          <p className="work-subtext">
            Placeholder case studies — swap these for real client work, screenshots, and results
            once you have them ready.
          </p>
        </div>
      </section>

      <section className="block">
        <div className="wrap project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}
