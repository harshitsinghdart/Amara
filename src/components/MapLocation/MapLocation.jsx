import React from "react";
import { motion } from "framer-motion";
import "./MapLocation.css";

export default function MapLocation() {
  return (
    <motion.div
      className="map-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d423286.27423704846!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1647371696923!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </motion.div>
  );
}
