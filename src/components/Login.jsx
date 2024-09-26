import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate()
const [data,setData] = useState({
  email : "", 
  password : ""
})
const handleChange = (e)=>{
  const {name,value } = e.target 
  setData({
    ...data, 
    [name] : value
  })
}
const handleSubmit = async(e)=>{
  e.preventDefault()
  const response = await axios.post("http://localhost:3000/user/login",data)
  if(response.status === 200){
    alert("Logged in successfully")
    navigate("/")
  }else{
    alert("Something went wrong")
  }
}
  return (
    <div>
      
  <div className="modal-box">

    <h3 className="font-bold text-lg">Login</h3>
    {/* Email */}
 <form onSubmit={handleSubmit}>
 <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email"
         placeholder="Enter  your email" 
         name='email'
         className='w-80 px-3 py-1 border rounded-md outline-none'
         onChange={handleChange}
         ></input> 
         <br/>
    </div>
    {/* password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type="text"
         placeholder="Enter  your password" 
         name='password'
         className='w-80 px-3 py-1 border rounded-md outline-none'
         onChange={handleChange}
         ></input> 
         <br/>
    </div>

    {/* button */}
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 '>Login</button>
        <p>Not registerd ? {" "}
        <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
    </div>
 </form>
  </div>

    </div>
  )
}

export default Login