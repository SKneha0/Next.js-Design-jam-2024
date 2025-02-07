import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {shopproduct} from "@/types/productshop";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
const SearchBar = () => {
    const [Search, setSearch] = useState('')
    const [data, setData] = useState<shopproduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch(`*[_type == "food"]`);
        const filteredData: shopproduct[] = response.filter(
          (item: shopproduct) => item.name.toLowerCase().includes(Search.toLowerCase())
        );
        setData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [Search]);
    
  return (
    <>
    <div className="flex items-center border-orange-600 border-2 px-0 md:px-4 w-56 py-0 md:py-2 rounded-full text-orange-500">
      <FiSearch className="hidden text-black md:text-orange-500 md:block" />
      <input
        onChange={(e)=> setSearch(e.target.value)}
        value={Search}
        type="text"
        placeholder="Search for products..."
        className="ml-2 bg-transparent outline-none text-sm w-[550px] hidden md:block"
      />
    </div>
    {Search && (
        <div className="absolute  left-0 z-50 mt-2 w-screen top-14 md:top-24">
          <div className="flex left-0 md:justify-center w-screen">
            <div className="text-black shadow-lg  left-0 border w-screen lg:w-[600px] bg-orange-500 dark:bg-black rounded-md">
              
              {data.length === 0 ? <h2 className="text-center">Not Found</h2> :  data.map((item) => (
                <Link href={`/shopdetails/${item.slug.current}`} key={item.name} onClick={() => setSearch('')}>
                <div  className="px-4 py-2 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-[80px] h-[100px] bg-gray-100 rounded-lg">

                  <Image src={urlFor(item?.image).url()} width={80} height={100} alt={item.name} className="w-full h-full mix-blend-multiply object-cover p-2"/>
                    </div>
                  <div>
                  <p className="font-semibold w-[400px] line-clamp-2">{item.name}</p>
                  {/* <p className="font-bold">Price${item.price}</p> */}
                  </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;