import { ourProcess } from '../../content/site'
import styles from './OurProcess.module.css'

export default function OurProcess() {
  return (
    <section className={styles.process}>
      <div className="container">
        <div className={styles.head} data-aos="fade-up">
          <span className="eyebrow">{ourProcess.eyebrow}</span>
          <h2 className="section-title">{ourProcess.title}</h2>
        </div>
        <div className={styles.steps}>
          {ourProcess.stages.map((stage, index) => (
            <div key={stage.title} className={styles.step} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
