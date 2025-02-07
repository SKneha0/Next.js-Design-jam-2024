"use client";

import React, { useState } from "react";

// Define the Productchef type
type Productchef = {
  id: number;
  name: string;
  price: number;
};

const Shopes = () => {
  // Correct initialization
  const [products, setProducts] = useState<Productchef[]>([]);

  // Example usage of setProducts
  const addProduct = () => {
    setProducts([...products, { id: 1, name: "New Product", price: 100 }]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      Our Shop
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default Shopes;
