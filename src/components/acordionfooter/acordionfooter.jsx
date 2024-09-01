import React from 'react';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h6 className="text-blue-500 mb-2">Library Links</h6>
            <ul>
              <li className="mb-2"><a href="#catalog" className="text-white hover:text-blue-500">Catalog</a></li>
              <li className="mb-2"><a href="#events" className="text-white hover:text-blue-500">Events</a></li>
              <li className="mb-2"><a href="#membership" className="text-white hover:text-blue-500">Membership</a></li>
              <li className="mb-2"><a href="#contact" className="text-white hover:text-blue-500">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-blue-500 mb-2">Resources</h6>
            <ul>
              <li className="mb-2"><a href="#ebooks" className="text-white hover:text-blue-500">eBooks</a></li>
              <li className="mb-2"><a href="#audiobooks" className="text-white hover:text-blue-500">Audiobooks</a></li>
              <li className="mb-2"><a href="#research" className="text-white hover:text-blue-500">Research</a></li>
              <li className="mb-2"><a href="#databases" className="text-white hover:text-blue-500">Databases</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-blue-500 mb-2">About Us</h6>
            <ul>
              <li className="mb-2"><a href="#about" className="text-white hover:text-blue-500">About the Library</a></li>
              <li className="mb-2"><a href="#team" className="text-white hover:text-blue-500">Our Team</a></li>
              <li className="mb-2"><a href="#policies" className="text-white hover:text-blue-500">Policies</a></li>
              <li className="mb-2"><a href="#support" className="text-white hover:text-blue-500">Support Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white text-center py-4 mt-8 flex flex-col items-center">
        <div className="mb-4">
          <a href="#facebook" className="mx-2 text-white hover:text-blue-500"><Facebook /></a>
          <a href="#twitter" className="mx-2 text-white hover:text-blue-500"><Twitter /></a>
          <a href="#linkedin" className="mx-2 text-white hover:text-blue-500"><LinkedIn /></a>
          <a href="#instagram" className="mx-2 text-white hover:text-blue-500"><Instagram /></a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} YourLibraryName | All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
