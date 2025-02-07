import React from 'react'
import Image from 'next/image'
import Shop from '@/Image/ourpagebg.jip.png'
import { IoIosArrowForward } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";
function page() {
  return (
    <div>
       <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image
      src={Shop}
       alt="Banner Image" 
       className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Sing up page</h2>
        <div className='flex text-2xl'>
            <h1 className='hover:text-orange-500'>Home</h1>
          <div>
          <  IoIosArrowForward className=' pt-2 text-3xl' />
          </div>
            <h2 className='text-orange-500'>Sing up</h2>
        </div>
      </div>
    </div>
    <div>
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
            <form className="mt-8 space-y-4">
              <div>
                <div className="relative flex items-center">
                  <input name="username" type="text" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Name"   />
                   <div  className="w-4 h-4 absolute right-4" >
                    <VscAccount />
                  </div> 
                </div>
              </div>

              <div>
                <div className="relative flex items-center">
                  <input name="password" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Email" />
                  <div  className="w-4 h-4 absolute right-4" >
                    <MdOutlineMailOutline />
                  </div>
                </div>
              </div>

              <div>
                <div className="relative flex items-center">
                  <input name="password" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Password" />
                  <div  className="w-4 h-4 absolute right-4" >
                    <RiLockPasswordLine />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-orange-600 border-gray-300 rounded" />
                  <label  className="ml-3 block text-sm text-gray-800">
                    Remember me?
                  </label>
                </div>
                <div className="text-sm">
                </div>
              </div>

              <div className="!mt-8">
                <button type="button" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none">
                  Sign in
                </button>
              </div>
                  <a href="jajvascript:void(0);" className="text-orange-600 hover:underline font-semibold">
                    Forgot your password?
                  </a>
            <div className=' flex justify-center border-gray-300 mt-4 mb-4'>
              <h1 className= 'border-2 hover-bg-gray-300 text-center w-10'>OR</h1>
            </div>
            <div>
                <div className="relative flex items-center">
                  <input name="password" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Sing up with Google" />
                  <div  className="w-4 h-4 absolute right-4" >
                    <FcGoogle/>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative flex items-center">
                  <input name="password" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Sing up with Apply" />
                  <div  className="w-4 h-4 absolute right-4" >
                    <ImAppleinc />
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default page
