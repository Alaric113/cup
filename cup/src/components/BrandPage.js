import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import BranchCard from "./BranchCard";
import BranchModal from "./BranchModal";
import { Search, ArrowLeft } from "lucide-react";

function BrandPage({ brands }) {
  const { id } = useParams();
  const brand = brands.find((b) => b.id === id);
  
  // 用來管理選中的分店和彈窗狀態
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  if (!brand) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">找不到該品牌</h2>
        <Link 
          to="/" 
          className="text-blue-600 hover:text-blue-700 transition-colors"
        >
          返回首頁
        </Link>
      </div>
    );
  }

  // 處理分店選擇的函數
  const handleSelectedBranch = (branch) => {
    setSelectedBranch(branch);
  };

  // 關閉彈窗的函數
  const handleCloseModal = () => {
    setSelectedBranch(null);
  };

  // 篩選分店邏輯
  const filteredBranches = brand.branches.filter(branch =>
    branch.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    branch.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* 返回按鈕 */}
      <Link 
        to="/"
        className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group bg-white rounded-xl px-4 py-2 shadow-md inline-flex"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">返回首頁</span>
      </Link>

      {/* 品牌標題 */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-4 border border-gray-100">
        <div className="p-3 text-center justify-center flex flex-col items-center">
        <img 
            src={require(`../img/${brand.image}.png`)} 
            alt={brand.name}
            className=" h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <h1 className="text-3xl font-bold mb-2 text-gray-800">{brand.name}</h1>
          <p className="text-base text-gray-600">共有 {brand.branches.length} 家分店</p>
        </div>
      </div>

      {/* 搜尋框 */}
      {brand.branches.length > 3 && (
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜尋分店名稱或地址..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-md"
            />
          </div>
        </div>
      )}

      {/* 分店列表 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBranches.map((branch, index) => (
          <BranchCard 
            key={index}
            branch={branch}
            brandName={brand.name}
            onClick={handleSelectedBranch}
          />
        ))}
      </div>

      {/* 沒有找到分店 */}
      {filteredBranches.length === 0 && searchTerm && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">找不到相關分店</h3>
          <p className="text-gray-500">請嘗試使用其他關鍵字搜尋</p>
        </div>
      )}

      {/* 分店詳情彈窗 */}
      {selectedBranch && (
        <BranchModal 
          branch={selectedBranch} 
          brandName={brand.name}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default BrandPage;
