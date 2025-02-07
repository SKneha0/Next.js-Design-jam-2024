"use client";
import React, { useState } from "react";
import { client } from "@/sanity/lib/client";
import { useUser } from "@clerk/nextjs";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import shop from "@/Image/shop.png"; 
// import Link from "next/link";
interface FormData {
  yourName: string;
  lastName: string;
  city: string;
  Address1: string;
  Address2: string;
  zipcode: string;
  phone:string;
  emailaddress: string;
  Company:string;
  additionalInfo: string;
}

const Page = () => {
  const { user } = useUser();

  const [formData, setFormData] = useState<FormData>({
    yourName: "",
    lastName: "",
    city: "",
    Address1: "",
    Address2: "",
    zipcode: "",
    phone:"",
    emailaddress: "",
    Company:"",
    additionalInfo: "",
  });
  const sentOrder = (data: FormData) => {
    const cartData = localStorage.getItem("cartItem");
    const products = cartData ? JSON.parse(cartData) : [];

    const newDocument = {
      _type: "order",
      user: user?.id,
      details: data,
      products: products,
    };

    client.create(newDocument).then((res) => {
      console.log("Document updated:", res);
    });
    localStorage.setItem("cartItem", JSON.stringify([]));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order submitted successfully!");
    sentOrder(formData);
    console.log("Form Data:", formData);
  };

  return (
    <div className='bg-white'>

<div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image src={shop} 
        alt="Shop Banner"
         className="absolute inset-0 w-full h-full object-cover" />
  <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">CheckOut</h2>
        <div className='flex text-2xl'>
            <h1 className='hover:text-orange-500'>Home</h1>
          <div>
          <  IoIosArrowForward className=' pt-3 text-2xl' />
          </div>
            <h2 className='text-orange-500'>Checkout</h2>
        </div>
      </div>

            </div>

      
        <div className="" > 
          <h2 className="text-3xl font-bold mb-4"></h2>

          <div className=' text-orange-500 mt-20 mx-9 font-bold text-3xl'>
            <h1>Shipping Cart</h1>
        </div>
        <div className='sm:flex pt-0 flex-wrap '>
    <div >
    <div className=" mx-auto pb-4 w-48 sm:w-full sm:px-20 max-w-xl  font-[sans-serif]">
  
      <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="text-gray-800 text-sm block mb-2">Your Name</label>
          <input id="yourName"
                  name="yourName"
                  type="text"
                 placeholder='YourName'
                  value={formData.yourName}
                  onChange={handleChange}
                  className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
        <div>
          <label className='text-gray-800 text-sm block mb-2'>Email</label>
          <input id="emailaddress"
                  name="emailaddress"
                  type="text"
                 placeholder='Email Address'
                  value={formData.emailaddress}
                  onChange={handleChange}
                  className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
       
        <div>
          <label className="text-gray-800 text-sm block mb-2">Address-1</label>
          <input id="Address1" 
                  name="Address1"
                  type="text"
                 placeholder='Address-1'
                  value={formData.Address1}
                  onChange={handleChange}
                  className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
        <div>
            <label className='text-gray-800 text-sm block mb-2'> Billing Address</label>
            <div className='flex  gap-2  pl-3 py-2'>
            <input
              id="checkbox"
              type="checkbox"
              className='w-5 '  />
            <h1>same as shipping address</h1>
            </div>
        </div>
        </form>
        </div>
        </div>
        <div className=''>
    <div className="mx-auto pb-4 sm:px-20 w-48 sm:w-full max-w-xl font-[sans-serif]">
      
      <form className="mt-12 space-y-6">
        <div>
          <label className="text-gray-800 text-sm block mb-2">Last Name</label>
          <input id="lastName"
                  name="lastName"
                  type="text"
                 placeholder='Last Name'
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
        <div>
          <label className='text-gray-800 text-sm block mb-2'>Phone number</label>
          <input id="phone"
                  name="phone"
                  type="text"
                 placeholder='Phonenumber'
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600"/>
        </div>
        <div>
          <label className="text-gray-800 text-sm block mb-2">Zip Code</label>
          <input id="zipcode"
                  name="zipcode"
                  type="text"
                 placeholder='Zipcode'
                  value={formData.zipcode}
                  onChange={handleChange}
                  className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
      <div>
          <label className="text-gray-800 text-sm block mb-2">Address2</label>
          <input id="Address2"
                  name="Address2"
                  type="text"
                 placeholder='Address-2'
                  value={formData.Address2}
                  onChange={handleChange}
                  className="w-full rounded-md py-2.5 px-4 border-zinc-500 border-2 text-sm outline-orange-600" />
        </div>
               
               <button
              type="submit"
              className="flex border-2 bg-orange-500 border-orange-500 mt-3 p-6 text-2xl"
              onClick={(e) => handleSubmit(e)}
            >
               Proceed to shipping
               <  SlArrowRight className=' font-bold text-4xl' />
            </button>
               
      </form>

        </div>
       </div>
    </div>
    </div> 
    </div> 
  
  );
};

export default Page;
