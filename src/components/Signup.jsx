import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/user/register", data);
    if (response.status === 201) {
      alert("Registered successfully");
      navigate("/login"); // Redirect to login page after successful signup
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className="w-[400px] bg-white shadow-md rounded-lg p-8">
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg text-center">SignUp</h3>
          
          {/* Name Field */}
          <div className='mt-4'>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your fullname"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className='mt-4'>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className='mt-4'>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Signup Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 transition duration-200"
            >
              Signup
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <p className="text-sm">
              Have an account?{" "}
              <Link to="/login" className="underline text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
