// Fuente única de contenido, extraída de "Sion Landing Page Form.csv".
// Actualizar acá cuando el cliente mande cambios de copy/datos.

export const company = {
  name: 'Sion Desarrollos E.A.S',
  domain: 'siondesarrollospy.com',
  logoUrl: '/images/sion-header-logo.png',
}

export const hero = {
  eyebrow: 'Desarrollo inmobiliario · Paraguay',
  headline: 'Haciendo realidad',
  headlineAccent: 'tus sueños',
  slogan: 'Más que una casa, un legado',
  description:
    'Somos una empresa desarrolladora enfocada en la construcción de viviendas, especialmente casas tipo dúplex y proyectos residenciales. Creamos hogares funcionales, modernos y accesibles, pensados para brindar confort, calidad de vida y una inversión segura.',
  // TODO: reemplazar por la imagen de banner real una vez descargada de Drive a /public/images
  bannerImage: null,
}

export const services = [
  {
    id: 'desarrollo-residencial',
    featured: true,
    title: 'Desarrollo de Proyectos Residenciales',
    description:
      'Planificamos y ejecutamos proyectos habitacionales propios, desde el diseño arquitectónico hasta la entrega final. Somos desarrolladores, no contratistas: cada vivienda que vendemos es un producto propio, terminado y listo para habitar.',
    tags: ['Diseño', 'Construcción', 'Entrega llave en mano'],
  },
  {
    id: 'construccion-residencial',
    featured: false,
    title: 'Construcción Residencial',
    description:
      'Construimos el hogar de tus sueños con los más altos estándares de calidad y atención personalizada a cada detalle.',
  },
  {
    id: 'diseno-arquitectonico',
    featured: false,
    title: 'Diseño Arquitectónico',
    description:
      'Creamos diseños innovadores que combinan estética, funcionalidad y eficiencia energética.',
  },
]

export const stats = {
  // TODO: el formulario dice "6 años" pero "Nuestra Historia" dice "7 años desde 2018" — confirmar con el cliente.
  yearsExperience: 6,
  projectsCompleted: null, // TODO: dato no provisto por el cliente todavía
  clientsSatisfied: null, // TODO: dato no provisto por el cliente todavía
}

export const ourStory = {
  eyebrow: 'Nuestra historia',
  title: 'Comprometidos con la excelencia en cada proyecto',
  intro:
    'Ofrecemos proyectos de alta calidad, con diseño funcional, cumplimiento en los plazos y atención personalizada. Nuestro compromiso es brindar soluciones confiables que superen las expectativas.',
  since: 2018,
  // TODO: imagen de esta sección pendiente de descarga de Drive
  image: null,
  narrative:
    'Desde nuestra fundación en 2018, hemos trabajado con un propósito claro: desarrollar proyectos inmobiliarios que combinen diseño, funcionalidad y compromiso social. A lo largo de estos años, nos consolidamos como una empresa confiable y cercana, que entiende las necesidades reales de las personas y ofrece soluciones habitacionales de alto valor. Cada obra refleja nuestros valores: excelencia en los detalles, confianza en el cumplimiento, innovación constante en nuestros procesos y un firme compromiso con la sustentabilidad.',
  values: [
    { title: 'Calidad Superior', description: 'Utilizamos los mejores materiales y tecnologías de construcción.' },
    { title: 'Entrega a Tiempo', description: 'Cumplimos rigurosamente con los plazos establecidos.' },
    { title: 'Equipo Profesional', description: 'Contamos con especialistas altamente calificados en cada área.' },
    { title: 'Sostenibilidad', description: 'Implementamos prácticas y materiales amigables con el medio ambiente.' },
  ],
}

export const ourProcess = {
  eyebrow: 'Cómo trabajamos',
  title: 'Nuestro proceso, de la idea a las llaves',
  // Reemplaza la sección de testimonios: el cliente no tiene testimonios reales todavía ("incorporar más adelante").
  stages: [
    {
      title: 'Diseño',
      description: 'Planificamos cada proyecto desde el diseño arquitectónico, pensado para el bienestar de las familias.',
    },
    {
      title: 'Construcción',
      description: 'Ejecutamos la obra con estándares de calidad y cumplimiento de plazos.',
    },
    {
      title: 'Entrega llave en mano',
      description: 'Entregamos la vivienda terminada y lista para habitar, sin sorpresas ni trabajo pendiente.',
    },
  ],
}

export const contact = {
  address: 'Parapití esq. Karandayty, Mariano Roque Alonso',
  phone: '0971 920 015',
  email: 'siondesarrollos@gmail.com',
  hours: '24 horas',
  whatsappLink: 'https://wa.me/595971920015',
  social: {
    facebook: 'https://www.facebook.com/share/16dxgx3ADw/',
    tiktok: 'https://www.tiktok.com/@sion.desarrollos?_t=ZM-8ww9LH2n6mL&_r=1',
    instagram: 'https://www.instagram.com/siondesarrollospy?igsh=MWdhZTc3dWoxc3J4eQ==',
  },
}
