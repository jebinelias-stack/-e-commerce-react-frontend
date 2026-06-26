import React, { useContext,  useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { signupInfo } from '../api/userApi'
import '../CSS/Signup.css'
import { Storecontext } from './Store'

function Signup() {

  let {dispatch} =useContext(Storecontext)
  
  const navigate = useNavigate()
  
  const[message,setMessage] = useState()

  const [data,setData] = useState({
    name:String,
    email:String,
    password:String
  })

  function handlechange(e){
    const {value,name} = e.target
    setData({...data,[name]:value})
  }

  async function display(){
   let returnValue = await signupInfo(data)
   if(returnValue){
    setMessage("SignUp Success")

    setTimeout(()=>{
      navigate('/')
    },[1000])
   }
  }

  return (
    <div className='Main'>
      <div className='Mainbox'>
        <h1>Sign Up</h1>
      <input type="text" name='name' placeholder='Name'  onChange={handlechange}   />
      <input type="email" name='email' placeholder='Email' onChange={handlechange} />
      <input type="password" name='password' placeholder='Password' onChange={handlechange} />
      <h1>{message}</h1>
      <button onClick={display}>Sign Up</button>
      <Link to={'/'}>Already have an account</Link>
    </div>
    </div>
  )
}

export default Signup
