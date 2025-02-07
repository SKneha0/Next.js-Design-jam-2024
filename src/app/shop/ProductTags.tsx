import React from "react";

const tags = [
  { id: 1, name: "Services" },
  { id: 2, name: "Our Menu" },
  { id: 3, name: "Pizza" },
  { id: 4, name: "Cupcake" },
  { id: 5, name: "Burger", highlighted: true },
  { id: 6, name: "Cookies" },
  { id: 7, name: "Our Shop" },
  { id: 8, name: "Tandoori Chicken" },
];

const ProductTags = () => {
  return (
    <div className="w-full ">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-4">Product Tags</h2>

      {/* Tags */}
      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <span
            key={tag.id}
            className={`text-gray-500 cursor-pointer ${
              tag.highlighted
                ? "text-orange-500 border-b-[1px] border-orange-500"
                : "hover:text-gray-700 border-b-[1px] border-gray-300"
            }`}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductTags;
