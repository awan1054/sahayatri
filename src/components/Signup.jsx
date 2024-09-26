import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from './Login';
import axios from 'axios';


const Signup = () => {
  const navigate = useNavigate()
  const [data,setData] = useState({
    username : "", 
    email : "", 
    password : ""
  })
  const handleChange = (e)=>{
    const {value,name} = e.target
    setData({
      ...data,
      [name] : value
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response = await axios.post("http://localhost:3000/user/register",data)
    if(response.status === 201){
      alert("Registered successfully")
    }else{
      alert("Something went wrong")
    }
  }

  return (
    <>
      <div className='flex h-screen item-center justify-center '>
      <div  className="w-[600px] ">
  <div className="modal-box">
    <form  method="dialog" onSubmit={handleSubmit}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">SignUp</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type="text"
        name='username'
         placeholder="Enter  your fullname" 
         className='w-80 px-3 py-1 border rounded-md outline-none'
         onChange={handleChange}
         ></input> 
         <br/>
    </div>
    {/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email"
        name='email'
         placeholder="Enter  your email" 
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
        name='password'
         placeholder="Enter  your password" 
         className='w-80 px-3 py-1 border rounded-md outline-none'  
         onChange={handleChange}
         ></input> 
          <br/>
        
    </div>

    {/* button */} 
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 '>Signup</button>
        <p className='text-xl'>Have account? {" "}
        <Link to="/login" className='underline text-blue-500 cursor-pointer' 
        >
        Login</Link>{" "}
        </p>
    </div>
    </form>
  </div>
</div>

    </div>

    </>
  )
}

export default Signup;