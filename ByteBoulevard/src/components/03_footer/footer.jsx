import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">ByteBoulevard</h3>
            <p className="text-gray-400 text-center md:text-left">Your one-stop shop for all tech accessories.</p>
          </div>

          {/* Categories */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#" className="text-gray-400 hover:text-white">Phone Cases</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Screen Guards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Chargers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Accessories</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-center md:text-left text-gray-400">
              <li>Email: info@byteboulevard.com</li>
              <li>Phone: +91 123-456-7890</li>
              <li>Location: Mumbai, India</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ByteBoulevard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;