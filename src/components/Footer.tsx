import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">₹</span>
              </div>
              <span className="font-bold text-lg sm:text-xl">SIP Calculator</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              India's most trusted mutual fund calculator suite. Calculate SIP, Lumpsum, Step-Up SIP & SWP returns instantly.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">Calculators</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/?tab=sip" className="text-gray-400 hover:text-white text-sm transition-colors">SIP Calculator</Link></li>
              <li><Link to="/?tab=stepup" className="text-gray-400 hover:text-white text-sm transition-colors">Step-Up SIP</Link></li>
              <li><Link to="/?tab=lumpsum" className="text-gray-400 hover:text-white text-sm transition-colors">Lumpsum Calculator</Link></li>
              <li><Link to="/?tab=swp" className="text-gray-400 hover:text-white text-sm transition-colors">SWP Calculator</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Partner Platforms */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-800">
          <h3 className="font-semibold text-center text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Start Investing with Trusted Partners</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <a href="https://groww.in" target="_blank" rel="noopener noreferrer sponsored" className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-800 hover:bg-green-600 rounded-full text-xs sm:text-sm font-medium transition-colors">
              Groww
            </a>
            <a href="https://zerodha.com" target="_blank" rel="noopener noreferrer sponsored" className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-800 hover:bg-blue-600 rounded-full text-xs sm:text-sm font-medium transition-colors">
              Zerodha
            </a>
            <a href="https://upstox.com" target="_blank" rel="noopener noreferrer sponsored" className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-800 hover:bg-purple-600 rounded-full text-xs sm:text-sm font-medium transition-colors">
              Upstox
            </a>
            <a href="https://kuvera.in" target="_blank" rel="noopener noreferrer sponsored" className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-800 hover:bg-indigo-600 rounded-full text-xs sm:text-sm font-medium transition-colors">
              Kuvera
            </a>
            <a href="https://coin.zerodha.com" target="_blank" rel="noopener noreferrer sponsored" className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gray-800 hover:bg-orange-600 rounded-full text-xs sm:text-sm font-medium transition-colors">
              Coin
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} SIP Calculator India. All rights reserved.
            </p>
            <p className="text-gray-600 text-[10px] sm:text-xs text-center sm:text-right max-w-md">
              Disclaimer: This calculator is for educational purposes only. Investment in mutual funds is subject to market risks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
