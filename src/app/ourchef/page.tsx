 import React from 'react'
 import Image from 'next/image'
import Shop from '@/Image/ourpagebg.jip.png'
import { IoIosArrowForward } from "react-icons/io";
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';








const page = async()=>{
    const  chef = await client.fetch(`*[_type == 'chef']`)
  
  return (
    <div>
         <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image
      src={Shop}
       alt="Banner Image" 
       className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Our Chef</h2>
        <div className='flex text-2xl'>
            <h1 className='hover:text-orange-500'>Home</h1>
          <div>
          <  IoIosArrowForward className=' pt-3 text-2xl' />
          </div>
            <h2 className='text-orange-500'>Chef</h2>
        </div>
      </div>
    </div>

      

    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-12">
      {chef.map((chef: { id: string; image: string; name: string; specialty: string }) => (
        <div
          key={chef.id}
          // className=" py-4 px-2 shadow-md hover:scale-110 transition-all duration-500"
        >
          <Image
            src={urlFor(chef.image).url()}
            alt={chef.name}
            width={270}
            height={62}
            className="w-54 border-orange-500 border-2 h-65 inline-block"
          />
          <div className="mt-4">
            <h4 className="text-zinc-100 text-base font-bold">{chef.name}</h4>
            <p className="text-zinc-400 text-xs mt-1">{chef.specialty}</p>
          </div>
        </div>
      ))}
    </div>
  
    </div>
  )
}

export default page
