import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import './Hero.scss';

const heroVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__overlay">
        <motion.div
          className="hero__content"
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          <motion.h1 className="hero__title" variants={itemVariants}>
            Trusted Local Contractors in Hertfordshire
          </motion.h1>
          <motion.p className="hero__desc" variants={itemVariants}>
            Grace Contractors is your reliable partner for renovations, extensions, repairs, and all general building work in Hertfordshire. Years of experience, quality workmanship, and a commitment to your satisfaction.
          </motion.p>
          <motion.div variants={itemVariants}>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="hero__cta"
            >
              Get a Free Quote
            </ScrollLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 