import React, { useContext, useEffect, useState } from "react"
import "../CSS/Home.css"
import { Storecontext } from "./Store"
import { Link } from "react-router"
import { getProducts } from "../api/userApi"


function HomePage() {

  const {info,dispatch} = useContext(Storecontext)

  const [products,setProducts] =  useState([])

  const [search,setSearch] = useState("")

  const [category,setCategory] = useState("All")

  function display(){
    dispatch({type:"remove"})
  }

  async function getData(){
    let a = await getProducts()
    setProducts(a.ProductDetails)
  }

  useEffect(()=>{
    getData()
  },[])

  const filteredProducts = products.filter((item) => {

  const matchesSearch =item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase());

  const matchesCategory = category === "All" || 
  item.category.toLowerCase() === category.toLowerCase();

  return matchesSearch && matchesCategory;
});

  return (
    <div className="home">
      <nav className="navbar">
        <h2>ShopHub</h2>
        <input type="text" placeholder="Search products..." className="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <ul className="nav-links">
          <Link to={'/admin'} ><button className="btn1"><li>Admin</li></button></Link>
          <Link to={'/cart'}><button className="btn1"><li>Cart</li></button></Link>
          <Link to="/orders"><button className="btn1"><li>MyOrders</li></button></Link>
          <button onClick={display} className="btn1"><li>Logout</li></button>
        </ul>
      </nav>
      <div className="category">
        <button onClick={() => setCategory("All")}>All</button>
        <button  onClick={() => setCategory("Mobiles")}>Mobiles</button>
        <button onClick={() => setCategory("Laptops")}>Laptops</button>
        <button onClick={() => setCategory("Headphones")}>Headphones</button>
        </div>
      <div className="home1">
        {filteredProducts.length === 0 ? (
          <h2>No Products Found</h2>
        ) : (
          filteredProducts.map((li) => (
          <Link to={`/product/${li._id}`} key={li._id}>
            <div className="products">
            <img src={li.image} alt={li.name} width="150" />
            <h2>{li.name}</h2>
            <p>₹{li.price}</p>
            <p>⭐ {li.rating}</p>
        </div>
      </Link>
    ))
  )}
</div>
    </div>
  );
}

export default HomePage;