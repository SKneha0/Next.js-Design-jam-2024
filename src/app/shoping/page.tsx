
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { VscChromeClose } from "react-icons/vsc";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Shop from '@/Image/ourpagebg.jip.png'
import { IoIosArrowForward } from "react-icons/io";
import { shopproduct } from "@/types/productshop";
import { TbCheckbox } from "react-icons/tb";
import Link from "next/link";
const Page = () => {
  const [cart, setCart] = useState<string[]>([]); // Cart item IDs
  const [products, setProducts] = useState<shopproduct[]>([]); // Cart products
  const [count, setCount] = useState<{ [key: string]: number }>({}); // Quantity for each product

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (cart.length !== 0) {
      localStorage.setItem("cartItem", JSON.stringify(cart));
    }
    const getProduct = async () => {
      const product: shopproduct[] = await client.fetch(
        `*[_type == 'food']`
      );
      const filteredProducts = product.filter((item) =>
        cart.includes(item._id)
      );
      setProducts(filteredProducts);
      const initialCount = filteredProducts.reduce(
        (acc, item) => {
          acc[item._id] = 1;
          return acc;
        },
        {} as { [key: string]: number }
      );
      setCount(initialCount);
    };
    getProduct();
  }, [cart]);
  const handleQuantityChange = (id: string, type: "increase" | "decrease") => {
    setCount((prevCount) => {
      const newCount = { ...prevCount };
      if (newCount[id]) {
        newCount[id] =
          type === "increase" ? newCount[id] + 1 : newCount[id] - 1;
        if (newCount[id] < 1) newCount[id] = 1; // Prevent negative quantity
      }
      return newCount;
    });
  };
  const delCart = (id: string) => {
    const updatedCart = cart.filter((item) => item !== id);
    setCart(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };
  const totalPrice = products.reduce((sum, item) => {
    const itemCount = count[item._id] || 1;
    return sum + item.price * itemCount;
  }, 0);

  return (
<div className='bg-white'>
    <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image
        src={Shop}
        alt="Banner Image" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Shopping Cart</h2>
        <div className='flex text-2xl'>
          <h1 className='hover:text-orange-500'>Home</h1>
          <div>
            <IoIosArrowForward className='pt-2 text-3xl' />
          </div>
          <h2 className='text-orange-500'>Shopping cart</h2>
        </div>
      </div>
    </div>
    <div className="overflow-x-auto max-w-2xl mx-auto w-full"> 
    <div className="overflow-x-auto w-full">
  <table className="min-w-full bg-white border border-gray-200">
    <thead className="bg-orange-300 text-orange-600">
      <tr>
        <th className="p-4 text-left text-sm sm:text-lg font-semibold">Products</th>
        <th className="p-4 text-left text-sm sm:text-lg font-semibold">Food Name</th>
        <th className="p-4 text-left text-sm sm:text-lg font-semibold">Price</th>
        <th className="p-4 text-left text-sm sm:text-lg font-semibold">Quantity</th>
        <th className="p-4 text-left text-sm sm:text-lg font-semibold">Total</th>
        <th className="p-4 text-left text-sm sm:text-lg font-semibold">Remove</th>
      </tr>
    </thead>
    <tbody>
      {products.map((item) => (
        <tr key={item._id} className="border-b text-center">
          {/* Product Image */}
          <td className="p-4">
            <Image
              src={urlFor(item.image).url()}
              width={50}
              height={50}
              alt={item.name}
              className="h-12 w-12 object-cover mx-auto"
            />
          </td>
          {/* Product Name */}
          <td className="p-4 text-xs sm:text-base">{item.name}</td>
          {/* Price */}
          <td className="p-4 text-xs sm:text-base">${item.price.toFixed(2)}</td>
          {/* Quantity Controller */}
          <td className="p-4">
            <div className="flex items-center justify-center space-x-3">
              <button
                onClick={() => handleQuantityChange(item._id, "decrease")}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <span className="text-xs sm:text-base">{count[item._id] || 1}</span>
              <button
                onClick={() => handleQuantityChange(item._id, "increase")}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
            </div>
          </td>

          {/* Total Price */}
          <td className="p-4 text-xs sm:text-base">${(item.price * (count[item._id] || 1)).toFixed(2)}</td>

          {/* Remove Button */}
          <td className="p-4">
            <button
              onClick={() => delCart(item._id)}
              className="text-red-500 hover:text-red-700 text-lg"
            >
              ❌
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className="w-full rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
          <div className="py-5">
            <h3 className="text-lg sm:text-2xl text-black font-semibold">Total Bill</h3>
            <div className='border-2 border-zinc-400 p-4'>
              <div className='flex justify-between items-center border-b pb-2 mb-2'>
                <h1>Cart Subtotal</h1>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <div className='flex justify-between items-center border-b pb-2 mb-2'>
                <p className="text-sm text-gray-500">Shipping Charge</p>
                <p>${(totalPrice * 0.1).toFixed(2)}</p>
              </div>
              <div className='flex justify-between items-center font-bold text-lg'>
                <h1>Total Amount</h1>
                <p>${(totalPrice * 1.1).toFixed(2)}</p>
              </div>
            </div>
            <div className='font-medium sm:w-80 mt-4'>
              <Link href="/checkout">
                <button type="submit" className='bg-orange-500 flex items-center justify-center p-4 w-full rounded-md text-white'>
                  Proceed to Checkout
                  <TbCheckbox className='text-2xl ml-2'/>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

  );
};

export default Page;
