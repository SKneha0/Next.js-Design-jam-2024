import React from 'react'
import Image from 'next/image'
import Shop from '@/Image/ourpagebg.jip.png'
import { IoIosArrowForward } from "react-icons/io";
import Blog1image from '@/Image/bloglist.1.png'
import Blog2image from '@/Image/bloglist2.jpg.png'
import Blog3image from '@/Image/bloglist.3.png'
import Blog4image from '@/Image/bloglist4.png'
import { FaCalendarDay } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import Men from '@/Image/blogmenimg.png'
import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaMailBulk } from "react-icons/fa";
import Food from '@/Image/recent1.png'
import Food2 from '@/Image/recent.2png.png'
import Food3 from '@/Image/recent3.png'
import Food4 from '@/Image/recent4png.png'
import Eat from '@/Image/recent.2png.png'
import Photo1 from '@/Image/recent.2png.png'
import Photo2 from '@/Image/recent.2png.png'
import Photo3 from '@/Image/recent.2png.png'
function page() {
  return (
    <div className='bg-white'>
            <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <Image
      src={Shop}
       alt="Banner Image" 
       className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Bloglist</h2>
        <div className='flex text-2xl'>
            <h1 className='hover:text-orange-500'>Home</h1>
          <div>
          <  IoIosArrowForward className=' pt-3 text-2xl' />
          </div>
            <h2 className='text-orange-500'>Blog</h2>
        </div>
      </div>
    </div>



<div className='mt-16 sm:flex sm:justify-around' >

<div>
    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-8 max-w-3xl mx-auto font-sans">
    <div>
      <Image
      src={Blog1image}
      alt="img" />
    </div>
    <div className='flex text-orange-500 font-semibold text-lg gap-2 m-5'>
     <div className='text-2xl flex'>
      <FaCalendarDay className='text-2xl pt-2' />
      <p>Feb,14,2024/ </p> 
     </div> 
     <div className='text-2xl flex'>
      <FaMessage className='text-2xl pt-2'/>
      <p>3</p>
     </div>
      <div className='text-2xl flex'>
      < MdOutlinePersonAddAlt className='text-3xl pt-1'/>
      <p>Admin </p>
      </div>
    </div>
      <blockquote className="text-xl font-bold text-gray-800 mb-12 border-b-4 border-black  text-center">
       10 Reasons To Do A Digital Detox Challenge
      </blockquote>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-base sm:w-[200%] text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam minus velit aperiam ducimus nostrum necessitatibus eum consequuntur! Nostrum, sunt ipsam. elit. Proin aliquet, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl.
          </p>
          
          </div>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-8 max-w-3xl mx-auto font-sans">
    <div>
      <Image
      src={Blog2image}
      alt="img" />
    </div>
    <div className='flex text-orange-500 font-semibold text-lg gap-2 m-5'>
     <div className='text-2xl flex'>
      <FaCalendarDay className='text-2xl pt-2' />
      <p>Feb,14,2024/ </p> 
     </div> 
     <div className='text-2xl flex'>
      <FaMessage className='text-2xl pt-2'/>
      <p>3</p>
     </div>
      <div className='text-2xl flex'>
      < MdOutlinePersonAddAlt className='text-3xl pt-1'/>
      <p>Admin </p>
      </div>
    </div>
      <blockquote className="text-xl font-bold text-gray-800 mb-12 border-b-4 border-black  text-center">
       10 Reasons To Do A Digital Detox Challenge
      </blockquote>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-base sm:w-[200%] text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam minus velit aperiam ducimus nostrum necessitatibus eum consequuntur! Nostrum, sunt ipsam. elit. Proin aliquet, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl.
          </p>
          
          </div>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-8 max-w-3xl mx-auto font-sans">
    <div>
      <Image
      src={Blog3image}
      alt="img" />
    </div>
    <div className='flex text-orange-500 font-semibold text-lg gap-2 m-5'>
     <div className='text-2xl flex'>
      <FaCalendarDay className='text-2xl pt-2' />
      <p>Feb,14,2024/ </p> 
     </div> 
     <div className='text-2xl flex'>
      <FaMessage className='text-2xl pt-2'/>
      <p>3</p>
     </div>
      <div className='text-2xl flex'>
      < MdOutlinePersonAddAlt className='text-3xl pt-1'/>
      <p>Admin </p>
      </div>
    </div>
      <blockquote className="text-xl font-bold text-gray-800 mb-12 border-b-4 border-black  text-center">
       10 Reasons To Do A Digital Detox Challenge
      </blockquote>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-base sm:w-[200%] text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam minus velit aperiam ducimus nostrum necessitatibus eum consequuntur! Nostrum, sunt ipsam. elit. Proin aliquet, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl.
          </p>
          
          </div>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center bg-white rounded-lg p-8 max-w-3xl mx-auto font-sans">
    <div>
      <Image
      src={Blog4image}
      alt="img" />
    </div>
    <div className='flex text-orange-500 font-semibold text-lg gap-2 m-5'>
     <div className='text-2xl flex'>
      <FaCalendarDay className='text-2xl pt-2' />
      <p>Feb,14,2024/ </p> 
     </div> 
     <div className='text-2xl flex'>
      <FaMessage className='text-2xl pt-2'/>
      <p>3</p>
     </div>
      <div className='text-2xl flex'>
      < MdOutlinePersonAddAlt className='text-3xl pt-1'/>
      <p>Admin </p>
      </div>
    </div>
      <blockquote className="text-xl font-bold text-gray-800 mb-12 border-b-4 border-black  text-center">
       10 Reasons To Do A Digital Detox Challenge
      </blockquote>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-base sm:w-[200%] text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam minus velit aperiam ducimus nostrum necessitatibus eum consequuntur! Nostrum, sunt ipsam. elit. Proin aliquet, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl.
          </p>
          
          </div>
      </div>
    </div>
</div>
<div
      className ="bg-white gap-10 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mt-4">
      <div><div className="flex rounded-md border-2 border-orange-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input type="email" placeholder="Search Something..."
          className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
        <button type='button' className="flex items-center justify-center bg-orange-500 px-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </button>
      </div>
    </div>
       <div className='py-5 border-2 border-zinc-400 m-10 '>
       <div>
        <Image
        src={Men} 
        alt=""
        className="w-14 sm:w-34 sm:h-full   h-14 rounded-full mx-auto"/></div>
 <div className='text-center py-5' >
      <div>
        <h1>Prince Miyako</h1>
        <h2>Blogger/photographer</h2>
      </div>
      <div className='flex text-lg justify-center gap-0 text-orange-400'>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <div className='text-black'>
        (1Review)
        </div>
      </div>
      <div className='font-extralight sm:ml-10 text-center'>
        <p className='sm:w-52  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat aperiam officiis veritatis ea eum itaque dolor fugiat architecto sequi culpa!</p>
      </div>
      <div className='flex justify-center mt  -5 text-2xl gap-2'>
        <FaFacebookF/>
        <FaTwitter/>
        <GrInstagram/>
        <FaMailBulk/>
      </div>
       </div>
       
      </div>


      <div className='py-5 border-2 border-zinc-400 m-10  '>
        <h1 className='font-bold text-2xl ml-5 my-3  '>Recent Post</h1>
        <div className=''>
        <div className='sm:flex   border-b-2 m-4 py-2 gap-2 '>
        <Image
        src={Food} 
        alt=""
        className="w-14 sm:w-[25%] sm:h-full    h-14  mx-auto"/>
        <div className='sm:w-52 text-center'>
        <h1>june22, 2024</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>
        <div className='sm:flex  border-b-2 m-4 py-2 gap-2 '>
        <Image
        src={Food2} 
        alt=""
        className="w-14 sm:w-[25%] sm:h-full    h-14  mx-auto"/>
        <div className='sm:w-52 text-center'>
        <h1>june22, 2024</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>
        <div className='sm:flex  border-b-2 m-4 py-2 gap-2 '>
        <Image
        src={Food3} 
        alt=""
        className="w-14 sm:w-[25%] sm:h-full    h-14  mx-auto"/>
        <div className='sm:w-52 text-center'>
        <h1>june22, 2024</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>
        <div className='sm:flex  border-b-2 m-4 py-2 gap-2 '>
        <Image
        src={Food4} 
        alt=""
        className="w-14 sm:w-[25%] sm:h-full    h-14  mx-auto"/>
        <div className='sm:w-52 text-center'>
        <h1>june22, 2024</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>
        </div>
      </div>
      <div className='py-5 border-2 border-zinc-400 m-10 '>
        <div>
          <h1 className='text-2xl font-thin m-3'>Filter By Menu</h1>
       <div className='sm:flex  sm:m-5'>
       <div className='ml-14 sm:ml-0'>
          <Image 
          src={Eat}
          alt="" />          
        </div>
        <div className='flex  m-3 sm:pt-5  gap-5'>
          <h1>Chicken Fry</h1>
          <p>26</p>
        </div>

       </div>
       <div className='sm:flex m-5'>
       <div className='ml-14 sm:ml-0' >
          <Image 
          src={Eat}
          alt="" />          
        </div>
        <div className='flex gap-5  m-3 sm:pt-5 '>
          <h1>Burger Food</h1>
          <p>46</p>
        </div>

       </div>
       <div className='sm:flex m-5'>
       <div className='ml-14 sm:ml-0'>
          <Image 
          src={Eat}
          alt="" />          
        </div>
        <div className='flex  gap-5  m-3 sm:pt-5 '>
          <h1>Pizza</h1>
          <p>16</p>
        </div>

       </div>
       <div className='sm:flex m-5'>
       <div className='ml-14 sm:ml-0'>
          <Image 
          src={Eat}
          alt=""/>          
        </div>
        <div className='flex gap-5  m-3 sm:pt-5 '>
          <h1>Fresh Fruits</h1>
          <p>36</p>
        </div>

       </div>
       <div className='sm:flex  m-5'>
       <div className='ml-14 sm:ml-0'>
          <Image 
          src={Eat}
          alt="" />          
        </div>
        <div className='flex gap-5  m-3 sm:pt-5 '>
          <h1>Vegetables</h1>
          <p>16</p>
        </div>

       </div>
          </div>
       
      </div>
      <div className='py-5  border-2 border-zinc-400 m-10'>
        <div className='text-2xl text-center font-bold'>
          <h1>Populer Tags</h1>
        </div>
        <div  >
          <div className='flex gap-3 sm:ml-0 ml-2 py-2'>
            <h1 className='bg-zinc-500 sm:ml-4 py-2 sm:px-5  px-1'>Snadwich</h1>
            <h2 className='bg-zinc-600 py-2 sm:px-6  px-1'>Tikka</h2>
            <h3 className='bg-zinc-700 py-2 sm:px-3  px-3'>Bbq</h3>
          </div>
          <div className='flex gap-3 ml-2 sm:ml-4 '>
            <h1 className='bg-zinc-500 py-2 sm:px-5 px-1'>Restaurant</h1>
            <h2 className='bg-zinc-500 py-2 sm:px-2 px-1'>ChinkenSharma</h2>
          </div>
          <div className='flex gap-3 py-2 ml-2 sm:ml-4'>
            <h1 className='bg-zinc-500 py-2 sm:px-3 px-1'>Headlth</h1>
            <h2 className='bg-zinc-500 py-2 sm:px-4 px-1'>Fast food</h2>
            <h3 className='bg-zinc-500 py-2 sm:px-4  px-1 '>Food</h3>
          </div>
          <div className='flex gap-3 ml-4 sm:ml-4'>
            <h1 className='bg-zinc-500 py-2 sm:px-4 px-1'>pizza</h1>
            <h2 className='bg-zinc-500 py-2 sm:px-5 px-1'>Burger</h2>
            <h3 className='bg-zinc-500 py-2 sm:px-4 px-1'>Chicken</h3>
          </div>
        </div>
      </div>
      <div className='py-3 border-2  border-zinc-400 m-7   '>
        <h1 className='text-2xl text-clip font-serif'> Photo Gallery</h1>
        <div className='p-2 gap-1 flex'>
          <Image className=''
          src={Photo1}
          alt=""
                         />
          <Image
          src={Photo2}
          alt=""
          />
          <Image
          src={Photo3}
          alt=""
          />  
        </div>
        <div className='p-2 gap-1 flex'>
          <Image
          src={Photo1}
          alt=""
          />
          <Image
          src={Photo2}
          alt=""
          />
          <Image
          src={Photo3}
          alt=""
          />  
        </div>
      </div>
      <div className='py-3 border-2  border-zinc-400 m-10' >
        <h1 className='text-2xl font-bold ml-4'>Follow Us:</h1>
      <div className='flex justify-center mt-5 text-orange-500  text-2xl gap-2'>
        <FaFacebookF
          className=''/>
        <FaTwitter  
        className=' '/>
        <GrInstagram
          className='text-black'/>
        <FaMailBulk 
         className=' '/>
      </div>
      </div >
      </div>
      
      </div>
    </div>
  )
}

export default page
