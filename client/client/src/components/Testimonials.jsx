import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      content: 'The quality of fruits and vegetables is always excellent. Delivery is fast and reliable!',
      rating: '★★★★★'
    },
    {
      name: 'Michael Chen',
      role: 'Local Chef',
      content: 'I source all my ingredients from Simple Supermarket. Their organic selection is unmatched.',
      rating: '★★★★☆'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Busy Mom',
      content: 'Saves me so much time! The mobile app makes reordering my staples super easy.',
      rating: '★★★★★'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="rating">{testimonial.rating}</div>
              <p className="content">"{testimonial.content}"</p>
              <div className="author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;