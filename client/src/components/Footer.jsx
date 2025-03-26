import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>
              <span className="footer-logo">Simple Supermarket</span>
            </h3>
            <p className="footer-description">
              Your one-stop shop for fresh groceries and household essentials. 
              We deliver quality products straight to your doorstep.
            </p>
            <div className="footer-payment-methods">
              <span>We accept:</span>
              <div className="payment-icons">
                <span className="payment-icon">Visa</span>
                <span className="payment-icon">MC</span>
                <span className="payment-icon">PayPal</span>
              </div>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">
                  <FaArrowRight className="link-icon" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <FaArrowRight className="link-icon" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <FaArrowRight className="link-icon" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <FaArrowRight className="link-icon" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="footer-contact-info">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Market Street, Cityville, CV 12345</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:info@simplesupermarket.com">info@simplesupermarket.com</a>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" />
                <a href="tel:+1234567890">(123) 456-7890</a>
              </li>
            </ul>
            <div className="footer-hours">
              <h5>Opening Hours:</h5>
              <p>Mon-Fri: 8AM - 9PM</p>
              <p>Sat-Sun: 9AM - 8PM</p>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p className="newsletter-text">
              Subscribe to get updates on special offers and new products.
            </p>
            <form className="newsletter-form">
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn newsletter-btn">
                  Subscribe
                </button>
              </div>
            </form>
            <div className="footer-social">
              <h5>Follow Us:</h5>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Simple Supermarket. All rights reserved.
            <span className="footer-links">
              <Link to="/privacy">Privacy Policy</Link> | 
              <Link to="/terms">Terms of Service</Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;