import React from "react";
import "./PerfectSkinSection.css";

const PerfectSkinSection = () => {
  return (
    <section className="perfect-skin-section">
      <div className="left-content">
        <div className="left-inner">
          <h2>PERFECT HEALTHY SKIN FOR YOU</h2>
          <p className="description">
            Sed ac pulvinar sapien. Curabitur et finibus nunc. Aliquam erat volutpat.
            Sed volutpat nunc, eu efficitur ipsum vulputate finibus. Curabitur suscipit
            nulla neque, ut laoreet erat sodales vel. Curabitur vitae tortor eu felis
            scelerisque varius a non.
          </p>

          <div className="stats">
            <div className="stat-block">
              <img src="https://img.icons8.com/ios-filled/50/cosmetic-treatment.png" alt="icon1" />
              <div>
                <h4>15+ COSMETICS TREATMENTS</h4>
                <p>Est placerat in egestas erat imperdiet sed euismod nisi.</p>
              </div>
            </div>

            <div className="stat-block">
              <img src="https://img.icons8.com/ios-filled/50/doctor-male.png" alt="icon2" />
              <div>
                <h4>20+ BEST COSMETICS SURGEONS</h4>
                <p>Laoreet non curabitur gravida arcu ac tortor dignissim.</p>
              </div>
            </div>

            <div className="stat-block">
              <img src="https://img.icons8.com/ios-filled/50/surgery.png" alt="icon3" />
              <div>
                <h4>5+ COSMETIC SURGERIES</h4>
                <p>Adipiscing elit ut aliquam purus sit amet luctus lectus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-content">
        <img
          className="main-image"
          src="https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Col-Img-2.png"
          alt="Woman"
        />
        <div className="cta-banner">
          <span className="cta-text">GET 10% FLAT OFFER ON YOUR FIRST SLOT</span>
          <button>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default PerfectSkinSection;
