import React, { useEffect, useState } from 'react'
import { getOrder } from '../api/userApi'
import '../CSS/Myorder.css'

function Myorder() {


const [orders,setOrders] = useState([])

    async function loadOrder() {

        const user = JSON.parse(localStorage.getItem('jebindata'))

        let data = await getOrder(user.userId)
        setOrders(data)
    }

    useEffect(()=>{
        loadOrder()
    },[])

  return (
     <div className="orders-container">
  <h1 className="orders-title">📦 My Orders</h1>

  {orders
  .filter((item) => item.productId)
  .map((item) => (
    <div className="order-card" key={item._id}>
      <img
        src={item.productId.image}
        alt={item.productId.name}
        className="order-image"
      />

      <div className="order-details">
        <h2>{item.productId.name}</h2>
        <p className="price">₹{item.totalAmount}</p>
        <p>Quantity: {item.quantity}</p>
      </div>

      <div className="order-status">
        <span className="status">{item.status}</span>
      </div>
    </div>
))}
</div>
  )
}

export default Myorder
