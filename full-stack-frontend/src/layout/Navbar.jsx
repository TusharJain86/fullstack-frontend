import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link className="text-xl font-bold" to="/">
          Full Stack Application
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-2xl">☰</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition"
            to="/adduser"
          >
            Add User
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 px-4 pb-3">
          <Link
            className="block border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition"
            to="/adduser"
            onClick={() => setIsOpen(false)}
          >
            Add User
          </Link>
        </div>
      )}
    </nav>
  );
}
