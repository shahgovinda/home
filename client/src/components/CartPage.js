import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';

const CartPage = () => {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [countdown, setCountdown] = useState(300); // 5 minutes in seconds
  const [confirmButtonEnabled, setConfirmButtonEnabled] = useState(false); // Initially disable Confirm Payment button
  const [receipt, setReceipt] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [showPaymentProcessing, setShowPaymentProcessing] = useState(false); // To control the display of the processing prompt

  useEffect(() => {
    if (location.state && location.state.cart) {
      setCart(location.state.cart); // Get cart data passed from ShopPage
    }
  }, [location]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Countdown logic for 5 minutes
  useEffect(() => {
    if (paymentInitiated && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup interval on component unmount or countdown end
    }
  }, [paymentInitiated, countdown]);

  // Enable Confirm Payment button after 40 seconds
  useEffect(() => {
    if (paymentInitiated) {
      const timer = setTimeout(() => {
        setConfirmButtonEnabled(true); // Enable the Confirm Payment button after 40 seconds
      }, 40000); // 40 seconds in milliseconds

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [paymentInitiated]);

  // Handle checkout (initiate payment)
  const handleCheckout = () => {
    setPaymentInitiated(true); // Start payment process and countdown
  };

  // Handle payment confirmation
  const handlePaymentConfirmation = () => {
    setPaymentStatus('Payment is under processing'); // Change payment status
    setShowPaymentProcessing(true); // Show the "Payment is under processing" prompt

    // Simulate payment processing with a delay (you can replace this with actual payment API logic)
    setTimeout(() => {
      setPaymentConfirmed(true); // Mark the payment as confirmed
      setShowPaymentProcessing(false); // Hide the processing message after payment is done

      // Generate the receipt after payment
      const generatedReceipt = {
        products: cart.map(item => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          total: item.price * item.quantity,
        })),
        total: total.toFixed(2),
        estimatedDeliveryTime: '2-3 days', // Customize based on your delivery schedule
      };

      setReceipt(generatedReceipt); // Set the generated receipt
    }, 4000); // Simulate a 4-second payment processing delay
  };

  // Function to generate PDF receipt
  const generatePDFReceipt = (generatedReceipt) => {
    const doc = new jsPDF();

    // Add header with a more professional look
    doc.setFontSize(20);
    doc.text('Home Essentials - Payment Receipt', 20, 20);
    doc.setFontSize(12);
    doc.text('----------------------------------------', 20, 28);

    // Add product details with clear section headings
    let yPosition = 40;
    doc.setFontSize(14);
    generatedReceipt.products.forEach((product) => {
      doc.text(`Product: ${product.name}`, 20, yPosition);
      doc.text(`Quantity: ${product.quantity}`, 120, yPosition);
      doc.text(`Price: $${product.price.toFixed(2)}`, 180, yPosition);
      doc.text(`Total: $${product.total.toFixed(2)}`, 240, yPosition);
      yPosition += 10;
    });

    // Add total price in a highlighted format
    doc.setFontSize(16);
    doc.setTextColor(0, 51, 102); // Dark blue for total
    doc.text(`Total Amount: $${generatedReceipt.total}`, 20, yPosition);

    // Add delivery time section
    yPosition += 15;
    doc.setFontSize(12);
    doc.text(`Estimated Delivery Time: ${generatedReceipt.estimatedDeliveryTime}`, 20, yPosition);

    // Add footer with phone number, email, and rights message
    yPosition += 20;
    doc.setFontSize(10);
    doc.text('For inquiries, contact:', 20, yPosition);
    doc.text('Phone: 7045617506', 20, yPosition + 10);
    doc.text('Email: govindashah603@gmail.com', 20, yPosition + 20);
    doc.text('All rights reserved to Home Essentials', 20, yPosition + 30);

    // Save the PDF
    doc.save('receipt.pdf');
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p className="item-name">{item.name}</p>
              <p className="item-price">Price: ${item.price.toFixed(2)}</p>
              <p className="item-quantity">Quantity: {item.quantity}</p>
              <p className="item-total">Total: ${item.price * item.quantity}</p>
            </div>
          ))}
          <div className="cart-total">
            <p>Total Price:</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>

          {paymentInitiated && !paymentConfirmed && (
            <div className="payment-section">
              <h2>Complete your payment</h2>
              <p>Please pay the total amount of ${total.toFixed(2)} using Google Pay.</p>
              <div className="qr-code">
                <img src="/Images/qrcode.jpg" alt="Google Pay QR Code" width="200" height="200" />
              </div>
              <p>Scan this QR code with your Google Pay app to complete the payment.</p>

              <div className="countdown">
                <p>Time left to complete payment: {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')}</p>
              </div>

              {/* Disable Confirm Payment until 40 seconds have passed */}
              <button
                onClick={handlePaymentConfirmation}
                className="payment-confirm-button"
                disabled={!confirmButtonEnabled}
              >
                Confirm Payment
              </button>
            </div>
          )}

          {paymentStatus && (
            <div className="payment-status">
              <h2>{paymentStatus}</h2>
              <p>Your order is being processed. Thank you for your purchase!</p>

              {paymentConfirmed && (
                <div className="download-section">
                  <h3>Download Receipt</h3>
                  <button onClick={() => generatePDFReceipt(receipt)}>
                    Download PDF Receipt
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty</p>
      )}

      {/* Animated Payment Processing Modal */}
      {showPaymentProcessing && (
        <div className="payment-processing-modal">
          <div className="modal-content">
            <p>Payment is under processing...</p>
            <div className="spinner"></div>
          </div>
        </div>
      )}

      <style>
        {`
          .cart-page {
            padding: 40px;
            font-family: 'Georgia', serif;
            background: linear-gradient(to bottom, #f4f4f4, #e2e2e2);
            min-height: 100vh;
            text-align: center;
            transition: all 0.3s ease;
          }

          .cart-page h1 {
            font-size: 2.8em;
            color: #333;
            margin-bottom: 20px;
            text-transform: uppercase;
            font-family: 'Georgia', serif;
          }

          .cart-items {
            max-width: 700px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
            animation: fadeIn 1s ease-in-out;
          }

          .cart-item {
            margin-bottom: 20px;
            font-size: 1.2em;
            color: #555;
          }

          .checkout-button {
            margin-top: 20px;
            padding: 12px 20px;
            background-color: #28a745;
            color: white;
            font-size: 1.2em;
            font-weight: bold;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.3s;
          }

          .checkout-button:hover {
            background-color: #218838;
            transform: translateY(-2px);
          }

          .payment-section {
            padding: 20px;
            background-color: #f9f9f9;
            margin-top: 30px;
            border-radius: 15px;
            text-align: center;
            animation: fadeIn 1s ease-in-out;
          }

          .payment-status {
            margin-top: 30px;
            font-size: 1.5em;
          }

          .payment-confirm-button {
            padding: 12px 20px;
            background-color: #007bff;
            color: white;
            font-size: 1.2em;
            font-weight: bold;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .payment-confirm-button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }

          .payment-processing-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            font-size: 1.5em;
          }

          .spinner {
            margin-top: 20px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 2s linear infinite;
            margin: 20px auto;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          /* Mobile responsiveness */
          @media (max-width: 600px) {
            .cart-items {
              padding: 20px;
              margin: 10px;
            }

            .cart-page h1 {
              font-size: 2em;
            }

            .checkout-button {
              width: 100%;
            }

            .payment-section {
              padding: 10px;
            }

            .payment-confirm-button {
              width: 100%;
            }

            .payment-processing-modal .modal-content {
              font-size: 1.2em;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CartPage;
