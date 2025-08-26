import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { BrandCard } from "./components/Brand";
import BrandPage from "./components/BrandPage";

function App() {
  const [storesData, setStoresData] = useState({ title: "", brands: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/stores.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setStoresData(data);
        console.log(data)
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("無法載入資料，請稍後再試。");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>載入中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="p-4 text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          {storesData.title}
        </h1>
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {storesData.brands.map((brand) => (
                  <BrandCard key={brand.id} brand={brand} />
                ))}
              </div>
            }
          />
          <Route
            path="/brand/:id"
            element={<BrandPage brands={storesData.brands} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;