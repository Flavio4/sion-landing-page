// === MAIN.JS ===
// Este archivo contiene funcionalidades generales del sitio

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades principales
    initializeAOS();
    setupMobileMenu();
    setupScrollEffects();
    setupSmoothScroll();
    setupStatsCounter();
});

// Inicialización de AOS (Animate On Scroll)
function initializeAOS() {
    AOS.init({
        duration: 800,
        easing: "ease",
        once: true,
        offset: 100,
    });
}

// Configuración del menú móvil
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    
    // Toggle del menú móvil
    mobileMenuBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        document.querySelector(".nav-links").classList.toggle("active");
        this.classList.toggle("active");
    });
    
    // Cerrar el menú al hacer clic fuera
    document.addEventListener("click", function(e) {
        const nav = document.querySelector(".nav-links");
        const btn = document.querySelector(".mobile-menu-btn");
        
        if (nav.classList.contains("active") && 
            !nav.contains(e.target) && 
            !btn.contains(e.target)) {
            nav.classList.remove("active");
            btn.classList.remove("active");
        }
    });
}

// Efectos de scroll (header fijo y botón back-to-top)
function setupScrollEffects() {
    const header = document.querySelector(".header");
    const backToTopButton = document.querySelector(".back-to-top");
    
    // Cambiar estilo del header al hacer scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // Mostrar/ocultar botón back-to-top
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });
}

// Configuración de scroll suave para enlaces internos
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });
                
                // Cerrar menú móvil si está abierto
                document.querySelector(".nav-links").classList.remove("active");
                document.querySelector(".mobile-menu-btn").classList.remove("active");
            }
        });
    });
}

// Animación de contadores en sección de estadísticas
function setupStatsCounter() {
    const statsSection = document.querySelector(".stats-section");
    
    if (!statsSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });
    
    observer.observe(statsSection);
}

function animateCounters() {
    const counters = document.querySelectorAll(".stat-number");
    const speed = 200;
    
    counters.forEach(counter => {
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