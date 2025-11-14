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
            Trusted Local Roofers in St Albans
          </motion.h1>
          <motion.p className="hero__desc" variants={itemVariants}>
            Alban Roofing provides expert roof repairs, new roof installations, flat roofing, guttering and emergency leak fixes across St Albans and nearby areas. Quality materials, tidy workmanship, and reliable service.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
} 