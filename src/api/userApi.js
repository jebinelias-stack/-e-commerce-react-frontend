import axios from "axios"
import { data } from "react-router"

async function signupInfo (data) {
    try{
    let a = await axios.post("http://localhost:3000/api/signup",data)
    return a.data
    }catch(err){

    }
}

async function loginInfo(data,dispatch) {
    try{
        let a = await axios.post('http://localhost:3000/api/login',data)
        dispatch({type:"success",payload:a.data})
        console.log(a.data);
        return a.data.message
    }catch(err){
        console.log(err.response.data)
        return err.response.data
    }
}

async function addProduct(data) {
    try{
       let a =  await axios.post('http://localhost:3000/product/addProduct',data)
       console.log(a.data);
       return a.data
       
    }catch(err){

    }
}
 async function getProducts() {
     try{
        let a = await axios.get('http://localhost:3000/product/getProduct')
        console.log("home page values",a.data);
        return a.data
    }catch(err){

    }

  }

  async function getSingleproduct(id) {
    try{
        let a = await axios.get(`http://localhost:3000/product/getSingleProduct/${id}`)
        return a.data.ProductDetails
        console.log("single id valuessssssssssss",a.data.ProductDetails);
        
    }catch(err){

    }
  }

  async function addToCart(data) {
    try{
        let a = await axios.post('http://localhost:3000/cart/addCart',data)
        return a.data
    }catch(err){

    }
  }
  
  async function getCart(userId) {
    try{
        let a = await axios.get(`http://localhost:3000/cart/getCart/${userId}`)
        console.log("getcart userapi",a.data);
        
        return a.data
    }catch(err){

    }
  }

  async function deleteCart(id) {
    try{
        let a = await axios.delete(`http://localhost:3000/cart/deleteCart/${id}`)
        return a.data
    }catch(err){

    }
  }

  async function increaseQuantity(id) {
    try{
        let a = await axios.patch(`http://localhost:3000/cart/increase/${id}`)
        return a.data
    }catch(err){

    }
  }
  async function decreaseQuantity(id){
    try{
        let a = await axios.patch(`http://localhost:3000/cart/decrease/${id}`)
        return a.data
  }catch(err){

  }
}

async function placeOrder(data) {
    try{
        let a = await axios.post('http://localhost:3000/order/placeOrder',data)
        console.log("place order value ",a.data);
        
        return a.data

    }catch(err){

    }
}

async function getOrder(userId) {
    try{
        let a = await axios.get(`http://localhost:3000/order/getOrders/${userId}`)
        return a.data
    }catch(err){

    }
}

async function deleteproduct(id) {
    try{
         let a= await axios.delete(`http://localhost:3000/product/deleteProduct/${id}`)
         return a.data
    }catch(err){

    }
}

async function updateProduct(id,data) {
    try{
        let a = await axios.put(`http://localhost:3000/product/updateProduct/${id}`,data)
        return a.data
    }catch(err){

    }
}


async function getAllOrders() {
    try{
        let a = await axios.get("http://localhost:3000/order/getAllOrders")
        return a.data
    }catch(err){

    }
}


async function updateStatus(id,status) {
    try{
        let a = await axios.put(`http://localhost:3000/order/updateStatus/${id}`,{ status })
        return a,data
    }catch(err){

    }
}
export {signupInfo,loginInfo,addProduct,getProducts,getSingleproduct,addToCart,getCart,deleteCart,increaseQuantity,decreaseQuantity,placeOrder,getOrder,deleteproduct,updateProduct,updateStatus,getAllOrders}