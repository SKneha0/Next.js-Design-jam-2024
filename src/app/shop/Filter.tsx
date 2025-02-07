import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image'
import perfectTaste from '../../Image/Rectangle8879.png'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import PriceFilter from './PriceFilter';
import LatestProducts from './LatestProduct';
import ProductTags from './ProductTags';
import { RxCross2 } from "react-icons/rx";


const categories = [
    "Sandwiches",
    "Burger",
    "Chicken Chup",
    "Drink",
    "Pizza",
    "Thi",
    "Non Veg",
    "Uncategorized",
  ];
  
const Filter = ({filterHandler} : {filterHandler?: () => void}) => {
  return (
    <div className='w-[100%] h-[70vh] overflow-y-scroll lg:w-[250px] border-[1px] lg:h-[1300px] p-4 rounded-xl bg-white '>
        <div className="mb-6 flex items-center justify-between relative">
          <div className='flex items-center'>
        <input
          type="text"
          placeholder="Search Product"
          className="border border-gray-300 rounded-l-sm p-2 text-sm w-full outline-none"
        />
        <button
          className="bg-orange-500 text-white px-4 py-[7px] rounded-r-sm hover:bg-orange-600"
        >
          <span className="material-icons"><IoIosSearch className='text-2xl'/></span>
        </button>
        </div>
        <RxCross2 onClick={filterHandler} className='cursor-pointer text-2xl lg:hidden fixed right-4 bg-white h-[20px] w-[20px] rounded-full z-30'/>
      </div>
      <div>
      <h3 className="text-lg font-semibold mb-2">Category</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-orange-500"
              />
              <span className="text-gray-700">{category}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
    <div className="relative w-full h-[240px]  overflow-hidden my-5">
      <Image
        src={perfectTaste}
        alt="Classic Restaurant"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col py-6  p-4">
        <p className="text-white text-base">Perfect Taste</p>
        <h2 className="text-white text-xl font-bold mb-2">
          Classic Restaurant
        </h2>
        <p className="text-orange-500 text-lg font-semibold mb-4">45.00$</p>        
        <button className="flex items-center space-x-2 text-white mt-12">
          <span>Shop Now</span>
          <span className="text-2xl"><IoArrowForwardCircleOutline/></span>
        </button>
      </div>
    </div>
    <PriceFilter/>
    <LatestProducts/>
    <ProductTags/>
    </div>
  )
}

export default Filter