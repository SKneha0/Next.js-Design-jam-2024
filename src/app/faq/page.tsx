import React from 'react'
import  Image from 'next/image'
import  Shop from '@/Image/ourpagebg.jip.png'
import { IoIosArrowForward } from "react-icons/io";
import { VscAdd } from "react-icons/vsc";

function page() {
  return (
    <div>
        <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image
      src={Shop}
       alt="Banner Image" 
       className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">FAQ Page</h2>
        <div className='flex text-2xl'>
            <h1 className='hover:text-orange-500'>Home</h1>
          <div>
          <  IoIosArrowForward className=' pt-3 text-2xl' />
          </div>
            <h2 className='text-orange-500'>faq</h2>
        </div>
      </div>
    </div>
      <div className='text-center sm:grid py-10 justify-items-stretch  text-4xl font-bold bg-white'>
        <h1>Question Look Here</h1>
        <p className='text-lg font-light'>  voluptatem animi ipsam exercitationem sit odio sint repellat! Sapiente reprehenderit expedita numquam odio saepe cum.</p>

<div className='sm:flex w-[70%]  py-5 gap-5 justify-self-center   '>

      <div className="bg-gray-100 sm:p-8 p-4 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex-wrap items-center">
        <h1 className='flex sm:gap-36 text-2xl font-'>How we serve food?<VscAdd /> </h1>
        <p className="text-sm text-gray-600 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu.</p>
      </div>

</div>


      <div className="bg-gray-100 sm:p-8 p-4 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex-wrap items-center">
        <h1 className='sm:flex sm:gap-10 text-2xl font-'>How can we get in touch with you?<VscAdd /> </h1>
        <p className="text-sm text-gray-600 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu.</p>
      </div>

</div>



    </div>
<div className='sm:flex w-[70%]  py-5 gap-5 justify-self-center   '>

      <div className="bg-gray-100 sm:p-8 p-4 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex-wrap items-center">
        <h1 className='sm:flex sm:gap-28 text-2xl font-'>How is our food quality?<VscAdd /> </h1>
        <p className="text-sm text-gray-600 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu.</p>
      </div>

</div>


      <div className="bg-gray-100 sm:p-8 p-4 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex-wrap items-center">
        <h1 className='sm:flex sm:gap-10 text-2xl font-'>What will be delivered?And What?<VscAdd /> </h1>
        <p className="text-sm text-gray-600 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu.</p>
      </div>

</div>



    </div>
<div className='sm:flex w-[70%]  py-5 gap-5 justify-self-center   '>

      <div className="bg-gray-100 sm:p-8 p-4 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex-wrap items-center">
        <h1 className='sm:flex sm:gap-10 text-2xl font-'>How do we give home deliery?<VscAdd /> </h1>
        <p className="text-sm text-gray-600 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu.</p>
      </div>

</div>


      <div className="bg-gray-100 sm:p-8 p-4 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="flex-wrap items-center">
        <h1 className='flex gap-10 text-2xl font-'>In this restaurant 24 hours open?<VscAdd /> </h1>
        <p className="text-sm text-gray-600 text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu.</p>
      </div>

</div>



    </div>

      </div>

      <div>

      </div>
    </div>
  )
}

export default page
