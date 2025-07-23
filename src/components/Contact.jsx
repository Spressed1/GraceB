import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import './Contact.scss';

const formVariants = {
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
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

  const onSubmit = data => {
    // For demo, just reset the form
    reset();
    alert('Thank you for your enquiry! We will be in touch soon.');
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <motion.div
          className="contact__info"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 className="contact__title" variants={itemVariants}>Contact Us</motion.h2>
          <motion.div className="contact__details" variants={itemVariants}>
            <div>Grace Contractors</div>
            <div>15 Nicholls Close</div>
            <div>Redbourn, St Albans AL3 7HZ</div>
            <div>Phone: <a href="tel:07504006647">07504006647</a></div>
          </motion.div>
        </motion.div>
        <motion.form
          className="contact__form"
          onSubmit={handleSubmit(onSubmit)}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="contact__form-group" variants={itemVariants}>
            <label htmlFor="name">Name</label>
            <input id="name" {...register('name', { required: true })} />
            {errors.name && <span className="contact__error">Required</span>}
          </motion.div>
          <motion.div className="contact__form-group" variants={itemVariants}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...register('email', { required: true })} />
            {errors.email && <span className="contact__error">Required</span>}
          </motion.div>
          <motion.div className="contact__form-group" variants={itemVariants}>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="tel" {...register('phone', { required: true })} />
            {errors.phone && <span className="contact__error">Required</span>}
          </motion.div>
          <motion.div className="contact__form-group" variants={itemVariants}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={4} {...register('message', { required: true })} />
            {errors.message && <span className="contact__error">Required</span>}
          </motion.div>
          <motion.button className="contact__submit" type="submit" variants={itemVariants}>Send Message</motion.button>
          {isSubmitSuccessful && <motion.div className="contact__success" variants={itemVariants}>Thank you! We'll be in touch soon.</motion.div>}
        </motion.form>
      </div>
    </section>
  );
} 