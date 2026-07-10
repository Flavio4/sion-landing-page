import { services } from '../../content/site'
import styles from './Services.module.css'

const ICONS = {
  'desarrollo-residencial': (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  ),
  'construccion-residencial': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  ),
  'diseno-arquitectonico': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 17l4-8 4 5 3-4 4 6" />
      <path d="M3 20h18" />
    </svg>
  ),
}

function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Services() {
  return (
    <section id="servicios" className={styles.services}>
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow">Lo que hacemos</span>
          <h2 className="section-title">Un solo enfoque: viviendas propias, bien hechas</h2>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <article
              key={service.id}
              className={cx(styles.card, service.featured && styles.featured)}
              data-aos="fade-up"
              data-aos-delay={((index % 3) + 1) * 100}
            >
              {service.featured && <span className={styles.ribbon}>Nuestro foco</span>}
              <span className={styles.icon} aria-hidden="true">
                {ICONS[service.id]}
              </span>
              <span className={styles.title}>{service.title}</span>
              <p className={styles.desc}>{service.description}</p>
              {service.tags && (
                <div className={styles.tags}>
                  {service.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
