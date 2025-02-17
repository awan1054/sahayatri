import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Booknow() {
  const [citizenship, setCitizenship] = useState(null);
  const [licence, setLicense] = useState(null);
  const [contactNumber, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const[payment,setpayment]=useState("")
  const[bike,setBike]=useState("");
  const { id } = useParams();
    const navigate = useNavigate();
    const [totalamount,settotalamount]=useState(0)
    const fetchsingle= async()=>{
      const response=await axios.get("http://localhost:3000/bike/get-single/"+id)
      if(response.status===200){
          setBike(response.data.data)
          settotalamount(response.data.data.price)
      
      }
      else{
          alert("something wrong")
      }
  }
      useEffect(()=>{
          fetchsingle()
      },[])
    

  const Booknow = async (e) => {
    e.preventDefault();
    const data = {
      citizenship,location,contactNumber,email,Name,bike:id,licence,paymentmethod:payment,totalamount
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
        window.location.href = response.data.url
        // navigate("/")

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
              <label className="w-1/2">
                Total amount:
                <input
                  type="text"
                  name="amount"
                  className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                  value={bike.price}
                 
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
            
              <div
  class="w-[300px] mx-auto px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]"
>
  <legend class="text-xl font-semibold mb-3 select-none">Choose One</legend>
  <label
    for="cod"
    name="status"
    class="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
  >
    <div class="w-5 fill-blue-500">
    </div>
   COD
    <input
      checked=""
      type="radio" value='cod'
      name="status"
      class="peer/html w-4 h-4 absolute accent-current right-3"
      id="html"  onChange={(e) => setpayment(e.target.value)}
    />
  </label>
  <label
    for="paymentintegration"
    class="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
  >
    <div class="w-5">
    </div>
   Payment with Khalti
    <input
      type="radio"
      name="status" value='khalti'
      
      class="w-4 h-4 absolute accent-current right-3"
      id="css"  onChange={(e) => setpayment(e.target.value)}
    />
  </label>
</div>
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
