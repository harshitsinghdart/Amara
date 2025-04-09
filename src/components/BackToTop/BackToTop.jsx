// components/BackToTop.js
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css'; // Import the CSS

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp className="arrow-icon" />
      </div>
    )
  );
};

export default BackToTop;
