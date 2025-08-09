import React from "react";

export default function IdeaCard({ content, hashtags = [] }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 mb-4 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
      <div className="mb-4">
        <div className="flex items-start gap-3">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 shrink-0">
            <span className="text-white text-sm">💡</span>
          </div>
          <p className="text-gray-800 text-lg leading-relaxed flex-1">{content}</p>
        </div>
      </div>
      
      {hashtags && hashtags.length > 0 && (
        <div className="border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-600 text-sm font-medium">🏷️ Hashtags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
