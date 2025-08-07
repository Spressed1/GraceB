import React from 'react';
import './About.scss';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container about__container--side">
        <div className="about__side-img-wrap">
          <img
            className="about__side-img"
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80"
            alt="Team of contractors working together"
          />
        </div>
        <div className="about__side-text">
          <h2 className="about__title">About Grace Contractors</h2>
          <p>
            Grace Building Contractors is a trusted, experienced team dedicated to delivering quality, durable, and reliable construction and property services. We specialize in roofing, renovations, extensions, electrical work, and maintenance, always prioritizing clear communication, honest pricing, and attention to detail. Our skilled professionals treat every home with care and respect, building lasting relationships through integrity and a relentless focus on client satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
} 