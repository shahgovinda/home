import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to Govinda E-Store! We are an online store dedicated to bringing you the finest Handmade Pocha. 
        Our mission is to make your dining experience delightful and memorable with our handpicked products.
      </p>
      <button onClick={() => alert('Learn More Coming Soon!')}>Learn More</button>

      <style>
        {`
          .about-page {
            padding: 40px;
            font-family: 'Arial', sans-serif;
            background-color: #f7f7f7;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #333;
            text-align: center;
          }

          .about-page h1 {
            font-size: 3.5em;
            color: #4CAF50;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 20px;
            font-weight: 700;
            animation: fadeIn 2s ease-in-out;
          }

          .about-page p {
            font-size: 1.2em;
            line-height: 1.8;
            max-width: 800px;
            margin-bottom: 30px;
            color: #555;
            animation: slideIn 2s ease-in-out;
          }

          .about-page button {
            padding: 12px 24px;
            font-size: 1.2em;
            border: none;
            border-radius: 8px;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s, transform 0.3s;
          }

          .about-page button:hover {
            background-color: #45a049;
            transform: translateY(-3px);
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .about-page {
              padding: 20px;
            }

            .about-page h1 {
              font-size: 2.8em;
              margin-bottom: 15px;
            }

            .about-page p {
              font-size: 1.1em;
              max-width: 90%;
            }

            .about-page button {
              font-size: 1em;
              padding: 10px 20px;
            }
          }

          @media (max-width: 480px) {
            .about-page h1 {
              font-size: 2.4em;
              margin-bottom: 10px;
            }

            .about-page p {
              font-size: 1em;
              line-height: 1.6;
              max-width: 100%;
            }

            .about-page button {
              font-size: 0.9em;
              padding: 8px 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutPage;
