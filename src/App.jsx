import React, { useContext } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Adminpage from './Admin/Adminpage'
import { Storecontext } from './pages/Store'
import Productpage from './pages/Productpage'
import Cart from './pages/Cart'
import Checkoutpage from './pages/Checkoutpage'
import Myorder from './pages/Myorder'
import Adminproducts from './Admin/Adminproducts'
import Editproduct from './pages/Editproduct'
import AdminOrders from './Admin/AdminOrders'
import AdminDashBoard from './Admin/AdminDashBoard'


function App() {

 let {info} =  useContext(Storecontext)

const token = info?.token 
const admin = info?.isAdmin

 console.log('info value in app page ',info);
 console.log('token value in app page ',token);
 console.log('token value in app page ',admin);
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={token ? <Home/> : <Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/admin' element={admin && token ? <Adminpage /> : <Login />}/>
      <Route path='/product/:id' element = {<Productpage/>}/>
      <Route path='/cart' element = {<Cart/>}/>
      <Route path='/checkout' element = {<Checkoutpage/>}/>
      <Route path='/orders' element = {<Myorder/>}/>
      <Route path='/adminproducts' element = {<Adminproducts/>}/>
      <Route path='/editproduct/:id' element = {<Editproduct/>}/>
      <Route path='/adminorder' element = {<AdminOrders/>}/>
      <Route path='/admindashboard' element = {<AdminDashBoard/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
