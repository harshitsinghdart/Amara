import React, { useState } from 'react';
import './TreatmentLayout.css';

const TreatmentSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  return (
    <div className="treatment-section">
      <div className="treatment-image">
        <img
          src="https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-1-Popup-Image.png"
          alt="Skin Treatment"
        />

        <div className="video-banner" onClick={openVideo}>
          <div className="video-banner-content">
            <div className="video-play-button">&#9658;</div>
            <div>
              <div className="process-label">OUR PROCESS</div>
              <div className="watch-heading">WATCH OUR PROCEDURE</div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="video-modal" onClick={closeVideo}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              <iframe
                src="https://www.youtube.com/embed/C_S2EFSju3s?autoplay=1&rel=0&modestbranding=1"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Watch Our Procedure"
              ></iframe>
            </div>
          </div>
        )}
      </div>

      <div className="treatment-content">
        <p className="shine-label">SHINE WITH BEAUTY</p>
        <h2 className="treatment-heading">ADVANCED SKIN TREATMENTS</h2>
        <p className="treatment-description">
          Curabitur et finibus nunc. Aliquam erat volutpat. Sed ac pulvinar sapien.
          Sed volutpat nunc, eu efficitur ipsum vulputate finibus. Curabitur suscipit nulla neque,
          ut laoreet erat sodales vel. Curabitur vitae tortor eu felis scelerisque varius a non.
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
  );
};

export default TreatmentSection;
