import { useState } from "react";
import axios from "axios";
import Navabar from "./Navbar";
import Footer from "./Footer";

function Became() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [vatNo, setVatNo] = useState("");

  const BecameProvider = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/provider/become", {
        name,
        email,
        location,
        vatNo,
        contactNo,
      }, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      
      if (response.status === 200) {
        alert("Provider added successfully");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navabar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-4xl bg-white p-12 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Become A Provider</h2>
          <form onSubmit={BecameProvider} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Enter Name *" className="input-box" onChange={(e) => setName(e.target.value)} required />
              <input type="text" placeholder="Enter Location *" className="input-box" onChange={(e) => setLocation(e.target.value)} required />
              <input type="text" placeholder="Enter Contact Number *" className="input-box" onChange={(e) => setContact(e.target.value)} required />
              <input type="text" placeholder="Enter VAT No *" className="input-box" onChange={(e) => setVatNo(e.target.value)} required />
              <input type="email" placeholder="Enter Email *" className="input-box" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button className="w-full bg-blue-600 text-white py-4 rounded-md text-xl font-semibold hover:bg-blue-700 transition">Become a Provider</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Became;

// Tailwind CSS input box styles
const inputBoxStyles = "w-full px-5 py-4 border rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
