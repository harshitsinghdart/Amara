import React, { useEffect, useState } from 'react';
import './ImageSlider.css';
import { Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Insta-Img-5.webp',
  'https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-instagram-2.webp',
  'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Insta-Img-5.webp',
  'https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-instagram-2.webp',
  'https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-instagram-2.webp',
  'https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-instagram-2.webp',
  'https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-instagram-2.webp',
  'https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-instagram-2.webp',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3s delay

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <motion.div
        className="slider-track"
        animate={{ x: -currentIndex * 180 }} // 180px per image
        transition={{ duration: 0.9, ease: 'easeInOut' }}
      >
        {images.concat(images).map((src, index) => (
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="slider-image-wrapper"
          >
            <img src={src} alt={`Slide ${index}`} className="slider-image" />
            <div className="overlay">
              <Instagram className="instagram-icon" />
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageSlider;
