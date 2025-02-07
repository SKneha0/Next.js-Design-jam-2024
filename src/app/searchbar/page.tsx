"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";;
import ProductCard from "@/app/shop/ProductCard";
import SearchBar from "@/components/sech";
import  {shopproduct } from "@/types/productshop";

const ShopPage = () => {
  const [products, setProducts] = useState<shopproduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<shopproduct[]>([]);

  // Fetch all products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await client.fetch(`*[_type == 'food']`);
      setProducts(result);
      setFilteredProducts(result);
    };
    fetchProducts();
  }, []);

  // Filter products based on search query
  const handleSearch = (query: string) => {
    if (query) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Show all products if query is empty
    }
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.slug.current} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
