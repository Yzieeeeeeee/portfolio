import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';

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

// Get only featured projects in display order
const featuredOrder = ['snap-shop', 'vigilant', 'expense-tracker', 'inav-technologies', 'revvo', 'rent4u'];
const featuredProjects = featuredOrder
  .filter((slug) => projectsData[slug]?.featured !== false)
  .map((slug) => ({ slug, ...projectsData[slug] }));

const otherProjects = Object.keys(projectsData)
  .filter(key => !featuredOrder.includes(key) || projectsData[key]?.featured === false)
  .map(slug => ({ slug, ...projectsData[slug] }));

function ProjectShowcase({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isReverse = index % 2 !== 0;

  return (
    <section
      className="project-showcase"
      style={{ '--accent': project.accentColor || 'var(--brand-primary)' }}
      id={`project-${project.slug}`}
    >
      <div className={`showcase-content ${isReverse ? 'reverse' : ''}`} ref={ref}>
        {/* Text */}
        <motion.div
          className="showcase-text"
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.span className="project-index" variants={fadeUp}>
            0{index + 1}
          </motion.span>

          <motion.h2 className="text-section" style={{ marginBottom: '0.5rem' }} variants={fadeUp}>
            {project.title}
          </motion.h2>

          <motion.p className="text-lead" style={{ color: 'var(--text-secondary)' }} variants={fadeUp}>
            {project.subtitle}
          </motion.p>

          {project.features && (
            <motion.ul className="feature-list" variants={stagger}>
              {project.features.map((f) => (
                <motion.li key={f} variants={fadeUp}>{f}</motion.li>
              ))}
            </motion.ul>
          )}

          <motion.div className="tech-tags" variants={fadeUp}>
            {project.tags?.slice(0, 5).map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} style={{ marginTop: '1.5rem' }}>
            <Link to={`/project/${project.slug}`} className="btn btn-primary">
              View Details <i className="ph ph-arrow-right" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          className="phone-mockup-wrapper"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="phone-frame" style={{ '--accent': project.accentColor || 'var(--brand-primary)' }}>
            <img
              src={(() => {
                const p = project.phoneScreenshot || project.screenshots?.[1] || project.heroImage;
                return p.startsWith('http') ? p : `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`;
              })()}
              alt={`${project.title} screenshot`}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  // Track active project for dot nav
  useEffect(() => {
    const sections = featuredProjects.map((p) =>
      document.getElementById(`project-${p.slug}`)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target);
            if (idx !== -1) setActiveProject(idx);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => { if (s) observer.observe(s); });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Section header */}
      <section id="projects" className="section-padding container" ref={headerRef}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={headerInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-tagline" style={{ display: 'block', marginBottom: '0.75rem' }}>
            Selected Work
          </span>
          <h2 className="text-section">Projects that ship.</h2>
          <p className="text-muted text-lead" style={{ maxWidth: '500px', margin: '0 auto' }}>
            Production-ready applications with premium UI/UX.
          </p>
        </motion.div>
      </section>

      {/* Fullscreen project showcases */}
      {featuredProjects.map((project, i) => (
        <ProjectShowcase key={project.slug} project={project} index={i} />
      ))}

      {/* Other Projects Section */}
      <section className="section-padding container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-section" style={{ fontSize: '2.5rem' }}>Other Projects</h2>
        </motion.div>

        <div className="skills-grid" style={{ marginTop: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {otherProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              className="glass-card hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 'var(--border-radius-md)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <i className="ph ph-folder" style={{ fontSize: '2.5rem', color: p.accentColor || 'var(--brand-primary)' }} />
                <Link to={`/project/${p.slug}`} style={{ color: 'var(--text-primary)' }}>
                  <i className="ph ph-arrow-up-right hover-lift" style={{ fontSize: '1.5rem' }} />
                </Link>
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{p.title}</h3>
              <p className="text-muted" style={{ fontSize: '0.95rem', flexGrow: 1 }}>{p.shortDescription.substring(0, 120)}...</p>
              <div className="tech-tags" style={{ marginTop: '1.5rem', gap: '0.5rem' }}>
                {p.tags?.slice(0, 3).map((t) => (
                  <span key={t} className="tech-tag" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Side dot navigation */}
      <div className="project-dot-nav">
        {featuredProjects.map((p, i) => (
          <button
            key={p.slug}
            className={`dot ${activeProject === i ? 'active' : ''}`}
            onClick={() => {
              document.getElementById(`project-${p.slug}`)?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label={p.title}
            title={p.title}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
