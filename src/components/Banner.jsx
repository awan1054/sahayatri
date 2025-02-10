// import React, { useEffect, useState } from 'react';
// import dominar from '../../public/images/dominar.jpg';
// import { ArrowRight } from "lucide-react";
// import { Link } from 'react-router-dom';

// function Banner() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Trigger animation when component mounts
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 gap-16">
      
//       {/* Text Section with Fade-in & Slide-in Animation */}
//       <div
//   className={`order-2 w-full md:order-1 md:w-1/2 mt-12 md:mt-32 ${
//     isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//   }`}
// >
 

// <h1 className="text-7xl">
//   {["Explore", "the", "freedom", "of", "Riding"].map((word, index) => (
//     <span
//       key={index}
//       className="inline-block"
//       style={{
//         animation: `fadeInUpAndHold 10s ease-in-out ${index * 1.2}s infinite`,
//         animationFillMode: "forwards",
//       }}
//     >
//       {word}&nbsp;
//     </span>
//   ))}
// </h1>

//         <p className="text-xl mt-6">
//       Embark on your journey with our premium bike rentals. Discover breathtaking landscapes and city streets effortlessly and in style.
//         </p>
      

// <Link to='/course'>
// <button className="btn mt-6 btn-secondary hover:scale-105 transition-transform duration-300 flex items-center gap-2">
//   Explore Bikes
//   <ArrowRight size={20} />
// </button>
// </Link>
//       </div>
      
//       {/* Image Section with Fade-in Animation */}
//       <div
//         className={`order-1 w-full md:w-1/2 mt-20 transition-opacity duration-700 ease-out ${
//           isVisible ? 'opacity-100' : 'opacity-0'
//         }`}
//       >
//         <img
//           src={dominar}
//           className="md:w-[460px] md:h-[460px] md:ml-12 rounded-lg shadow-lg"
//           alt="Dominar Bike"
//         />
//       </div>
//     </div>
//   );
// }

// export default Banner;




import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

import dominar from '../../public/images/dominar.webp';
import yamaha from '../../public/images/yamaha.jpg';
import royalEnfield from '../../public/images/royalEnfield.jpg';

function Banner() {
  const words = ["Explore", "the", "freedom", "of", "Riding"];

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center my-10 gap-16">
      
      {/* Text Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="order-2 w-full md:order-1 md:w-1/2 mt-12 md:mt-32"
      >
        <h1 className="text-7xl font-bold leading-tight">
          {words.map((word, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </h1>

        <p className="text-xl mt-6 text-gray-700">
          Embark on your journey with our premium bike rentals. Discover breathtaking landscapes and city streets effortlessly and in style.
        </p>

        <Link to='/course'>
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-md transition"
          >
            Explore Bikes
            <ArrowRight size={20} />
          </motion.button>
        </Link>
      </motion.div>

      {/* Bike Image Slider */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="order-1 w-full md:w-1/2 mt-20"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="md:w-[460px] md:h-[460px] rounded-lg shadow-lg"
        >
          <SwiperSlide>
            <img src={dominar} className="w-full h-full object-cover rounded-lg" alt="Dominar Bike" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={yamaha} className="w-full h-full object-cover rounded-lg" alt="Yamaha Bike" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={royalEnfield} className="w-full h-full object-cover rounded-lg" alt="Royal Enfield" />
          </SwiperSlide>
        </Swiper>
      </motion.div>
      
    </div>
  );
}

export default Banner;
