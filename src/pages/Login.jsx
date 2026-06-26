import React, { use, useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router'
import { loginInfo } from '../api/userApi'
import '../CSS/Login.css'
import { Storecontext } from './Store'

function Login() {

  let {dispatch} = useContext(Storecontext)

  const navigate = useNavigate()

  const[message,setMessage] = useState()  

  const[email,setEmail] = useState()
  const[password,setPassword] = useState()


   async function display(){
    let returnValue = await loginInfo({email,password},dispatch)
    console.log(returnValue);
    setMessage(returnValue) 
  }


  return (
    <div className='Main1'>
      <div className='Mainbox1'>
        <h1>Login Page</h1>
      <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
      <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}  />
      <button onClick={display}>Login</button>
      <br />
      <>{message}</>
      <br />
      <Link to={'/signup'}>Don't have an account? Sign Up</Link>
      </div>
    </div>
  )
}

export default Login
