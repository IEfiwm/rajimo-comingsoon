// DOM Elements
const typewriterElement = document.getElementById('typewriter-text');
const formElement = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const formMessage = document.getElementById('form-message');
const particlesContainer = document.getElementById('particles-container');

// Typewriter Animation
class Typewriter {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.currentIndex = 0;
        this.isDeleting = false;
        this.currentText = '';
    }

    start() {
        this.type();
    }

    type() {
        if (this.isDeleting) {
            this.currentText = this.text.substring(0, this.currentText.length - 1);
        } else {
            this.currentText = this.text.substring(0, this.currentIndex + 1);
        }

        // For RTL text, add cursor at the beginning
        this.element.innerHTML = '<span class="cursor">|</span>' + this.currentText;

        let typeSpeed = this.speed;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.currentText === this.text) {
            typeSpeed = 2000; // Pause at end
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false;
            this.currentIndex = 0;
        } else if (!this.isDeleting) {
            this.currentIndex++;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Particle System
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.particleCount = 50;
        this.init();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2px and 8px
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        this.container.appendChild(particle);
        this.particles.push(particle);
    }

    updateParticles() {
        this.particles.forEach(particle => {
            // Add subtle movement based on mouse position
            const rect = particle.getBoundingClientRect();
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const mouseX = window.mouseX || centerX;
            const mouseY = window.mouseY || centerY;
            
            const deltaX = (mouseX - centerX) * 0.0001;
            const deltaY = (mouseY - centerY) * 0.0001;
            
            const currentLeft = parseFloat(particle.style.left);
            const currentTop = parseFloat(particle.style.top);
            
            particle.style.left = (currentLeft + deltaX) + '%';
            particle.style.top = (currentTop + deltaY) + '%';
        });
    }
}

// Phone Number Interactions
class PhoneInteractions {
    constructor() {
        this.init();
    }

    init() {
        this.addPhoneClickEffects();
    }

    addPhoneClickEffects() {
        const phoneLinks = document.querySelectorAll('.phone-link');
        phoneLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Add click animation
                this.style.transform = 'translateY(-4px) scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }
}

// Smooth Animations
class AnimationController {
    constructor() {
        this.init();
    }

    init() {
        // Add loading class to body
        document.body.classList.add('loading');
        
        // Remove loading class after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.classList.remove('loading');
            }, 100);
        });

        // Add scroll animations
        this.addScrollAnimations();
    }

    addScrollAnimations() {
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

        // Observe phone and linkedin elements
        const animatedElements = document.querySelectorAll('.phone-container, .linkedin-container');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Mouse tracking for particle effects
function trackMouse(e) {
    window.mouseX = e.clientX;
    window.mouseY = e.clientY;
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
        // Initialize typewriter
        const typewriter = new Typewriter(
            typewriterElement, 
            'چیز شگفت‌انگیزی در راه است...', 
            80
        );
        typewriter.start();

    // Initialize particle system
    const particleSystem = new ParticleSystem(particlesContainer);
    
    // Initialize phone interactions
    const phoneInteractions = new PhoneInteractions();
    
    // Initialize animations
    const animationController = new AnimationController();
    
    // Add mouse tracking
    document.addEventListener('mousemove', trackMouse);
    
    // Update particles periodically
    setInterval(() => {
        particleSystem.updateParticles();
    }, 100);
    
    // Add some interactive effects
    addInteractiveEffects();
});

// Interactive Effects
function addInteractiveEffects() {
    // Add click effects to phone and linkedin links
    const phoneLinks = document.querySelectorAll('.phone-link');
    const linkedinLink = document.querySelector('.linkedin-link');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            this.style.transform = 'translateY(-4px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    if (linkedinLink) {
        linkedinLink.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'translateY(-4px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Performance optimization
function optimizePerformance() {
    // Reduce particle count on mobile
    if (window.innerWidth < 768) {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            if (index > 25) {
                particle.style.display = 'none';
            }
        });
    }
}

// Call optimization on resize
window.addEventListener('resize', optimizePerformance);

// Initialize optimization
optimizePerformance();

// my changes phrase
 int x = 10;
