import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          
          .logo-text {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 1.5rem;
            background: linear-gradient(135deg, #059669, #0d9488);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .recycle-icon {
            width: 32px;
            height: 32px;
            transform: rotate(0deg);
            animation: gentle-spin 8s linear infinite;
          }

          @keyframes gentle-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .recycle-icon:hover {
            animation-duration: 2s;
          }
        `}
      </style>
      
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex items-center gap-2">
                  <div className="relative">
                    <svg className="recycle-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2L22 8H18V14H14V8H10L16 2Z" fill="#059669"/>
                      <path d="M30 16L24 22V18H18V14H24V10L30 16Z" fill="#0d9488"/>
                      <path d="M16 30L10 24H14V18H18V24H22L16 30Z" fill="#047857"/>
                      <path d="M2 16L8 10V14H14V18H8V22L2 16Z" fill="#065f46"/>
                      <circle cx="16" cy="16" r="3" fill="#10b981" opacity="0.3"/>
                    </svg>
                  </div>
                  <span className="logo-text">ReWear</span>
                </Link>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="border-emerald-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Home</Link>
              <Link to="/browse" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Browse</Link>
              <Link to="/my-items" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">My Items</Link>
              <Link to="/swaps" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Swaps</Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium">Sign In</button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header; 