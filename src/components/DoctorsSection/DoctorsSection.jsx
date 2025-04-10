import React from 'react';
import './DoctorsSection.css';

const doctors = [
  {
    name: 'Dr. Joe Thomas',
    specialty: 'Cosmetic Dermatologist',
    image: 'https://sirpi.wpengine.com/wp-content/uploads/2023/06/doctor-image-1.webp',
  },
  {
    name: 'Dr. Riyas Faisan',
    specialty: 'Teledermatologist',
    image: 'https://sirpi.wpengine.com/wp-content/uploads/2023/06/doctor-image-2.webp',
  },
  {
    name: 'Dr. Ema Grenger',
    specialty: 'Pediatric Dermatologist',
    image: 'https://sirpi.wpengine.com/wp-content/uploads/2023/06/doctor-image-3.webp',
  },
  {
    name: 'Dr. Jaccob',
    specialty: 'Mohs Surgeon',
    image: 'https://sirpi.wpengine.com/wp-content/uploads/2023/06/doctor-image-4.webp',
  },
];

export default function DoctorsSection() {
  return (
    <section className="doctors-section">
      <div className="doctors-heading">
        <h5>OUR DOCTERS</h5>
        <h2>MEET OUR BEST SURGEONS</h2>
        <p>
          Rirabitur et fius nunc. Aliquam erat volutpat. Sed ac pulvinar sapien.
          volutpat ficitur ipsum vulputate finibus.
        </p>
      </div>
      <div className="doctors-wrapper">
        {doctors.map((doc, idx) => (
          <div className="doctor-card" key={idx}>
            <div className="doctor-image-container">
              <img src={doc.image} alt={doc.name} className="doctor-images" />
              <div className="social-overlay">Tw - In - Fb - Go</div>
            </div>
            <h3 className="doctor-name">{doc.name}</h3>
            <p className="doctor-specialty">{doc.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
