import React from 'react';
import img from '../assets/un296hi3.png'
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Fresh Groceries Delivered to Your Door</h1>
          <p>Shop the best quality products at affordable prices</p>
          <div className="hero-buttons">
            <button className="btn primary">Shop Now</button>
            <button className="btn secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={img} alt="Fresh groceries" />
        </div>
      </div>
    </section>
  );
};

export default Hero;