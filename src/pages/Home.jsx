import React, { useEffect, useState } from "react";
import api from "../api"; // Import your custom axios instance
import ProductList from "../components/ProductList"; // Import ProductList component

const Home = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("products/")
      .then((response) => {
        console.log("API Response:", response.data); // Debugging API response
        const productResults = response.data?.data?.results || []; // Safely access nested results
        setProducts(productResults);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-gray-600 text-lg">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 font-semibold">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Our Store</h1>
      <ProductList products={products} /> {/* Pass products as props */}
    </div>
  );
};

export default Home;
