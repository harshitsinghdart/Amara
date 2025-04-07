import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [activeContent, setActiveContent] = useState({
    title: "Skin Rejuvenation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
    image: "https://sirpi.wpengine.com/wp-content/uploads/2023/05/hom1-banner-1-neck.webp",
    stars: "⭐⭐⭐⭐⭐",
    ratingValue: "(4.6)",
    content: "360K+ ratings on Google",
  });

  const contents = [
    {
      title: "Skin Rejuvenation",
      icon: "👩‍⚕️",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
      image:
        "https://sirpi.wpengine.com/wp-content/uploads/2023/05/hom1-banner-1-neck.webp",
      stars: "⭐⭐⭐⭐⭐",
      ratingValue: "(4.9)",
      content: "350K+ ratings on Google",
    },
    {
      title: "Laser Resurfacing",
      icon: "💉",
      description:
        "Suspendisse potenti. Proin ut dui nec arcu ultricies placerat. Integer euismod.",
      image:
        "https://sirpi.wpengine.com/wp-content/uploads/2023/06/hom1-banner-content-2.webp",
      stars: "⭐⭐⭐⭐⭐",
      ratingValue: "(4.5)",
      content: "250K+ ratings on Google",
    },
    {
      title: "Peel Brighten Treatments",
      icon: "🔄",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      image:
        "https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-banner-content-4.webp",
      stars: "⭐⭐⭐⭐⭐",
      ratingValue: "(4.2)",
      content: "230K+ ratings on Google",
    },
    {
      title: "Acne Light Therapy",
      icon: "💡",
      description:
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo.",
      image:
        "https://sirpi.wpengine.com/wp-content/uploads/2023/05/home-1-slide-1.webp",
      stars: "⭐⭐⭐⭐⭐",
      ratingValue: "(4.4)",
      content: "550K+ ratings on Google",
    },
  ];

  const handleHover = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="home">
      <div className="home-content">
        <div className="text-section">
          <p className="subheading">FACE - SURGERY</p>
          <h1 className="title">{activeContent.title}</h1>
          <p className="description">{activeContent.description}</p>
          <button className="know-more-btn">Know More</button>
          <div className="ratings">
            <span className="stars">{activeContent.stars}</span>
            <span className="rating-value">{activeContent.ratingValue}</span>
            <p>{activeContent.content}</p>
          </div>
        </div>
        <div className="image-section">
          <img src={activeContent.image} alt="Active Content" />
          <div className="emergency">
            <img
              src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
              alt="Call Icon"
              className="emergency-icon"
            />
            <div className="emergency-text">
              <p className="emergency-sub">24/7 EMERGENCY</p>
              <p className="emergency-number">+000 123 456 789</p>
            </div>
          </div>
        </div>
      </div>

      <div className="buttons-section">
        {contents.map((content) => (
          <button
            key={content.title}
            className={activeContent.title === content.title ? "active" : ""}
            onMouseEnter={() => handleHover(content)}
          >
            <span className="icon">{content.icon}</span>
            <span className="button-title">{content.title}</span>
          </button>
        ))}
      </div>

      <div className="appointment-section">
        <div className="form">
          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Reason for Appointment" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Your Email" />
            <input type="datetime-local" placeholder="Date & Time" />
            <select>
              <option value="">Treatment Type</option>
              <option value="skin">Skin Rejuvenation</option>
              <option value="laser">Laser Resurfacing</option>
              <option value="peel">Peel Brighten</option>
              <option value="acne">Acne Light Therapy</option>
            </select>
          </div>
        </div>
        <div className="book-slot">
          <h2>BOOK YOUR SLOT</h2>
          <button className="book-button">APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};

export default Home;