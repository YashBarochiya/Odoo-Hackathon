import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">About</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Our Mission</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">How It Works</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Impact</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Community</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Guidelines</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Events</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Ambassadors</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Safety</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Feedback</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white">Shipping Info</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <img className="h-8 w-auto" src="https://placehold.co/160x40?text=ReWear+Logo+White" alt="ReWear logo in white version" />
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-base text-gray-400">&copy; 2006 ReWear. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 