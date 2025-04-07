import React from "react";
import "./NotFound.css"; 

export default function App() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">DOOR NOT FOUND</h2>
        <p className="description">
          Fusce non dolor eu sapien porta varius. Duis tempor ornare enim, ac
          sodales odio dignissim vel. Mauris condimentum, lectus nec tin.
        </p>
        <button className="home-button">BACK TO HOME</button>
      </div>
      <div className="image-section">
        <img
          src="/path-to-your-image.jpg"
          alt="Model"
          className="model-image"
        />
      </div>
    </div>
  );
}
