import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import logo from "../../assets/AmaraLogo.svg";

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navigation">
            <div className="logo">
            <Link to="/">
                    <img src={logo} alt="Sirpi Logo" className="logo-img" />
                </Link>
            </div>

            <div className="nav-center">
                <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
                    <li className="dropdown">
                        <a href="#" className="active">HOME</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Plastic SURGERY</a></li>
                            <li><a href="#">SKIN TREATMENT</a></li>
                            <li><a href="#">BEAUTY STORE</a></li>
                            <li><a href="#">APPOINTMENT</a></li>
                            <li><a href="#">GERNAL SURGON</a></li>
                            <li><a href="#">RTL VERSION</a></li>
                        </ul>
                    </li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li className="dropdown">
                        <a href="#">DOCTORS</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">LISTING</a></li>
                            <li><a href="#">DETAIL</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">SERVICES</a>
                        <ul className="dropdown-menu">
                            <li><Link to="/our-services/listing">LISTING</Link></li>
                            <li><Link to="/our-services/detail">DETAIL</Link></li>
                            
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">PAGES</a>
                        <ul className="dropdown-menu">
                            <li><Link to="#">BLOG</Link></li>
                            <li><Link to="#">ONLINE STORE</Link></li>
                            <li><Link to="#">PRICING PLANS</Link></li>
                            <li><Link to="#">FAQ</Link></li>
                            <li><Link to="/pages/appointment">APPOINTMENT</Link></li>
                            <li><Link to="/pages/not-Found">404 PAGE</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/contact-us">CONTACT</Link></li>
                </ul>
            </div>

            <div className="nav-right">
                <a href="#" className="appointment-btns">APPOINTMENT</a>
                <div className="hamburger" onClick={toggleMobileMenu}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;