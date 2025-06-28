'use client';

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLaunch: () => void;
}

const LoadingScreen = ({ onLaunch }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo/Name */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-white">JD</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
            John Doe
          </h1>
          <p className="text-xl text-blue-200">
            Full Stack Developer & Creative Designer
          </p>
        </div>

        {/* Loading Animation */}
        {isLoading ? (
          <div className="space-y-4">
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <p className="text-blue-200 text-lg">Loading portfolio...</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="w-16 h-16 mx-auto border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-blue-200 text-lg mb-8">Ready to explore!</p>
            <button
              onClick={onLaunch}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Launch Portfolio
            </button>
          </div>
        )}

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border border-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border border-indigo-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen; 