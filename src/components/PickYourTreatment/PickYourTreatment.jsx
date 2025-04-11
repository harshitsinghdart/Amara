import React from "react";
import "./PickYourTreatment.css";
import {
  FaRegSmile,
  FaSpa,
  FaEye,
  FaRegGrinStars,
  FaWeight,
  FaCut
} from "react-icons/fa";

const PickYourTreatment = () => {
  return (
    <section className="pick-treatment-section">
      <div className="pick-treatment-header">
        <p className="pick-treatment-subtitle">SCARE - SUREGERY</p>
        <h2 className="pick-treatment-title">PICK YOUR TREATMENT</h2>
        <p className="pick-treatment-description">
          Vestibulum iaculis maecenas purus lectus, aliquam sit amet pellentesque
          consequat, placerat id magna.
        </p>
      </div>

      <div className="pick-treatment-cards-grid">
        <div className="pick-treatment-card">
          <div className="pick-treatment-icon-wrapper">
            <FaRegSmile className="pick-treatment-icon" />
          </div>
          <h3 className="pick-treatment-card-title">FACE TREATMENTS</h3>
          <p className="pick-treatment-card-text">
            Tincidunt id aliquet risus feugiat in ante metus mi ipsum faucibus.
          </p>
          <a href="#" className="pick-treatment-explore">
            EXPLORE NOW <span>&#8250;</span>
          </a>
        </div>

        <div className="pick-treatment-card">
          <div className="pick-treatment-icon-wrapper">
            <FaSpa className="pick-treatment-icon" />
          </div>
          <h3 className="pick-treatment-card-title">SKIN TREATMENTS</h3>
          <p className="pick-treatment-card-text">
            Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim.
          </p>
          <a href="#" className="pick-treatment-explore">
            EXPLORE NOW <span>&#8250;</span>
          </a>
        </div>

        <div className="pick-treatment-card">
          <div className="pick-treatment-icon-wrapper">
            <FaEye className="pick-treatment-icon" />
          </div>
          <h3 className="pick-treatment-card-title">EYE CARE TREATMENTS</h3>
          <p className="pick-treatment-card-text">
            Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi.
          </p>
          <a href="#" className="pick-treatment-explore">
            EXPLORE NOW <span>&#8250;</span>
          </a>
        </div>

        <div className="pick-treatment-card">
          <div className="pick-treatment-icon-wrapper">
            <FaRegGrinStars className="pick-treatment-icon" />
          </div>
          <h3 className="pick-treatment-card-title">SCARE REMOVEL</h3>
          <p className="pick-treatment-card-text">
            Purus viverra accumsan in nisl nisi scelerisque eusit amet.
          </p>
          <a href="#" className="pick-treatment-explore">
            EXPLORE NOW <span>&#8250;</span>
          </a>
        </div>

        <div className="pick-treatment-card">
          <div className="pick-treatment-icon-wrapper">
            <FaWeight className="pick-treatment-icon" />
          </div>
          <h3 className="pick-treatment-card-title">GASTRIC BANDING</h3>
          <p className="pick-treatment-card-text">
            Hac habitasse platea dictumst vestibulum rhoncus ullamcorper.
          </p>
          <a href="#" className="pick-treatment-explore">
            EXPLORE NOW <span>&#8250;</span>
          </a>
        </div>

        <div className="pick-treatment-card">
          <div className="pick-treatment-icon-wrapper">
            <FaCut className="pick-treatment-icon" />
          </div>
          <h3 className="pick-treatment-card-title">HAIR TRANSPLANTATION</h3>
          <p className="pick-treatment-card-text">
            Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.
          </p>
          <a href="#" className="pick-treatment-explore">
            EXPLORE NOW <span>&#8250;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PickYourTreatment;