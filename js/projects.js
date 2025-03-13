const ProjectState = Object.freeze({
  ON_SALE: "en venta",
  SOLD: "vendido",
  UNDER_CONSTRUCTION: "en construccion",
});

// Datos de proyectos
const projectsData = [
  {
    id: 1,
    state: ProjectState.ON_SALE,
    title: "Residencia Valle Verde",
    description:
      "Casa moderna de lujo con amplios espacios, jardín, piscina y acabados de primera calidad.",
    image: "images/projects/1/project_1_1.webp",
    location: "Valle Verde, Sector Exclusivo",
    year: "2024",
    area: "450 m²",
    features: [
      "4 habitaciones con baño privado",
      "Cocina gourmet con isla central",
      "Piscina con terraza y área de barbacoa",
      "Sistema domótico integrado",
      "Jardín paisajístico con sistema de riego automatizado"
    ],
    gallery: [
      "images/projects/1/project_1_1.webp",
      "images/projects/1/project_1_1.webp",
      "images/projects/1/project_1_1.webp",
    ],
    fullDescription:
      "Residencia Valle Verde es una espectacular casa de lujo diseñada para quienes buscan exclusividad y confort. Ubicada en una de las zonas más prestigiosas de la ciudad, esta propiedad de 450m² combina elegancia arquitectónica y funcionalidad. La planta baja ofrece amplios espacios sociales con ventanales de piso a techo que integran el interior con el jardín y la piscina. La cocina gourmet cuenta con electrodomésticos de alta gama e isla central. En la planta alta, la suite principal incluye vestidor y baño tipo spa. El sistema domótico permite controlar iluminación, clima, seguridad y entretenimiento desde una aplicación móvil. Los acabados de mármol, madera de nogal y cristal templado reflejan la calidad superior que caracteriza nuestras construcciones.",
  },
  {
    id: 2,
    state: ProjectState.SOLD,
    title: "Casa Familiar Los Pinos",
    description:
      "Acogedora residencia familiar con espacios versátiles, perfecta para familias jóvenes.",
    image: "images/projects/2/project_2_1.webp",
    location: "Urbanización Los Pinos",
    year: "2023",
    area: "280 m²",
    features: [
      "3 habitaciones y 2.5 baños",
      "Sala de estar y comedor integrados",
      "Estudio/habitación flexible",
      "Patio trasero con juegos infantiles",
      "Garaje para 2 vehículos"
    ],
    gallery: [
      "images/projects/2/project_2_1.webp",
      "images/projects/2/project_2_1.webp",
      "images/projects/2/project_2_1.webp",
    ],
    fullDescription:
      "Casa Familiar Los Pinos representa la vivienda ideal para familias contemporáneas. Con un diseño práctico y acogedor, esta residencia de 280m² ofrece espacios versátiles que se adaptan al crecimiento familiar. La planta baja presenta un concepto abierto que integra sala, comedor y cocina, creando un ambiente perfecto para la convivencia. Un estudio que puede convertirse fácilmente en habitación adicional brinda flexibilidad para diferentes necesidades. En la planta alta, las tres habitaciones incluyen una suite principal con walk-in closet. El patio trasero diseñado con área de juegos infantiles y espacio para jardín garantiza entretenimiento al aire libre. Construida con materiales duraderos y bajo consumo energético, esta propiedad combina practicidad y calidad constructiva.",
  },
  {
    id: 3,
    state: ProjectState.UNDER_CONSTRUCTION,
    title: "Villa Eco Horizonte",
    description:
      "Residencia sustentable con certificación LEED, diseñada para aprovechar los recursos naturales.",
    image: "images/projects/3/project_3_1.webp",
    location: "Eco Residencial Horizonte",
    year: "2025",
    area: "320 m²",
    features: [
      "Sistema de captación y tratamiento de agua pluvial",
      "Paneles solares para autoconsumo energético",
      "Materiales ecoamigables y de producción local",
      "Ventilación cruzada y diseño bioclimático",
      "Huerto y jardines verticales"
    ],
    gallery: [
      "images/projects/3/project_3_1.webp",
      "images/projects/3/project_3_1.webp",
      "images/projects/3/project_3_1.webp",
    ],
    fullDescription:
      "Villa Eco Horizonte representa nuestro compromiso con la sustentabilidad y el futuro del planeta. Esta innovadora residencia de 320m² está diseñada siguiendo principios bioclimáticos que maximizan el aprovechamiento de recursos naturales. El sistema de captación de agua pluvial abastece sanitarios, riego e incluso la piscina natural con filtración biológica. Los paneles solares de última generación permiten que la casa genere más energía de la que consume durante gran parte del año. Los materiales utilizados combinan técnicas constructivas tradicionales optimizadas con tecnologías modernas de bajo impacto ambiental. Las ventanas estratégicamente ubicadas garantizan iluminación natural durante el día y ventilación cruzada que reduce la necesidad de climatización artificial. Los espacios interiores se distribuyen en 3 habitaciones, 2.5 baños, amplias áreas sociales y un estudio con vista al jardín vertical. Cada aspecto de Villa Eco Horizonte ha sido pensado para ofrecer confort mientras se minimiza la huella ecológica.",
  },
];


