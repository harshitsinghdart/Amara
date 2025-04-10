import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ImageWrapper.css';

const services = [
  { id: '01', title: 'Rhenoplasty', img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp' },
  { id: '02', title: 'Skin Treatment', img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp' },
  { id: '03', title: 'Double Chin Remove', img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp' },
  { id: '04', title: 'Cosmetic Surgery', img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp' },
  { id: '05', title: 'Hair Transplant', img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp' },
  { id: '06', title: 'Laser Treatment', img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp' },
  { id: '07', title: 'Botox Filler', img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp' },
  { id: '08', title: 'Cosmetic Surgery', img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp' },
];

const ImageWrapper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [middleLarge, setMiddleLarge] = useState(true);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setMiddleLarge((prev) => !prev);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(services[(currentIndex + i) % services.length]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="wrapper">
      <div className="header">
        <div>
          <h3>OUR SERVICES</h3>
          <h1>POPULAR PROCEDURES</h1>
          <p>Pellentesque consequat maecenas purus lectus, aliquam sit amet</p>
        </div>
        <button className="arrow" onClick={handleNext}>➜</button>
      </div>

      <div className="services-carousel">
        {visibleItems.map((item, idx) => {
          const isMiddle = idx === 1;
          const cardSizeClass = isMiddle ? (middleLarge ? 'large' : 'small') : 'regular';

          return (
            <motion.div
              className={`service-card ${cardSizeClass}`}
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={item.img} alt={item.title} />
              <div className="info">
                <span className="id">{item.id}</span>
                <span className="title">{item.title}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageWrapper;
