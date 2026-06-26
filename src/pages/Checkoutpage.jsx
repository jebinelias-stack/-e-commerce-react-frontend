import React, { useState } from "react";
import '../CSS/Checkout.css'
import { getCart, placeOrder } from "../api/userApi";
import { Link } from "react-router";

function Checkoutpage() {

  const [formData,setFormData] = useState({
    fullname:"",
    phone:"",
    address:"",
    city:"",
    pincode:""
  })

  const [data,setData] = useState()

    async function OrderData() {
      const user = JSON.parse(localStorage.getItem("jebindata"))
      const cartItems = await getCart(user.userId)

      const validCartItems = cartItems.filter(
        item => item.productId
      )
      if(validCartItems.length === 0){
        alert("No valid products in cart")
        return
      }
      const orderData = {...formData,
        userId: user.userId,
        productId: validCartItems[0].productId._id,
        quantity: validCartItems[0].quantity,
        totalAmount:
        validCartItems[0].productId.price *
        validCartItems[0].quantity
      }

      console.log("oderdata value ",orderData);
      
      
      let a = await placeOrder(orderData)
      console.log(a)
      setData(a)
    }

 return (
  <>
    <nav className="navbar">
      <h2>ShopHub</h2>
      <ul className="nav-links">
        <Link to="/"><button className="btn1"><li>Home</li></button></Link>
        <Link to="/orders"><button className="btn1"><li>MyOrders</li></button></Link>
        </ul>
        </nav>
        <div className="checkout-container">
          <div className="checkout-card">
            <h1 className="checkout-title">Checkout</h1>
            {data && (
              <div className="success-message">{data}
            </div>
            )}
            <div className="checkout-form">
              <input type="text" placeholder="Full Name" onChange={(e) => setFormData({...formData,fullname: e.target.value,})}/>
              <input type="text" placeholder="Phone Number" onChange={(e) => setFormData({...formData,phone: e.target.value,})}/>
              <textarea placeholder="Address" onChange={(e) => setFormData({...formData, address: e.target.value, })}></textarea> 
              <input type="text" placeholder="City" onChange={(e) => setFormData({ ...formData, city: e.target.value, })}/>
              <input  type="text" placeholder="Pincode" onChange={(e) => setFormData({ ...formData, pincode: e.target.value,})}/>
              <button className="place-order-btn" onClick={OrderData}>Place Order</button>
            </div>
          </div>
      </div>
  </>
);
}

export default Checkoutpage
