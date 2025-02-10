import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (

    <footer className="bg-black py-12">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 text-white">
        
      
        <div className="flex justify-center space-x-8 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-4xl cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-4xl cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-4xl cursor-pointer transition duration-300 transform hover:scale-110 hover:text-pink-500" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-4xl cursor-pointer transition duration-300 transform hover:scale-110 hover:text-blue-700" />
          </a>
        </div>

  
        <div className="flex justify-center mb-6">
          <hr className="border-t border-white w-1/4 shadow-lg" />
        </div>

        
        <div className="flex justify-center mt-6 text-sm">
          <p>&copy; 2025 Himanshi Gaire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
