import React from "react";
import { useParams, Link } from "react-router-dom";

function BrandPage({ brands }) {
  const { id } = useParams();
  const brand = brands.find((b) => b.id === id);

  if (!brand) {
    return <div className="text-center">找不到品牌</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6">
    <div>
    <h2 className="text-2xl font-bold text-indigo-600 mb-4">{brand.name}</h2>

    </div>
      <ul className="space-y-3">
        {brand.branches.map((branch, idx) => (
          <li key={idx} className="border-b pb-2">
            <span className="block font-medium">{branch.storeName}</span>
            <span className="text-sm text-gray-500">
              {branch.address || "地址待補"}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link to="/" className="text-blue-600 hover:underline">
          ← 返回首頁
        </Link>
      </div>
    </div>
  );
}

export default BrandPage;
