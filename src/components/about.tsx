import React from 'react'
import Image from 'next/image'
import Dishegg from '@/Image/egg.jpg.png'
import Dishroll from '@/Image/roll.jpg.png'
import Dishsanvege from '@/Image/sanvege.jpg.png'
import Link from "next/link";
export default function AboutSection() {
  return (
    <section className="bg-black sm:w-[60%] sm:ml-64  text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-6 space-y-8 md:space-y-0">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-orange-500 text-xl font-bold">About Us</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            We Create the best <span className="text-orange-500">foody</span> product
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>
          {/* Checkmarks */}
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-4">✔</span>
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-4">✔</span>
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 text-xl mr-4">✔</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>

              <Link href="/about">
          <button className="bg-orange-500 text-black px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300">
            Read More
          </button>
              </Link>

        </div>

        {/* Right Content - Image Gallery */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src={Dishegg} // Replace with your image path
              alt="img"
              className="w-full rounded-lg"
            />
          </div>
          <Image
            src={Dishroll} // Replace with your image path
            alt="img"
            className="w-full rounded-lg"
          />
          <Image
            src={Dishsanvege} // Replace with your image path
            alt="img"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

