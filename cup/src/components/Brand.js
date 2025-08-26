import React from "react";
import { Link } from "react-router-dom";

export function BrandCard({ brand }) {
  return (
    <Link to={`/brand/${brand.id}`}>
      <div className="bg-white shadow-lg rounded-2xl p-4 border border-gray-200 cursor-pointer hover:shadow-xl transition">
      <div className="relative h-48 overflow-hidden flex flex-col justify-center items-center">
          <img 
            src={require(`../img/${brand.image}.png`)} 
            alt={brand.name}
            className="w-4/5 h-4/5 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
        </div>
        <h2 className="mt-1 text-xl text-center font-semibold text-indigo-600">
          {brand.name}
        </h2>
      </div>
    </Link>
  );
}
