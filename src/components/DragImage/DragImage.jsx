import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ImageWrapper from '../../../components/ImageWrapper';
import './Listing.css';

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
    <div
      className="image-comparison-container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img src={after} className="image-layer" alt="After" />
      <img
        src={before}
        className="image-layer clipped"
        alt="Before"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />
      <div className="slider" style={{ left: `${sliderPosition}%` }}>
        <div className="drag-circle">DRAG</div>
      </div>
      <div className="label before-label">BEFORE</div>
      <div className="label after-label">AFTER</div>
    </div>
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
        <motion.div
          className="gallery-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="gallery-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            PORTFOLIO
          </motion.p>

          <motion.h2
            className="gallery-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            BEFORE & AFTER GALLERY
          </motion.h2>

          <motion.p
            className="gallery-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Aliquam magna massa, gravida finibus fermentum sit amet. Suspendisse consequat lacus libero.
            In ultricies gravida Maecenas nec erat sit amet eros venenatis ultricies.
          </motion.p>

          <motion.button
            className="gallery-button"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW ALL
          </motion.button>

          <motion.p
            className="insurance-note"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <strong>No Insurance?</strong><br />
            Get your preventive care for a low monthly fee
          </motion.p>
        </motion.div>

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
    </>
  );
};

export default Listing;
