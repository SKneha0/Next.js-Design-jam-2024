import React from "react";

const PriceFilter = () => {
  

  return (
    <div className="w-full max-w-md px-3">
      <h2 className="text-lg font-semibold mb-4">Filter By Price</h2>
      <div className="relative w-full h-1 ">
        <div className="h-[13px] w-[13px] bg-orange-500 shadow-md absolute z-20 rounded-full top-[-4px] left-[-8px] border-4 border-white"></div>
        <div
          className="absolute h-1 bg-orange-500 w-[100%]"
        ></div>
        <div className="h-[13px] w-[13px] bg-orange-500 shadow-md absolute z-20 rounded-full top-[-4px] right-[-8px] border-4 border-white"></div>
      </div>
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <p>From $0 to $8000</p>
        <p className="">
          Filter
        </p>
      </div>
    </div>
  );
};

export default PriceFilter;
