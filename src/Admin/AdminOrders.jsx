import React, { useEffect, useState } from "react"
import { getAllOrders, updateStatus } from "../api/userApi"
import { Link } from "react-router"
import "../CSS/AdminOrders.css"


function AdminOrders() {

  const [orders, setOrders] = useState()

  async function loadOrders() {
    let data = await getAllOrders()
    console.log(">>>>>>>>>>",data)
    setOrders(data)
  }

  useEffect(() => {
    loadOrders()
  }, [])

  async function changeStatus(id, currentStatus) {

    console.log("Clicked", id, currentStatus)
    

    let newStatus = "Shipped"

    if (currentStatus === "Shipped") {
      newStatus = "Delivered"
    }

    await updateStatus(id, newStatus)

    loadOrders()
  }

  return (
  <>
    <nav className="navbar">
      <h2>ShopHub</h2>
      <ul className="nav-links">
        <Link to="/"><li>Home</li></Link>
        <Link to="/admin"><li>Admin</li></Link>
        <Link to="/adminproducts"><li>Products</li></Link>
        </ul>
        </nav>
        <div className="orders-page">
          <h1 className="page-title">📦 Manage Orders</h1>
          <div className="orders-grid">
            {orders?.map((item) => (
              <div key={item._id} className="admin-order-card">
                <img src={item.productId?.image} alt={item.productId?.name} className="order-image"/>
                <h3>{item.productId?.name}</h3>
                <p><strong>Customer:</strong> {item.fullname}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Total:</strong> ₹{item.totalAmount}</p>
              <p className="status">Status: {item.status}</p>
              {item.status !== "Delivered" && (
                <button className="status-btn" onClick={() =>
                changeStatus(item._id, item.status)}>
                {item.status === "Placed"
                  ? "Ship Order"
                  : "Deliver Order"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  </>
);
}

export default AdminOrders;