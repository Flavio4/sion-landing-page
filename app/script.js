import allProjects from "./projects.js";

// Initialize AOS
AOS.init({
  duration: 800,
  easing: "ease",
  once: true,
  offset: 100,
});

// Mobile menu toggle
document
  .querySelector(".mobile-menu-btn")
  .addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
    this.classList.toggle("active");
  });

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Back to top button
const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

// Project filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Animation for stats counter
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 200;

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-count");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(animateCounters, 1);
    } else {
      counter.innerText = target;
    }
  });
}

// Trigger counter animation when section is in view
const statsSection = document.querySelector(".stats-section");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.unobserve(entry.target);
    }
  });
}, options);

if (statsSection) {
  observer.observe(statsSection);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      document.querySelector(".nav-links").classList.remove("active");
      document.querySelector(".mobile-menu-btn").classList.remove("active");
    }
  });
});

/* const allProjects = [
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
    // Más proyectos aquí...
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
  ]; */
  

// Implementar funcionalidad de proyectos
document.addEventListener("DOMContentLoaded", function () {
  const projectModal = document.getElementById("projectModal");
  const allProjectsPage = document.getElementById("allProjectsPage");
  const viewAllBtn = document.querySelector(".view-more-container .btn");
  const backToMainBtn = document.getElementById("backToMain");
  const closeModalBtn = document.querySelector(".close-modal");
  const projectLinks = document.querySelectorAll(".project-link");
  const fullProjectsGrid = document.getElementById("fullProjectsGrid");

  // Abrir modal al hacer clic en un proyecto
  projectLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Encontrar el proyecto padre
      const projectCard = this.closest(".project-card");
      const projectId = projectCard.getAttribute("data-id") || 1; // Fallback al primer proyecto si no hay ID

      openProjectModal(projectId);
    });
  });

  // Abrir página de todos los proyectos
  viewAllBtn.addEventListener("click", function (e) {
    e.preventDefault();
    loadAllProjects();
    allProjectsPage.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  // Volver a la página principal desde la página de todos los proyectos
  backToMainBtn.addEventListener("click", function (e) {
    e.preventDefault();
    allProjectsPage.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Cerrar modal
  closeModalBtn.addEventListener("click", function () {
    projectModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Cerrar modal haciendo clic fuera del contenido
  window.addEventListener("click", function (e) {
    if (e.target == projectModal) {
      projectModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Función para abrir modal con detalles del proyecto
  function openProjectModal(projectId) {
    // Buscar el proyecto por ID
    const project =
      allProjects.find((p) => p.id == projectId) || allProjects[0];

    // Llenar el modal con los datos del proyecto
    document.getElementById("modalCategory").textContent =
      project.category.charAt(0).toUpperCase() + project.category.slice(1);
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalLocation").textContent = project.location;
    document.getElementById("modalYear").textContent = "Año: " + project.year;
    document.getElementById("modalArea").textContent = "Área: " + project.area;
    document.getElementById("modalDescription").textContent =
      project.fullDescription;

    // Cargar imagen principal
    document.getElementById("modalMainImage").src = project.gallery[0];

    // Cargar características
    const featuresList = document.getElementById("modalFeatures");
    featuresList.innerHTML = "";
    project.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresList.appendChild(li);
    });

    // Cargar miniaturas de galería
    const thumbs = document.querySelectorAll(".gallery-thumbs .thumb");
    thumbs.forEach((thumb, index) => {
      if (project.gallery[index]) {
        const img = thumb.querySelector("img");
        img.src = project.gallery[index];

        // Hacer clic en las miniaturas para cambiar la imagen principal
        thumb.addEventListener("click", function () {
          document.getElementById("modalMainImage").src = img.src;
          thumbs.forEach((t) => t.classList.remove("active"));
          this.classList.add("active");
        });
      }
    });

    // Mostrar el modal
    projectModal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  // Función para cargar todos los proyectos en la página completa
  function loadAllProjects() {
    fullProjectsGrid.innerHTML = "";

    allProjects.forEach((project) => {
      const projectElement = document.createElement("div");
      projectElement.className = "project-card";
      projectElement.setAttribute("data-category", project.category);
      projectElement.setAttribute("data-id", project.id);
      projectElement.setAttribute("data-aos", "fade-up");

      projectElement.innerHTML = `
        <div class="project-img-container">
            <img src="${project.image}" alt="${
        project.title
      }" class="project-img">
            <div class="project-overlay">
                <a href="#" class="project-link"><i class="fas fa-plus"></i></a>
            </div>
        </div>
        <div class="project-info">
            <span class="project-category">${
              project.category.charAt(0).toUpperCase() +
              project.category.slice(1)
            }</span>
            <h3 class="project-title">${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `;

      fullProjectsGrid.appendChild(projectElement);

      // Añadir evento de clic al nuevo proyecto
      const projectLink = projectElement.querySelector(".project-link");
      projectLink.addEventListener("click", function (e) {
        e.preventDefault();
        openProjectModal(project.id);
      });
    });

    // Inicializar filtro de proyectos en la página completa
    const filterButtons = allProjectsPage.querySelectorAll(".filter-btn");
    const projectCards = allProjectsPage.querySelectorAll(".project-card");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Quitar clase activa de todos los botones
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        // Añadir clase activa al botón clickeado
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projectCards.forEach((card) => {
          if (
            filter === "all" ||
            card.getAttribute("data-category") === filter
          ) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });

    // Inicializar AOS para los nuevos elementos
    if (typeof AOS !== "undefined") {
      AOS.refresh();
    }
  }

  // Añadir IDs a los proyectos existentes en la página
  document
    .querySelectorAll(".projects-container .project-card")
    .forEach((card, index) => {
      card.setAttribute("data-id", index + 1);
    });
});
