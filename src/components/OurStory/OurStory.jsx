import { ourStory, stats } from '../../content/site'
import styles from './OurStory.module.css'

const VALUE_ICONS = {
  'Calidad Superior': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5L7 21l5-3 5 3-1.5-8.5" />
    </svg>
  ),
  'Entrega a Tiempo': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  'Equipo Profesional': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6" />
      <path d="M16 8a3 3 0 110 6" />
      <path d="M17 14c3 0 5 2.5 5 6" />
    </svg>
  ),
  Sostenibilidad: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21c-4-1-7-4.5-7-9 0-3.5 2.5-7 7-9 4.5 2 7 5.5 7 9 0 4.5-3 8-7 9z" />
      <path d="M12 21v-8" />
    </svg>
  ),
}

export default function OurStory() {
  return (
    <section id="nuestra-historia" className={styles.story}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol} data-aos="fade-right">
          <div className={styles.imageFrame}>
            {ourStory.image ? (
              <img src={ourStory.image} alt="Equipo Sion Desarrollos" loading="lazy" />
            ) : (
              <div className={styles.imagePlaceholder} aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 11l9-7 9 7" />
                  <path d="M5 10v10h14V10" />
                </svg>
              </div>
            )}
          </div>
          <div className={styles.badge}>
            <strong>{stats.yearsExperience}+</strong>
            <span>
              Años de
              <br />
              experiencia
            </span>
          </div>
        </div>

        <div className={styles.content} data-aos="fade-left">
          <span className="eyebrow">{ourStory.eyebrow}</span>
          <h2 className="section-title">{ourStory.title}</h2>
          <p className={styles.intro}>{ourStory.intro}</p>
          <p className={styles.narrative}>{ourStory.narrative}</p>

          <div className={styles.values}>
            {ourStory.values.map((value) => (
              <div key={value.title} className={styles.value}>
                <span className={styles.valueIcon} aria-hidden="true">
                  {VALUE_ICONS[value.title]}
                </span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
