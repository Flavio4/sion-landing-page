import { useState } from 'react'
import { projectsData } from '../../content/projects'
import ProjectModal from './ProjectModal'
import styles from './Projects.module.css'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const project = projectsData[0]

  return (
    <section id="proyectos" className={styles.projects}>
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">Nuestro portafolio</span>
          <h2 className="section-title">Proyectos que ya estamos construyendo</h2>
        </div>

        <div className={styles.grid}>
          <article className={styles.card} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.imageWrap}>
              {project.image ? (
                <img src={project.image} alt={project.title} loading="lazy" />
              ) : (
                <div className={styles.imagePlaceholder} aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 11l9-7 9 7" />
                    <path d="M5 10v10h14V10" />
                  </svg>
                  <span style={{ fontSize: 12 }}>Imagen pendiente</span>
                </div>
              )}
              <span className={styles.badge}>{project.state}</span>
            </div>
            <div className={styles.body}>
              <h3 className={styles.title}>{project.title}</h3>
              <span className={styles.location}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                {project.location}
              </span>
              <p className={styles.desc}>{project.description}</p>
              <button
                type="button"
                className={`btn btn-primary ${styles.cardAction}`}
                onClick={() => setActiveProject(project)}
              >
                Ver detalles
              </button>
            </div>
          </article>

          <div className={styles.comingSoon} data-aos="fade-up" data-aos-delay="200">
            <span className={styles.icon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
            <h3>Más proyectos en camino</h3>
            <p>Estamos sumando el resto de nuestro portafolio. Muy pronto vas a poder ver más viviendas acá.</p>
          </div>
        </div>
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  )
}
