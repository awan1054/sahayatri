import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState(""); // State for error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/login", data);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (err) {
      // Set error message on login failure
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-[400px]">
        <h3 className="font-bold text-xl text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          {/* Password */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              className="w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          {/* Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </div>

          {/* Links */}
          <div className="mt-4 text-center">
            <p className="text-sm">
              Not registered?{" "}
              <Link to="/signup" className="underline text-blue-500">
                Signup
              </Link>
            </p>
            <p className="text-sm">
              <Link to="/forgot" className="underline text-blue-500">
                Forgot Password?
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
