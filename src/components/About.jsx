import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const aboutSections = [
  {
    title: 'Our Story',
    text: 'Founded in Hertfordshire, Grace Contractors has grown from a small family business into a trusted name for all types of building and renovation work. Our journey is built on hard work, word-of-mouth, and a passion for quality craftsmanship.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    alt: 'Team of contractors working together',
  },
  {
    title: 'Our Values',
    text: 'We believe in honesty, reliability, and treating every project as if it were our own. Our team is committed to clear communication, fair pricing, and delivering results that last for years to come.',
    img: 'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&w=600&q=80',
    alt: 'Handshake with client',
  },
  {
    title: 'Local Expertise',
    text: 'With deep roots in Hertfordshire, we understand the unique needs of local properties and our community. We’re proud to serve our neighbours with dependable, high-quality work across all aspects of construction and maintenance.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    alt: 'Hertfordshire landscape',
  },
];

const imgVariants = {
  hidden: { opacity: 0, scale: 1.15 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const textVariants = [
  {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  },
  {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">About Grace Contractors</h2>
        <div className="about__sections">
          {aboutSections.map((section, idx) => (
            <div
              className={`about__section${idx % 2 === 1 ? ' about__section--reverse' : ''}`}
              key={section.title}
            >
              <motion.div
                className="about__img-wrap"
                variants={imgVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <img src={section.img} alt={section.alt} className="about__img" />
              </motion.div>
              <motion.div
                className="about__text-wrap"
                variants={textVariants[idx % 2]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3 className="about__section-title">{section.title}</h3>
                <p className="about__section-text">{section.text}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 