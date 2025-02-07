import React from 'react'
import Image from 'next/image'
import Tasteimg from '@/Image/taste.jpg'
import { PiHamburger } from "react-icons/pi";
import { PiCookieBold } from "react-icons/pi";
import { TbGlassFull } from "react-icons/tb";

function Taste() {
  return (
    <div>
      <div className='sm:flex flex-wrap  text-white py-10 justify-center '>
        <div>
            <Image 
            src={Tasteimg} 
            alt="img" />
        </div>
        <div className='sm:w-80   sm:ml-32 my-5 sm:mx-16 text-start'> 
            <h1 className='text-4xl sm:w-0 w-56 text-orange-500 font-bold'>Why Choose us</h1>
            <h2 className='text-3xl sm:pt-7'>Exta ordinary taste and Exerienced</h2>
            <p className='text-xs pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus obcaecati sint odit architecto quae! Odit, nihil.
                 Ea delectus nesciunt tenetur beatae quibusdam, quaerat dignissimos 
                 corporis, eaque in illo, impedit enim?</p>
                
                <div className='flex gap-10  pt-20 '>   
                 <div>
                    < PiHamburger className='text-7xl p-2 bg-orange-500  '/>
                    <p>Fast Food </p>
                 </div>
                 <div>
                    < PiCookieBold className='text-7xl p-2 bg-orange-500  '/>
                    <p>Lunch </p>
                 </div>
                 <div>
                    < TbGlassFull className='text-7xl p-2 bg-orange-500  '/>
                    <p>Dinner </p>
                 </div>
                    </div> 
               <div className='bg-white flex p-3 justify-center border-orange-500 border-l-8 rounded-lg mt-12 pl-4 gap-8'>
            <div>
                   <h1 className='text-orange-500 text-4xl font-semibold'>30+</h1>               
             </div>
            <div className='text-black  '>
                  <h2>Years oF</h2>
                 <p className='text-2xl font-semibold'>Experienced</p>
               </div>
                     
    </div>
     </div>
   </div>

    </div>
  )
}

export default Taste
