import React from 'react';
import { motion } from 'framer-motion';
import './Services.scss';

const serviceSections = [
  {
    title: 'New Roof Installations',
    text: 'Expert installation of pitched and flat roofs using quality tiles, slates, and modern flat roofing systems for long-lasting protection and a tidy finish.',
    img: '/gallery/13.JPG',
    alt: 'New roof installation',
  },
  {
    title: 'Roof Repairs',
    text: 'From slipped tiles and storm damage to persistent leaks, we diagnose issues quickly and carry out durable repairs to protect your home.',
    img: '/gallery/9.JPG',
    alt: 'Roof repair in progress',
  },
  {
    title: 'Flat Roofing (GRP Resin)',
    text: 'High-performance flat roofing systems with GRP Resin, installed with care and guaranteed workmanship.',
    img: '/gallery/flat-roof.jpg',
    alt: 'Flat roofing installation',
  },
  {
    title: 'Guttering, Fascias & Soffits',
    text: 'Supply and fit of uPVC or aluminium gutters, fascias and soffits. Keep rainwater flowing and improve kerb appeal.',
    img: '/gallery/16.JPG',
    alt: 'New gutters and fascias',
  },
  {
    title: 'Chimney Repairs & Leadwork',
    text: 'Repointing, capping, flashing and leadwork to keep chimneys and roof junctions watertight and secure.',
    img: '/gallery/chimney.jpg',
    alt: 'Leadwork around chimney',
  },
  {
    title: 'Emergency Roof Repairs',
    text: 'Rapid response for urgent leaks and storm damage across St Albans and nearby areas. Temporary and permanent fixes available.',
    img: '/gallery/12.JPG',
    alt: 'Emergency roof repair',
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

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <h2 className="services__title">Our Services</h2>
        <div className="services__sections">
          {serviceSections.map((section, idx) => (
            <div
              className={`services__section${idx % 2 === 1 ? ' services__section--reverse' : ''}`}
              key={section.title}
            >
              <motion.div
                className="services__img-wrap"
                variants={imgVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <img
                  src={section.img}
                  alt={section.alt}
                  className={"services__img"}
                />
              </motion.div>
              <motion.div
                className="services__text-wrap"
                variants={textVariants[idx % 2]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3 className="services__section-title">{section.title}</h3>
                <p className="services__section-text">{section.text}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 