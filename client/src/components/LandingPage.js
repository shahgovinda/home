import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Govinda E-Shopping</h1>
        <p>Discover the best products and amazing deals, all in one place.</p>
        <Link to="/shop" className="shop-button">Start Shopping</Link>
      </div>

      <style>
        {`
          .landing-page {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background: linear-gradient(to bottom right, #ffeb3b, #ffc107);
            font-family: 'Arial', sans-serif;
          }

          .hero-section {
            text-align: center;
            color: #333;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            width: 90%;
          }

          .hero-section h1 {
            font-size: 3em;
            color: #ff9800;
            margin-bottom: 20px;
          }

          .hero-section p {
            font-size: 1.2em;
            margin-bottom: 30px;
            color: #555;
          }

          .shop-button {
            font-size: 1.2em;
            color: white;
            background-color: #ff5722;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            transition: background-color 0.3s ease;
          }

          .shop-button:hover {
            background-color: #e64a19;
          }

          /* Mobile responsiveness */
          @media (max-width: 600px) {
            .hero-section h1 {
              font-size: 2.5em;
            }

            .hero-section p {
              font-size: 1em;
            }

            .shop-button {
              font-size: 1em;
              padding: 8px 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
