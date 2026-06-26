import React, { useEffect, useState } from "react";
import { getAllOrders, getProducts } from "../api/userApi";
import { Link } from "react-router";
import "../CSS/AdminDashboard.css";

function AdminDashBoard() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [revenue, setRevenue] = useState(0);

  async function loadDashboard() {
    let products = await getProducts();
    let  orders = await getAllOrders();

    setTotalProducts(products.ProductDetails.length);
    setTotalOrders(orders.length);

    const totalRevenue = orders.reduce(
      (sum, item) => sum + item.totalAmount,
      0
    );

    setRevenue(totalRevenue);
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <>
      <nav className="navbar">
        <h2>ShopHub</h2>

        <ul className="nav-links">
          <Link to="/">
            <button className="btn1">
              <li>Home</li>
            </button>
          </Link>

          <Link to="/admin">
            <button className="btn1">
              <li>Admin</li>
            </button>
          </Link>
        </ul>
      </nav>

      <div className="dashboard-container">
        <h1>📊 Admin Dashboard</h1>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Total Products</h3>
            <p>{totalProducts}</p>
          </div>

          <div className="dashboard-card">
            <h3>Total Orders</h3>
            <p>{totalOrders}</p>
          </div>

          <div className="dashboard-card">
            <h3>Total Revenue</h3>
            <p>₹{revenue}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashBoard;