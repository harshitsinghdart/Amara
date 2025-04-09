import React, { useState } from "react";
import "./Appointment.css";
import MapLocation from "../../components/MapLocation/MapLocation";
import BackToTop from "../../components/BackToTop/BackToTop";

const Appointment = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const doctors = [
    { name: "Dr. Joe Thomas", price: "$50.0", image: "doctor1.jpg" },
    { name: "Dr. Jeffin", price: "$98.0", image: "doctor2.jpg" },
    { name: "Dr. Laara", price: "$120.0", image: "doctor3.jpg" },
    { name: "Dr. Edwin", price: "$145.0", image: "doctor4.jpg" },
    { name: "Dr. Jaccob", price: "$105.0", image: "doctor5.jpg" },
  ];

  const services = [
    "General Consultation",
    "Dental Cleaning",
    "Eye Checkup",
    "Skin Treatment",
    "Physiotherapy",
  ];

  const times = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDoctorSelect = (doctorName) => {
    setSelectedDoctor(doctorName);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <>
    {/* Header Section */}
    <div className="contact-header">
        <h1>Appointment</h1>
        <div className="breadcrumb">
          <span>Home</span>
          <span className="separator">›</span>
          <span className="current">Appointment</span>
        </div>
      </div>

    <div className="appointment-container">
      <div className="appointment-form">
        <div className="form-content">
          <h2>Make an Appointment</h2>
          <div className="form-row">
            <div className="form-group">
              <label>Available Services</label>
              <select>
                <option>Select Service</option>
                {services.map((service, index) => (
                  <option key={index}>{service}</option>
                ))}
              </select>
            </div>
            <div className="form-group staff-dropdown">
              <label>Staffs</label>
              <div className="custom-dropdown">
                <button
                  className="dropdown-btn"
                  onClick={toggleDropdown}
                >
                  {selectedDoctor || "Select Doctor"}
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    {doctors.map((doctor, index) => (
                      <div
                        key={index}
                        className="dropdown-item"
                        onClick={() => handleDoctorSelect(doctor.name)}
                      >
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="doctor-image"
                        />
                        <div className="doctor-info">
                          <p className="doctor-name">{doctor.name}</p>
                          <p className="doctor-price">{doctor.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <h3>Time</h3>
          <div className="form-row">
            <div className="form-group">
              <label>I am available on</label>
              <input type="date" value="2025-04-08" />
            </div>
            <div className="form-group">
              <label>Start</label>
              <select>
                {times.map((time, index) => (
                  <option key={index}>{time}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>End</label>
              <select>
                {times.map((time, index) => (
                  <option key={index}>{time}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="show-time-btn">Show Time</button>
        </div>

        {/* Working Hours Box Inside Make an Appointment */}
        <div className="working-hours">
          <h3>Timings</h3>
          <h2>Working Hours</h2>
          <p>
            Curabitur et fius nunc. Aliquam erat volutpat ac pulvinar sapien.
            volutpaipsum vunibus.
          </p>
          <ul>
            <li>
              <span>Tuesday:</span> 10:00 AM - 09:00 PM
            </li>
            <li>
              <span>Monday:</span> 10:00 AM - 09:00 PM
            </li>
            <li>
              <span>Wednesday:</span> 10:00 AM - 09:00 PM
            </li>
            <li>
              <span>Thursday:</span> 10:00 AM - 09:00 PM
            </li>
            <li>
              <span>Friday:</span> 10:00 AM - 09:00 PM
            </li>
            <li>
              <span>Saturday:</span> 01:00 PM - 08:00 PM
            </li>
            <li>
              <span>Sunday:</span> Closed
            </li>
          </ul>
        </div>
      </div>
    </div>
    <MapLocation />
    <BackToTop />
    </>
  );
};

export default Appointment;