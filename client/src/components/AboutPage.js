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
            background: linear-gradient(to right, #ffecd2, #fcb69f);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #333;
          }

          .about-page h1 {
            font-size: 3em;
            margin-bottom: 20px;
            color: #ff6600;
            text-transform: uppercase;
            letter-spacing: 2px;
            animation: fadeIn 2s ease-in-out;
          }

          .about-page p {
            font-size: 1.2em;
            line-height: 1.8;
            max-width: 600px;
            text-align: center;
            color: #444;
            animation: slideIn 2s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
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

          .about-page button {
            padding: 10px 20px;
            font-size: 1em;
            margin-top: 20px;
            border: none;
            border-radius: 5px;
            background-color: #ff6600;
            color: white;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s, transform 0.3s;
          }

          .about-page button:hover {
            background-color: #cc5200;
            transform: translateY(-2px);
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .about-page {
              padding: 20px;
            }

            .about-page h1 {
              font-size: 2.5em;
              margin-bottom: 15px;
            }

            .about-page p {
              font-size: 1em;
              line-height: 1.5;
              max-width: 90%;
            }

            .about-page button {
              font-size: 0.9em;
              padding: 8px 16px;
            }
          }

          @media (max-width: 480px) {
            .about-page h1 {
              font-size: 2em;
              margin-bottom: 10px;
            }

            .about-page p {
              font-size: 0.9em;
              line-height: 1.4;
              max-width: 100%;
            }

            .about-page button {
              font-size: 0.8em;
              padding: 6px 12px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutPage;
