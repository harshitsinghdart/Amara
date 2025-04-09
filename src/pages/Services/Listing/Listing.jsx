import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ImageWrapper from '../../../components/ImageWrapper/ImageWrapper';
import './Listing.css';
import ImageSlider from '../../../components/ImageSlider/ImageSlider';

const StatItem = ({ value, label, suffix = '' }) => {
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="stat-box">
      <motion.h2>{count}{suffix}</motion.h2>
      <p>{label}</p>
    </div>
  );
};

const ImageComparison = ({ before, after }) => {
  const containerRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const position = ((e.clientX - bounds.left) / bounds.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const position = ((touch.clientX - bounds.left) / bounds.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <motion.div
      className="image-comparison-container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.img
        src={after}
        className="image-layer"
        alt="After"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.img
        src={before}
        className="image-layer clipped"
        alt="Before"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="slider"
        style={{ left: `${sliderPosition}%` }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <motion.div
          className="drag-circle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          DRAG
        </motion.div>
      </motion.div>
      <div className="label before-label">BEFORE</div>
      <div className="label after-label">AFTER</div>
    </motion.div>
  );
};

const Listing = () => {
  return (
    <>
      {/* Header Section */}
      <div className="contact-header">
        <h1>Our Services</h1>
        <div className="breadcrumb">
          <span>Home</span>
          <span className="separator">›</span>
          <span className="current">Our Services</span>
        </div>
      </div>

      {/* Treatments Header */}
      <div className="listing-header-section">
        <p className="listing-subtitle">TREATMENTS</p>
        <strong className="listing-title">TREATMENTS WE PROVIDE</strong>
        <p className="listing-description">
          Maecenas purus lectus, aliquam sit amet pellentesque consequat. Curabitur vitae
          tortor eu felis scelerisque varius a non
        </p>
      </div>

      {/* Image Gallery */}
      <div>
        <ImageWrapper />
      </div>

      {/* Treatment Feature Section */}
      <div className="treatment-section">
        <div className="treatment-image">
          <img src="https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-1-Popup-Image.png" alt="Skin Treatment" />
          <div className="video-overlay">
            <div className="video-content">
              <div className="play-button">&#9658;</div>
              <div className="video-text">
                <span className="video-label">WATCH OUR VIDEO</span> –
                <span className="video-subtext">SCARE - SURGERY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="treatment-content">
          <p className="shine-label">SHINE WITH BEAUTY</p>
          <h2 className="treatment-heading">ADVANCED SKIN TREATMENTS</h2>
          <p className="treatment-description">
            Curabitur et finibus nunc. Aliquam erat volutpat. Sed ac pulvinar sapien.
            Sed volutpat nunc, eu efficitur ipsum vulputate finibus. Curabitur suscipit nulla neque,
            ut laor eet erat sodales vel. Curabitur vitae tortor eu felis scelerisque varius a non.
          </p>
          <ul className="treatment-list">
            <li><a href="#">PLASTIC SURGERY</a></li>
            <li><a href="#">ABDOMINOPLASTY SURGERY</a></li>
            <li><a href="#">LASER TREATMENTS</a></li>
            <li><a href="#">HAIR FALL TREATMENTS</a></li>
            <li><a href="#">LIPOSUCTION SURGERY</a></li>
          </ul>
          <button className="appointment-btn">BOOK APPOINTMENT</button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <StatItem value={10} label="YEARS EXPERIENCE" suffix="+" />
        <StatItem value={10} label="PATIENTS" suffix="K" />
        <StatItem value={24} label="BRANCHES" />
        <StatItem value={36} label="SURGERIES" suffix="K" />
        <StatItem value={49} label="DOCTORS" suffix="+" />
      </div>

      {/* Before & After Gallery Section */}
      <div className="gallery-wrapper">
        <div className="gallery-text">
          <p className="gallery-subtitle">PORTFOLIO</p>
          <h2 className="gallery-title">BEFORE & AFTER GALLERY</h2>
          <p className="gallery-description">
            Aliquam magna massa, gravida finibus fermentum sit amet. Suspendisse consequat lacus libero.
            In ultricies gravida Maecenas nec erat sit amet eros venenatis ultricies.
          </p>
          <button className="gallery-button">VIEW ALL</button>
          <p className="insurance-note">
            <strong>No Insurance?</strong><br />
            Get your preventive care for a low monthly fee
          </p>
        </div>

        <div className="gallery-images drag-image-wrapper-row">
          <div className="comparison-column">
            <ImageComparison
              before="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-3-before.webp"
              after="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-3-after.webp"
            />
          </div>
          <div className="comparison-column">
            <ImageComparison
              before="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp"
              after="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp"
            />
          </div>
        </div>
      </div>
      <ImageSlider />
    </>
  );
};

export default Listing;
