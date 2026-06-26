import React, { useEffect, useState } from "react";
import { decreaseQuantity, deleteCart, getCart, increaseQuantity } from "../api/userApi";
import "../CSS/Cart.css";
import { Link } from "react-router";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  async function getCartaData() {
    const user = JSON.parse(localStorage.getItem("jebindata"));

    if (!user) return;

    const data = await getCart(user.userId);
    setCartItems(data);
  }

  useEffect(() => {
    getCartaData();
  }, []);

  const total = cartItems.reduce(
  (sum, item) =>
    sum + (item.productId?.price || 0) * item.quantity,
  0
);

  async function removeItem (cartId) {
    await deleteCart(cartId)
    getCartaData()
  }

  async function plus(id) {
    await increaseQuantity(id)
    getCartaData()
  }

  async function minus(id) {
    await decreaseQuantity(id)
    getCartaData()
  }


  return (
  <>
    <nav className="cart-navbar">
  <div className="logo">ShopHub</div>

  <div className="cart-nav-links">
    <Link to="/">Home</Link>
    <Link to="/orders">My Orders</Link>
  </div>
</nav>

    <div className="cart-container">
      <h1 className="cart-title">🛒 My Cart</h1>

      <div className="cart-content">
        <div className="cart-items">
         {cartItems?.filter((item) => item.productId).map((item) => (
            <div className="cart-item" key={item._id}>
              <img
                src={item.productId.image}
                alt={item.productId.name}
                className="cart-image"
              />

              <div className="cart-details">
                <h2>{item.productId.name}</h2>
                <p className="price">₹{item.productId.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>

              <div className="cart-actions">
                <div className="item-total">
                  ₹{item.productId.price * item.quantity}
                </div>

                <div className="quantity-box">
                  <button onClick={() => minus(item._id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => plus(item._id)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Total Items</span>
            <span>
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>

          <div className="summary-row">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>

          <Link to="/checkout">
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
);
}

export default Cart;