"use client";
import React from 'react'
import Image from 'next/image';
import Rice from '@/Image/firrice.png';
import Bghome from  '@/Image/bg-home.png';
import Link from "next/link";
export default function FoodSection() {
  return (
    
    <section className= " mt-52 sm:mt-0    text-white ">
   
    <div className='flex-col  justify-center'>
      <div className='relative BG'>
        <Image src={Bghome} 
        alt={'img'} 
        className='sm:w-[90%] w-[full] h-[550px] sm:ml-20' />
      </div>
      <div className="container top-0 sm:w-[990px] sm:ml-60  mt-52 absolute  mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between  ">
        {/* Left Content */}
        <div className="text-center  md:text-left md:w-1/2 space-y-6">
          <h3 className="text-orange-500 text-xl font-bold">
            It&apos;s Quick & Amusing!
          </h3>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            The <span className="text-orange-500">Art</span> of speed
            <br />
            food Quality
          </h1>
          <p className="text-gray-400 w-80 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
        <Link href="/menu">
          <button className="bg-orange-500 text-black px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
            See Menu
          </button>
        </Link>  
        </div>
        <div className="relative md:w-1/2 pt-20  flex justify-center">
        <Image  src={Rice} alt=" img " 
            className="w-[80%] md:w-[70%]   rounded-full" 
        />
        </div>
      </div>


    </div>
    </section>
  );
}

