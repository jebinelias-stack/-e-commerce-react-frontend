import { useEffect, useState } from "react";
import { deleteproduct, getProducts } from "../api/userApi";
import { Link } from "react-router";
import "../CSS/Adminproducts.css";

function Adminproducts() {
  const [products, setProducts] = useState([]);

  async function getData() {
    let a = await getProducts();
    setProducts(a.ProductDetails);
  }

  useEffect(() => {
    getData();
  }, []);

  async function remove(id) {
    await deleteproduct(id);
    getData();
  }

  return (
    <div className="admin-products-page">
      <nav className="navbar">
        <h2>ShopHub Admin</h2>

        <ul className="nav-links">
          <Link to="/">
            <button className="btn1">Home</button>
          </Link>

          <Link to="/admin">
            <button className="btn1">AddProduct</button>
          </Link>
        </ul>
      </nav>

      <h1 className="page-title">Manage Products</h1>

      <div className="products-grid">
        {products.map((item) => (
          
          <div className="product-card" key={item._id}>
            
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p className="price">₹{item.price}</p>

            <p>⭐{item.rating}</p>

       <div className="btn-group">
        <Link to={`/editproduct/${item._id}`}>
        <button className="edit-btn">✏️ Edit</button>
        </Link>
        <button className="delete-btn"onClick={() => remove(item._id)}>🗑 Delete</button>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adminproducts;