import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Privacy Policy</h1>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-8 lg:p-10">
          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">1. Introduction</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Welcome to SIP Calculator India ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of any information you provide while using our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">2. Information We Collect</h2>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-3">2.1 Information You Provide</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                When you use our contact form or subscribe to our newsletter, you may provide:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Name</li>
                <li>Email address</li>
                <li>Message content</li>
              </ul>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mt-4 sm:mt-6 mb-2 sm:mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>To provide and maintain our calculator services</li>
                <li>To respond to your inquiries and support requests</li>
                <li>To improve our website and user experience</li>
                <li>To send newsletters and updates (with your consent)</li>
                <li>To display relevant advertisements</li>
                <li>To analyze website traffic and usage patterns</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Remember your preferences</li>
                <li>Analyze website traffic (Google Analytics)</li>
                <li>Display personalized advertisements (Google AdSense)</li>
                <li>Track affiliate referrals</li>
              </ul>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4">
                You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">5. Third-Party Services</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                We use the following third-party services:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li><strong>Google Analytics:</strong> For website traffic analysis</li>
                <li><strong>Google AdSense:</strong> For displaying advertisements</li>
                <li><strong>Affiliate Partners:</strong> Groww, Zerodha, Upstox, Kuvera for investment services</li>
              </ul>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4">
                These services may collect information according to their own privacy policies.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">6. Data Security</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We implement appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your data.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">7. Your Rights</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">You have the right to:</p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Disable cookies in your browser</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">8. Children's Privacy</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">10. Contact Us</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-blue-600 font-semibold mt-2 text-sm sm:text-base">
                Email: <a href="mailto:sipcalculator@info.com" className="hover:underline">sipcalculator@info.com</a>
              </p>
            </section>
          </div>

          {/* Back Button */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Calculator</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
