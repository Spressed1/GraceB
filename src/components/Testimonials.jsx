import React from 'react';
import './Testimonials.scss';

const testimonials = [
  {
    name: 'Sarah T.',
    text: 'Alban Roofing were professional, friendly, and did a fantastic job replacing our old roof. Highly recommended!',
    avatar: ''
  },
  {
    name: 'James L.',
    text: 'Quick response and quality repairs after a leak. The team explained everything and left the site spotless.',
    avatar: ''
  },
  {
    name: 'Helen P.',
    text: 'We used Alban for flat roofing and guttering. Excellent service and great value for money.',
    avatar: ''
  },
];

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">What Our Customers Say</h2>
        <div className="testimonials__grid">
          {testimonials.map((t, idx) => (
            <div className="testimonials__card" key={idx}>
              <div className="testimonials__avatar">{getInitials(t.name)}</div>
              <p className="testimonials__text">“{t.text}”</p>
              <div className="testimonials__name">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 