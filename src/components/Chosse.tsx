
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa'; // Icon to show in mobile view
import Chefs from '@/Image/chefsicon.png';
import Banner from  "@/Image/About.benner.jpg.png"
import Iterm from '@/Image/itermicon.png';
import Experienced from '@/Image/experiencedicon.png';
import Happy from '@/Image/happyicon.png';

function Chosse() {
  const [isStatsVisible, setIsStatsVisible] = useState(false); // State to toggle stats visibility

  // Toggle the stats section
  const handleToggleStats = () => {
    setIsStatsVisible(!isStatsVisible);
  };

  return (
    <div className="relative ">
      {/* Background Banner */}
      <div className="overflow-hidden Banner">
        <Image 
          src={Banner} 
          alt="Background Image" 
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
      </div>

      {/* Mobile Icon to Toggle Stats */}
      <div className="md:hidden absolute top-6 right-6 z-10">
        <button
          onClick={handleToggleStats}
          className="p-3 bg-orange-600 rounded-full shadow-lg "
        >
          <FaBars className="text-2xl" /> {/* React Icon */}
        </button>
      </div>

      {/* Stats Section */}
      <div
        className={`container mx-auto px-6 absolute top-0 left-0 right-0 mt-[150px] ${
          isStatsVisible ? "block" : "hidden"
        } md:block`} // Hidden on mobile by default, visible when toggled
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center  sm:bg-opacity-90 bg-black  rounded-lg shadow-lg">
          {/* Professional Chefs */}
          <div className="flex flex-col items-center">
            <Image src={Chefs} alt="Chefs Icon" className="w-28 h-24 mb-4" />
            <h1 className=" font-semibold text-2xl text-white">Professional Chefs</h1>
            <p className="text-2xl font-bold text-white">420</p>
          </div>

          {/* Items of Food */}
          <div className="flex flex-col items-center">
            <Image src={Iterm} alt="Items Icon" className="w-28 h-24 mb-4" />
            <h1 className="text-2xl font-semibold text-white">Items of Food</h1>
            <p className="text-2xl font-bold text-white">320</p>
          </div>

          {/* Years of Experience */}
          <div className="flex flex-col items-center">
            <Image src={Experienced} alt="Experience Icon" className="w-28 h-24 mb-4" />
            <h1 className="text-2xl font-semibold text-white">Years of Experience</h1>
            <p className="text-2xl font-bold text-white">30+</p>
          </div>

          {/* Happy Customers */}
          <div className="flex flex-col items-center">
            <Image src={Happy} alt="Happy Icon" className="w-28 h-24 mb-4" />
            <h1 className="text-2xl font-semibold text-white">Happy Customers</h1>
            <p className="text-2xl font-bold text-white">220</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chosse;

