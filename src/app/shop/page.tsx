'use client'
import React, { useState } from "react";
import Shop from "@/Image/shop.png";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import { LuSettings2 } from "react-icons/lu";
import Link from "next/link";
import { client } from "@/sanity/lib/client"; 
  const sortOptions = ["Newest", "Oldest", "Top Rated", "Most Popular"];
  const showOptions = ["Default", "5 Results", "10 Results", "20 Results"];
const Page = () => {
  interface Product {
    slug: {
      current: string;
    };
    image: string;
    title: string;
    name: string;
    discountPrice: number;
    price: number;
    description: string;
    originalPrice: number;
  }
  const [products, setProducts] = useState<Product[]>([])
  const getData = async()=>{
  const Foodproducts = await client.fetch(`*[_type == 'food']`)
  setProducts(Foodproducts)
  }
  getData()
  const [isOpen, setIsOpen] = useState(false);
  const [attr, setAttr] = useState('hidden');
  
  const filterHandler = () => {
    setAttr(isOpen ? 'hidden' : 'block');
    setIsOpen(!isOpen);
  };
  return (
    <div className=" bg-white">
       <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <Image
          src={Shop}
           alt="Banner Image" 
           className="absolute inset-0 w-full h-full object-cover" />
          <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="sm:text-4xl text-2xl font-bold mb-6">OurShop</h2>
            <div className='flex text-2xl'>
                <h1 className='hover:text-orange-500'>Home</h1>
              <div>
              <  IoIosArrowForward className=' pt-2 text-3xl' />
              </div>
                <h2 className='text-orange-500'>Shop</h2>
            </div>
          </div>
        </div>
      <div className="mx-2  md:mx-20">
      <div className="flex items-center space-x-4 p-4 justify-between rounded-lg">
        <div className="sm:flex  space-x-4">
        <div className="flex py-4 items-center space-x-2">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortOptions[0]}
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none "
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="show" className="text-sm font-medium text-gray-700">
            Show:
          </label>
          <select
            id="show"
            value={showOptions[0]}
            className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none "
          >
            {showOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        </div>
        <LuSettings2 className=" lg:hidden text-xl cursor-pointer" onClick={filterHandler} />

      </div>
      <div className="flex justify-between ">
      <div className="flex w-[1000px] flex-wrap min-h-[700px]">
        {products.map((product, index) => (
          <Link key={index} href={`shopdetails/${product.slug.current}`} className="h-[300px] ">
            
          <ProductCard  product ={product}/>
          </Link>
        ))}
      </div>
        <div className="hidden lg:block ">
        <Filter/> 
        </div>
      </div>
      </div>
        <div className={`${attr} fixed bottom-0 lg:hidden w-[100vw]`}>
        <Filter filterHandler={filterHandler}/>
        </div>
    </div>
  );
};

export default Page;