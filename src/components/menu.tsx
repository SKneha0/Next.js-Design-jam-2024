import React from 'react'
import Image  from 'next/image'
import Menu from '@/Image/menu.png'
import Lettuce from '@/Image/Lettuce.jpg.png'
import Bargar from '@/Image/menubergar.jpg.png'
import Boty from '@/Image/booty.jip.png'
function menu() {
  return (
    <div className=' text-white py-10'>
       <div className='container  mx-auto sm:px0 px-4 py-8'>
        <div className='sm:text-center'>
          <h1 className='text-2xl font-bold  text-orange-500'>Choose & pick</h1>
          <p className='sm:text-4xl  text-3xl lg:5xl mt-2  font-bold'><span className='text-orange-500'>Fr</span>om our menu</p>
        </div>
           {/* Categories Section */}
        <div className="flex justify-center flex-wrap gap-4 mt-8">
          {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack', 'Soups'].map((category, index) => (
            <li
              key={index}
              className="list-none font-semibold hover:text-orange-500 cursor-pointer"
            >
              {category}
            </li>
          ))}
        </div>
    </div>
        <div className='flex flex-wrap md:flex-nowrap mt-10  '>
          <div className='md:w-full  lg:pl-28 lg:w-[40%] flex md:justify-center'>
            <Image
             src={Menu} 
             alt="img" 
             className=' rounded-lg'
              />
         </div>

         <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mt-0 lg:pl-8" >

<div className='pt-11 pl-5 '> 
         <div className='flex gap-2 p-1'> 
         <div className=''>
          <Image src={Lettuce} alt="img" />
         </div>
         <div>
          <h1 className="font-bold">Lettuce</h1>
          <p className="text-sm text-gray-400">
            Lacus nisi, et ac dapibus velit in consequat
            </p>
          <h2 className="text-orange-500 font-bold">
            12.5$
            </h2>
         </div>
         </div>
         
         <div className='flex gap-2 p-1'> 
         <div className=''>
          <Image src={Bargar} alt="img" />
         </div>
         <div>
          <h1 className="font-bold">Lettuce</h1>
          <p className="text-sm text-gray-400">Lacus nisi, et ac dapibus velit in consequat</p>
          <h2 className="text-orange-500 font-bold">12.5$</h2>
         </div>
         </div>
         
         <div className='flex gap-2 p-1'> 
         <div className=''>
          <Image src={Boty} alt="img" />
         </div>
         <div>
          <h1 className="font-bold">Lettuce</h1>
          <p className="text-sm text-gray-400">Lacus nisi, et ac dapibus velit in consequat</p>
          <h2 className="text-orange-500 font-bold">12.5$</h2>
         </div>
         </div>
         
         <div className='flex gap-2 p-1'> 
         <div className=''>
          <Image src={Lettuce} alt="img" />
         </div>
         <div>
          <h1 className="font-bold">Lettuce</h1>
          <p className="text-sm text-gray-400">Lacus nisi, et ac dapibus velit in consequat</p>
          <h2 className="text-orange-500 font-bold">12.5$</h2>
         </div>
         </div>
       </div>

         <div className='pt-11   pl-7'>
         <div className='flex gap-2 p-1'> 
         <div className=''>
          <Image src={Lettuce} alt="img" />
         </div>
         <div>
          <h1 className="font-bold">Lettuce</h1>
          <p className="text-sm text-gray-400">Lacus nisi, et ac dapibus velit in consequat</p>
          <h2 className="text-orange-500 font-bold">12.5$</h2>
         </div>
         </div>
         <div className='flex gap-2 p-1' > 
         <div className=''>
          <Image src={Lettuce} alt="img" />
         </div>
         <div>
          <h1 className="font-bold">Lettuce</h1>
          <p className="text-sm text-gray-400">Lacus nisi, et ac dapibus velit in consequat</p>
          <h2 className="text-orange-500 font-bold">12.5$</h2>
         </div>
         </div>
         <div className='flex gap-2 p-1'> 
         <div className=''>
          <Image src={Lettuce} alt="img" />
         </div>
         <div>
          <h1 className="font-bold">Lettuce</h1>
          <p className="text-sm text-gray-400">Lacus nisi, et ac dapibus velit in consequat</p>
          <h2 className="text-orange-500 font-bold">12.5$</h2>
         </div>
         </div>
         
         <div className='flex gap-2 p-1 '> 
         <div className=''>
          <Image src={Lettuce} alt="img" />
         </div>
         <div>
          <h1 className="font-bold">Lettuce</h1>
          <p className="text-sm text-gray-400">Lacus nisi, et ac dapibus velit in consequat</p>
          <h2 className="text-orange-500 font-bold">12.5$</h2>
         </div>
         </div>
         </div>

         </div>

       </div>
    </div>
  )
}

export default menu



