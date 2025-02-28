const projectsData = [
    {
      id: 1,
      category: "residencial",
      title: "Torres Mirador",
      description:
        "Complejo residencial de lujo con 120 apartamentos, áreas comunes y vista panorámica.",
      image: "/api/placeholder/600/400",
      location: "Ciudad Centro",
      year: "2022",
      area: "25,000 m²",
      features: [
        "Piscina y áreas deportivas",
        "Terraza panorámica con áreas sociales",
        "Sistema de seguridad 24/7",
        "Estacionamiento subterráneo",
      ],
      gallery: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
      ],
      fullDescription:
        "Torres Mirador es un exclusivo desarrollo residencial que combina lujo, confort y naturaleza en un entorno urbano privilegiado. El proyecto consta de dos torres de 15 pisos con 120 apartamentos de diferentes metrajes, desde 80m² hasta 180m², todos con vistas panorámicas a la ciudad o a las montañas. El diseño arquitectónico maximiza la luz natural y la ventilación cruzada en cada unidad, mientras que los espacios comunes ofrecen amenidades de primer nivel para el disfrute de residentes y visitantes.",
    },
    {
      id: 2,
      category: "comercial",
      title: "Centro Empresarial Sion",
      description:
        "Moderno edificio de oficinas con certificación LEED y tecnología de vanguardia.",
      image: "/api/placeholder/600/400",
      location: "Distrito Financiero",
      year: "2023",
      area: "18,000 m²",
      features: [
        "Oficinas clase A+ con plantas libres",
        "Sistema BMS para control inteligente",
        "Certificación LEED Gold",
        "Auditorio para 250 personas",
      ],
      gallery: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
      ],
      fullDescription:
        "El Centro Empresarial Sion representa un hito en la arquitectura corporativa de la ciudad, combinando funcionalidad, eficiencia energética y diseño vanguardista. Este edificio de 12 pisos alberga espacios de oficina de clase mundial, áreas comerciales en los primeros niveles y un sky lobby en el último piso con vistas panorámicas. Su fachada de doble piel reduce la ganancia térmica mientras maximiza la luz natural, contribuyendo a su certificación LEED Gold.",
    },
    {
      id: 3,
      category: "hospitalario",
      title: "Hospital del Valle",
      description:
        "Centro médico de alta complejidad con tecnología de punta y servicios integrales.",
      image: "/api/placeholder/600/400",
      location: "Valle de la Salud",
      year: "2024",
      area: "35,000 m²",
      features: [
        "Quirófanos y salas de recuperación",
        "Unidad de cuidados intensivos",
        "Centro de diagnóstico por imágenes",
        "Áreas de hospitalización y consultorios",
      ],
      gallery: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
      ],
      fullDescription:
        "El Hospital del Valle es un proyecto de salud de última generación que ofrece servicios médicos de alta complejidad en un entorno seguro y confortable. Con una ubicación estratégica y un diseño arquitectónico innovador, el hospital cuenta con áreas de hospitalización, quirófanos, laboratorios y consultorios equipados con tecnología de punta. Además, su enfoque en la sostenibilidad y la eficiencia energética lo convierten en un referente en la región.",
    },
    {
      id: 4,
      category: "educativo",
      title: "Colegio del Futuro",
      description:
        "Institución educativa con enfoque STEAM, espacios flexibles y tecnología interactiva.",
      image: "/api/placeholder/600/400",
      location: "Ciudad Educativa",
      year: "2025",
      area: "12,000 m²",
      features: [
        "Aulas inteligentes con pizarras digitales",
        "Laboratorios de ciencias y tecnología",
        "Biblioteca y auditorio",
        "Áreas verdes y deportivas",
      ],
      gallery: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
      ],
      fullDescription:
        "El Colegio del Futuro es un proyecto educativo innovador que promueve el aprendizaje activo, la creatividad y la tecnología como herramientas para el desarrollo integral de los estudiantes. Con aulas inteligentes, laboratorios de ciencias y espacios flexibles, el colegio brinda un ambiente propicio para la experimentación y la colaboración. Además, su diseño sostenible y sus áreas verdes fomentan la conexión con la naturaleza y el bienestar de la comunidad educativa.",
    },
    {
      id: 5,
      category: "residencial",
      title: "Residencias El Paraíso",
      description:
        "Conjunto de casas unifamiliares con acabados de lujo y espacios verdes integrados.",
      image: "/api/placeholder/600/400",
      location: "Zona Residencial Norte",
      year: "2023",
      area: "10,000 m²",
      features: [
        "Amplios jardines privados",
        "Casa club con piscina",
        "Seguridad privada 24/7",
        "Acabados de lujo",
      ],
      gallery: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
      ],
      fullDescription:
        "Residencias El Paraíso es un exclusivo conjunto habitacional que ofrece lo mejor del estilo de vida suburbano con todas las comodidades urbanas. Este desarrollo de casas unifamiliares combina arquitectura moderna, espacios verdes y amenidades premium para crear un entorno ideal para familias que buscan tranquilidad sin alejarse de la ciudad.",
    },
    {
      id: 6,
      category: "industrial",
      title: "Parque Logístico Norte",
      description:
        "Centro de distribución con 15,000 m² de espacio optimizado para operaciones logísticas.",
      image: "/api/placeholder/600/400",
      location: "Zona Industrial",
      year: "2023",
      area: "15,000 m²",
      features: [
        "Amplias áreas de almacenamiento",
        "Muelles de carga y descarga",
        "Oficinas administrativas integradas",
        "Sistemas automatizados de inventario",
      ],
      gallery: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
      ],
      fullDescription:
        "El Parque Logístico Norte representa la evolución en infraestructura industrial, diseñado para maximizar la eficiencia en operaciones de almacenamiento y distribución. Con amplios espacios interiores, múltiples accesos para vehículos de carga y tecnología de punta en sistemas de gestión, este proyecto establece un nuevo estándar para centros logísticos en la región.",
    }
  ];

// Función que se ejecuta cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Cargar proyectos en el grid
    loadProjects();
    
    // Configurar eventos para los botones de proyectos
    setupProjectEvents();
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
        
        projectCard.innerHTML = `
            <div class="project-img-container">
                <img src="${project.image}" alt="${project.title}" class="project-img">
            </div>
            <div class="project-info">
                <span class="project-category">${project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <a href="#contacto" class="project-link-btn" data-project="${project.id}">
                    Solicitar información <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Configurar eventos para los botones de proyectos
function setupProjectEvents() {
    // Esperar a que los proyectos estén cargados
    setTimeout(() => {
        // Obtener todos los botones de contacto de proyectos
        const projectButtons = document.querySelectorAll('.project-link-btn');
        
        // Agregar evento clic a cada botón
        projectButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                const projectTitle = this.closest('.project-card').querySelector('.project-title').textContent;
                
                // Pre-completar el campo de asunto en el formulario de contacto
                const subjectField = document.getElementById('asunto');
                if (subjectField) {
                    subjectField.value = `Consulta sobre proyecto: ${projectTitle}`;
                }
                
                // Enfocar el formulario de contacto cuando llegue a él
                setTimeout(() => {
                    const nameField = document.getElementById('nombre');
                    if (nameField) nameField.focus();
                }, 800);
            });
        });
    }, 500); // Pequeño timeout para asegurar que los elementos estén en el DOM
}