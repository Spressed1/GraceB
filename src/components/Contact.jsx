import React from 'react';
import { motion } from 'framer-motion';
import './Contact.scss';

const contactVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <motion.div
          className="contact__content"
          variants={contactVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 className="contact__title" variants={itemVariants}>
            Contact Us
          </motion.h2>
          
          <motion.div className="contact__details" variants={itemVariants}>
            <div className="contact__company">Alban Roofing</div>
            <div className="contact__address">
              <div>15 Nicholls Close</div>
              <div>Redbourn, St Albans AL3 7HZ</div>
            </div>
            <div className="contact__phone">
              <span className="contact__label">Phone:</span>
              <a href="tel:07504006647" className="contact__link">07504006647</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 