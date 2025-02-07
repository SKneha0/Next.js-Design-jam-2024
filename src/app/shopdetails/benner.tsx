import React from 'react'
import Image from 'next/image'
import Shop from '@/Image/ourpagebg.jip.png'
import { IoIosArrowForward } from "react-icons/io";
function Benner() {
  return (
    <div>
      <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image
      src={Shop}
       alt="Banner Image" 
       className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-10 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Shop <span className='text-orange-500'>Details</span> </h2>
        <div className='flex text-2xl'>
            <h1 className='hover:text-orange-500'>Home</h1>
          <div>
          <  IoIosArrowForward className=' pt-3 text-2xl' />
          </div>
            <h2 className='text-orange-500'>Details</h2>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Benner
