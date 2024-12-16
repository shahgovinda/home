import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShopPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const increaseQuantity = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const decreaseQuantity = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 } // Allow quantity to reach 0
            : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  const getQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    return product ? product.quantity : 0;
  };

  const addToCart = () => {
    navigate('/cart', { state: { cart } }); // Pass the cart data to CartPage
  };

  const products = [
    { id: 1, name: 'Door-Mat1', price: 2, image: '/images/door-mat.jpg' },
    { id: 2, name: 'Door-Mat2', price: 3, image: '/images/door-mat.jpg' },
    { id: 3, name: 'Door-Mat3', price: 5, image: '/images/door-mat.jpg' },
    { id: 4, name: 'Door-Mat4', price: 7, image: '/images/door-mat.jpg' },
    { id: 5, name: 'Door-Mat5', price: 2, image: '/images/door-mat.jpg' },
    { id: 6, name: 'Door-Mat6', price: 6, image: '/images/door-mat.jpg' },
    { id: 7, name: 'Door-Mat7', price: 8, image: '/images/door-mat.jpg' },
    { id: 8, name: 'Door-Mat8', price: 1, image: '/images/door-mat.jpg' },
    { id: 9, name: 'Door-Mat9', price: 9, image: '/images/door-mat.jpg' },
    { id: 10, name: 'Door-Mat10', price: 4, image: '/images/door-mat.jpg' },
    { id: 11, name: 'Door-Mat11', price: 5, image: '/images/door-mat.jpg' },
    { id: 12, name: 'Door-Mat12', price: 3, image: '/images/door-mat.jpg' },
  ];

  return (
    <div className="shop-page">
      <h1 className="shop-title">Shop Our Collection</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <div className="quantity-control">
              <button
                onClick={() => decreaseQuantity(product)}
                className="quantity-button"
              >
                -
              </button>
              <span className="quantity">{getQuantity(product.id)}</span>
              <button
                onClick={() => increaseQuantity(product)}
                className="quantity-button"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <button onClick={addToCart} className="add-to-cart-button">
          Go to Cart ({cart.length} items)
        </button>
      )}

      <style>
        {`
          .shop-page {
            padding: 20px;
            background-color: #f9f9f9;
            font-family: 'Arial', sans-serif;
          }

          .shop-title {
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 20px;
            color: #333;
          }

          .product-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          }

          .product-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 250px;
            transition: transform 0.3s ease;
          }

          .product-card:hover {
            transform: scale(1.05);
          }

          .product-image {
            width: 100%;
            height: auto;
            border-radius: 10px;
            margin-bottom: 15px;
          }

          .product-card h2 {
            font-size: 1.5em;
            color: #555;
            margin-bottom: 10px;
          }

          .product-card p {
            font-size: 1.2em;
            color: #777;
            margin-bottom: 20px;
          }

          .quantity-control {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 10px;
          }

          .quantity-button {
            padding: 5px 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .quantity-button:hover {
            background-color: #0056b3;
          }

          .quantity {
            font-size: 1.2em;
            color: #333;
            width: 40px;
            text-align: center;
          }

          .add-to-cart-button {
            background-color: #4caf50;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 1em;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 20px;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          .add-to-cart-button:hover {
            background-color: #45a049;
          }
        `}
      </style>
    </div>
  );
};

export default ShopPage;
