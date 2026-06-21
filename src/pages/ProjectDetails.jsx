import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projectsData';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData[id];
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="container section-padding" style={{ textAlign: 'center', marginTop: '20vh' }}>
        <h2>Project not found</h2>
        <Link to="/" className="btn btn-primary mt-4">Return Home</Link>
      </div>
    );
  }

  const isDarkHero = project.heroImageType !== 'none';

  return (
    <div className="project-details-page">
      {/* Floating Back Button */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }} 
        style={{ position: 'fixed', top: '2rem', left: '2rem', zIndex: 100 }}
      >
        <Link to="/" className="back-btn hover-lift" style={{ 
          display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', 
          color: isDarkHero ? '#ffffff' : 'var(--text-primary)', 
          padding: '0.7rem 1.4rem', borderRadius: '30px', 
          background: isDarkHero ? 'rgba(0,0,0,0.4)' : 'var(--glass-bg)', 
          backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', 
          border: `1px solid ${isDarkHero ? 'rgba(255,255,255,0.1)' : 'var(--glass-border)'}`, 
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', fontWeight: '500', fontSize: '0.95rem' 
        }}>
          <i className="ph-fill ph-house" style={{ fontSize: '1.2rem' }}></i> Home
        </Link>
      </motion.div>

      <main>
        {/* Cinematic Hero */}
        <section className="project-hero" style={{ 
          position: 'relative', height: '80vh', minHeight: '600px', 
          display: 'flex', alignItems: 'flex-end', paddingBottom: '4rem',
          overflow: 'hidden'
        }}>
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
          >
            {project.heroImageType === 'none' ? (
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }} />
            ) : project.heroImageType === 'logo' && project.screenshots?.[1] ? (
              <img src={`/${project.screenshots[1]}`} alt="Project Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2) blur(8px)' }} />
            ) : project.heroImageType === 'screenshot' ? (
              <img src={project.heroImage.startsWith('http') ? project.heroImage : `/${project.heroImage}`} alt="Project Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3) blur(2px)' }} />
            ) : (
              <img src={project.heroImage.startsWith('http') ? project.heroImage : `/${project.heroImage}`} alt="Project Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }} />
            )}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '70%', background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)' }}></div>
          </motion.div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ maxWidth: '800px' }}>
              <motion.div variants={itemVariants} className="tag-container mb-3">
                {project.tags.slice(0, 4).map(tag => (
                  <span key={tag} className="tag" style={{ 
                    background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' 
                  }}>{tag}</span>
                ))}
              </motion.div>
              <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', margin: '0 0 1rem 0', lineHeight: 1.1, color: '#fff', letterSpacing: '-0.03em' }}>
                {project.title}
              </motion.h1>
              <motion.h3 variants={itemVariants} style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 400, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                {project.subtitle}
              </motion.h3>
            </motion.div>
          </div>
        </section>

        {/* Metadata Bento Bar */}
        <section className="container" style={{ marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}
          >
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--border-radius-md)' }}>
              <span className="text-muted d-block text-sm uppercase tracking-wider mb-1">Status</span>
              <span className="gradient-text" style={{ fontSize: '1.2rem', fontWeight: '600' }}>{project.projectStatus}</span>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--border-radius-md)' }}>
              <span className="text-muted d-block text-sm uppercase tracking-wider mb-1">Timeline</span>
              <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>{project.timeline}</span>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--border-radius-md)' }}>
              <span className="text-muted d-block text-sm uppercase tracking-wider mb-1">Platforms</span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.platformSupport.map(platform => (
                  <span key={platform} style={{ fontSize: '1rem', fontWeight: '500' }}>{platform}</span>
                ))}
              </div>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--border-radius-md)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
               {project.repoLink && project.repoLink !== "#" && (
                <a href={project.repoLink} className="btn btn-secondary w-100" target="_blank" rel="noreferrer" style={{ padding: '0.8rem' }}>
                  <i className="ph ph-github-logo" style={{ fontSize: '1.5rem' }}></i> Source
                </a>
               )}
               {project.downloadLink && project.downloadLink !== "#" && (
                <a href={project.downloadLink.startsWith('http') || project.downloadLink.startsWith('/') ? project.downloadLink : `/${project.downloadLink}`} className="btn btn-primary w-100" download style={{ padding: '0.8rem' }}>
                  <i className="ph ph-download-simple" style={{ fontSize: '1.5rem' }}></i> App
                </a>
               )}
            </div>
          </motion.div>
        </section>

        {/* Overview & Achievements */}
        <section className="section-padding container mt-5">
          <div className="split-grid" style={{ alignItems: 'start' }}>
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>The Vision</h2>
              <p className="text-lead text-muted" style={{ lineHeight: 1.8 }}>{project.shortDescription}</p>
              {project.description && <p className="text-muted" style={{ lineHeight: 1.8, marginTop: '1.5rem' }}>{project.description}</p>}
            </motion.div>

            <motion.div 
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
            >
              <h3 className="mb-4" style={{ fontSize: '2rem' }}>Achievements</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.technicalAchievements?.map((feature, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="glass-card hover-lift" style={{ padding: '1.5rem', borderRadius: 'var(--border-radius-md)', borderLeft: `4px solid ${project.accentColor || 'var(--brand-primary)'}` }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                      <i className={`ph ${feature.icon}`} style={{ color: project.accentColor || 'var(--brand-primary)', fontSize: '1.5rem' }}></i> {feature.title}
                    </h4>
                    <p className="text-muted m-0" style={{ fontSize: '0.95rem' }}>{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Deep Dive Section */}
        {(project.firebaseIntegration || project.backendArchitecture) && (
          <section className="section-padding container">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="aurora-border" style={{ borderRadius: 'var(--border-radius-lg)' }}
            >
              <div className="glass-card p-5" style={{ borderRadius: 'var(--border-radius-lg)', background: 'var(--bg-secondary)' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}><i className="ph ph-code" style={{ color: 'var(--brand-primary)' }}></i> Architecture Deep Dive</h3>
                <div className="split-grid">
                  {project.firebaseIntegration && (
                    <div style={{ padding: '1rem' }}>
                      <h4 style={{ color: '#FFCA28', fontSize: '1.5rem', marginBottom: '1rem' }}><i className="ph ph-fire"></i> {project.firebaseIntegration.title}</h4>
                      <p className="text-muted text-lead">{project.firebaseIntegration.description}</p>
                    </div>
                  )}
                  {project.backendArchitecture && (
                    <div style={{ padding: '1rem' }}>
                      <h4 style={{ color: 'var(--brand-secondary)', fontSize: '1.5rem', marginBottom: '1rem' }}><i className="ph ph-tree-structure"></i> {project.backendArchitecture.title}</h4>
                      <p className="text-muted text-lead">{project.backendArchitecture.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Screenshots Gallery */}
        <section className="section-padding container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-5">
            <h2 style={{ fontSize: '3rem' }}>Gallery.</h2>
          </motion.div>
          
          {(!project.screenshots || project.screenshots.length === 0) ? (
            <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center w-100 py-5">
              <div className="glass-card" style={{ padding: '4rem', borderRadius: 'var(--border-radius-lg)', background: 'rgba(255,255,255,0.02)' }}>
                <i className="ph ph-image text-muted" style={{ fontSize: '4rem', marginBottom: '1rem' }}></i>
                <h3 className="text-muted" style={{ fontSize: '1.8rem', margin: 0 }}>Gallery Coming Soon</h3>
                <p className="text-muted mt-2" style={{ fontSize: '1.1rem' }}>Screenshots and media for this project are being prepared.</p>
              </div>
            </motion.div>
          ) : (
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="bento-grid">
              {project.screenshots.map((src, idx) => {
                const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');
                const colSpan = idx === 0 || idx === 3 ? 'span-2' : '';
                const source = src.startsWith('http') ? src : `/${src}`;
                
                return (
                  <motion.div key={idx} variants={itemVariants} className={`glass-card hover-lift ${colSpan}`} style={{ overflow: 'hidden', borderRadius: 'var(--border-radius-md)', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
                    {isVideo ? (
                      <video src={source} autoPlay loop muted playsInline controls style={{ width: '100%', maxHeight: '600px', objectFit: 'contain', display: 'block', borderRadius: '8px' }}></video>
                    ) : (
                      <img 
                        src={source} 
                        alt={`${project.title} screenshot ${idx + 1}`} 
                        loading="lazy"
                        style={{ width: '100%', maxHeight: '700px', objectFit: 'contain', display: 'block', borderRadius: '8px', cursor: 'zoom-in', transition: 'transform 0.5s ease' }} 
                        onClick={() => setSelectedImage(source)}
                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.95)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'zoom-out', backdropFilter: 'blur(10px)' }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={selectedImage}
              alt="Fullscreen screenshot"
              style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }}
            />
            <button 
              style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '50px', height: '50px', color: '#fff', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)' }}
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <i className="ph ph-x"></i>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;
