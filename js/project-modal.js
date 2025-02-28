// ======== PROJECT MODAL FUNCTIONALITY ========

let currentProject = null;

// Inicializar el modal cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initProjectModal();
});

// Función principal para inicializar el modal
function initProjectModal() {
    const projectModal = document.getElementById('projectModal');
    const closeModalBtn = document.querySelector('.close-modal');
    
    if (!projectModal || !closeModalBtn) return;
    
    // Cerrar el modal cuando se hace clic en el botón de cerrar
    closeModalBtn.addEventListener('click', function() {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Cerrar el modal cuando se hace clic fuera del contenido
    window.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Cerrar el modal con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.style.display === 'block') {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Configurar botón de contacto en el modal
    const modalContactBtn = document.getElementById('modalContactBtn');
    if (modalContactBtn) {
        modalContactBtn.addEventListener('click', function() {
            // Pre-completar el campo de asunto en el formulario de contacto
            const subjectField = document.getElementById('asunto');
            if (subjectField && currentProject) {
                subjectField.value = `Consulta sobre proyecto: ${currentProject.title}`;
            }
            
            // Cerrar el modal
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            
            // Enfocar el formulario de contacto cuando llegue a él
            setTimeout(() => {
                const nameField = document.getElementById('nombre');
                if (nameField) nameField.focus();
            }, 800);
        });
    }
}

// Función para abrir el modal con los detalles del proyecto
function openProjectModal(projectId) {
    const projectModal = document.getElementById('projectModal');
    if (!projectModal) return;
    
    // Buscar el proyecto por ID
    currentProject = projectsData.find(p => p.id == projectId);
    
    // Si no se encuentra el proyecto, usar el primero
    if (!currentProject && projectsData.length > 0) {
        currentProject = projectsData[0];
    } else if (!currentProject) {
        return; // No hay datos de proyectos disponibles
    }
    
    // Llenar el modal con los datos del proyecto
    document.getElementById('modalCategory').textContent = 
        currentProject.category.charAt(0).toUpperCase() + currentProject.category.slice(1);
    document.getElementById('modalTitle').textContent = currentProject.title;
    document.getElementById('modalLocation').textContent = currentProject.location;
    document.getElementById('modalYear').textContent = "Año: " + currentProject.year;
    document.getElementById('modalArea').textContent = "Área: " + currentProject.area;
    document.getElementById('modalDescription').textContent = currentProject.fullDescription;
    
    // Cargar imagen principal
    const modalMainImage = document.getElementById('modalMainImage');
    if (modalMainImage && currentProject.gallery && currentProject.gallery.length > 0) {
        modalMainImage.src = currentProject.gallery[0];
        modalMainImage.alt = currentProject.title;
    }
    
    // Cargar características
    const featuresList = document.getElementById('modalFeatures');
    if (featuresList) {
        featuresList.innerHTML = '';
        
        if (currentProject.features && currentProject.features.length > 0) {
            currentProject.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
        }
    }
    
    // Cargar miniaturas de galería
    const thumbs = document.querySelectorAll('.gallery-thumbs .thumb');
    if (thumbs.length > 0 && currentProject.gallery) {
        thumbs.forEach((thumb, index) => {
            if (currentProject.gallery[index]) {
                const img = thumb.querySelector('img');
                if (img) {
                    img.src = currentProject.gallery[index];
                    img.alt = `${currentProject.title} - Imagen ${index + 1}`;
                    
                    // Quitar eventos anteriores (para evitar duplicados)
                    thumb.replaceWith(thumb.cloneNode(true));
                }
            }
        });
        
        // Volver a agregar eventos a las miniaturas (después de clonarlas)
        document.querySelectorAll('.gallery-thumbs .thumb').forEach((thumb, index) => {
            if (currentProject.gallery[index]) {
                thumb.addEventListener('click', function() {
                    // Cambiar la imagen principal
                    const modalMainImage = document.getElementById('modalMainImage');
                    if (modalMainImage) {
                        modalMainImage.src = currentProject.gallery[index];
                    }
                    
                    // Actualizar clase active
                    document.querySelectorAll('.gallery-thumbs .thumb').forEach(t => 
                        t.classList.remove('active')
                    );
                    this.classList.add('active');
                });
            }
        });
    }
    
    // Mostrar el modal
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Evitar scroll en el body
}