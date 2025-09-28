// Cloudflare Worker for Rajimo Coming Soon Page
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Get the HTML content
  const html = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Primary Meta Tags -->
    <title>Rajimo - در دست ساخت | طراحی سایت و نرم‌افزارهای اختصاصی</title>
    <meta name="title" content="Rajimo - در دست ساخت | طراحی سایت و نرم‌افزارهای اختصاصی">
    <meta name="description" content="Rajimo - طراحی و توسعه سایت، ساخت اتوماسیون سازمانی، طراحی نرم‌افزارهای اختصاصی، و راهکارهای دیجیتال حرفه‌ای. سایت جدید ما به‌زودی راه‌اندازی می‌شود.">
    <meta name="keywords" content="Rajimo, طراحی سایت, اتوماسیون اداری, نرم‌افزار اختصاصی, سیستم‌های سازمانی, برنامه‌نویسی اختصاصی, توسعه وب, طراحی دیجیتال, طراحی اپلیکیشن">
    <meta name="author" content="Rajimo">
    <meta name="robots" content="index, follow">
    <meta name="language" content="Persian">
    <meta name="revisit-after" content="7 days">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://rajimo.com/">
    <meta property="og:title" content="Rajimo - در دست ساخت | طراحی سایت و نرم‌افزارهای اختصاصی">
    <meta property="og:description" content="به‌زودی با خدمات کامل طراحی سایت و نرم‌افزارهای اتوماسیون بازخواهیم گشت.">
    <meta property="og:image" content="https://rajimo.com/preview.png">
    <meta property="og:locale" content="fa_IR">
    <meta property="og:site_name" content="Rajimo">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://rajimo.com/">
    <meta property="twitter:title" content="Rajimo - در دست ساخت | طراحی سایت و نرم‌افزارهای اختصاصی">
    <meta property="twitter:description" content="به‌زودی با خدمات کامل طراحی سایت و نرم‌افزارهای اتوماسیون بازخواهیم گشت.">
    <meta property="twitter:image" content="https://rajimo.com/preview.png">
    
    <!-- Additional SEO -->
    <meta name="theme-color" content="#8a2be2">
    <meta name="msapplication-TileColor" content="#8a2be2">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Rajimo",
        "url": "https://rajimo.com",
        "logo": "https://rajimo.com/logo.png",
        "description": "طراحی و توسعه سایت، ساخت اتوماسیون سازمانی، طراحی نرم‌افزارهای اختصاصی",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+98-912-721-5825",
            "contactType": "customer service"
        },
        "sameAs": [
            "https://linkedin.com/company/rajimo"
        ]
    }
    </script>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Inline CSS -->
    <style>
        /* Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html, body {
            height: 100%;
            overflow-x: hidden;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #16213e 100%);
            color: #ffffff;
            position: relative;
            min-height: 100vh;
        }

        /* Animated Background Particles */
        .particles-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }

        .particle {
            position: absolute;
            background: radial-gradient(circle, rgba(138, 43, 226, 0.8) 0%, rgba(75, 0, 130, 0.4) 50%, transparent 100%);
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
        }

        .particle:nth-child(odd) {
            animation-delay: -2s;
            animation-duration: 8s;
        }

        .particle:nth-child(even) {
            animation-delay: -4s;
            animation-duration: 10s;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0.7;
            }
            50% {
                transform: translateY(-20px) rotate(180deg);
                opacity: 1;
            }
        }

        /* Main Container */
        .container {
            position: relative;
            z-index: 2;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        /* Hero Section */
        .hero {
            text-align: center;
            max-width: 800px;
            width: 100%;
            animation: fadeInScale 1.5s ease-out;
        }

        @keyframes fadeInScale {
            0% {
                opacity: 0;
                transform: scale(0.8) translateY(30px);
            }
            100% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        /* Company Name */
        .company-name {
            font-family: 'Orbitron', monospace;
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            font-weight: 700;
            color: #8a2be2;
            margin-bottom: 20px;
            letter-spacing: 3px;
            text-shadow: 0 0 20px rgba(138, 43, 226, 0.6);
            animation: glow 2s ease-in-out infinite alternate;
        }

        /* Main Title */
        .main-title {
            margin-bottom: 30px;
        }

        .glow-text {
            font-family: 'Orbitron', monospace;
            font-size: clamp(2.5rem, 8vw, 4.5rem);
            font-weight: 900;
            background: linear-gradient(45deg, #8a2be2, #00d4ff, #ff00ff, #8a2be2);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 3s ease-in-out infinite, glow 2s ease-in-out infinite alternate;
            text-shadow: 0 0 30px rgba(138, 43, 226, 0.5);
            letter-spacing: 2px;
        }

        @keyframes gradientShift {
            0%, 100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }

        @keyframes glow {
            0% {
                text-shadow: 0 0 20px rgba(138, 43, 226, 0.5);
            }
            100% {
                text-shadow: 0 0 40px rgba(138, 43, 226, 0.8), 0 0 60px rgba(0, 212, 255, 0.3);
            }
        }

        /* Typewriter Subtext */
        .subtext {
            font-size: clamp(1rem, 3vw, 1.5rem);
            color: #b8c5d1;
            margin-bottom: 50px;
            min-height: 2rem;
            font-weight: 300;
            letter-spacing: 1px;
        }

        .cursor {
            animation: blink 1s infinite;
            color: #8a2be2;
            font-weight: bold;
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        /* Phone Numbers */
        .phone-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
            margin-bottom: 50px;
            flex-wrap: wrap;
        }

        .phone-link {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 20px 35px;
            background: linear-gradient(135deg, rgba(138, 43, 226, 0.15) 0%, rgba(0, 212, 255, 0.1) 100%);
            border: 2px solid transparent;
            border-radius: 25px;
            color: #ffffff;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 600;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            backdrop-filter: blur(15px);
            position: relative;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(138, 43, 226, 0.2);
            animation: phonePulse 3s ease-in-out infinite;
        }

        .phone-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #8a2be2, #00d4ff, #ff00ff, #8a2be2);
            background-size: 400% 400%;
            border-radius: 25px;
            padding: 2px;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.4s ease;
            animation: gradientShift 3s ease-in-out infinite;
        }

        .phone-link::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.6s ease;
        }

        .phone-link:hover::before {
            opacity: 1;
        }

        .phone-link:hover::after {
            left: 100%;
        }

        .phone-link:hover {
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 20px 50px rgba(138, 43, 226, 0.4), 0 0 30px rgba(0, 212, 255, 0.3);
            background: linear-gradient(135deg, rgba(138, 43, 226, 0.25) 0%, rgba(0, 212, 255, 0.2) 100%);
        }

        .phone-link:active {
            transform: translateY(-4px) scale(1.02);
        }

        .phone-icon {
            color: #00d4ff;
            font-size: 1.4rem;
            text-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
            animation: iconPulse 2s ease-in-out infinite;
            position: relative;
            z-index: 2;
        }

        .phone-number {
            font-family: 'Orbitron', monospace;
            letter-spacing: 2px;
            font-weight: 700;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
            position: relative;
            z-index: 2;
            background: linear-gradient(45deg, #ffffff, #00d4ff, #8a2be2);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: textGradient 3s ease-in-out infinite;
        }

        @keyframes phonePulse {
            0%, 100% {
                box-shadow: 0 8px 32px rgba(138, 43, 226, 0.2);
            }
            50% {
                box-shadow: 0 12px 40px rgba(138, 43, 226, 0.3);
            }
        }

        @keyframes iconPulse {
            0%, 100% {
                transform: scale(1);
                text-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
            }
            50% {
                transform: scale(1.1);
                text-shadow: 0 0 25px rgba(0, 212, 255, 1);
            }
        }

        @keyframes textGradient {
            0%, 100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }

        /* LinkedIn Link */
        .linkedin-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 30px;
        }

        .linkedin-link {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 20px 35px;
            background: linear-gradient(135deg, rgba(0, 119, 181, 0.15) 0%, rgba(0, 212, 255, 0.1) 100%);
            border: 2px solid transparent;
            border-radius: 25px;
            color: #ffffff;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 600;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            backdrop-filter: blur(15px);
            position: relative;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0, 119, 181, 0.2);
            animation: linkedinPulse 3s ease-in-out infinite;
        }

        .linkedin-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #0077b5, #00d4ff, #8a2be2, #0077b5);
            background-size: 400% 400%;
            border-radius: 25px;
            padding: 2px;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.4s ease;
            animation: gradientShift 3s ease-in-out infinite;
        }

        .linkedin-link::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.6s ease;
        }

        .linkedin-link:hover::before {
            opacity: 1;
        }

        .linkedin-link:hover::after {
            left: 100%;
        }

        .linkedin-link:hover {
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 20px 50px rgba(0, 119, 181, 0.4), 0 0 30px rgba(0, 212, 255, 0.3);
            background: linear-gradient(135deg, rgba(0, 119, 181, 0.25) 0%, rgba(0, 212, 255, 0.2) 100%);
        }

        .linkedin-link:active {
            transform: translateY(-4px) scale(1.02);
        }

        .linkedin-icon {
            color: #00d4ff;
            font-size: 1.4rem;
            text-shadow: 0 0 15px rgba(0, 212, 255, 0.8);
            animation: iconPulse 2s ease-in-out infinite;
            position: relative;
            z-index: 2;
        }

        .linkedin-text {
            font-family: 'Orbitron', monospace;
            letter-spacing: 2px;
            font-weight: 700;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
            position: relative;
            z-index: 2;
            background: linear-gradient(45deg, #ffffff, #00d4ff, #0077b5);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: textGradient 3s ease-in-out infinite;
        }

        @keyframes linkedinPulse {
            0%, 100% {
                box-shadow: 0 8px 32px rgba(0, 119, 181, 0.2);
            }
            50% {
                box-shadow: 0 12px 40px rgba(0, 119, 181, 0.3);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }
            
            .phone-container {
                gap: 25px;
                flex-direction: column;
            }
            
            .phone-link {
                padding: 18px 30px;
                font-size: 1.1rem;
                gap: 12px;
            }
            
            .phone-icon {
                font-size: 1.3rem;
            }
            
            .linkedin-link {
                padding: 18px 30px;
                font-size: 1.1rem;
                gap: 12px;
            }
            
            .linkedin-icon {
                font-size: 1.3rem;
            }
        }

        @media (max-width: 480px) {
            .phone-container {
                gap: 20px;
            }
            
            .phone-link {
                padding: 15px 25px;
                font-size: 1rem;
            }
            
            .linkedin-link {
                padding: 15px 25px;
                font-size: 1rem;
            }
        }

        /* Screen Reader Only Text */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
            .glow-text {
                -webkit-text-fill-color: #ffffff;
                color: #ffffff;
            }
            
            .phone-number, .linkedin-text {
                color: #ffffff;
            }
        }

        /* Focus styles for accessibility */
        .phone-link:focus,
        .linkedin-link:focus {
            outline: 3px solid #00d4ff;
            outline-offset: 2px;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
            .particle,
            .glow-text,
            .phone-link,
            .linkedin-link,
            .phone-icon,
            .linkedin-icon,
            .phone-number,
            .linkedin-text {
                animation: none !important;
                transition: none !important;
            }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    </style>
</head>
<body>
    <!-- Animated Background Particles -->
    <div class="particles-container" id="particles-container"></div>
    
    <!-- Main Content -->
    <div class="container">
        <!-- Hero Section -->
        <main class="hero" role="main">
            <div class="content">
                <!-- Company Name -->
                <div class="company-name" aria-label="نام شرکت">RAJIMO</div>
                
                <!-- Main Title -->
                <h1 class="main-title">
                    <span class="glow-text">Coming Soon</span>
                </h1>
                
                <!-- Typewriter Subtext -->
                <p class="subtext" id="typewriter-text" aria-label="پیام در دست ساخت">
                    <span class="cursor">|</span>
                </p>
                
                <!-- Contact Information -->
                <section class="contact-section" aria-label="اطلاعات تماس">
                    <h2 class="sr-only">شماره‌های تماس</h2>
                    <div class="phone-container">
                        <a href="tel:+989127215825" class="phone-link" aria-label="شماره تماس اول">
                            <i class="fas fa-phone phone-icon" aria-hidden="true"></i>
                            <span class="phone-number">09127215825</span>
                        </a>
                        <a href="tel:+989128501931" class="phone-link" aria-label="شماره تماس دوم">
                            <i class="fas fa-phone phone-icon" aria-hidden="true"></i>
                            <span class="phone-number">09128501931</span>
                        </a>
                    </div>
                </section>
                
                <!-- Social Media -->
                <section class="social-section" aria-label="شبکه‌های اجتماعی">
                    <h2 class="sr-only">صفحه LinkedIn</h2>
                    <div class="linkedin-container">
                        <a href="https://linkedin.com/company/rajimo" class="linkedin-link" target="_blank" rel="noopener noreferrer" aria-label="صفحه LinkedIn شرکت Rajimo">
                            <i class="fab fa-linkedin-in linkedin-icon" aria-hidden="true"></i>
                            <span class="linkedin-text">LinkedIn</span>
                        </a>
                    </div>
                </section>
            </div>
        </main>
    </div>
    
    <!-- Inline JavaScript -->
    <script>
        // DOM Elements
        const typewriterElement = document.getElementById('typewriter-text');
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

                this.element.innerHTML = this.currentText + '<span class="cursor">|</span>';

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
                'Something amazing is on the way...', 
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
    </script>
</body>
</html>`;

  // Return the HTML with proper headers
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    },
  })
}
