import React, { useContext, useEffect, useState } from 'react'
import { updateProduct } from '../api/userApi'
import { useParams } from 'react-router'
import { Link } from 'react-router'
import "../CSS/Editproduct.css"



function Editproduct() {


    const {id} = useParams()

    console.log("productID",id);
    


     const [data, setData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        image: "",
        stock: "",
        rating: ""
    });

    const [message,setMessage] = useState()


    async function productUpdate() {
        console.log("Update button clicked");
        let res = await updateProduct(id,data)
        console.log("Update Response:", res);
        setMessage(res)
    }

    function handleChange(e){
        let {name,value} =e.target
        setData({...data,[name]:value})
    }

 return (
  <>
    <nav className="navbar">
      <h2>ShopHub</h2>
      <ul className="nav-links">
        <Link to="/"><button className="btn1"><li>Home</li></button></Link>
        <Link to="/adminproducts"><button className="btn1"><li>Products</li></button></Link>
        </ul>
        </nav>
        <div className="edit-container">
            <div className="edit-card">
                <h1>✏️ Edit Product</h1>
                {message && (
                    <div className="success-message">
                        {message}
                        </div>
                    )}
                    <input type="text"name="name" placeholder="Product Name"onChange={handleChange} />
                    <input type="number" name="price"placeholder="Price"onChange={handleChange} /> 
                    <input type="text" name="description" placeholder="Description" onChange={handleChange}/>
                    <input type="text" name="category" placeholder="Category" onChange={handleChange} />
                    <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
                     <input type="number" name="stock" placeholder="Stock" onChange={handleChange} /> 
                     <input type="number" name="rating" placeholder="Rating" onChange={handleChange} />
                     <button className="update-btn" onClick={productUpdate} >Update Product</button>
                     </div>
                     </div>
                     </>
)
}

export default Editproduct
