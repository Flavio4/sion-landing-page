import { useEffect, useState } from 'react'

const STORAGE_KEY = 'sion-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  return localStorage.getItem(STORAGE_KEY) || 'light'
}

// Tema claro por defecto (no sigue la preferencia del sistema); el usuario elige con el toggle y queda guardado.
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
