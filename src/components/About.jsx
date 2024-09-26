import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import sak from '../../public/images/sak.jpg';
import richa from '../../public/images/richa.jpg';
import awan from '../../public/images/awan.jpg';


const About = () => {
  return (
    <>
     <Navbar/>
    <section className="py-16 bg-blue-50" id="about-us">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
        <p className="text-lg text-gray-600 mb-12">
          At [Bike Rental Co.], we offer easy, eco-friendly bike rentals for your city adventures or countryside getaways. Ride with us for a hassle-free experience!
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Meet Our Team</h3>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src={sak} alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />

              <h4 className="text-xl font-medium text-gray-800">Saksham Paudel</h4>
              {/* <p className="text-gray-500">Founder & CEO</p> */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src={richa} alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-medium text-gray-800">Richa Lamichhane</h4>
              {/* <p className="text-gray-500">Operations Manager</p> */}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src={awan} alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-medium text-gray-800">Awan karki</h4>
              {/* <p className="text-gray-500">Customer Support Lead</p> */}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Why Ride With Us?</h3>
          <ul className="flex justify-center gap-6">
            <li className="bg-white py-2 px-4 rounded-full shadow-md text-gray-600 font-medium">Eco-Friendly Rides</li>
            <li className="bg-white py-2 px-4 rounded-full shadow-md text-gray-600 font-medium">Affordable Prices</li>
            <li className="bg-white py-2 px-4 rounded-full shadow-md text-gray-600 font-medium">Adventure Awaits</li>
            <li className="bg-white py-2 px-4 rounded-full shadow-md text-gray-600 font-medium">24/7 Support</li>
          </ul>
          
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default About;