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
            background: linear-gradient(to bottom, #e0f7fa, #b2ebf2);
            min-height: 100vh;
            text-align: center;
            color: #333;
          }

          .contact-page h1 {
            font-size: 2.5em;
            color: #006064;
            margin-bottom: 20px;
          }

          .contact-page p {
            font-size: 1.2em;
            margin: 10px 0;
            line-height: 1.5;
          }

          .contact-details {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .contact-item {
            background: white;
            border-radius: 10px;
            padding: 20px;
            width: 80%;
            max-width: 400px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .contact-item h3 {
            font-size: 1.5em;
            color: #00796b;
            margin-bottom: 10px;
          }

          .contact-item p {
            font-size: 1.2em;
            color: #555;
          }

          /* Mobile responsiveness */
          @media (max-width: 600px) {
            .contact-page h1 {
              font-size: 2em;
            }

            .contact-page p {
              font-size: 1em;
            }

            .contact-details {
              padding: 10px;
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
        `}
      </style>
    </div>
  );
};

export default ContactPage;
