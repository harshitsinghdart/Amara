import React, { useRef, useState } from 'react';
import './DragImage.css';

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
      className="custom-comparison-container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img src={after} className="custom-image-layer" alt="After" />
      <img
        src={before}
        className="custom-image-layer custom-clipped"
        alt="Before"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />
      <div className="custom-slider" style={{ left: `${sliderPosition}%` }}>
        <div className="custom-drag-circle">DRAG</div>
      </div>
      <div className="custom-label custom-before-label">BEFORE</div>
      <div className="custom-label custom-after-label">AFTER</div>
    </div>
  );
};

const DragImage = () => {
  return (
    <div className="custom-drag-wrapper">
      <div className="custom-comparison-column">
        <ImageComparison 
          before="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-3-before.webp" 
          after="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-3-after.webp" 
        />
      </div>
      <div className="custom-comparison-column">
        <ImageComparison 
          before="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp" 
          after="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp" 
        />
      </div>
    </div>
  );
};

export default DragImage;
