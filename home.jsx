import { colors } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Home() {
  const [count, setCount] = useState(0); // State for auto-incrementing number

  useEffect(() => {
    if (count >= 208) return; // Stop incrementing at 208

    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 208 ? prevCount + 1 : 208));
    }, 10); // Updated interval speed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [count]); // Runs every time count updates

  return (
    <>
      <div className="home">
        <h1 className="text-light">Welcome To SUNdigo Sewa Samiti</h1>
      </div>

 

      {/* Card with Auto-Incrementing Number */}
      <div className="counter-card">
        <div className="card-content">
          <h5 className="card-title">Served Over</h5>
          <span className="counter">{count}</span>
          <h5 className="card-title">In Lucknow City</h5>
          <Link to="/sewa" className="program-btn" target="self">View Our Program</Link>
        </div>
      </div>
      <div className="card text-bg-success mb-3" style={{ fontSize: "1.5rem" }}>

  <div className="card-header"style={{ fontSize: "2.5rem", margin: "auto"}}>Who We Are ?</div>
  <div className="card-body">
    <p className="card-text">Welcome to SUNdigo Sewa Samiti, where every action counts towards a brighter future! SUNdigo Sewa Samiti is committed to making a positive impact on the world. Through our dedicated team and passionate supporters, we strive to tackle pressing issues and create lasting change in our communities and beyond. Explore our website to learn more about our mission, programs, and how you can get involved. Together, we can make a difference.</p>
  </div>
  <Link to="/about" className="program-btn" target="self">Learn More</Link>
</div>

<h2 className="header"style={{backgroundColor:"olive green", textAlign:"center", fontSize: "2.5rem", padding: "10px", color: "white"}}>Glimpse Of Recent Campaigns</h2>
     {/* Bootstrap Carousel */}
     <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/p1.jpeg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="/p2.jpeg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="/p3.jpeg" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
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
