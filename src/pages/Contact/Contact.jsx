import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import MapLocation from "../../components/MapLocation";
import BackToTop from "../../components/BackToTop";

export default function ContactUs() {
  return (
    <>
      {/* Header Section */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <div className="breadcrumb">
          <span>Home</span>
          <span className="separator">›</span>
          <span className="current">Contact Us</span>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="contact-container">
        <div className="left-section">
          <motion.div
            className="book-slot"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="book-slot-row">
              <div className="calendar-icon">📅</div>
              <div className="slot-text">
                <h2>BOOK YOUR SLOT</h2>
                <p>
                  Vivamus et odio lacus. Vestibulum non d, auctor mauris. Nullam
                  sit amet nulla eget quis tortolerisque elit.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="office-info"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="office-block">
              <h3>SIRPI MEDICAL CENTER</h3>
              <p>📞 (000) 123-456789</p>
              <p>
                📍 No: 58 A, East Madison Street,<br />
                Baltimore, MD, USA 4508
              </p>
              <p>✉️ info@example.com</p>
            </div>

            <div className="office-block">
              <h3>PATIENTS RELATION OFFICE</h3>
              <p>📞 (00) 123456789</p>
              <p>
                📍 No: 58 A, East Madison Street,<br />
                Baltimore, MD, UK 4508
              </p>
              <p>✉️ support@example.com</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="form-section"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4 className="form-subtitle">REACH US</h4>
          <h2 className="form-title">CONTACT FORM</h2>
          <p className="form-description">
            Aenean finibus feugiat odio quis porttitor. Duis vel scelerisque nisl
            ultricies, porttitor diam sit amet, varius urna.
          </p>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="text" placeholder="Mobile number" />
            <input type="email" placeholder="Email address" />
            <textarea placeholder="Additional Information"></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </motion.div>
        <MapLocation />
        <BackToTop />
      </div>
    </>
  );
}
