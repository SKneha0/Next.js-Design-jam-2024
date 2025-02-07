import React from 'react'
import Foodcat from '@/Image/food-category-1.jpg.png'
import Foodcate from '@/Image/food-category-2.jpg.png'
import Foodcateg from '@/Image/food-category-3.jpg.png'
import Foodcategroy from '@/Image/food-category-4.jpg.png'
import Image from 'next/image'
import Link from 'next/link'
function categroy() {
  return (
    <div>
 <section className="  text-white">
  <div className="container mx-auto sm:px-4 sm:py-8">
    <h2 className="text-3xl font-bold text-orange-600 sm:ml-[40%] mb-8">Food Category</h2>
    <h3 className="text-2xl sm:ml-[30%] sm:text-6xl font-semibold mb-8"><span className='text-orange-500'>Ch</span>oose Food Item</h3>

  <div className="sm:flex grid-cols-1 sm:justify-center  p-5 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
      
      <div className="rounded-lg  relative py-5 overflow-hidden">
        <Image
         src={Foodcat}
          alt="img"
           className="sm:w-80   h-50  sm:object-cover" />
        <div className="p-4 absolute top-0">
          <p className="text-2xl w-36  text-orange-500 ml-9 sm:py-0  py-1 pl-4 font-semibold bg-white  mt-24">Save 30%</p>
          <h4 className="text-2xl bg-orange-500 sm:mt-16 p-2 sm:p-0 mt-20 text-white font-semibold">Fast Food Dish</h4>
        </div>
      </div>
      <div className="rounded-lg py-5 overflow-hidden">
        <Image
         src={Foodcate}
          alt="img"
           className="w-80 h-50  object-cover" />
      </div>
      <div className="rounded-lg py-5 overflow-hidden">
        <Image
         src={Foodcateg}
          alt="img"
           className="sm:w-80 sm:h-50  object-cover" />
      </div>
      <div className="rounded-lg py-5 overflow-hidden">
        <Image
         src={Foodcategroy}
          alt="img"
           className="w-80 h-50 object-cover" />
       

    </div>
      </div>
      <Link href='/shop'>
      <div className=' border-2 w-32 rounded-xl text-center p-1 ml-24 mt-8 sm:ml-[700px] text-orange-500 border-orange-600  '>
        <button className=' text-lg'>See more Food</button>
      </div>
      </Link>
      
  </div>
</section> 
      
    </div>
  )
}

export default categroy


