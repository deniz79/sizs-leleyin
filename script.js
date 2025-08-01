// DOM elementlerini seç
const homePage = document.getElementById('homePage');
const vanPage = document.getElementById('vanPage');
const carPage = document.getElementById('carPage');
const vanKedileriBtn = document.getElementById('vanKedileriBtn');
const arabaTarihiBtn = document.getElementById('arabaTarihiBtn');
const backBtn = document.getElementById('backBtn');
const carBackBtn = document.getElementById('carBackBtn');

// Sayfa geçiş fonksiyonları
function showVanPage() {
    homePage.classList.remove('active');
    vanPage.classList.add('active');
    
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Animasyonlu geçiş efekti
    vanPage.style.opacity = '0';
    vanPage.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        vanPage.style.transition = 'all 0.5s ease';
        vanPage.style.opacity = '1';
        vanPage.style.transform = 'translateY(0)';
    }, 100);
}

function showCarPage() {
    homePage.classList.remove('active');
    carPage.classList.add('active');
    
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Animasyonlu geçiş efekti
    carPage.style.opacity = '0';
    carPage.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        carPage.style.transition = 'all 0.5s ease';
        carPage.style.opacity = '1';
        carPage.style.transform = 'translateY(0)';
    }, 100);
}

function showHomePage() {
    vanPage.classList.remove('active');
    carPage.classList.remove('active');
    homePage.classList.add('active');
    
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Animasyonlu geçiş efekti
    homePage.style.opacity = '0';
    homePage.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        homePage.style.transition = 'all 0.5s ease';
        homePage.style.opacity = '1';
        homePage.style.transform = 'scale(1)';
    }, 100);
}

// Event listeners
vanKedileriBtn.addEventListener('click', showVanPage);
arabaTarihiBtn.addEventListener('click', showCarPage);
backBtn.addEventListener('click', showHomePage);
carBackBtn.addEventListener('click', showHomePage);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .gallery-item, .timeline-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Button hover effects
vanKedileriBtn.addEventListener('mouseenter', () => {
    vanKedileriBtn.style.transform = 'translateY(-2px) scale(1.05)';
});

vanKedileriBtn.addEventListener('mouseleave', () => {
    vanKedileriBtn.style.transform = 'translateY(0) scale(1)';
});

arabaTarihiBtn.addEventListener('mouseenter', () => {
    arabaTarihiBtn.style.transform = 'translateY(-2px) scale(1.05)';
});

arabaTarihiBtn.addEventListener('mouseleave', () => {
    arabaTarihiBtn.style.transform = 'translateY(0) scale(1)';
});

// Gallery image click effect
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Timeline item hover effect
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Feature card hover effect
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (vanPage.classList.contains('active') || carPage.classList.contains('active')) {
            showHomePage();
        }
    }
});

// Touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && (vanPage.classList.contains('active') || carPage.classList.contains('active'))) {
            // Swipe left - go back to home
            showHomePage();
        } else if (diff < 0 && homePage.classList.contains('active')) {
            // Swipe right - go to van page (default)
            showVanPage();
        }
    }
}

// Performance optimization
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}); 