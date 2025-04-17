import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

// Corrected image array
const images = [
  "/p1.jpeg", "/p2.jpeg", "/p3.jpeg", "/p4.JPG", "/p5.JPG", "/p6.JPG",
  "/p12.JPG", // fixed case from .jpeg to .JPG
  "/p13.JPG", "/p14.JPG", "/p15.jpg", "/p16.jpeg", "/p17.JPG",
  "/p18.JPG", "/p19.jpeg", "/p20.jpg", "/p21.jpg", "/p22.jpg", "/p23.jpg", "/p24.jpg", "/p25.JPG"
];

// Set root for accessibility
Modal.setAppElement("#root");

export default function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      {/* Gallery Section */}
      <div style={{ padding: "20px", backgroundColor: "black", fontFamily: "Arial, sans-serif" }}>
        <header style={{ marginBottom: "20px", color: "white" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem" }}>Gallery</h2>
        </header>

        <section style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
          {images.map((img, index) => (
            <div
              key={index}
              style={{ flex: "1 1 calc(25% - 10px)", maxWidth: "calc(25% - 10px)", cursor: "pointer" }}
              onClick={() => openModal(img)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
          ))}
        </section>

        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "80%",
              maxHeight: "80%",
              margin: "auto",
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "10px",
              padding: "0"
            }
          }}
        >
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Zoomed"
              style={{ width: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "8px" }}
            />
          )}
        </Modal>
      </div>
      <div className="footer">
  <div className="footer-section">
    <h2>Quick Links</h2>
    <ul className="footer-links">
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/service">Our Services</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
    </ul>
  </div>

  <div className="footer-section">
    <h2>Get Connected</h2>
    <ul className="footer-links">
      <li>
        <span className="material-symbols-outlined">location_on</span>
        Sundigo tower, Gomti Nagar, Uttar Pradesh
      </li>
      <li>
        <span className="material-symbols-outlined">phone_in_talk</span>
        +91 8177004441
      </li>
      <li>
        <span className="material-symbols-outlined">language</span>
        <a href="https://www.sundigosolar.com">www.sundigosolar.com</a>
      </li>
    </ul>
  </div>
</div>

<style>
  {`
    .footer {
      display: flex;
      justify-content: space-around;
      padding: 30px;
      background: linear-gradient(135deg, #222, #555);
      color: white;
      flex-wrap: wrap;
    }
    .footer-section {
      flex: 1;
      min-width: 250px;
      margin: 10px;
      text-align: center;
    }
    .footer-section h2 {
      font-size: 1.8rem;
      margin-bottom: 15px;
      border-bottom: 2px solid #00a0a0;
      display: inline-block;
      padding-bottom: 5px;
      color: #00a0a0;
    }
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .footer-links li {
      margin: 10px 0;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .footer-links li span {
      margin-right: 8px;
      color: #00a0a0;
    }
    .footer-links a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .footer-links a:hover {
      color: #00a0a0;
    }
    @media (max-width: 768px) {
      .footer {
        flex-direction: column;
        align-items: center;
      }
      .footer-section {
        text-align: center;
        margin: 20px 0;
      }
      .footer-section h2 {
        font-size: 1.5rem;
      }
    }
    @media (max-width: 480px) {
      .footer-links li {
        font-size: 0.9rem;
      }
      .footer-section h2 {
        font-size: 1.2rem;
      }
    }
  `}
</style>
    </>
  );
}
