import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    // Initialize analytics and ads after consent
    initializeTracking();
  };

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  const initializeTracking = () => {
    // This is where you would initialize Google Analytics, AdSense, etc.
    console.log('Tracking initialized with user consent');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t-4 border-indigo-600 shadow-2xl md:bottom-4 md:left-4 md:right-4 md:rounded-2xl md:max-w-2xl md:mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">🍪 Cookie Consent</h3>
            <p className="text-sm text-gray-600 mt-1">
              We use cookies to enhance your browsing experience, serve personalized ads, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. 
              <Link to="/privacy-policy" className="text-indigo-600 hover:underline ml-1">
                Read our Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
          <button
            onClick={acceptEssential}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={acceptAll}
            className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-lg"
          >
            Accept All Cookies
          </button>
        </div>
        
        <div className="text-xs text-gray-500 border-t border-gray-100 pt-2">
          <span className="font-medium">Cookie Types:</span> Essential (site functionality), Analytics (Google Analytics), 
          Advertising (Google AdSense, Affiliate partners)
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
