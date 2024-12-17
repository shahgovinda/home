import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1 className="title">Govinda E-Shopping</h1>
        <p>Discover the best products and amazing deals, all in one place.</p>
        <Link to="/shop" className="shop-button">Start Shopping</Link>
      </div>

      <style>
        {`
          /* Landing Page Styling */
          .landing-page {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background: linear-gradient(to bottom right, #1c1c1c, #0a0a0a);
            font-family: 'Arial', sans-serif;
            position: relative;
            overflow: hidden;
          }

          /* Thunderstorm Effect */
          .landing-page::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('/Images/thunderstorm.gif') center/cover no-repeat;
            opacity: 0.2; /* Adjust for subtle effect */
            z-index: 1;
          }

          /* Hero Section */
          .hero-section {
            text-align: center;
            color: #fff;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            z-index: 2;
            backdrop-filter: blur(5px);
            animation: fadeIn 1.5s ease-in-out;
          }

          /* Title with Studio Light Effect */
          .title {
            font-size: 4em;
            color: #f9d423;
            margin-bottom: 20px;
            position: relative;
            text-transform: uppercase;
            animation: studioLight 2s infinite;
          }

          /* Light Glow Animation */
          @keyframes studioLight {
            0%, 100% {
              text-shadow: 0 0 5px #f9d423, 0 0 15px #f9d423, 0 0 20px #f5a623;
            }
            50% {
              text-shadow: 0 0 20px #f9d423, 0 0 30px #f5a623, 0 0 50px #f79e1b;
            }
          }

          /* Paragraph */
          .hero-section p {
            font-size: 1.5em;
            margin-bottom: 30px;
            color: #ddd;
            font-weight: 300;
          }

          /* Button with Hover Effect */
          .shop-button {
            font-size: 1.2em;
            color: #fff;
            background: linear-gradient(to right, #ff7e5f, #feb47b);
            padding: 15px 30px;
            border-radius: 30px;
            text-decoration: none;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            position: relative;
            z-index: 2;
          }

          .shop-button:hover {
            background: linear-gradient(to left, #ff7e5f, #feb47b);
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(255, 126, 95, 0.7);
          }

          /* Fade-in Animation */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          /* Mobile Responsiveness */
          @media (max-width: 600px) {
            .title {
              font-size: 2.5em;
            }

            .hero-section p {
              font-size: 1em;
            }

            .shop-button {
              font-size: 1em;
              padding: 10px 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
