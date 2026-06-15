/**
 * pHinder - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollReveal();
  initCarousel();
  initNavbarScroll();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.navbar__toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  
  if (!toggleBtn || !mobileNav) return;
  
  const toggleMenu = () => {
    mobileNav.classList.toggle('is-open');
    const isOpen = mobileNav.classList.contains('is-open');
    // Optional: animate hamburger icon to X
  };
  
  toggleBtn.addEventListener('click', toggleMenu);
  
  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav.classList.contains('is-open')) {
        toggleMenu();
      }
    });
  });
}

/**
 * Scroll Reveal Animation via IntersectionObserver
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (!revealElements.length) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);
  
  revealElements.forEach(el => observer.observe(el));
}

/**
 * Screenshot Carousel Navigation
 */
function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const prevBtn = document.querySelector('.carousel-nav__btn--prev');
  const nextBtn = document.querySelector('.carousel-nav__btn--next');
  const dots = document.querySelectorAll('.carousel-nav__dot');
  
  if (!carousel || !prevBtn || !nextBtn) return;
  
  const itemWidth = carousel.querySelector('.carousel__item').offsetWidth;
  const gap = 48; // 3rem gap
  const scrollAmount = itemWidth + gap;
  
  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
  
  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
  
  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const items = carousel.querySelectorAll('.carousel__item');
      if (items[index]) {
        // Calculate scroll position to center the item
        const itemLeft = items[index].offsetLeft;
        const carouselCenter = carousel.clientWidth / 2;
        const itemCenter = items[index].clientWidth / 2;
        const scrollPos = itemLeft - carouselCenter + itemCenter;
        
        carousel.scrollTo({ left: scrollPos, behavior: 'smooth' });
      }
    });
  });
  
  // Update active dot on scroll
  carousel.addEventListener('scroll', () => {
    const scrollLeft = carousel.scrollLeft;
    const items = carousel.querySelectorAll('.carousel__item');
    
    let activeIndex = 0;
    let minDistance = Infinity;
    
    const carouselCenter = scrollLeft + carousel.clientWidth / 2;
    
    items.forEach((item, index) => {
      const itemCenter = item.offsetLeft + item.clientWidth / 2;
      const distance = Math.abs(carouselCenter - itemCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = index;
      }
    });
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === activeIndex);
    });
  });
}

/**
 * Navbar Scroll Effect
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.9)';
      navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.8)';
      navbar.style.borderBottom = '1px solid rgba(0, 0, 0, 0.05)';
    }
  });
}

/**
 * Helper to handle missing images in the mockup
 */
window.handleImageError = function(img) {
  img.style.display = 'none';
};
