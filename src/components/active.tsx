import React from 'react'
 import Image  from 'next/image'
 import Proess from '@/Image/proess.jpg'
 import { IoPlayCircleSharp } from "react-icons/io5";
 import Link from "next/link";
function Active() {
  return (
    <div className="relative font-sans before:absolute before:w-full py-10  before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <Image
    src={ Proess}
    alt="Image"
     className="absolute inset-0 w-full h-full object-cover" />

    <div className="min-h-[350px] relative z-50 h-full max-w-6xl  mx-auto flex flex-col justify-center sm:justify-end sm:items-end  items-center text-center  sm:text-end text-white p-6">
      <h2 className="sm:text-xl text-lg text-orange-600 font-bold mb-6">Restaurant Aactive Process</h2>
      <h2 className="sm:text-4xl text-2xl font-bold mb-6"><span className='text-orange-600'>We</span> Document Evary Food</h2>
      <h2 className="sm:text-4xl text-2xl font-bold mb-6">Bean Process untile it is saved</h2>
      
      <p className="sm:text-lg  text-base sm:text-end text-center sm:w-[67%] text-gray-200">Embark on unforgettable journeys. Book your dream  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim similique doloribus iusto molestiae, unde commodi saepe, hic eos tenetur eveniet, maxime amet est nobis. Iste iure nihil amet distinctio ipsam. vacation today!</p>
      <div className='flex mt-5 gap-5'>
    <Link href="/404error">
    <button className="ms:mt-12 bg-transparent text-white text-base sm:py-3 px-6 border border-orange-500 rounded-2xl hover:bg-orange-300 hover:text-black transition duration-300">
        Book Now
      </button></Link>
      <div className='flex  sm:text-2xl'>
        <IoPlayCircleSharp className='text-5xl text-orange-500'/>
        <p className='mt-3  '>Play Video</p>
      </div>
 

      </div>

    </div>
  </div>
  );
}

export default Active;