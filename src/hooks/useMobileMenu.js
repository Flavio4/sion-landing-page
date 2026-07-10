import { useEffect, useRef, useState } from 'react'

// Estado del menú móvil + cierre al hacer click afuera o al elegir un link.
export function useMobileMenu() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    function onDocumentClick(e) {
      if (!open) return
      const nav = navRef.current
      const btn = btnRef.current
      if (nav && !nav.contains(e.target) && btn && !btn.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onDocumentClick)
    return () => document.removeEventListener('click', onDocumentClick)
  }, [open])

  return {
    open,
    navRef,
    btnRef,
    toggle: (e) => {
      e.stopPropagation()
      setOpen((prev) => !prev)
    },
    close: () => setOpen(false),
  }
}
