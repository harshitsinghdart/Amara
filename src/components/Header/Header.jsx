import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="header-left">
        <div className="contact-info">
          <p>000 - 123 - 456789</p>
          <p>info@example.com</p>
        </div>
        <p className="address">No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
      </div>
      <div className="header-right">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-pinterest"></i>
        </a>
      </div>
    </header>
    <hr className="header-divider" />
    </>
  );
};

export default Header;