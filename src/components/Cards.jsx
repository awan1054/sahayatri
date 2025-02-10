
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Cards() {
  const [bike,setBike]=useState([])
  const fetchBike= async()=>{
  const response=await axios.get("http://localhost:3000/bike/get-bikes")
  if(response.status==200){
      setBike(response.data.data)
  
  }
  else{
      alert("something wrong")
  }
  }
  useEffect(()=>{
    fetchBike()
},[])
  return (
    <>
    {   bike.length > 0 && bike.map((us)=>{
            return (

    
              <Link to={`/bike/${us._id}`}>
   <div className=' mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
     src={`http://localhost:3000/${us.image}`}
      alt="Bike image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {us.name}
      <div className="badge badge-secondary">{us.category}</div>
    </h2>
    <p>{us.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{us.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Book Now</div>
    </div>
  </div>
</div>
    </div>
   </Link>
           
    )  })         

}
    </>
  )
}

export default Cards

