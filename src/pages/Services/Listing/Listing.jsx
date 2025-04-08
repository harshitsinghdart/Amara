import React from 'react';
import ImageWrapper from '../../../components/ImageWrapper';
import './Listing.css';

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
    </>
  );
};

export default Listing;
