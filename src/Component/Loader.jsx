import React from 'react';

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        className="w-16 h-16 border-8 border-gray-200 border-t-blue-500 rounded-full animate-spin"
      ></div>
      <div className="mt-4 text-lg font-medium text-gray-700">Loading...</div>
    </div>
  );
}
