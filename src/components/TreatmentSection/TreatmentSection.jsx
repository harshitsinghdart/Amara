import React, { useEffect, useState } from "react";
import "./TreatmentSection.css";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    image: "https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-testimonial-2.webp",
    name: "Shelly",
    role: "Model",
    stars: 5,
    content:
      "Tuspendisse sed nulla tempus, euismod nisi posuere, feugiat lectus. Nulla tempus tellus eu odio bibendum congue. Aliquam volutpat massa in congue condimentum. Nullam varius libero id odio finibus, non faucibus lacus venenatis.",
  },
  {
    image: "https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-testimonial-2.webp",
    name: "Arun",
    role: "Photographer",
    stars: 4,
    content:
      "This place exceeded my expectations. The staff is friendly, and the process was smooth and efficient. Highly recommended for anyone looking for professional results!",
  },
  {
    image: "https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-testimonial-2.webp",
    name: "Priya",
    role: "Actress",
    stars: 5,
    content:
      "Amazing service! I felt comfortable and well taken care of. The results were incredible. Would definitely come back again!",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <p className="subtitle">CLIENT REVIEWS</p>
        <h2 className="title">WHAT PEOPLE SAYS</h2>
        <div className="smiley">
          <span>“</span>
          <div className="smile"></div>
        </div>
      </div>

      <div className="testimonial-carousel">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="testimonial-card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            <img src={current.image} alt={current.name} className="testimonial-image" />
            <div className="testimonial-content">
              <p className="testimonial-text"><i>{current.content}</i></p>
              <p className="testimonial-name">
                <span>{current.name}</span> - {current.role}
              </p>
              <div className="testimonial-stars">
                {"★".repeat(current.stars)}
                {"☆".repeat(5 - current.stars)}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
