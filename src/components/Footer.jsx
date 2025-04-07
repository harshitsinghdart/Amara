import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <h1 className="footer-logo">Sirpi</h1>
          <p>Curabitur et finibus nunc. Aliquam volutpat. Sed ac pulvinar sapien.</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        <div className="footer-section contact-section">
          <h3>Contact</h3>
          <p><i className="fas fa-phone"></i> +001 23456789</p>
          <p><i className="fas fa-envelope"></i> sirpi@example.com</p>
          <p><i className="fas fa-map-marker-alt"></i> No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
        </div>
        <div className="footer-section links-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter-section">
          <h3>Newsletter</h3>
          <p>GET IN TOUCH</p>
          <form>
            <input type="email" placeholder="Your Email" />
            <button type="submit">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Sirpi Wedesigntech</p>
        <div className="payment-icons">
          <img src="visa.png" alt="Visa" />
          <img src="mastercard.png" alt="MasterCard" />
          <img src="applepay.png" alt="Apple Pay" />
          <img src="amex.png" alt="Amex" />
          <img src="skrill.png" alt="Skrill" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;