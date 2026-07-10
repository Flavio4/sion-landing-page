import { company, contact, services } from '../../content/site'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import styles from './Footer.module.css'

const QUICK_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'nuestra-historia', label: 'Nosotros' },
  { id: 'contacto', label: 'Contacto' },
]

export default function Footer() {
  const scrollToId = useSmoothScroll()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.brand}>
              <span className={styles.brandWord}>
                sion<span>.</span>
              </span>
              <span className={styles.brandSub}>DESARROLLOS</span>
            </div>
            <p className={styles.blurb}>
              {company.name} — desarrollamos y entregamos proyectos residenciales propios, llave en mano, pensados
              para que tu familia crezca con confianza.
            </p>
          </div>

          <div>
            <h3 className={styles.colTitle}>Enlaces rápidos</h3>
            <ul className={styles.linkList}>
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={scrollToId(link.id)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Servicios</h3>
            <ul className={styles.linkList}>
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#servicios" onClick={scrollToId('servicios')}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Contacto</h3>
            <div className={styles.contactList}>
              <p>{contact.address}</p>
              <p>Tel: {contact.phone}</p>
              <p>{contact.email}</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {year} {company.name}. Todos los derechos reservados.
          </span>
          <span>{company.domain}</span>
        </div>
      </div>
    </footer>
  )
}
