'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io5'
import { PiLineVerticalThin } from 'react-icons/pi'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image'
import { FaShoppingCart } from 'react-icons/fa';
import Desc from './[slug]/details';
import CartIcon from '@/components/cardicon'
interface Product {
  name: string;
  description: string;
  price: number;
  rating: number;
  review: number;
  category: string;
  image: string;
  _id: string;
}

interface CountComponentProps {
  product: Product;
}

const CountComponent = ({ product }: CountComponentProps) => {
  const [count, setCount] = useState<number>(1);

  return (
    <div>
      <div className="bg-white container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center justify-around lg:items-start lg:w-1/2">
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={300}
              className=" mb-4 rounded"
            />
          </div>
          <div className="lg:w-1/2 mt-20 lg:pl-8">
            <h1 className="sm:text-4xl text-2xl font-bold mb-2">
              {product.name}
            </h1>
            <p className="text-gray-800 mb-4 sm:pr-32">{product.description}</p>
            <div className="text-3xl text-zinc-800 mb-4">
              $ {product.price.toLocaleString()}
            </div>
            <div className="sm:flex items-center sm:mb-4">
              <span className="text-yellow-500 text-2xl">⭐⭐⭐⭐</span>
              <div className='flex items-end'>
                <span className="ml-2 text-zinc-800 items-center flex">
                  <PiLineVerticalThin className="text-gray-300 text-4xl" />{" "}
                  {product.rating} Rating
                </span>
                <span className="ml-2 text-zinc-800 items-center flex">
                  <PiLineVerticalThin className="text-zinc-800 text-4xl" />{" "}
                  {product.review} Reviews
                </span>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-10">
              <div className='gap-4 flex items-center'>
                <button onClick={() => setCount(count - 1)}>-</button>
                 {count}
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
                <button className="bg-orange-500 hover:bg-orange-700 text-black py-3 px-12 rounded-md border-black">
              <Link href="/shoping">
                  Add to Cart
              </Link>
                   <span><CartIcon id={product._id}/></span>
                </button>
            </div>
            <div className="text-2xl text-orange-500 cursor-pointer">
          <Link href="/shoping">
          <FaShoppingCart />
          </Link>
          </div>
            <hr className="my-10" />
            <div className="mt-4">
              <div className="text-gray-400 mt-2">
                Category: <span className="pl-12"> {product.category}</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <h1 className="text-gray-400 mt-2">Share : </h1>
              <button className="pl-14">
                <FaFacebook />
              </button>
              <button className="">
                <FaLinkedin />
              </button>
              <button className="">
                <IoLogoTwitter />
              </button>
            </div>
          </div>
        </div>
        <hr className="my-10" />
       <Desc/>
      </div>
    </div>
  )
}

export default CountComponent