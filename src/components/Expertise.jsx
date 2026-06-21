import React, { useRef } from 'react';
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

const categories = [
  {
    icon: 'ph-device-mobile',
    title: 'Mobile Development',
    description: 'Premium Flutter apps with complex UIs and native hardware integrations.',
    tags: ['Flutter', 'Dart', 'Native Integrations', 'Complex UI'],
  },
  {
    icon: 'ph-tree-structure',
    title: 'Architecture',
    description: 'Maintainable systems with clean patterns.',
    tags: ['MVVM', 'Clean Architecture', 'Repository Pattern'],
  },
  {
    icon: 'ph-lightning',
    title: 'State Management',
    description: 'Efficient data flow and reactive state.',
    tags: ['Provider', 'Riverpod', 'Bloc', 'GetX'],
  },
  {
    icon: 'ph-plugs-connected',
    title: 'Backend Integration',
    description: 'Secure APIs and real-time data sync.',
    tags: ['REST APIs', 'Dio', 'Node.js', 'MySQL'],
  },
  {
    icon: 'ph-database',
    title: 'Backend Setup',
    description: 'Basic AWS EC2 hosting and Firebase.',
    tags: ['Firebase', 'AWS EC2', 'REST APIs', 'Postman'],
  },
];

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="expertise" className="section-padding container">
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <span className="hero-tagline" style={{ display: 'block', marginBottom: '0.75rem' }}>
          Technical Expertise
        </span>
        <h2 className="text-section">A comprehensive toolkit.</h2>
        <p className="text-muted text-lead" style={{ maxWidth: '500px', margin: '0 auto' }}>
          Spanning mobile development, cloud infrastructure, and everything in between.
        </p>
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={stagger}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            className="skill-card"
            variants={fadeUp}
            whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.12)' }}
          >
            <i className={`ph ${cat.icon} skill-icon`} />
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{cat.title}</h3>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>{cat.description}</p>
            </div>
            <div className="skill-tags">
              {cat.tags.map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Expertise;
