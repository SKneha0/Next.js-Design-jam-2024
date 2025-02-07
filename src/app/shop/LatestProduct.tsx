import Image from "next/image";
import React from "react";
import image from '@/Image/product-20.png'
const products = [
  {
    id: 1,
    title: "Pizza",
    image: image,
    rating: 2,
    price: 35.0,
  },
  {
    id: 2,
    title: "Cupcake",
    image: image,
    rating: 1,
    price: 35.0,
  },
  {
    id: 3,
    title: "Cookies",
    image: image,
    rating: 2,
    price: 35.0,
  },
  {
    id: 4,
    title: "Burger",
    image: image,
    rating: 2,
    price: 35.0,
  },
];



const LatestProducts = () => {
  const totalStars = 5;

  return (
    <div className="w-full my-4">
      <h2 className="text-xl font-semibold mb-4">Latest Products</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex items-center gap-4 mb-4">
            <Image
              src={product.image}
              alt={product.title}
              className="w-16 h-16 object-cover"
            />

            <div>
              <h3 className="text-md font-medium">{product.title}</h3>
              <div className="flex">
                {Array.from({ length: totalStars }, (_, index) => (
                  <span key={index} className="text-sm">
                    {index < product.rating ? (
                      <span className="text-orange-400">&#9733;</span>
                    ) : (
                      <span className="text-gray-300">&#9733;</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestProducts;
