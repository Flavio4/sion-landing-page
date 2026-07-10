import { useEffect } from 'react'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import styles from './ProjectModal.module.css'

export default function ProjectModal({ project, onClose }) {
  const scrollToId = useSmoothScroll()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  function handleConsult(e) {
    onClose()
    setTimeout(() => scrollToId('contacto')(e), 300)
  }

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className={styles.modal}>
        <button type="button" className={styles.closeBtn} aria-label="Cerrar" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div className={styles.body}>
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              {project.image ? (
                <img src={project.image} alt={project.title} loading="lazy" />
              ) : (
                <div className={styles.placeholderImg} aria-hidden="true">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M3 11l9-7 9 7" />
                    <path d="M5 10v10h14V10" />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className={styles.info}>
            <span className={styles.state}>{project.state}</span>
            <h2>{project.title}</h2>
            <div className={styles.detail}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              {project.location}
            </div>
            <p className={styles.desc}>{project.description}</p>
            {project.features?.length > 0 && (
              <div className={styles.features}>
                <h3>Características</h3>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <button type="button" className="btn btn-primary" onClick={handleConsult}>
              Consultar sobre este proyecto
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
