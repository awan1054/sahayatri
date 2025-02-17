import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const History = () => {
    
    const [user,setUser]=useState([])
    console.log(user)
    const fetchUsers= async()=>{
    const response=await axios.get("http://localhost:3000/booknow/bookedhistory/",{
      headers:{
        "Authorization" : localStorage.getItem("token")
      }
    })
    if(response.status==202){
        setUser(response.data.data)
    }
    else{
        alert("something wrong")
    }
    }
    
   
    useEffect(()=>{
        fetchUsers()
    },[])
  return (

    <div>
        <Navbar/>
        <div className="text-gray-900 bg-gray-200 mt-[50px]">
  <div className="p-4 flex">
    <h1 className="text-3xl ml-[400px] mt-9">Booked History</h1>
  </div>
  <div className="px-3 py-4 flex justify-center">
    <table className="w-full text-md bg-white shadow-md rounded mb-4">
      <tbody>
        <tr className="border-b">
          <th className="text-left p-3 px-5">Vechicles</th>
          <th className="text-left p-3 px-5">Price</th>
          <th className="text-left p-3 px-5">Time</th>
          <th className="text-left p-3 px-5">Payment</th>
          <th />
        </tr>
        {
          user.length > 0 && user.map((us)=>{
            return (
              <tr className="border-b hover:bg-orange-100 bg-gray-100">
              <td className="p-3 px-5">
                <input type="text" defaultValue={us.bike} className="bg-transparent border-b-2 border-gray-300 py-2" />
              </td>
              <td className="p-3 px-5">
                <input type="text" defaultValue={us.totalamount} className="bg-transparent border-b-2 border-gray-300 py-2" />
              </td>
              <td className="p-3 px-5">
                <input type="text" defaultValue={us.email} classmaName="bg-transparent border-b-2 border-gray-300 py-2" />
              </td>
              <td className="p-3 px-5">
                <input type="text" defaultValue={us.paymentmethod} classmaName="bg-transparent border-b-2 border-gray-300 py-2" />
              </td>
             
            </tr>
            )
          })
         }
     
       
      
      </tbody>
    </table>
  </div>
</div>
<Footer/>
    </div>
  );

}
export default History;
