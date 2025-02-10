import { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

function Booknow() {
  const [citizenship, setCitizenship] = useState(null);
  const [licence, setLicense] = useState(null);
  const [contactNumber, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const { id } = useParams();

  const Booknow = async (e) => {
    e.preventDefault();
    const data = {
      citizenship,location,contactNumber,email,Name,bike:id,licence
    }

   
    try {
      const response = await axios.post("http://localhost:3000/booknow/book",data , {
        headers: {
          "Authorization": localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Booked successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error booking the bike.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCitizenship(file);
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLicense(file);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mx-14 mt-[80px] border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center font-bold"></div>
        <div className="mt-3 text-center text-4xl font-bold">Provide Details</div>
        <div className="p-8">
          <form onSubmit={Booknow}>
            <div className="flex flex-wrap gap-6">
              <label className="w-1/2">
                Name:
                <input
                  type="text"
                  name="Name"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Enter Name *"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label className="w-1/2">
                Location:
                <input
                  type="text"
                  name="location"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Enter Location *"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </label>

              <label className="w-1/2">
                Contact:
                <input
                  type="text"
                  name="contactNumber"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Enter Contact Number *"
                  onChange={(e) => setContact(e.target.value)}
                />
              </label>

              <label className="w-1/2">
                Email:
                <input
                  type="text"
                  name="email"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  placeholder="Enter Email *"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>

            <div className="flex flex-wrap gap-6 mt-6">
              <label className="w-1/3">
                Citizenship:
                <input
                  type="file"
                  name="citizenship"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  onChange={handleImageChange}
                />
              </label>

              <label className="w-1/3">
                License:
                <input
                  type="file"
                  name="licence"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="text-center">
              <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 mt-[20px] text-sm font-semibold text-white">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Booknow;
