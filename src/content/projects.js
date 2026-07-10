// Datos de proyectos destacados.
// El cliente solo mandó 1 imagen de proyecto en el formulario, sin nombre/ubicación/año/features.
// TODO: pedir al cliente el detalle real de este proyecto (y de más proyectos) para reemplazar los placeholders.

export const ProjectState = Object.freeze({
  ON_SALE: 'en venta',
  SOLD: 'vendido',
  UNDER_CONSTRUCTION: 'en construcción',
  COMING_SOON: 'próximamente',
})

export const projectsData = [
  {
    id: 1,
    state: ProjectState.COMING_SOON,
    title: 'Proyecto residencial Sion',
    // TODO: reemplazar por la imagen real del cliente una vez descargada de Drive a /public/images
    image: null,
    location: 'Mariano Roque Alonso, Paraguay',
    description: 'Detalle del proyecto pendiente de confirmación con el cliente.',
    gallery: [],
    features: [],
  },
]
