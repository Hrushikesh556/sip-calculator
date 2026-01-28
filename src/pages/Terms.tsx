import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Terms and Conditions</h1>
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
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                By accessing and using SIP Calculator India ("the Website"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">2. Description of Service</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                SIP Calculator India provides free online calculators for mutual fund investments including SIP Calculator, Step-Up SIP Calculator, Lumpsum Calculator, and SWP Calculator. These tools are provided for educational and informational purposes only.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">3. No Financial Advice</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 rounded-r-lg">
                <p className="text-yellow-800 text-sm sm:text-base leading-relaxed">
                  <strong>Important:</strong> The calculations and information provided on this website do not constitute financial, investment, tax, or legal advice. Always consult with a qualified financial advisor before making investment decisions.
                </p>
              </div>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">4. Accuracy of Calculations</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                While we strive to provide accurate calculations, we make no warranties or representations about the accuracy, reliability, or completeness of the results. The calculations are based on the inputs you provide and assumed constant rates of return, which may not reflect actual market conditions.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">5. Investment Risks</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-3 sm:p-4 rounded-r-lg">
                <p className="text-red-800 text-sm sm:text-base leading-relaxed">
                  <strong>Warning:</strong> Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not indicative of future results. The value of investments can go down as well as up.
                </p>
              </div>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">6. User Responsibilities</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">You agree to:</p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li>Use the website only for lawful purposes</li>
                <li>Not attempt to hack, disrupt, or damage the website</li>
                <li>Provide accurate information when using our contact forms</li>
                <li>Not use automated systems to access the website</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">7. Intellectual Property</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                All content on this website, including text, graphics, logos, and software, is the property of SIP Calculator India and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">8. Third-Party Links and Affiliates</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our website contains links to third-party websites including affiliate partners (Groww, Zerodha, Upstox, Kuvera). We may earn commissions from these partnerships. We are not responsible for the content or practices of these external sites.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">9. Advertisements</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                This website displays advertisements through Google AdSense and other advertising networks. The presence of advertisements does not imply endorsement of the advertised products or services.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To the fullest extent permitted by law, SIP Calculator India shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of the website or reliance on the calculations provided.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">11. Indemnification</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                You agree to indemnify and hold harmless SIP Calculator India from any claims, damages, or expenses arising from your use of the website or violation of these terms.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">12. Modifications to Terms</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">13. Governing Law</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">14. Contact Information</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                For any questions regarding these Terms and Conditions, please contact us at:
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

export default Terms;
