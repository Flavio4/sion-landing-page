import { contact } from '../../content/site'
import { useScrollEffects } from '../../hooks/useScrollEffects'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import styles from './FloatingButtons.module.css'

function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FloatingButtons() {
  const { showBackToTop } = useScrollEffects()
  const scrollToId = useSmoothScroll()

  return (
    <div className={styles.floating}>
      <button
        type="button"
        className={cx(styles.backToTop, showBackToTop && styles.show)}
        aria-label="Volver arriba"
        onClick={scrollToId('inicio')}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
      <a href={contact.whatsappLink} className={styles.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1s-.7.8-.8 1c-.2.2-.3.2-.5.1a6.6 6.6 0 01-2-1.2 7.4 7.4 0 01-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5s-.6-1.5-.9-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a2.9 2.9 0 00-.9 2.1c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3z" />
        </svg>
      </a>
    </div>
  )
}
