import React, { useRef, useState, useEffect } from 'react';
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

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const duration = 1200;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { label: 'Projects', value: 8, suffix: '+' },
  { label: 'Technologies', value: 15, suffix: '+' },
  { label: 'Platforms', value: 4, suffix: '' },
  { label: 'Years learning', value: 1, suffix: '+' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding container">
      <div className="split-grid" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="aurora-border" style={{ borderRadius: 'var(--border-radius-lg)' }}>
            <div
              className="project-image glare-card"
              style={{
                height: '480px',
                margin: 0,
                borderRadius: 'var(--border-radius-lg)',
                overflow: 'hidden'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
                alt="Workspace"
                loading="lazy"
                style={{ borderRadius: 'var(--border-radius-lg)' }}
              />
              <div className="glare-overlay" />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.span
            className="hero-tagline"
            variants={fadeUp}
            style={{ display: 'block', marginBottom: '0.75rem' }}
          >
            About Me
          </motion.span>

          <motion.h2 className="text-section" variants={fadeUp}>
            The Engineer <br />Behind the Code.
          </motion.h2>

          <motion.p className="text-lead" variants={fadeUp}>
            I am Muhammed Yasir, a Flutter Developer focused on bridging the gap between beautiful design
            theory and flawless technical execution.
          </motion.p>

          <motion.p variants={fadeUp}>
            My expertise includes Dart, Firebase backend setup, REST APIs, Postman, AWS EC2 hosting, and Clean Architecture. I enjoy
            transforming ideas into production-ready applications that not only solve real-world problems
            but provide a delightful user experience.
          </motion.p>

          {/* Stats */}
          <motion.div className="stats-row" variants={stagger}>
            {stats.map((stat) => (
              <motion.div key={stat.label} className="stat-item" variants={fadeUp}>
                <div className="stat-number">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
