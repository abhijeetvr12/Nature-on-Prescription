import React, { useState } from 'react';
import image from './../image/logo-removebg-preview.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling mobile menu

  return (
    <nav className="bg-yellow-50 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img 
            src={image} 
            alt="Logo" 
            className="w-13 h-14"
          />
          <div>
            <h1 className="text-green-700 font-bold text-xl">Nature On Prescription</h1>
            <p className="text-green-600 text-sm">Empowering wellness through nature</p>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>

        {/* Menu for larger screens */}
        <ul className={`md:flex space-x-8 text-gray-700 font-medium hidden`}>
          <li><Link to="/" className="hover:text-green-700">HOME</Link></li>
          <li><Link to="/about" className="hover:text-green-700">ABOUT</Link></li>
          <li><Link to="/specialities" className="hover:text-green-700">SPECIALITIES</Link></li>
          <li><Link to="/what-we-treat" className="hover:text-green-700">WHAT WE TREAT</Link></li>
          <li><Link to="/blog" className="hover:text-green-700">BLOGS</Link></li>
          <li><Link to="/contact-us" className="hover:text-green-700">CONTACT US</Link></li>
        </ul>

        {/* Social Media Icons for larger screens */}
        <div className="md:flex space-x-4 text-gray-700 hidden">
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fas fa-times"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      {/* Mobile Menu (visible on small screens) */}
      {isOpen && (
        <div className="md:hidden bg-yellow-50">
          <ul className="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-green-700">HOME</Link></li>
            <li><Link to="/about" className="hover:text-green-700">ABOUT</Link></li>
            <li><Link to="/specialities" className="hover:text-green-700">SPECIALITIES</Link></li>
            <li><Link to="/what-we-treat" className="hover:text-green-700">WHAT WE TREAT</Link></li>
            <li><Link to="/blog" className="hover:text-green-700">BLOGS</Link></li>
            <li><Link to="/contact-us" className="hover:text-green-700">CONTACT US</Link></li>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fas fa-times"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
