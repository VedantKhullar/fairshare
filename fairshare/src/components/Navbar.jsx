import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Fairshare
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">
              Dashboard
            </Link>
            <Link to="/group/1" className="text-gray-700 hover:text-indigo-600">
              Groups
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-indigo-600">
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2 space-y-2">
          <Link
            to="/"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/group/1"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Groups
          </Link>
          <Link
            to="/login"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
