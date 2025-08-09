import React from "react";

export default function IdeaCard({ content, hashtags = [] }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <p className="text-gray-800 mb-2">{content}</p>
      <div className="flex flex-wrap gap-2">
        {hashtags && hashtags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
