import { hero } from '../../content/site'
import { contact } from '../../content/site'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollToId = useSmoothScroll()

  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow" data-aos="fade-up">
          {hero.eyebrow}
        </span>
        <h1 className={styles.headline} data-aos="fade-up" data-aos-delay="100">
          {hero.headline} <span className={styles.accent}>{hero.headlineAccent}</span>
        </h1>
        <p className={styles.description} data-aos="fade-up" data-aos-delay="200">
          {hero.description}
        </p>
        <div className={styles.actions} data-aos="fade-up" data-aos-delay="300">
          <a href="#proyectos" className="btn btn-primary" onClick={scrollToId('proyectos')}>
            Ver proyectos
          </a>
          <a href={contact.whatsappLink} className="btn btn-secondary" target="_blank" rel="noreferrer">
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
