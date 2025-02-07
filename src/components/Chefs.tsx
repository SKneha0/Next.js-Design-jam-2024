import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';



const page = async()=>{
   const  chef = await client.fetch(`*[_type == 'chef']`)
 
 return (
   <div>
        

     

   <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-12">
     {chef.slice(0,4).map((chef: { id: string; image: string; name: string; specialty: string }) => (
       <div
         key={chef.id}
        //  className="bg-white py-4 px-2 shadow-md hover:scale-110 transition-all duration-500"
       >
         <Image
           src={urlFor(chef.image).url()}
           alt={chef.name}
           width={270}
           height={62}
           className="w-54 border-orange-500 border-2 h-65 inline-block"
         />
         <div className="mt-4">
           <h4 className="text-zinc-100 text-2xl font-bold">{chef.name}</h4>
           <p className="text-zinc-400  text-xl  mt-1">{chef.specialty}</p>   
         </div>
       </div>
     ))}
   </div>
     <Link href="/ourchef">  
       <div className='  rounded-xl border-2 w-32 text-center p-1 ml-24 mt-8 sm:ml-[700px] text-orange-500 border-orange-600  '>
          <button className=' text-lg'>
            See More
          </button>
         </div> </Link>

   </div>
 )
}

export default page
