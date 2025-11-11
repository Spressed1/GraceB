import React from 'react';
import './About.scss';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container about__container--side">
        <div className="about__side-img-wrap">
          <img
            className="about__side-img"
            src="/gallery/10.JPG"
            alt="Roofing team at work"
          />
        </div>
        <div className="about__side-text">
          <h2 className="about__title">About Three Brothers Roofing</h2>
          <p>
            We are a family-run roofing company serving St Albans and surrounding areas. From new pitched and flat roofs to leak repairs, guttering, fascias and soffits, our focus is long-lasting workmanship, clear communication and tidy jobs. With years of hands-on experience, we use quality materials and treat every home with care and respect.
          </p>
        </div>
      </div>
    </section>
  );
} 