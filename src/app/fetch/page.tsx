import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

interface Product {
  _id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}
const page = async () => {
  const products: Product[] = await client.fetch(`*[_type == 'food']`)
  return (
    <div>
      {products.map((item: Product) => (
        <div key={item._id}>
          <div className="relative">
            <Image
              src={urlFor(item.image).url()}
              width={312}
              height={267}
              alt={item.name}
              className="h-[267px] w-[312px] object-cover"
            />
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
