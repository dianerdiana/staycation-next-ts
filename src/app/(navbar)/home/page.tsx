import React from 'react';

export default function Page() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-36 flex justify-between items-center">
        {/* Brand/logo */}
        <div>
          <a href="#" className="text-white font-bold text-xl">
            Your Brand
          </a>
        </div>
        {/* Navigation links */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Browse By
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Stories
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Agent
          </a>
        </div>
      </div>
    </nav>
  );
}
