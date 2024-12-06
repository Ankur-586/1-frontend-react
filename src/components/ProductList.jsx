import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 rounded-lg shadow-md hover:shadow-lg p-4 transition-shadow"
        >
          <img
            src={product.thumbnail}
            alt={product.product_name}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            {product.product_name}
          </h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <Link
            to={`/products/${product.id}`}
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
