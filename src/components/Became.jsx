import { useState } from "react"
import axios from "axios"
import Navabar from "./Navbar"
function Became(){
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const [contactNo,setcontact]=useState("")
  const [location,setLocation]=useState("")
  const [vatNo,setvatno]=useState("")
const BecameProvider=async(e)=>{
  e.preventDefault()
 const response=await axios.post("http://localhost:3000/provider/become",{
   name,
   email,
   location,
   vatNo,contactNo
  },
  {
    headers:{
      "Authorization" : localStorage.getItem("token")
    }
  })


if (response.status===200){
  alert("Bike added successfully")
}
else{
  alert("something went wrong")
}
}
    return(
    <>
    <Navabar/>
    <div className="mx-14 mt-[90px] border-2 border-blue-400 rounded-lg">
  <div className="mt-10 text-center text-5xl font-bold">Became A Provider</div>

  <div className="p-8">
    <form onSubmit={BecameProvider} >
    <div className="flex gap-4">
      <input type="text" name="title" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter Name *" onChange={(e)=>setName(e.target.value)} />
      
    </div>
    <div className="flex  gap-4">
      <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter Location*" onChange={(e)=>setLocation(e.target.value)}/>
      <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter ContactNumber *" onChange={(e)=>setcontact(e.target.value)}/>
      <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter Vatno *" onChange={(e)=>setvatno(e.target.value)}/>
      <input type="text" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Enter Email*" onChange={(e)=>setEmail(e.target.value)}/>
      
      
    </div>

    <div className="text-center mt-10">
      <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Became a Provider</button>
    </div>
    </form>
  </div>
</div>
    </>
    )
}
export default Became