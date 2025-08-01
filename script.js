// Simple and working JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // Get all elements
    const homePage = document.getElementById('homePage');
    const vanPage = document.getElementById('vanPage');
    const carPage = document.getElementById('carPage');
    const vanKedileriBtn = document.getElementById('vanKedileriBtn');
    const arabaTarihiBtn = document.getElementById('arabaTarihiBtn');
    const backBtn = document.getElementById('backBtn');
    const carBackBtn = document.getElementById('carBackBtn');
    
    console.log('Elements found:', {
        homePage: !!homePage,
        vanPage: !!vanPage,
        carPage: !!carPage,
        vanKedileriBtn: !!vanKedileriBtn,
        arabaTarihiBtn: !!arabaTarihiBtn,
        backBtn: !!backBtn,
        carBackBtn: !!carBackBtn
    });
    
    // Page functions
    function showVanPage() {
        console.log('Showing Van Page');
        homePage.classList.remove('active');
        vanPage.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    function showCarPage() {
        console.log('Showing Car Page');
        homePage.classList.remove('active');
        carPage.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    function showHomePage() {
        console.log('Showing Home Page');
        vanPage.classList.remove('active');
        carPage.classList.remove('active');
        homePage.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    // Add event listeners
    if (vanKedileriBtn) {
        vanKedileriBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Van Kedileri button clicked');
            showVanPage();
        });
        console.log('Van button listener added');
    }
    
    if (arabaTarihiBtn) {
        arabaTarihiBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Araba Tarihi button clicked');
            showCarPage();
        });
        console.log('Car button listener added');
    }
    
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Back button clicked');
            showHomePage();
        });
    }
    
    if (carBackBtn) {
        carBackBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Car back button clicked');
            showHomePage();
        });
    }
    
    // Add some visual feedback
    if (vanKedileriBtn) {
        vanKedileriBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        vanKedileriBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    if (arabaTarihiBtn) {
        arabaTarihiBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        arabaTarihiBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    console.log('JavaScript initialization complete');
});

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