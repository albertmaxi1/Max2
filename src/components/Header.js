import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header-bg-color shadow-lg py-4 px-6 md:px-12 sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between relative">
        <button
          className="md:hidden text-white hover:text-gray-200 focus:outline-none mr-4"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <Link to="/" className="flex items-baseline space-x-1 rounded-md p-2 hover:bg-blue-800 transition duration-300">
          <span className="text-3xl font-merriweather-bold text-white">Max</span>
          <span className="text-2xl font-inter-light text-mckinsey-light-gray">&nbsp;Ventures</span>
        </Link>
        <div className="hidden md:flex space-x-6 ml-auto">
          <Link to="/" className="text-mckinsey-light-gray hover:text-white font-medium transition duration-300 rounded-md p-2 hover:bg-blue-800">Home</Link>
          <Link to="/about" className="text-mckinsey-light-gray hover:text-white font-medium transition duration-300 rounded-md p-2 hover:bg-blue-800">About</Link>
          <Link to="/services" className="text-mckinsey-light-gray hover:text-white font-medium transition duration-300 rounded-md p-2 hover:bg-blue-800">Services</Link>
          <Link to="/contact" className="text-mckinsey-light-gray hover:text-white font-medium transition duration-300 rounded-md p-2 hover:bg-blue-800">Contact</Link>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-blue-900 shadow-lg z-50">
            <div className="flex flex-col items-center py-4 space-y-2">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg px-4 py-2">Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg px-4 py-2">About</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg px-4 py-2">Services</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg px-4 py-2">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;