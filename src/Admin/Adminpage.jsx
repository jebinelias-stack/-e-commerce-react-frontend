import React, { useState } from 'react'
import { addProduct } from '../api/userApi'
import { Link } from 'react-router'
import '../CSS/Admin.css'

function Adminpage() {

    const [data,setData] = useState({
        name:String,
        price:Number,
        description:String,
        category:String,
        image:String,
        stock:Number,
        rating:Number
    })

    const [message,setMessage] = useState()

    function handleChange(e){
        const {value,name} = e.target
        setData({...data,[name]:value})
    }
    
   async  function display(){
        let a = await addProduct(data)
        setMessage(a)
        console.log("asdaddaaaddddddddddddddddddddd",a);
        
    }

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

        <Link to="/adminproducts">
          <button className="btn1">
            <li>Products</li>
          </button>
        </Link>

        <Link to="/orders">
          <button className="btn1">
            <li>Orders</li>
          </button>
        </Link>

        <Link to="/adminorder">
        <button className="btn1">
          <li>ManageOrders</li>
          </button>
          </Link>
          
          <Link to="/admindashboard">
          <button className="btn1">
            <li>Dashboard</li>
            </button>
            </Link>
      </ul>
    </nav>

    <div className="admin-container">
      <div className="admin-card">
        <h1>Add Product</h1>
        {message && (<div className="success-message">✅ {message}</div>)}
        <input type="text" name="name" placeholder="Product Name" onChange={handleChange}/>
        <input type="number" name="price" placeholder="Price" onChange={handleChange}/>
        <input type="text" name="description" placeholder="Description" onChange={handleChange}/>
        <input type="text" name="category" placeholder="Category" onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
        <input type="number" name="stock" placeholder="Stock" onChange={handleChange}/>
        <input type="number" name="rating" placeholder="Rating" onChange={handleChange}/>
        <button onClick={display}>Add Product</button>

      </div>
    </div>
  </>
)
}

export default Adminpage
