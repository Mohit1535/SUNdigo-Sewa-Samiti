import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid" style={{position:"static"}}>
        {/* Navbar Brand with Style */}
        <Link className="navbar-brand text-light fw-bold d-flex align-items-center" to="/sewa" style={{ fontSize: "1.8rem", letterSpacing: "1px" }}>
          <img src="/p8.jpeg" alt="Logo" style={{ width : "50px", height: "60px",borderRadius:"10px", marginRight: "10px" }} /> {/* Add a logo if available */}
          <span style={{ color: "#FFD700", textShadow: "2px 2px 5px rgba(255, 215, 0, 0.5)",fontSize:"1.2rem" }}>SUNdigo Sewa Samiti</span>
        </Link>

        {/* Menu Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/service">
                Our Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
