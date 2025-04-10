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

const DragImage = () => {
  return (
    <div className="drag-image-wrapper-row">
      <div className="comparison-column">
        <ImageComparison 
          before="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-3-before.webp" 
          after="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-3-after.webp" 
        />
        {/* <div className="comparison-label">Women</div> */}
      </div>
      <div className="comparison-column">
        <ImageComparison 
          before="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp" 
          after="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp" 
        />
        {/* <div className="comparison-label">Men</div> */}
      </div>
    </div>
  );
};

export default DragImage;
