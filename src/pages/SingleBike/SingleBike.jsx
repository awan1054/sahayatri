import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

function SingleBike(){
  const {id}=useParams()
  const Navigate=useNavigate()
  const [bike,setBike]=useState({})
  const fetchsingle= async()=>{
      const response=await axios.get("http://localhost:3000/bike/get-single/"+id)
      if(response.status===200){
          setBike(response.data.data)
      
      }
      else{
          alert("something wrong")
      }
  }
      useEffect(()=>{
          fetchsingle()
      },[])
    return ( 
        <>
        <Navbar/>
    <div className="bg-gray-100 dark:bg-gray-800 py-8 mt-14">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img className="w-full h-full object-cover" src={`http://localhost:3000/${bike.image}`} alt="Product Image" />
        </div>
        <Link to={`/booknow/${bike._id}`}>
        <div className="flex -mx-2 mb-4">
         
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Book Now</button>
          </div>
          
        </div>
        </Link>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{bike.name}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {bike.title}
        </p>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">Price: Rs </span>
            <span className="text-gray-600 dark:text-gray-300">{bike.price}</span>
          </div>
          
        </div>
       
        
        <div>
          <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
            {bike.description}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
    )
}

export default SingleBike