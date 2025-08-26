import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";

function BranchCard({ branch, onClick, brandName }) {
  const handleSelectedBranch = () => {
    onClick(branch);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={handleSelectedBranch}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            {branch.storeName}
          </h3>
          <div className="bg-gray-50 rounded-full p-2 group-hover:bg-blue-50 transition-colors">
            <MapPin className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-600 leading-relaxed">
              {branch.address}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <p className="text-sm text-gray-600">{branch.time}</p>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <p className="text-sm text-gray-600">{branch.tele}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">營業中</span>
          </div>
          <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
            <span className="text-sm font-medium">查看詳情</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BranchCard;
