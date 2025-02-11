import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Cards from './Cards';
import axios from 'axios';


const Sample = () => {
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
   
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto  md:px-20 px-4'>
     <div>
     <h1 className='font-semibold text-xl pb-2'>Avalable vechicles</h1>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias odit, aliquam magnam tempore totam mollitia blanditiis aliquid modi, facere suscipit quibusdam volu</p>
     
    </div>
    <div>
    <Slider {...settings}>
    {
     bikes.length > 0 && bikes.map((bike)=>
        <Cards key={bike._id} bike={bike}/> )
      }
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Sample;
