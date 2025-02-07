import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Shop from '@/Image/ourpagebg.jip.png'
import Image from 'next/image'
import Link from 'next/link';
function page() {
  return (
    <div className='bg-white'>
       <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image
      src={Shop}
       alt="Banner Image" 
       className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">404 Error</h2>
        <div className='flex text-2xl'>
            <h1 className='hover:text-orange-500'>Home</h1>
          <div>
          <  IoIosArrowForward className=' pt-3 text-2xl' />
          </div>
            <h2 className='text-orange-500'>404</h2>
        </div>
      </div>
    </div>
    
    <div className='text-center py-20 sm:py-16'>
        <div className='text-7xl font-bold pb-5 text-orange-500'><h1>404</h1>
        </div>

        <div className='text-zinc-600 sm:text-2xl text-lg pb-5'> <h1>Oops!Look likes something going wrong</h1>
            <p>page cannot be fonud! we&apos;ll have it figured out in not time. <br />
            Menwhile,cheek out these fresh ideas:</p>
            </div>

            <div> 
                <Link href= "/" >    <button className='bg-orange-500  p-4 px-12 font-semibold text-white     rounded-md'>Go to home</button> </Link >
            </div>
    </div>
    </div>
  )
}

export default page
