import React, { useContext, useEffect, useState } from 'react'
import { addToCart, getSingleproduct } from '../api/userApi'
import { useParams } from 'react-router'
import { Link } from 'react-router'
import { Storecontext } from './Store'
import "../CSS/Productpage.css"

function Productpage() {

    const {id} = useParams()

    const [data,setData] = useState()
    

    console.log("id >>>>>>>>>>>>>>>>>>>>>",id);


    async function addCart(){

      const user = JSON.parse(localStorage.getItem('jebindata'))

      const cartData = {
         userId:user.userId,
        productId:data._id,
        quantity:1
      }

     let a =  await addToCart(cartData)

      alert('Added to Cart')
    }
    
    async function display(){
        let a = await getSingleproduct(id)
        setData(a)
        console.log(" product details<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",a);
    }


    useEffect(()=>{
        display()
    },[])
    

 return (
  <div>
    <nav className="navbar">
      <h2>ShopHub</h2>

      <ul className="nav-links">
        <Link to="/cart">
          <button className="btn1">Cart</button>
        </Link>
      </ul>
    </nav>

    <div className="product-container">

      <div className="product-image-section">
        <img
          src={data?.image}
          alt={data?.name}
          className="product-image"
        />
      </div>

      <div className="product-details-section">
        <h1>{data?.name}</h1>

        <p className="product-category">
          {data?.category}
        </p>

        <h2 className="product-price">
          ₹{data?.price}
        </h2>

        <p className="product-description">
          {data?.description}
        </p>

        <p className="product-rating">
          ⭐ {data?.rating}/5
          </p>

        <button
          className="add-cart-btn"
          onClick={addCart}
        >
          Add To Cart
        </button>
      </div>

    </div>
  </div>
);
}

export default Productpage
