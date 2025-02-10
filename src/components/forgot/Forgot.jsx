import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Forgot = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
      email: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await axios.post("http://localhost:3000/user/forgot_password", data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        alert("otp send successfully");
        navigate("/reset");
      } else {
        alert("Something went wrong");
      }
    };
  
  return (
       <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-[400px]">
              <h3 className="font-bold text-xl text-center">Forgot Password:</h3>
              {/* Email */}
              <form onSubmit={handleSubmit}>
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700">Email:</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email" required
                    className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange}
                    
                  />
                </div>
                {/* Button */}
               
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                  >
                   Reset Password
                  </button>
                </div>
               
                
              </form>
            </div>
          </div>
   
  )
}

export default Forgot
