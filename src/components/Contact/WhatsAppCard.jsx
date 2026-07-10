import { contact } from '../../content/site'
import styles from './WhatsAppCard.module.css'

function toWhatsAppLink(localPhone) {
  const digits = localPhone.replace(/\D/g, '').replace(/^0/, '')
  return `https://wa.me/595${digits}`
}

export default function WhatsAppCard() {
  return (
    <div className={styles.card} data-aos="fade-left">
      <div className={styles.header}>
        <span className={styles.icon} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1s-.7.8-.8 1c-.2.2-.3.2-.5.1a6.6 6.6 0 01-2-1.2 7.4 7.4 0 01-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5s-.6-1.5-.9-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a2.9 2.9 0 00-.9 2.1c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3z" />
          </svg>
        </span>
        <h3>Contacto directo vía WhatsApp</h3>
      </div>
      <p className={styles.desc}>
        Escribinos directamente y recibí atención personalizada al instante para consultas, proyectos o cotizaciones.
      </p>
      <a href={contact.whatsappLink} className={styles.mainBtn} target="_blank" rel="noreferrer">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1s-.7.8-.8 1c-.2.2-.3.2-.5.1a6.6 6.6 0 01-2-1.2 7.4 7.4 0 01-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5s-.6-1.5-.9-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a2.9 2.9 0 00-.9 2.1c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3z" />
        </svg>
        Escribinos por WhatsApp
      </a>
      <div className={styles.contacts}>
        {contact.whatsappContacts.map((person) => (
          <div key={person.name} className={styles.contactRow}>
            <span>{person.name}</span>
            <a href={toWhatsAppLink(person.phone)} target="_blank" rel="noreferrer">
              {person.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
