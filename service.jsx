import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Service() {
  useEffect(() => {
    const images = document.querySelectorAll(".animate-image");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 1.5s ease-out forwards";
          }
        });
      },
      { threshold: 0.1 }
    );

    images.forEach((image) => observer.observe(image));

    return () => {
      images.forEach((image) => observer.unobserve(image));
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color:rgb(23, 22, 22);
          }
          .animate-image {
            opacity: 0;
            transform: translateY(30px);
            max-width: 100%;
            border-radius: 15px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
            object-fit: cover;
          }
          .home {
            padding: 50px 20px;
            text-align: center;
            color: white;
            background: linear-gradient(135deg,rgb(37, 37, 37),rgb(18, 18, 18));
          }
          .home h1 {
            font-size: 3rem;
            margin: 0;
          }
          section {
            margin: 20px auto;
            max-width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          section h2 {
            font-size: 2rem;
            margin: 0;
            padding: 10px;
            border-radius: 10px;
            color: white;
            text-align: center;
          }
          .service-text {
            background-color: #00a0a0;
            color: black;
            border-radius: 10px;
            padding: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            max-width: 800px;
            text-align: justify;
          }
          .footer {
            background: #222;
            color: white;
            padding: 20px;
            text-align: center;
          }
          .footer h2 {
            font-size: 1.8rem;
          }
          .footer-links {
            list-style: none;
            padding: 0;
          }
          .footer-links li {
            margin: 10px 0;
            font-size: 1.1rem;
          }
          .footer-links a {
            color: white;
            text-decoration: none;
          }
          .footer-links a:hover {
            text-decoration: underline;
          }
          @media (max-width: 768px) {
            .home h1 {
              font-size: 2.5rem;
            }
            .service-text {
              font-size: 1rem;
            }
            section h2 {
              font-size: 1.8rem;
            }
          }
          @media (max-width: 480px) {
            .home h1 {
              font-size: 2rem;
            }
            .footer-links li {
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <div className="home">
        <h1>Our Services</h1>
      </div>

      {[
        { title: "Cloth Donation Camp", bg: "#0049B7", img: "/p4.jpg", text: "Join us at SUNdigo Sewa Samiti's Cloth Donation Camp!..." },
        { title: "Blood Donation Camp", bg: "#A28089", img: "/P12.jpg", text: "Your small act of kindness can make a big difference!..." },
        { title: "Plantation", bg: "#0049B7", img: "/p13.jpg", text: "Be a part of our plantation drive and help create a cleaner environment!" },
      ].map((service, index) => (
        <section key={index}>
          <h2 style={{ backgroundColor: service.bg }}>{service.title}</h2>
          <img src={service.img} alt={service.title} className="animate-image" />
          <div className="service-text">{service.text}</div>
        </section>
      ))}

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