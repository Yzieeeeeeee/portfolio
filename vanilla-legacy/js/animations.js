/**
 * Advanced Animations ("React Bits" style mimicking)
 */

class AnimationManager {
    constructor() {
        this.initScrollReveal();
        this.initStaggeredReveals();
        this.initMagneticButtons();
        this.initCardGlare();
        this.initTypingEffect();
        this.initSpotlightCards();
        this.initBlurReveal();
        this.initSpringReveal();
        this.initParticles();
    }

    initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        revealElements.forEach(el => observer.observe(el));
    }

    initBlurReveal() {
        const blurElements = document.querySelectorAll('.blur-reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });

        blurElements.forEach(el => observer.observe(el));
    }

    initSpringReveal() {
        const springElements = document.querySelectorAll('.spring-reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });

        springElements.forEach(el => observer.observe(el));
    }

    initStaggeredReveals() {
        const containers = document.querySelectorAll('.stagger-container');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    const items = entry.target.querySelectorAll('.reveal-item, .blur-reveal, .spring-reveal');
                    items.forEach((item, index) => {
                        // Avoid overriding custom inline delays if they exist
                        if (!item.style.transitionDelay) {
                            item.style.transitionDelay = `${index * 0.1}s`;
                        }
                    });
                }
            });
        }, { threshold: 0.1 });

        containers.forEach(container => observer.observe(container));
    }

    initMagneticButtons() {
        const magnets = document.querySelectorAll('.magnetic-wrap');
        
        magnets.forEach(magnet => {
            magnet.addEventListener('mousemove', (e) => {
                const rect = magnet.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // Max pull
                const pullX = x * 0.3;
                const pullY = y * 0.3;
                
                magnet.style.transform = `translate(${pullX}px, ${pullY}px)`;
            });

            magnet.addEventListener('mouseleave', () => {
                magnet.style.transform = `translate(0px, 0px)`;
                magnet.style.transition = `transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)`;
            });
            
            magnet.addEventListener('mouseenter', () => {
                magnet.style.transition = `none`;
            });
        });
    }

    initCardGlare() {
        const cards = document.querySelectorAll('.glare-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate rotation for 3D effect
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                
                // Move glare
                const glare = card.querySelector('.glare-overlay');
                if (glare) {
                    glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15) 0%, transparent 60%)`;
                }
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
                card.style.transition = `transform 0.5s ease`;
                setTimeout(() => { card.style.transition = `none`; }, 500);
            });
        });
    }

    initSpotlightCards() {
        const cards = document.querySelectorAll('.spotlight-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Set custom properties for CSS radial gradient
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }

    initTypingEffect() {
        const textElement = document.querySelector('.typing-text');
        if (!textElement) return;

        const phrases = [
            "Flutter Developer",
            "Mobile App Engineer",
            "Firebase Specialist",
            "Cloud Innovator"
        ];
        
        let phraseIndex = 0;
        let letterIndex = 0;
        let currentText = "";
        let isDeleting = false;

        const type = () => {
            const fullPhrase = phrases[phraseIndex];

            if (isDeleting) {
                currentText = fullPhrase.substring(0, letterIndex - 1);
                letterIndex--;
            } else {
                currentText = fullPhrase.substring(0, letterIndex + 1);
                letterIndex++;
            }

            textElement.textContent = currentText;

            let typingSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && currentText === fullPhrase) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && currentText === "") {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        };

        setTimeout(type, 1000);
    }

    initParticles() {
        const canvas = document.getElementById('particles-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        
        const resize = () => {
            width = canvas.parentElement.offsetWidth;
            height = canvas.parentElement.offsetHeight;
            canvas.width = width;
            canvas.height = height;
        };
        
        window.addEventListener('resize', resize);
        resize();
        
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2;
                // Slightly blueish white to match the theme
                this.color = document.documentElement.getAttribute('data-theme') === 'light' 
                    ? `rgba(15, 23, 42, ${Math.random() * 0.1})` 
                    : `rgba(19, 185, 253, ${Math.random() * 0.3})`;
            }
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }
        
        const init = () => {
            particles = [];
            // Calculate particle count based on screen size (roughly 1 per 10000px^2)
            const count = Math.min(Math.floor((width * height) / 15000), 100);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };
        
        init();
        
        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            
            // Re-check theme occasionally or rely on variable
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            
            // Draw connecting lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = isLight 
                            ? `rgba(15, 23, 42, ${0.05 * (1 - distance/120)})`
                            : `rgba(19, 185, 253, ${0.1 * (1 - distance/120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        };
        
        animate();
        
        // Handle theme change to update particle colors
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    init(); // Reinitialize particles with new theme colors
                }
            });
        });
        
        observer.observe(document.documentElement, { attributes: true });
    }
}

window.AnimationManager = AnimationManager;
