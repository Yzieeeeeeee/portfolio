import React, { useRef, useState } from 'react';
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

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send Message');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    const formData = new FormData(e.target);
    formData.append('access_key', '311eb58a-6e46-4c23-b77c-ad823df48cfa'); // User's Web3Forms key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setButtonText('Sent!');
        e.target.reset();
      } else {
        console.error("Form error", data);
        setButtonText('Error. Try Again.');
      }
    } catch (error) {
      console.error(error);
      setButtonText('Error. Try Again.');
    }

    setTimeout(() => setButtonText('Send Message'), 3000);
  };

  return (
    <section id="contact" className="section-padding container" ref={ref}>
      <div className="contact-card split-grid">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="availability-badge" variants={fadeUp}>
            <span className="pulse-dot" />
            Available for new projects
          </motion.div>

          <motion.h2 className="text-section" variants={fadeUp}>
            Let's build <br />
            <span className="shiny-text">something iconic.</span>
          </motion.h2>

          <motion.p className="text-lead" variants={fadeUp}>
            Currently available for freelance projects and exciting full-time opportunities.
          </motion.p>

          <motion.ul
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}
            variants={stagger}
          >
            <motion.li variants={fadeUp}>
              <a
                href="mailto:muhammedyasir3819@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1rem', color: 'var(--text-secondary)' }}
              >
                <i className="ph ph-envelope gradient-text" style={{ fontSize: '1.3rem' }} />
                muhammedyasir3819@gmail.com
              </a>
            </motion.li>
            <motion.li variants={fadeUp}>
              <a
                href="https://www.linkedin.com/in/muhammed-yasie/"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1rem', color: 'var(--text-secondary)' }}
              >
                <i className="ph ph-linkedin-logo gradient-text" style={{ fontSize: '1.3rem' }} />
                LinkedIn Profile
              </a>
            </motion.li>
            <motion.li variants={fadeUp}>
              <a
                href="https://github.com/Yzieeeeeeee"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1rem', color: 'var(--text-secondary)' }}
              >
                <i className="ph ph-github-logo gradient-text" style={{ fontSize: '1.3rem' }} />
                GitHub Repository
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <input type="text" id="name" name="name" className="form-input" required placeholder=" " />
              <label htmlFor="name" className="form-label">Your Name</label>
            </div>
            <div className="form-field">
              <input type="email" id="email" name="email" className="form-input" required placeholder=" " />
              <label htmlFor="email" className="form-label">Email Address</label>
            </div>
            <div className="form-field">
              <textarea id="message" name="message" className="form-input" required placeholder=" " />
              <label htmlFor="message" className="form-label">Project Details</label>
            </div>
            <button type="submit" className="btn btn-primary w-100" style={{ minHeight: '48px' }}>
              {buttonText}
              {buttonText === 'Send Message' && <i className="ph ph-paper-plane-right" />}
              {buttonText === 'Sending...' && <i className="ph ph-spinner" style={{ animation: 'spin 1s linear infinite' }} />}
              {buttonText === 'Sent!' && <i className="ph ph-check" />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
