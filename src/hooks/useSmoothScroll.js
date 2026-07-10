const HEADER_OFFSET = 80

// Scroll suave hacia una sección interna, descontando la altura del header fijo.
export function useSmoothScroll() {
  return function scrollToId(id) {
    return (e) => {
      e?.preventDefault?.()
      const target = document.getElementById(id)
      if (!target) return
      window.scrollTo({
        top: target.offsetTop - HEADER_OFFSET,
        behavior: 'smooth',
      })
    }
  }
}
