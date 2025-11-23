import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
import logo from "../assets/Turkish_Logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const handleCall = () => {
    const phone = "+919846055044";

    // Detect Mobile Devices
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Mobile → Direct Dial Pad
      window.open(`tel:${phone}`, "_self");
    } else {
      // Desktop → WhatsApp Web
      const whatsapp = phone.replace("+", "");
      window.open(`https://wa.me/${whatsapp}`, "_blank");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container-fluid px-4">
        
        {/* Logo + Brand */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="logo" className="nav-logo me-2" />
          <h2 className="brand-name">
            Turkish d<span className="ash-letter">o</span>ner
          </h2>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-4">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#menu">Menu</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>

            {/* Mobile Button */}
            <li className="nav-item d-lg-none mt-3">
              <button
                className="book-btn mobile-small-btn d-flex align-items-center gap-2 justify-content-center"
                onClick={handleCall}
              >
                <i className="bi bi-telephone-fill phone-icon"></i>
                Book Slot
              </button>
            </li>
          </ul>
        </div>

        {/* Desktop Button */}
        <button
          className="book-btn d-none d-lg-flex align-items-center gap-2"
          onClick={handleCall}
        >
          <i className="bi bi-telephone-fill phone-icon"></i>
          Book Slot
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
