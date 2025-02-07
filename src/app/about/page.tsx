import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import Shop from '@/Image/ourpagebg.jip.png'
import Food from '@/Image/About.img.png'
import Food2 from '@/Image/About.img2.png'
import Food3 from '@/Image/About.img3.png'
import { FaCirclePlay } from "react-icons/fa6";
import Bg from '@/Image/About.benner.jpg.png'
import { SiCodechef } from "react-icons/si";
import { GiCoffeeCup } from "react-icons/gi";
import { IoAccessibilityOutline } from "react-icons/io5";


function page() {
  return (
    <div className='bg-white'>
      <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image
      src={Shop}
       alt="Banner Image" 
       className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">About Us</h2>
        <div className='flex text-2xl'>
            <h1 className='hover:text-orange-500'>Home</h1>
          <div>
          <  IoIosArrowForward className=' pt-3 text-2xl' />
          </div>
            <h2 className='text-orange-500'>About</h2>
        </div>
      </div>
    </div>

    <div className='sm:flex flex-wrap ' >
        <div className='flex sm:gap-5 gap-2 ml-5  mx-2 my-3'>
            <Image
            src={Food}
            alt="" className='sm:py-16' />
            <div className='sm:mt-7 '>
            <Image
            src={Food2}
            alt="" />
            <Image
            src={Food3}
            alt="" className='mt-4' />
            </div>
        </div>
        
        <div className='sm:w-[50%] sm:px-20 mx-3 py-5 sm:pt-48'><h1 className='text-orange-400 text-2xl font-semibold'>About us</h1>
            <div>
                <h1>Food is an important part Of a balanced Diet</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, blanditiis. Molestias numquam saepe perferendis temporibus vel delectus consectetur laboriosam,
                     asperiores voluptates soluta nesciunt magnam? Officiis minima iste tenetur illum iusto.</p>
            </div>
            <div className='flex gap-4 mt-8 '>
                <button className='bg-orange-500 p-4 px-7'>Show more</button>
                <button className='flex sm:p-4 pt-4  sm:gap-2'>  <FaCirclePlay className='text-3xl text-orange-500'/>   Watch video</button>
            </div>
        </div>

    </div>

    <div className='justify-self-center flex flex-wrap py-10 sm:w-[40%]'>
        <h1 className='sm:ml-36  ml-14 font-bold  text-3xl sm:text-5xl'>Why Choose us</h1>
        <p className=' text-center sm:font-light font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt, in saepe reiciendis molestias molestiae nisi quae neque sed itaque.</p>
            </div>
        <div>
            <Image
            src={Bg} 
            alt="" className='sm:w-[125%]'/>
        </div>
 
           <div className='sm:flex justify-self-center gap-10'>


            <div className='text-center py-10 '>
                <SiCodechef className=' font-medium  w-72 text-8xl' />
                <h1 className='w-72 text-lg font-bold' >Best Chfe</h1>
                <p className='w-72'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid eius eum rem, est reprehenderit!</p>
            </div>
            <div className='text-center py-10 '>
                <GiCoffeeCup className=' font-medium w-72 text-8xl' />
                <h1 className='w-72 font-bold' >120 item food</h1>
                <p className='w-72'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid eius eum rem, est reprehenderit!</p>
            </div>
            <div className='text-center py-10 '>
                <IoAccessibilityOutline className=' font-medium w-72 text-8xl' />
                <h1 className='w-72  font-bold' > Clean Enviroment</h1>
                <p className='w-72'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid eius eum rem, est reprehenderit!</p>
            </div>

           </div>

    </div>
  )
}

export default page
