import React, { useState } from "react";
import "./Home.css";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
import BackToTop from "../../components/BackToTop/BackToTop";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import TreatmentSection from "../../components/TreatmentLayout/TreatmentLayout";
import TestimonialSection from "../../components/TreatmentSection/TreatmentSection";
import DoctorsSection from "../../components/DoctorsSection/DoctorsSection";
import PerfectSkinSection from "../../components/PerfectSkinSection/PerfectSkinSection";
import DragImage from "../../components/DragImage/DragImage";
import PickYourTreatment from "../../components/PickYourTreatment/PickYourTreatment";

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

  const doctors = [
    {
      name: 'Dr. Joe Thomas',
      specialty: 'Cosmetic Dermatologist',
      image: 'https://sirpi.wpengine.com/wp-content/uploads/2023/06/doctor-image-4.webp',
    },
    {
      name: 'Dr. Riyas Faisan',
      specialty: 'Teledermatologist',
      image: 'https://sirpi.wpengine.com/wp-content/uploads/2023/06/doctor-image-4.webp',
    },
    {
      name: 'Dr. Ema Grenger',
      specialty: 'Pediatric Dermatologist',
      image: 'https://sirpi.wpengine.com/wp-content/uploads/2023/06/doctor-image-4.webp',
    },
    {
      name: 'Dr. Jaccob',
      specialty: 'Mohs Surgeon',
      image: 'https://sirpi.wpengine.com/wp-content/uploads/2023/06/doctor-image-4.webp',
    },
  ];

  return (
    <>
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
          <div className="book-slots">
            <h2>BOOK YOUR SLOT</h2>
            <button className="book-buttons">APPOINTMENT</button>
          </div>
        </div>
      </div>

      <ImageWrapper />

      {/* Treatment-section */}
      <TreatmentSection />

      {/* PickYourTreatment */}

      <PickYourTreatment />

      {/* detail-treatment */}

      <div className="detail-treatment-section">
        <div className="detail-treatment-box">
          <div className="detail-image-wrapper">
            <img
              src="https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Banner-Image-Box-1-1.png"
              alt="Treatment Women's"
              className="detail-treatment-image"
            />
            <div className="detail-overlay">
              <span className="detail-line"></span>
              <h3 className="detail-treatment-title">TREATMENT WOMEN'S</h3>
            </div>
          </div>
        </div>


        <div className="detail-treatment-box">
          <div className="detail-image-wrapper">
            <img
              src="https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Banner-Image-Box-2-1.png"
              alt="Treatment Men's"
              className="detail-treatment-image"
            />
            <div className="detail-overlay">
              <span className="detail-line"></span>
              <h3 className="detail-treatment-title">TREATMENT MEN'S</h3>
            </div>
          </div>
        </div>

        <div className="detail-treatment-description">
          Werabitur Et Finibus Nunc. Aliquam Erat Volutpat. Sed Ac Pulvinar Sapien. Sed Volutpat Nisl Nunc, Eu Efficitur Ipsunulla Neque, Ut Laoreeterat Muthu Sodales Vel Curabitur Vitae Tortor Eu Felis Scelerisque Varius A Non Nibh. Orci Varius Natoqu Mus. Nunc At Finibus Augue. Maecenas Varius Sagittis Lacus.
        </div>

      </div>
      <div className="detail-signature-section">
        <img
          src="https://sirpi.wpengine.com/wp-content/uploads/2023/05/signature.png"
          alt="Signature"
          className="detail-signature-img"
        />
        <h4 className="detail-ceo-text">
          ALLEN MILLER <span className="detail-ceo-role">– CEO</span>
        </h4>
        <button className="detail-readmore-btn">READ MORE ABOUT US</button>
      </div>

      {/* DragImage */}
      <div className="portfolio-intro">
        <p className="portfolio-subtitle">OUR PORTFOLIO</p>
        <h2 className="portfolio-title">REAL TIME BEFORE & AFTER GALLERY</h2>
        <p className="portfolio-description">
          Bestibulum iaculis maecenas purus lectus, aliquam sit amet pellentesque consequat, <br />
          placerat id magna.
        </p>
      </div>
      <DragImage />

      {/* PerfectSkinSection  */}
      <PerfectSkinSection />

      {/* Doctor SEction */}

      <DoctorsSection />


      {/* Testimonial Section */}
      <TestimonialSection />

      {/* InstaGramSlider */}
      <ImageSlider />
      <BackToTop />
    </>
  );
};

export default Home;