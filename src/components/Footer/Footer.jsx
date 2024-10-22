import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white p-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      {/* Company Info */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold">Nature on Prescription</h1>
        <p className="text-gray-100 mt-1">
          Your trusted destination for natural healthcare solutions
        </p>
      </div>

      {/* Links Section */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
        {/* <a href="#" className="text-white hover:underline">Topics</a> */}
        <a href="#" className="text-white hover:underline">FAQ</a>
        <a href="#" className="text-white hover:underline">Disclaimer</a>
      </div>

      {/* Social Media Links */}
      <div className="text-center md:text-right">
        <h2 className="font-semibold">Follow Us</h2>
        <ul className="flex space-x-4 justify-center md:justify-end mt-2">
          <li>
            <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
