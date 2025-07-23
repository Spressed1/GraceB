import React from 'react';
import { motion } from 'framer-motion';
import './Services.scss';

const icons = [
  // SVGs for each service
  (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="16" width="24" height="8" rx="2" fill="#e60000"/><rect x="8" y="8" width="16" height="8" rx="2" fill="#fff" stroke="#e60000" strokeWidth="2"/></svg>
  ), // Home Renovations
  (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><polygon points="16,6 28,16 26,18 16,10 6,18 4,16 16,6" fill="#e60000"/><rect x="10" y="18" width="12" height="8" rx="2" fill="#fff" stroke="#e60000" strokeWidth="2"/></svg>
  ), // Extensions & Conversions
  (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="6" y="20" width="20" height="4" rx="2" fill="#e60000"/><rect x="6" y="12" width="20" height="6" rx="2" fill="#fff" stroke="#e60000" strokeWidth="2"/></svg>
  ), // Kitchen & Bathroom Fitting
  (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="4" rx="2" fill="#e60000"/><rect x="8" y="16" width="16" height="8" rx="2" fill="#fff" stroke="#e60000" strokeWidth="2"/></svg>
  ), // Property Maintenance
  (
    <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="6" y="10" width="20" height="4" rx="2" fill="#e60000"/><rect x="10" y="16" width="12" height="8" rx="2" fill="#fff" stroke="#e60000" strokeWidth="2"/></svg>
  ), // General Repairs
];

const services = [
  {
    title: 'Home Renovations',
    desc: 'Transform your living space with expert renovations tailored to your needs.'
  },
  {
    title: 'Extensions & Conversions',
    desc: 'Add space and value to your property with quality extensions and loft/garage conversions.'
  },
  {
    title: 'Kitchen & Bathroom Fitting',
    desc: 'Professional installation of kitchens and bathrooms, from design to finish.'
  },
  {
    title: 'Property Maintenance',
    desc: 'Reliable maintenance services to keep your home or business in top condition.'
  },
  {
    title: 'General Repairs',
    desc: 'All types of repairs, big or small, carried out by skilled contractors.'
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <h2 className="services__title">Our Services</h2>
        <motion.div
          className="services__grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {services.map((service, idx) => (
            <motion.div className="services__card" key={idx} variants={cardVariants}>
              <div className="services__card-content">
                <div className="services__icon">{icons[idx]}</div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-desc">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 