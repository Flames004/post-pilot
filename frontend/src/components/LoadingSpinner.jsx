import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">PostPilot</h2>
        <p className="text-gray-500">Loading your experience...</p>
      </div>
    </div>
  );
}
