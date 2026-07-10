import { contact } from '../../content/site'
import WhatsAppCard from './WhatsAppCard'
import styles from './Contact.module.css'

const INFO_ITEMS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: 'Nuestra ubicación',
    value: contact.address,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.2z" />
      </svg>
    ),
    title: 'Llamanos',
    value: contact.phone,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
    title: 'Correo electrónico',
    value: contact.email,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: 'Horario de atención',
    value: contact.hours,
  },
]

const SOCIAL_LINKS = [
  {
    href: contact.social.facebook,
    label: 'Facebook',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 21v-8.5H16l.5-3H13.5V7.5c0-.9.3-1.5 1.6-1.5H16.5V3.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V9.5H8v3h2.3V21z" />
      </svg>
    ),
  },
  {
    href: contact.social.instagram,
    label: 'Instagram',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: contact.social.tiktok,
    label: 'TikTok',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 3a5 5 0 004 4.9V12a8.4 8.4 0 01-5-1.6v6.4a6 6 0 11-6-6c.3 0 .7 0 1 .1v3a3 3 0 103 3V3z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contacto" className={styles.contact}>
      <div className="container">
        <div className="section-head centered" data-aos="fade-up">
          <span className="eyebrow">Ponte en contacto</span>
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-description">Estamos listos para escuchar tus ideas y convertirlas en tu próximo hogar</p>
        </div>

        <div className={styles.grid}>
          <div data-aos="fade-right">
            {INFO_ITEMS.map((item) => (
              <div key={item.title} className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
            <div className={styles.social}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <WhatsAppCard />
        </div>
      </div>
    </section>
  )
}
