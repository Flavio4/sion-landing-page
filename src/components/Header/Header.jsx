import { useScrollEffects } from '../../hooks/useScrollEffects'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import styles from './Header.module.css'

const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'nuestra-historia', label: 'Nosotros' },
]

function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const { scrolled } = useScrollEffects()
  const { open, navRef, btnRef, toggle, close } = useMobileMenu()
  const scrollToId = useSmoothScroll()

  function handleNavClick(id) {
    return (e) => {
      scrollToId(id)(e)
      close()
    }
  }

  return (
    <header className={cx(styles.header, scrolled && styles.scrolled)}>
      <div className={cx('container', styles.inner)}>
        <a href="#inicio" className={styles.brand} onClick={handleNavClick('inicio')}>
          <img src="/images/sion-header-logo.png" alt="Sion Desarrollos" className={styles.brandIcon} />
          <span className={styles.brandText}>
            <span className={styles.brandWord}>
              sion<span>.</span>
            </span>
            <span className={styles.brandSub}>DESARROLLOS</span>
          </span>
        </a>

        <nav className={styles.nav}>
          <button
            ref={btnRef}
            className={cx(styles.menuBtn, open && styles.open)}
            aria-label="Menú"
            onClick={toggle}
          >
            <span />
            <span />
            <span />
          </button>
          <ul ref={navRef} className={cx(styles.navLinks, open && styles.open)}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={styles.navLink} onClick={handleNavClick(link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" className={styles.navCta} onClick={handleNavClick('contacto')}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
