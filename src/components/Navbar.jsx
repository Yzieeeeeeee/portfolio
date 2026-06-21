import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#expertise', id: 'expertise' },
    { label: 'Work', href: '#projects', id: 'projects' },
  ];

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setDrawerOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <motion.nav
        className={`navbar-pill ${scrolled ? '' : 'transparent'}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      >
        <Link to="/" className="nav-logo">MY.</Link>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            <motion.div
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', fontSize: '1.2rem' }}
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M216.7 152.6A98.9 98.9 0 0 1 103.4 39.3a13.4 13.4 0 0 0-15.8-15.6A102.3 102.3 0 1 0 232.3 168.4a13.4 13.4 0 0 0-15.6-15.8Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.1 64.1 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.1 48.1 0 0 0 48-48ZM58.3 58.3a8.1 8.1 0 0 0-11.4 0l-17 17a8.1 8.1 0 0 0 11.4 11.4l17-17a8.1 8.1 0 0 0 0-11.4Zm0 139.4a8.1 8.1 0 0 1-11.4 0l-17-17a8.1 8.1 0 0 1 11.4-11.4l17 17a8.1 8.1 0 0 1 0 11.4ZM197.7 58.3a8.1 8.1 0 0 1 0 11.4l-17 17a8.1 8.1 0 0 1-11.4-11.4l17-17a8.1 8.1 0 0 1 11.4 0Zm0 139.4a8.1 8.1 0 0 0 0-11.4l-17-17a8.1 8.1 0 0 0-11.4 11.4l17 17a8.1 8.1 0 0 0 11.4 0ZM240 120h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16ZM40 120H16a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Zm80 80v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-16 0Z"/></svg>
              )}
            </motion.div>
          </motion.button>

          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact
          </a>

          <button
            className="nav-hamburger"
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Menu"
          >
            <div style={{ display: 'flex', fontSize: '1.8rem' }}>
              {drawerOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M205.7 194.3a8.1 8.1 0 0 1-11.4 11.4L128 139.3l-66.3 66.4a8.1 8.1 0 0 1-11.4-11.4L116.7 128L50.3 61.7a8.1 8.1 0 0 1 11.4-11.4L128 116.7l66.3-66.4a8.1 8.1 0 0 1 11.4 11.4L139.3 128Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Z"/></svg>
              )}
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="nav-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => handleNavClick(e, '#contact')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Get in touch
            </motion.a>

            <motion.button
              className="btn btn-secondary mt-2"
              onClick={() => { toggleTheme(); setDrawerOpen(false); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <div style={{ display: 'flex', fontSize: '1.2rem' }}>
                {theme === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M216.7 152.6A98.9 98.9 0 0 1 103.4 39.3a13.4 13.4 0 0 0-15.8-15.6A102.3 102.3 0 1 0 232.3 168.4a13.4 13.4 0 0 0-15.6-15.8Z"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.1 64.1 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.1 48.1 0 0 0 48-48ZM58.3 58.3a8.1 8.1 0 0 0-11.4 0l-17 17a8.1 8.1 0 0 0 11.4 11.4l17-17a8.1 8.1 0 0 0 0-11.4Zm0 139.4a8.1 8.1 0 0 1-11.4 0l-17-17a8.1 8.1 0 0 1 11.4-11.4l17 17a8.1 8.1 0 0 1 0 11.4ZM197.7 58.3a8.1 8.1 0 0 1 0 11.4l-17 17a8.1 8.1 0 0 1-11.4-11.4l17-17a8.1 8.1 0 0 1 11.4 0Zm0 139.4a8.1 8.1 0 0 0 0-11.4l-17-17a8.1 8.1 0 0 0-11.4 11.4l17 17a8.1 8.1 0 0 0 11.4 0ZM240 120h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16ZM40 120H16a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Zm80 80v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-16 0Z"/></svg>
                )}
              </div>
              {theme === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
