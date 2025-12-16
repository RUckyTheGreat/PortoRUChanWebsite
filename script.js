// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
if (typeof ScrollToPlugin !== 'undefined') {
    gsap.registerPlugin(ScrollToPlugin);
}

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    
    // Initial main section fade-in
    const mainSection = document.querySelector('.mains');
    if (mainSection) {
        gsap.from(mainSection, {
            duration: 0.8,
            opacity: 0,
            ease: "power2.out"
        });
    }
    
    // Split the main title into letters and animate
    const title = document.querySelector('.mains-title');
    if (title) {
        const titleText = title.textContent;
        title.innerHTML = titleText.split('').map(letter => 
            `<span style="display: inline-block;">${letter === ' ' ? '&nbsp;' : letter}</span>`
        ).join('');
        
        const titleLetters = title.querySelectorAll('span');
        gsap.from(titleLetters, {
            duration: 1,
            opacity: 0,
            y: 100,
            rotationX: -90,
            transformOrigin: "50% 50% -50px",
            stagger: 0.05,
            ease: "back.out(1.7)"
        });
    }

    // Animate subtitles with stagger and smooth entrance
    const subtitles = document.querySelectorAll('.mains-subtitle');
    if (subtitles.length > 0) {
        gsap.from(subtitles, {
            duration: 1.2,
            opacity: 0,
            x: -200,
            stagger: 0.2,
            delay: 1,
            ease: "power3.out"
        });
    }

    // Animate quote text
    const quoteText = document.querySelector('.quote-text');
    if (quoteText) {
        gsap.from(quoteText, {
            duration: 1,
            opacity: 0,
            y: 50,
            delay: 2,
            ease: "power2.out"
        });
    }

    // Parallax effect and floating animation for background image
    const backgroundImage = document.querySelector('.mains-image1');
    if (backgroundImage) {

        // Scroll parallax effect
        gsap.to(backgroundImage, {
            scrollTrigger: {
                trigger: '.mains',
                start: "top top",
                end: "bottom top",
                scrub: 1
            },
            y: -100,
            scale: 1.1,
            ease: "none"
        });
    }

    // Animate background lines with GSAP
    const lines = document.querySelectorAll('.line');
    if (lines.length > 0) {
        lines.forEach((line, index) => {
            gsap.to(line, {
                scrollTrigger: {
                    trigger: '.mains',
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                },
                y: -50 * (index + 1),
                opacity: 0.3,
                scaleY: 1.2,
                ease: "none",
                repeat: -1,
                yoyo: true
            });
        });
    }

    // Logo hover animation
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            gsap.to(logo, {
                duration: 0.3,
                scale: 1.1,
                rotation: 5,
                ease: "back.out(1.7)"
            });
        });
        
        logo.addEventListener('mouseleave', () => {
            gsap.to(logo, {
                duration: 0.3,
                scale: 1,
                rotation: 0,
                ease: "back.out(1.7)"
            });
        });
    }

    // Nav links magnetic hover animation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        // Magnetic effect
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(link, {
                duration: 0.3,
                x: x * 0.3,
                y: y * 0.3 - 3,
                ease: "power2.out"
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    // Cover section animation
    const coverDiv = document.querySelector('.cover-div');
    if (coverDiv) {
        gsap.from(coverDiv, {
            scrollTrigger: {
                trigger: coverDiv,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 1.5,
            opacity: 0,
            y: 100,
            ease: "power3.out"
        });
    }

    // Fade in elements on scroll with GSAP ScrollTrigger
    const elementsToAnimate = document.querySelectorAll('.project-card, .skill-category, .gallery-item');
    elementsToAnimate.forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            duration: 1,
            opacity: 0,
            y: 50,
            ease: "power2.out"
        });
    });
});

// Smooth scroll for anchor links with GSAP
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            if (typeof ScrollToPlugin !== 'undefined' && gsap.plugins.scrollTo) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: "power3.inOut"
                });
            } else {
                // Fallback to native smooth scroll
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
