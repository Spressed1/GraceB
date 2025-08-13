import React from 'react';
import { motion } from 'framer-motion';
import './Services.scss';

const serviceSections = [
  {
    title: 'Roofing',
    text: 'Complete roofing solutions including repairs, replacements, and maintenance. From minor fixes to full roof installations, we ensure your home stays protected with quality materials and expert craftsmanship.',
    img: '/gallery/9.JPG',
    alt: 'Roofing work in progress',
  },
  {
    title: 'House Renovations & Extensions',
    text: 'Transform your living space with comprehensive renovation services and custom extensions. We handle everything from kitchen and bathroom remodels to full house extensions, adding both space and value to your property.',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    alt: 'House extension construction',
  },
  {
    title: 'Electrical Services',
    text: 'Professional electrical work including installations, upgrades, and repairs. Our certified electricians ensure all work meets safety standards while providing reliable, efficient electrical solutions for your home.',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
    alt: 'Electrical installation work',
  },
  {
    title: 'Property Maintenance & General Repairs',
    text: 'Comprehensive maintenance and repair services to keep your property in top condition. From routine maintenance to emergency repairs, we provide reliable solutions for all your property care needs.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    alt: 'Property maintenance work',
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
                <img src={section.img} alt={section.alt} className="services__img" />
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