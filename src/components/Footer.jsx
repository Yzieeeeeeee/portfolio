import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="nav-logo" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>MY.</div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
              © {new Date().getFullYear()} Muhammed Yasir.
              <br />
              Designed with precision.
            </p>
          </div>

          <div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Built with React · Framer Motion · Vite
            </p>
            <div className="footer-social">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/Yzieeeeeeee"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="ph ph-github-logo" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/muhammed-yasie/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="ph ph-linkedin-logo" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:muhammedyasir3819@gmail.com"
                aria-label="Email"
              >
                <i className="ph ph-envelope" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="ph ph-caret-up" />
      </button>
    </>
  );
};

export default Footer;
