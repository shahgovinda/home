import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out to us:</p>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Email</h3>
          <p>govindashah603@gmail.com</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>7045617506</p>
        </div>
      </div>

      <style>
        {`
          .contact-page {
            padding: 40px;
            font-family: 'Arial', sans-serif;
            background-color: #f7f7f7;
            min-height: 100vh;
            text-align: center;
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .contact-page h1 {
            font-size: 3.5em;
            color: #4CAF50;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 20px;
            font-weight: 700;
            animation: fadeIn 2s ease-in-out;
          }

          .contact-page p {
            font-size: 1.2em;
            line-height: 1.8;
            max-width: 800px;
            margin-bottom: 30px;
            color: #555;
            animation: slideIn 2s ease-in-out;
          }

          .contact-details {
            display: flex;
            flex-direction: column;
            gap: 30px;
            justify-content: center;
            align-items: center;
          }

          .contact-item {
            background: white;
            padding: 20px;
            border-radius: 10px;
            width: 80%;
            max-width: 400px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }

          .contact-item:hover {
            transform: scale(1.05);
          }

          .contact-item h3 {
            font-size: 1.5em;
            color: #00796b;
            margin-bottom: 10px;
            font-weight: 600;
          }

          .contact-item p {
            font-size: 1.2em;
            color: #555;
            font-weight: 500;
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
            .contact-page {
              padding: 20px;
            }

            .contact-page h1 {
              font-size: 2.8em;
            }

            .contact-page p {
              font-size: 1.1em;
            }

            .contact-item {
              width: 90%;
            }

            .contact-item h3 {
              font-size: 1.3em;
            }

            .contact-item p {
              font-size: 1em;
            }
          }

          @media (max-width: 480px) {
            .contact-page h1 {
              font-size: 2.4em;
            }

            .contact-page p {
              font-size: 1em;
              line-height: 1.6;
            }

            .contact-item {
              width: 100%;
            }

            .contact-item h3 {
              font-size: 1.2em;
            }

            .contact-item p {
              font-size: 0.9em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ContactPage;
