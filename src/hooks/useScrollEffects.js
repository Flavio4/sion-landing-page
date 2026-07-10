import { useEffect, useState } from 'react'

// Header "scrolled" state + visibilidad del botón back-to-top, en un solo listener.
export function useScrollEffects() {
  const [scrolled, setScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
      setShowBackToTop(window.scrollY > 300)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrolled, showBackToTop }
}
