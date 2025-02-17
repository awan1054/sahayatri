import React, { useEffect, useState } from 'react'
import Cards from './Cards'

import { Link } from 'react-router-dom'
import axios from 'axios'

const Course = () => {
    const [bikes,setBikes]=useState([])
    const fetchBike= async()=>{
    const response=await axios.get("http://localhost:3000/bike/get-bikes")
    if(response.status==200){
        setBikes(response.data.data)
    
    }
    else{
        alert("something wrong")
    }
    }
    useEffect(()=>{
      fetchBike()
  },[])
  const [searchTerm,setSearchTerm] = useState("") // torq
  const filteredBikes = bikes.filter((bike)=>bike.name.toLowerCase().includes(searchTerm.toLowerCase()) || bike.price == parseInt(searchTerm) || bike.category.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
  <>
  <div className='max-w-screen-2xl container mx-auto  md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
      <h1 className='text-2xl font-semibold md:text-4xl'>
      Your Ultimate Bike Rental Companion! 
      </h1>
      <p className='mt-12 '>
      We are here to make your journey simple, convenient, and reliable. With Sahayatri, you can easily find nearby bikes, book them effortlessly, and ride safely. Our platform ensures fast service, affordable pricing, and a user-friendly experience. Rent a bike today and start your journey with freedom! 
      </p>
      <Link to="/">
      <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700  duration-300 '>Back</button>
      </Link>
    </div>
    <div className="hidden md:flex justify-end mt-6 ">
  <label className="px-2 py-1 border rounded-md flex items-center gap-2 w-64">
    <input
      type="text"
      className="grow outline-none dark:bg-slate-900 dark:text-white py-1 px-2 text-sm"
      placeholder="Search"
      onChange={(e)=>setSearchTerm(e.target.value)}
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-3 w-3 opacity-70"
    >
      <path
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0-outZ"
        clipRule="evenodd"
      />
    </svg>
  </label>
</div>

    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      {
        filteredBikes.length > 0 && filteredBikes.map((bike)=>
        <Cards key={bike._id} bike={bike}/> )
      }
    </div>
     
    </div>
    </>
  )
}

export default Course
