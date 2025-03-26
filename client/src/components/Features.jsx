import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Get your order delivered within 24 hours'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Competitive prices with weekly discounts'
    },
    {
      icon: '🌱',
      title: 'Fresh Products',
      description: 'Sourced directly from local farmers'
    },
    {
      icon: '🔄',
      title: 'Easy Returns',
      description: '30-day return policy for all products'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;