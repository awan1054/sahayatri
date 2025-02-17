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
  const [data,setData]=useState("");

  const BecameProvider = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3000/provider/become",
      {
        name,
        email,
        location,
        vatNo,
        contactNo,
        
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    if (response.status === 200) {
      alert("Bike added successfully");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navabar />
      <div className="mx-4 md:mx-14 mt-[90px] border-2 border-blue-400 rounded-lg p-4 md:p-8">
        <div className="mt-5 text-center text-3xl md:text-5xl font-bold">
          Become A Provider
        </div>

        <div className="p-4 md:p-8">
          <form onSubmit={BecameProvider}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                className="block w-full rounded-md border border-slate-300 bg-white px-3 py-3 placeholder-slate-400 shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="Enter Name *"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                className="block w-full rounded-md border border-slate-300 bg-white px-3 py-3 placeholder-slate-400 shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="Enter Location *"
                onChange={(e) => setLocation(e.target.value)}
              />

              <input
                type="text"
                className="block w-full rounded-md border border-slate-300 bg-white px-3 py-3 placeholder-slate-400 shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="Enter Contact Number *"
                onChange={(e) => setContact(e.target.value)}
              />

              <input
                type="text"
                className="block w-full rounded-md border border-slate-300 bg-white px-3 py-3 placeholder-slate-400 shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="Enter VAT No *"
                onChange={(e) => setVatNo(e.target.value)}
              />

              <input
                type="email"
                className="block w-full rounded-md border border-slate-300 bg-white px-3 py-3 placeholder-slate-400 shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                placeholder="Enter Email *"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="text-center mt-6">
              <button className="w-full md:w-auto cursor-pointer rounded-lg bg-blue-700 px-6 py-4 text-lg font-semibold text-white hover:bg-blue-800 transition">
                Become a Provider
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Became;
