import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [count, setCount] = useState(0); // State for auto-incrementing number

  useEffect(() => {
    if (count >= 208) return; // Stop incrementing at 208

    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 208 ? prevCount + 1 : 208));
    }, 50); // Updated interval speed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [count]); // Runs every time count updates

  return (
    <>
      {/* Header Section */}
      <div className="home">
        <h1 className="text-light">About The Organization</h1>
      </div>

      {/* Counter Section */}
      Here’s how you can implement a left-to-right motion entrance for the "About Us Organization" block. The animation slides the block in from the left when it enters the viewport:
<div className="about animate-about " style={{backgroundColor:"yellowgreen"}}>
  <h2>About the Organization</h2>
  <p>
  Welcome to <strong>SUNdigo Sewa Samiti</strong>, a beacon of hope and catalyst for change in our global community. At SUNdigo Sewa Samiti, our story is one of passion, purpose, and commitment to making a difference. What began as a small venture has evolved into a company deeply rooted in the belief that business success should go hand in hand with social responsibility.
  </p>
</div>

<style>
  {`
    @keyframes slideInLeft {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    .about {
      padding: 40px 20px;
      text-align: center;
      max-width: 90%;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      opacity: 0;
      transform: translateX(-100%);
    }
    .animate-about {
      animation: slideInLeft 1.5s ease-out forwards;
    }
    .about h2 {
      font-size: 2rem;
      color: #0049B7;
      margin-bottom: 20px;
    }
    .about p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #333;
    }
    @media (max-width: 768px) {
      .about {
        padding: 20px;
      }
      .about h2 {
        font-size: 1.8rem;
      }
      .about p {
        font-size: 1rem;
      }
    }
    @media (max-width: 480px) {
      .about h2 {
        font-size: 1.5rem;
      }
      .about p {
        font-size: 0.9rem;
      }
    }
  `}
</style>



      {/* Board of Trusties Section */}
      <div className="card text-bg-success mb-3" style={{ fontSize: "1.5rem" }}>
        <div className="card-header" style={{ fontSize: "2.5rem", margin: "auto" }}>Board Of Trusties</div>
        <div
          className="card-body"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "nowrap", // Ensures all items stay on one line
            gap: "10px", // Adds spacing between the cards
          }}
        >
          {/* Card 1 */}
          <div className="card" style={{ width: "14rem", backgroundColor: "lightgreen" }}>
            <img src="/p9.png" alt="Archana Yadav" />
            <h5 className="card-title" style={{ textAlign: "center" }}>Archana Yadav</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: "center" }}>CMD</h6>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ width: "14rem", backgroundColor: "lightgreen" }}>
            <img src="/p10.png" alt="Brijesh Yadav" />
            <h5 className="card-title" style={{ textAlign: "center" }}>Brijesh Yadav</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: "center" }}>MD</h6>
          </div>

          {/* Card 3 */}
          <div className="card" style={{ width: "14rem", backgroundColor: "lightgreen" }}>
            <img src="/p11.png" alt="Anant Shrivastava" />
            <h5 className="card-title" style={{ textAlign: "center" }}>Anant Shrivastava</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary" style={{ textAlign: "center" }}>MD-2</h6>
          </div>
        </div>
      </div>

     {/* Our Vision Section */}
<h2
  className="header"
  style={{
    backgroundColor: "#024950",
    textAlign: "center",
    fontSize: "2.5rem",
    padding: "10px",
    color: "white",
  }}
>
  Our Vision
</h2>
<div
  className="card text-bg-secondary mb-3"
  style={{
    width: "90%", // Adjust width to be responsive
    maxWidth: "1000px", // Set max width to maintain layout on larger screens
    margin: "20px auto",
    background: "linear-gradient(to right, #f7f7f7, #cce7d0)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    padding: "20px",
  }}
>
  <p
    className="card-text"
    style={{
      fontSize: "1.2rem", // Slightly smaller for responsiveness
      textAlign: "center",
      fontStyle: "italic",
      color: "#3b3b3b",
    }}
  >
    "To create a world where every business decision considers its impact on
    people and the planet, fostering a sustainable and equitable future for all."
  </p>
</div>


       {/* Our Mission Section */}
<h2
  className="header"
  style={{
    backgroundColor: "#D6536D",
    textAlign: "center",
    fontSize: "2.5rem",
    padding: "10px",
    color: "white",
  }}
>
  Our Mission
</h2>
<div
  className="card text-bg-secondary mb-3"
  style={{
    width: "90%", // Adjusted for responsiveness
    maxWidth: "1000px", // Retains layout on larger screens
    height: "auto",
    margin: "20px auto",
    backgroundColor: "#116466",
    boxShadow: "0 4px 8px rgba(255, 7, 7, 0.2)",
    borderRadius: "10px",
    padding: "20px",
    color: "white", // Fixed color property (fontColor isn't valid)
  }}
>
  <p
    className="card-text"
    style={{
      fontSize: "1.2rem", // Adjusted font size for better readability
      textAlign: "center",
      fontStyle: "italic",
      color: "white",
    }}
  >
    At SUNdigo Sewa Samiti, our mission is deeply rooted in our commitment to making a positive difference in the world.
    We aim to:
    <ul style={{ textAlign: "left", margin: "10px 0", lineHeight: "1.6", color: "white" }}>
      <li>Operate our business with integrity, transparency, and a deep respect for human rights and the environment.</li>
      <li>Engage in sustainable practices that minimize our ecological footprint and contribute to the well-being of future generations.</li>
      <li>Cultivate a diverse, inclusive, and supportive workplace where every voice is heard and valued.</li>
      <li>Strive for continuous improvement in our sustainability performance, setting measurable goals and regularly reviewing our progress to drive positive change.</li>
      <li>Inspire and empower others to join us in our journey towards a more sustainable and socially responsible future.</li>
    </ul>
  </p>
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
