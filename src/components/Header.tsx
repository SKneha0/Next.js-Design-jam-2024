"use client";
import Link from "next/link";
import { useState } from "react";
 import { UserButton } from "@clerk/clerk-react";
import CartPageIcon from "./cardpageicons";
import SearchBar from "./sech";

 export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <header className="bg-black sm:ml-40  sm:pt-11 sm:w-[80%] text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-orange-500">
          Food<span className="text-white">tuck</span>
        </div>
        <nav className="hidden  md:flex sm:flex  space-x-6">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <Link href="/menu" className="hover:text-orange-500">Menu</Link>
          <Link href="/bloglist" className="hover:text-orange-500">Blog</Link>
            <Link href="/order  " className=" hover:text-orange-500">Orders</Link>
            <Link href="/about" className="hover:text-orange-500">About</Link>
          <Link href="/shop" className="hover:text-orange-500">Shop</Link>
          <Link href="/singup" className="hover:text-orange-500">Contact</Link> 
        <div className=" flex items-center  space-x-4"  >
          <div className="flex items-center">
            {/* <input
              type="text"
              placeholder="Search..."
              className="bg-black border border-orange-500 text-sm px-4 py-1 rounded-full placeholder-gray-400 focus:outline-none"
              /> */}
            {/* <FiSearch className=" text-orange-500" /> */}
          </div>
          <SearchBar/>
          <div className="text-2xl text-orange-500 cursor-pointer">
          <Link href="/shoping">
          <CartPageIcon  />
          </Link>
          </div>
            
          <div className="text-2xl text-orange-500 cursor-pointer">
          <UserButton/>
          </div>

        </div>
          </nav>

        {/* Mobile Menu  */}
        <button
          className="md:hidden text-orange-500 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="flex ">
          <div className="flex">
          <div className="md:hidden  bg-black space-y-2 p-4">
        <Link href="/" className="block hover:text-orange-500">Home</Link>
        <Link href="/menu" className="block hover:text-orange-500">Menu</Link>
        <Link href="/bloglist" className="block hover:text-orange-500">Blog</Link>
        <Link href="/order  " className=" hover:text-orange-500">Orders</Link>
        <Link href="/about" className="block hover:text-orange-500">About</Link>
        <Link href="/shop" className="block hover:text-orange-500">Shop</Link>
        <Link href="singup" className="block hover:text-orange-500">Contact</Link>
  
          </div>
          </div>
          <div className="sm:hidden flex  mt-2 ml-5">
        {/* <div className="relative  ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-black border w-32  border-orange-500 text-sm px-4 py-1   rounded-full placeholder-gray-100 focus:outline-none"
            />
            <Search/>
        </div> */}

        <Link href="/shoping">
          </Link>
          {/* <Sech
        searchQuery=""
        onSearch={(e) => console.log(e.target.value)} // Just log the search query here for now
      /> */}
        <div className="flex   space-x-4"  >
        <Link href="/shoping">
        <div  className ="text-2xl text-orange-500 cursor-pointer">
          <CartPageIcon />
        </div>
          </Link>
         <UserButton />
            </div>

        </div>


          </div>
      )}
    </header>
  );
}
