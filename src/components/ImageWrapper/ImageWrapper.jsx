import React from 'react';
import './ImageWrapper.css';

const services = [
  {
    id: '01',
    title: 'Rhenoplasty',
    img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp',
    link: '/services/rhenoplasty',
  },
  {
    id: '02',
    title: 'Skin Treatment',
    img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp',
    link: '/services/skin-treatment',
  },
  {
    id: '03',
    title: 'Double Chin Remove',
    img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp',
    link: '/services/double-chin-remove',
  },
  {
    id: '04',
    title: 'Cosmetic Surgery',
    img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp',
    link: '/services/cosmetic-surgery',
  },
  {
    id: '05',
    title: 'Rhenoplasty',
    img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp',
    link: '/services/rhenoplasty',
  },
  {
    id: '06',
    title: 'Skin Treatment',
    img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp',
    link: '/services/skin-treatment',
  },
  {
    id: '07',
    title: 'Double Chin Remove',
    img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp',
    link: '/services/double-chin-remove',
  },
  {
    id: '08',
    title: 'Cosmetic Surgery',
    img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Service-Img-1.webp',
    link: '/services/cosmetic-surgery',
  },
];

const ImageWrapper = () => {
  return (
    <div className="services-container">
      {services.map((service, index) => {
        const isEven = (index + 1) % 2 === 0;
        return (
          <div
            key={service.id}
            className={`service-card ${isEven ? 'even' : 'odd'}`}
          >
            <a href={service.link} className="image-wrapper">
              <img src={service.img} alt={service.title} />
            </a>
            <div className="service-info">
              <span className="service-id">{service.id}</span>
              <span className="service-title">{service.title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageWrapper;
