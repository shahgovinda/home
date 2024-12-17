import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';

const CartPage = () => {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [paymentInitiated, setPaymentInitiated] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [countdown, setCountdown] = useState(300); // 5 minutes in seconds
  const [confirmButtonEnabled, setConfirmButtonEnabled] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [showPaymentProcessing, setShowPaymentProcessing] = useState(false);

  useEffect(() => {
    if (location.state && location.state.cart) {
      setCart(location.state.cart);
    }
  }, [location]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (paymentInitiated && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [paymentInitiated, countdown]);

  useEffect(() => {
    if (paymentInitiated) {
      const timer = setTimeout(() => {
        setConfirmButtonEnabled(true);
      }, 40000);
      return () => clearTimeout(timer);
    }
  }, [paymentInitiated]);

  const handleCheckout = () => {
    setPaymentInitiated(true);
  };

  const handlePaymentConfirmation = () => {
    setPaymentStatus('Payment is under processing');
    setShowPaymentProcessing(true);

    setTimeout(() => {
      setPaymentConfirmed(true);
      setShowPaymentProcessing(false);

      const generatedReceipt = {
        products: cart.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          total: item.price * item.quantity,
        })),
        total: total.toFixed(2),
        estimatedDeliveryTime: '2-3 days',
      };

      setReceipt(generatedReceipt);
    }, 4000);
  };

  const generatePDFReceipt = (generatedReceipt) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Home Essentials - Payment Receipt', 20, 20);
    doc.setFontSize(12);
    doc.text('----------------------------------------', 20, 28);

    let yPosition = 40;
    doc.setFontSize(14);
    generatedReceipt.products.forEach((product) => {
      doc.text(`Product: ${product.name}`, 20, yPosition);
      doc.text(`Quantity: ${product.quantity}`, 120, yPosition);
      doc.text(`Price: $${product.price.toFixed(2)}`, 180, yPosition);
      doc.text(`Total: $${product.total.toFixed(2)}`, 240, yPosition);
      yPosition += 10;
    });

    doc.setFontSize(16);
    doc.setTextColor(0, 51, 102);
    doc.text(`Total Amount: $${generatedReceipt.total}`, 20, yPosition);

    yPosition += 15;
    doc.setFontSize(12);
    doc.text(`Estimated Delivery Time: ${generatedReceipt.estimatedDeliveryTime}`, 20, yPosition);

    yPosition += 20;
    doc.setFontSize(10);
    doc.text('For inquiries, contact:', 20, yPosition);
    doc.text('Phone: 7045617506', 20, yPosition + 10);
    doc.text('Email: govindashah603@gmail.com', 20, yPosition + 20);
    doc.text('All rights reserved to Home Essentials', 20, yPosition + 30);

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
              <p className="item-price">Price: Rs {item.price.toFixed(2)}</p>
              <p className="item-quantity">Quantity: {item.quantity}</p>
              {/* <p className="item-total">Grand Total : Rs {item.price * item.quantity}</p> */}

            </div>
          ))}
          <div className="cart-total">
            <p>Total Price:</p>
            <p>Rs {total.toFixed(2)}</p>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Payment
          </button>

          {paymentInitiated && !paymentConfirmed && (
            <div className="payment-section">
              <h2>Complete your payment</h2>
              <p>Please pay the total amount of Rs {total.toFixed(2)} using Google Pay.</p>
              <div className="qr-code">
                <img src="/Images/qrcode.jpg" alt="Google Pay QR Code" width="200" height="200" />
              </div>
              <p>Scan this QR code with your Google Pay app to complete the payment.</p>

              <div className="countdown">
                <p>Time left to complete payment: {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')}</p>
              </div>

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
