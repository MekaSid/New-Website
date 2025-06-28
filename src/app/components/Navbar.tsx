'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-black hover:text-gray-600 transition-colors duration-200">
                SM
              </Link>
            </div>

            {/* Hamburger menu button - always visible */}
            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 flex flex-col justify-center items-center group hover:bg-gray-100/50 rounded-lg transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {/* Hamburger lines */}
                <span 
                  className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out ${
                    isMenuOpen
                      ? 'rotate-45 translate-y-1.5' 
                      : 'group-hover:scale-110'
                  }`}
                />
                <span 
                  className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out mt-1.5 ${
                    isMenuOpen 
                      ? 'opacity-0 -translate-x-3' 
                      : 'group-hover:scale-110'
                  }`}
                />
                <span 
                  className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300 ease-in-out mt-1.5 ${
                    isMenuOpen 
                      ? '-rotate-45 -translate-y-1.5' 
                      : 'group-hover:scale-110'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Side Navigation Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-black">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 p-6">
            <nav className="space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleMenuClick}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium transform block ${
                    pathname === item.href
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                  } ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' 
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">Connect with me</p>
              <div className="flex justify-center space-x-4">
                {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                  <button
                    key={platform}
                    className="w-10 h-10 bg-gray-200 hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">{platform[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;