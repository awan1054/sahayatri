// ContactForm.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Contact = () => {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const [message,setMessage]=useState("")
  const navigate = useNavigate();
  const contactus=async(e)=>{
    e.preventDefault()
   const response=await axios.post("http://localhost:3000/contact/contactus",{
     name,
     email,
     message
    },
    {
      headers:{
        "Authorization" : localStorage.getItem("token")
      }
    })
  
  
    if (response.status === 200) {
      setTimeout(() => {
          alert("Message sent successfully!");
      }, 0); // Show message immediately
      navigate("/"); // Navigate without waiting for user to click "OK"
  }
  
  
  else{
    alert("something went wrong")
  }
  }

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center"> Feel Free to Contact Us</h2>

        <form onSubmit={contactus}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name:</label>
            <input
              type="text"
              name="Name"
              onChange={(e)=>setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input
              type="email"
              name="email"
             
              onChange={(e)=>setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Message:</label>
            <textarea
              name="message"
             
              onChange={(e)=>setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Submit
          </button>
        </form>
      
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
