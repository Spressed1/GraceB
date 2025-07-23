import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.scss';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Testimonials', to: 'testimonials' },
  { label: 'Contact', to: 'contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inContact, setInContact] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      const contactSection = document.getElementById('contact');
      const header = headerRef.current;
      if (!contactSection || !header) return;
      const contactRect = contactSection.getBoundingClientRect();
      const headerRect = header.getBoundingClientRect();
      // Check if header is overlapping the contact section
      setInContact(
        contactRect.top < headerRect.bottom &&
        contactRect.bottom > headerRect.top
      );
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // run on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClass = `header${scrolled ? ' header--scrolled' : ''}${inContact ? ' header--in-contact' : ''}`;

  return (
    <header className={headerClass} ref={headerRef}>
      <div className="header__row">
        <div className="header__logo">
          <span className="header__logo-main">Grace</span>
          <span className="header__logo-sub"> <span className="desktop-only">Contractors</span></span>
        </div>
        {/* Hamburger for mobile */}
        <motion.button
          className="header__hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(v => !v)}
          layoutId="hamburger-menu"
          initial={false}
          animate={menuOpen ? 'open' : 'closed'}
        >
          <motion.span className="bar" layoutId="bar1" animate={menuOpen ? 'open' : 'closed'} />
          <motion.span className="bar" layoutId="bar2" animate={menuOpen ? 'open' : 'closed'} />
          <motion.span className="bar" layoutId="bar3" animate={menuOpen ? 'open' : 'closed'} />
        </motion.button>
      </div>
      {/* Desktop Nav */}
      <nav className="header__nav header__nav--desktop">
        {navLinks.map(link => (
          <ScrollLink
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-80}
            className="header__nav-link"
            activeClass="active"
            spy={true}
          >
            {link.label}
          </ScrollLink>
        ))}
      </nav>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        offset={-80}
        className="header__cta header__cta--desktop"
      >
        Free Quote
      </ScrollLink>
      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="header__nav-mobile"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            layoutId="hamburger-menu"
          >
            <button
              className="header__close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
            <ul>
              {navLinks.map(link => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="header__nav-link header__nav-link--mobile"
                    activeClass="active"
                    spy={true}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="header__cta header__cta--mobile"
              onClick={() => setMenuOpen(false)}
            >
              Free Quote
            </ScrollLink>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
} 