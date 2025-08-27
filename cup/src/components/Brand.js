import React from "react";
import { Link } from "react-router-dom";
import { Coffee, Star, ExternalLink, Leaf } from "lucide-react";

// 品牌顏色配置
const brandColors = {
  "mr-wish": "from-green-400 to-emerald-600",
  "huzi": "from-amber-400 to-orange-600",
  "chatime": "from-blue-400 to-indigo-600",
  "happy-lemon": "from-yellow-400 to-orange-500",
  "moomoo": "from-purple-400 to-pink-600",
  "qei-ji": "from-red-400 to-rose-600"
};

export function BrandCard({ brand }) {
  const colorClass = brandColors[brand.id] || "from-gray-400 to-gray-600";
  
  return (
    <Link to={`/brand/${brand.id}`}>
        
      <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:border-blue-200">
          {/* 品牌圖片區域 */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <img 
                src={require(`../img/${brand.image}.png`)} 
                alt={brand.name}
                className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-500 rounded-xl shadow-md"
              />
            </div>
            <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
            
          </div>
          
          {/* 品牌資訊 */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-xl font-bold bg-gradient-to-r ${colorClass} bg-clip-text text-transparent`}>
                {brand.name}
              </h2>
              
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-green-100 rounded-full p-2">
                  <Leaf className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm text-gray-600">
                  {brand.branches ? brand.branches.length : '多'} 家分店
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors">
                <span className="text-sm font-medium">查看分店</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            {/* 環保優惠標籤 */}
            <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-3">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-700 font-medium">環保杯優惠</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
