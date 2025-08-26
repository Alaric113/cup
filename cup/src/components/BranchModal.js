import React, { useState } from 'react';
import { MapPin, Clock, Phone, X, ExternalLink, Leaf } from 'lucide-react';

function BranchModal({ branch, brandName, onClose }) {
  const [showMap, setShowMap] = useState(false);

  // 生成 Google Maps URL
  const getGoogleMapsUrl = (address) => {
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dRWTMaagqzFjeI&q=${encodeURIComponent(address)}`;
  };

  const formatPhoneNumber = (phone) => {
    return phone.replace(/[\s()-]/g, '');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* 標題區域 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{branch.storeName}</h3>
              <p className="text-lg text-gray-600 mt-1">{brandName}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>
        
        {/* 內容區域 */}
        <div className="p-6">
          {/* 基本資訊卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800">地址</span>
              </div>
              <p className="text-sm text-blue-700 leading-relaxed">{branch.address}</p>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">營業時間</span>
              </div>
              <p className="text-sm text-green-700">{branch.time}</p>
            </div>
            
            <div className="bg-purple-50 rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-purple-800">聯絡電話</span>
              </div>
              <a 
                href={`tel:${formatPhoneNumber(branch.tele)}`}
                className="text-sm text-purple-700 hover:text-purple-800 transition-colors"
              >
                {branch.tele}
              </a>
            </div>
          </div>
          
          {/* 環保優惠資訊 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 md:p-6 mb-4 mdL:mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 rounded-full p-1">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-bold text-green-800">環保杯優惠</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-2 md:p-4 shadow-sm">
                <div className="text-green-600 font-bold text-base md:text-lg">🌱 自備環保杯</div>
                <div className="text-xs md:text-sm text-green-700 mt-1">加倍享優惠</div>
              </div>
              <div className="bg-white rounded-xl p-2 md:p-4 shadow-sm">
                <div className="text-green-600 font-bold text-base md:text-lg">♻️ 環保理念</div>
                <div className="text-xs md:text-sm text-green-700 mt-1">一起愛護地球環境</div>
              </div>
            </div>
          </div>
          
          {/* 地圖按鈕 */}
          <div className="flex gap-4">
            <button
              onClick={() => setShowMap(!showMap)}
              className="flex-1 hidden bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              {showMap ? '隱藏地圖' : '查看地圖'}
            </button>
            
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              在 Google Maps 中開啟
            </a>
          </div>
          
          {/* 內嵌地圖 */}
          {showMap && (
            <div className="mt-6 aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src={getGoogleMapsUrl(branch.address)}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BranchModal;
