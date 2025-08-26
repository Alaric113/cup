// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { STORES_DATA } from "./constants"; // 匯入資料

import { BrandCard } from "./components/Brand";
import BrandPage from "./components/BrandPage";

function App() {
  // 直接從匯入的常數中取得資料
  const storesData = STORES_DATA;

  // 不再需要載入狀態或錯誤處理
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="min-h-screen bg-gray-100 p-6">
        <Routes>
          <Route
            path="/"
            element={
              <div> 
                <h1 className="p-4 text-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  {storesData.title}
                </h1>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                
                {storesData.brands.map((brand) => (
                  <BrandCard key={brand.id} brand={brand} />
                ))}
              </div>
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
