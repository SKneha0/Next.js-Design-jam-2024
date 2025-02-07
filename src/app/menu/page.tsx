// pages/index.tsx
import Image from 'next/image';
import Dish1 from '@/Image/Dish1.png'
import Dish2 from '@/Image/dish2.png'
import Dish3 from '@/Image/dish3.png'
import Dish4 from '@/Image/dish.png'
import {menuItems } from "@/data/menudata";
import  Taste  from '@/components/Chosse'
import Shop from '@/Image/ourpagebg.jip.png'
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
   <div className='bg-white    '>

    
<div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image
      src={Shop}
       alt="Banner Image" 
       className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Shopping Cart</h2>
        <div className='flex text-2xl'>
            <h1 className='hover:text-orange-500'>Home</h1>
          <div>
          <  IoIosArrowForward className=' pt-3 text-2xl' />
          </div>
            <h2 className='text-orange-500'>Menu</h2>
        </div>
      </div>
    </div>
   
   <div className="flex flex-col md:flex-row items-center md:items-start p-6 max-w-6xl mx-auto">
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-start mb-6 md:mb-0">
        <Image
          src={Dish1} // Replace with your image URL
          alt="Food Bowl"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
          />
      </div>

      {/* Menu Section */}
      <div className="md:w-1/2 w-full">
        <h1 className="text-3xl font-bold mb-4">Starter Menu</h1>
        <ul>
          {menuItems.map((item, index) => (index <= 3&&
            <li
              key={index}
              className="border-b border-gray-300 py-4 flex justify-between items-start"
            >
              <div>
                <h2 className="text-xl font-semibold text-orange-600">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <p className="text-gray-500 text-xs mt-1">{item.calories}</p>
              </div>
              <div className="text-lg font-bold text-gray-800">{item.price}</div>
            </li>
          ))}
        </ul>
      </div>
            </div>
            


   <div className="flex flex-col md:flex-row items-center md:items-start p-6  max-w-6xl mx-auto">
      {/* Image Section */}

      {/* Menu Section */}
      <div className="md:w-1/2 w-full">
        <h1 className="text-3xl font-bold mb-4">Mina Course</h1>
        <ul>
          {menuItems.map((item, index) => (index <= 3&&
            <li
              key={index}
              className="border-b border-gray-300 py-4 flex justify-between items-start"
            >
              <div>
                <h2 className="text-xl font-semibold text-orange-600">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <p className="text-gray-500 text-xs mt-1">{item.calories}</p>
              </div>
              <div className="text-lg font-bold text-gray-800">{item.price}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 flex  w-full sm:ml-36 justify-center md:justify-start mb-6 md:mb-0">
        <Image
          src={Dish2} // Replace with your image URL
          alt="Food Bowl"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
          />
      </div>
          </div>
          <Taste />
          <div className="flex flex-col md:flex-row items-center md:items-start p-6 max-w-6xl mx-auto">
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-start mb-6 md:mb-0">
        <Image
          src={Dish3} // Replace with your image URL
          alt="Food Bowl"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
          />
      </div>

      {/* Menu Section */}
      <div className="md:w-1/2 w-full">
        <h1 className="text-3xl font-bold mb-4">Desseert</h1>
        <ul>
          {menuItems.map((item, index) => (index <= 3&&
            <li
              key={index}
              className="border-b border-gray-300 py-4 flex justify-between items-start"
            >
              <div>
                <h2 className="text-xl font-semibold text-orange-600">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <p className="text-gray-500 text-xs mt-1">{item.calories}</p>
              </div>
              <div className="text-lg font-bold text-gray-800">{item.price}</div>
            </li>
          ))}
        </ul>
      </div>
            </div>
            


   <div className="flex flex-col md:flex-row items-center md:items-start p-6  max-w-6xl mx-auto">
      {/* Image Section */}

      {/* Menu Section */}
      <div className="md:w-1/2 w-full">
        <h1 className="text-3xl font-bold mb-4">Drinks  </h1>
        <ul>
          {menuItems.map((item, index) => (index <= 3&&
            <li
              key={index}
              className="border-b border-gray-300 py-4 flex justify-between items-start"
            >
              <div>
                <h2 className="text-xl font-semibold text-orange-600">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <p className="text-gray-500 text-xs mt-1">{item.calories}</p>
              </div>
              <div className="text-lg font-bold text-gray-800">{item.price}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 flex  w-full sm:ml-36 justify-center md:justify-start mb-6 md:mb-0">
        <Image
          src={Dish4} // Replace with your image URL
          alt="Food Bowl"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
          />
      </div>
          </div>
          </div>


  );
}
