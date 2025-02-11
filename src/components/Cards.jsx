
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Cards({bike}) {

  return (
    <>
   
              <Link to={`/bike/${bike._id}`}>
   <div className=' mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
     src={`http://localhost:3000/${bike.image}`}
      alt="Bike image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bike.name}
      <div className="badge badge-secondary">{bike.category}</div>
    </h2>
    <p>{bike.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline"> Rs: {bike.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Book Now</div>
    </div>
  </div>
</div>
    </div>
   </Link>
   
    </>
  )
}

export default Cards

