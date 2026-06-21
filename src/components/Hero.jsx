import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    setIsPointerFine(window.matchMedia('(pointer: fine)').matches);
  }, []);

  const handleMouseMove = (e) => {
    if (!isPointerFine) return;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (e.clientX / innerWidth - 0.5) * 20,
      y: (e.clientY / innerHeight - 0.5) * 20,
    });
  };

  return (
    <section id="hero" className="hero container" onMouseMove={handleMouseMove}>
      <div className="split-grid" style={{ width: '100%' }}>
        <motion.div
          className="hero-content"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero-tagline" variants={fadeUp}>
            Flutter Developer
          </motion.span>

          <motion.h1 className="hero-title" variants={fadeUp}>
            Engineering{' '}
            <span className="liquid-text">aesthetic</span>
            <br />software.
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={fadeUp}>
            <span>Flutter Developer</span>
            <span className="typing-cursor" />
          </motion.h2>

          <motion.p className="text-lead" style={{ maxWidth: '480px' }} variants={fadeUp}>
            I design and build smooth, polished mobile and web experiences using Flutter, Firebase, REST APIs, and basic AWS EC2 hosting.
          </motion.p>

          <motion.div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} variants={fadeUp}>
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Work <i className="ph ph-arrow-down" />
            </a>
            <a href={`${import.meta.env.BASE_URL}legacy/Muhammed_Yasir_Resume.pdf`} className="btn btn-secondary" target="_blank" rel="noreferrer" download>
              Download Resume <i className="ph ph-download-simple" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="phone-mockup-wrapper"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={isPointerFine ? {
            transform: `perspective(1000px) rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.5}deg) translateZ(20px)`
          } : {}}
        >
          <div className="star-border" style={{ borderRadius: 'var(--border-radius-lg)', padding: '2px' }}>
            <img
              src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=600&auto=format&fit=crop"
              alt="Code Abstract"
              loading="eager"
              style={{
                width: '100%',
                maxWidth: '420px',
                height: '520px',
                objectFit: 'cover',
                borderRadius: 'calc(var(--border-radius-lg) - 2px)',
                display: 'block'
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <span>Scroll to explore</span>
        <i className="ph ph-caret-down" />
      </motion.div>
    </section>
  );
};

export default Hero;
