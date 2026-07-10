import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import styles from './CTA.module.css'

export default function CTA() {
  const scrollToId = useSmoothScroll()

  return (
    <section className={styles.cta}>
      <div className="container" data-aos="fade-up">
        <h2>¿Listo para construir tu próximo hogar?</h2>
        <p>Contáctanos hoy mismo y sumate a las familias que ya eligieron a Sion Desarrollos.</p>
        <a href="#contacto" className="btn" onClick={scrollToId('contacto')}>
          Solicitar información
        </a>
      </div>
    </section>
  )
}