// Función que se ejecuta cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Cargar proyectos en el grid
    loadProjects();
});

// Función para cargar los proyectos en la página
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    // Si no existe el contenedor, salir
    if (!projectsGrid) return;
    
    // Generar HTML para cada proyecto
    projectsData.forEach((project, index) => {
        // Calcular el delay para la animación AOS
        const delay = ((index % 3) + 1) * 100;
        
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-aos', 'fade-up');
        projectCard.setAttribute('data-aos-delay', delay);
        projectCard.setAttribute('data-id', project.id);
        projectCard.setAttribute('data-state', project.state);

        // Determinar la clase CSS para el estado
        let stateClass = '';
        switch (project.state) {
            case 'vendido':
                stateClass = 'state-sold';
                break;
            case 'en venta':
                stateClass = 'state-for-sale';
                break;
            case 'en construccion':
                stateClass = 'state-under-construction';
                break;
            default:
                stateClass = '';
        }
        
        projectCard.innerHTML = `
            <div class="project-img-container">
                <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy">
            </div>
            <div class="project-info">
                <span class="project-state ${stateClass}">${project.state.charAt(0).toUpperCase() + project.state.slice(1)}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <button class="project-link-btn view-project-btn" data-project="${project.id}">
                    Ver detalles <i class="fas fa-eye"></i>
                </button>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Configurar eventos para los botones de ver proyecto
    setupProjectButtons();
}

// Configurar eventos para los botones de proyectos
function setupProjectButtons() {
    // Esperar a que los proyectos estén cargados
    setTimeout(() => {
        // Obtener todos los botones de ver proyecto
        const viewProjectButtons = document.querySelectorAll('.view-project-btn');
        
        // Agregar evento clic a cada botón
        viewProjectButtons.forEach(button => {
            button.addEventListener('click', function() {
                const projectId = this.getAttribute('data-project');
                
                // Abrir modal con los detalles del proyecto
                if (typeof openProjectModal === 'function') {
                    openProjectModal(projectId);
                } else {
                    console.error('La función openProjectModal no está definida.');
                }
            });
        });
        
        // También agregar evento clic a las imágenes de los proyectos
        const projectImgContainers = document.querySelectorAll('.project-img-container');
        
        projectImgContainers.forEach(container => {
            container.addEventListener('click', function() {
                const projectCard = this.closest('.project-card');
                if (projectCard) {
                    const projectId = projectCard.getAttribute('data-id');
                    
                    // Abrir modal con los detalles del proyecto
                    if (typeof openProjectModal === 'function') {
                        openProjectModal(projectId);
                    } else {
                        console.error('La función openProjectModal no está definida.');
                    }
                }
            });
            
            // Hacer que el cursor sea de puntero al pasar sobre la imagen
            container.style.cursor = 'pointer';
        });
    }, 500); // Pequeño timeout para asegurar que los elementos estén en el DOM
}