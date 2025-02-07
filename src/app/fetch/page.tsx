import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

const page = async() => {
    const products = await client.fetch(`*[_type == 'food']`)
  return (
    <div>
      
        {products.map((item)=>(
          <div key={item._id}>
                  <div className="relative">
                    <Image
                      src={urlFor(item.image).url()}
                      width={312}
                      height={267}
                      alt={item.name}
                      className="h-[267px] w-[312px] object-cover"
                    />
                    {/* {product.tag && <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded">
                      {product.tag} */}
                    {/* </span>}??/ */}
                    
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-400 font-bold">${item.price}</span>
                      <span className="text-gray-500 line-through">${item.originalPrice}</span>
                    </div>
                  </div>
                </div>
        ))}
    </div>
  )
}

export default page
