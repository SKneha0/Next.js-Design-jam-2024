
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface Product {
  slug: { current: string };
  image: string;
  title: string;
  description: string;
  tag?: string;
  name: string;
  originalPrice: number;
  discountPrice: number;
  price: number;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex justify-center">
      <Link href={`/shopdetails/${product.slug.current}`} className="w-full sm:w-[300px]">
        <div className="bg-white rounded-lg mx-5 shadow-md overflow-hidden transition-transform transform hover:scale-105">
          <div className="relative w-full sm:h-64 h-36 ">
            <Image
              src={urlFor(product.image).url()}
              layout="fill"
              objectFit="cover"
              alt={product.title}
              className="rounded-t-lg"
            />
            {product.tag && (
              <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded">
                {product.tag}
              </span>
            )}
          </div>
          <div className="p-4">
  <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
  <p className="text-orange-400 text-sm line-clamp-1">{product.description}</p>
  <div className="flex items-center space-x-2 mt-2">
    {/* Discount price visible only if available */}
   
     
        {/* <span className="text-orange-500 text-lg font-bold">${product.discountPrice}</span>
        <span className="text-gray-500 text-lg ">${product.description}</span> */}
        <span className="text-gray-500 text-lg line-through">${product.price}</span>
     
    
      <span className="text-gray-500 text-lg">${product.originalPrice}</span>
 
  </div>
</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;





