import React from 'react';
import { Link } from 'react-router-dom';

const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Disclaimer</h1>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg">
            Important information about using our calculators and content
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-8 lg:p-10">
          {/* Important Warning Box */}
          <div className="bg-red-50 border-l-4 border-red-500 p-4 sm:p-6 rounded-r-xl mb-6 sm:mb-8">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-red-800">Important Notice</h3>
                <p className="text-red-700 text-sm sm:text-base mt-1">
                  Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">1. No Financial Advice</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                The information and calculators provided on SIP Calculator India are for educational and informational purposes only. Nothing on this website should be construed as professional financial, investment, tax, or legal advice. The content is not intended to be a substitute for professional advice.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">2. Calculation Accuracy</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                While we strive to ensure that our calculators provide accurate results, we make no guarantees about the accuracy, completeness, or reliability of the calculations. The results are based on the inputs you provide and certain assumptions about constant rates of return.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-4">
                <p className="text-yellow-800 text-sm sm:text-base">
                  <strong>Note:</strong> Actual investment returns will vary based on market conditions and the specific mutual fund schemes you invest in. Past performance is not indicative of future results.
                </p>
              </div>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">3. Investment Risks</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                Investing in mutual funds involves various risks including but not limited to:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-2 text-sm sm:text-base">
                <li>Market risk - The value of investments can go down as well as up</li>
                <li>Interest rate risk - Changes in interest rates can affect fund values</li>
                <li>Credit risk - Risk of issuer defaulting on obligations</li>
                <li>Liquidity risk - Difficulty in selling investments at fair value</li>
                <li>Currency risk - For international investments</li>
                <li>Inflation risk - Returns may not keep pace with inflation</li>
              </ul>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">4. Not a Recommendation</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                The mention of any mutual fund, investment platform, or financial product on this website does not constitute a recommendation or endorsement. You should conduct your own research and consult with qualified financial advisors before making any investment decisions.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">5. Affiliate Disclosure</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                This website contains affiliate links to investment platforms such as Groww, Zerodha, Upstox, and Kuvera. We may earn a commission when you click on these links and sign up for their services. This does not affect the cost to you and helps us maintain this free service.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">6. Third-Party Content</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We are not responsible for the content, accuracy, or practices of any third-party websites linked from our site. Links to external sites are provided for convenience only and do not imply endorsement.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Under no circumstances shall SIP Calculator India, its owners, employees, or affiliates be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising from the use of this website or reliance on the information provided.
              </p>
            </section>

            <section className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">8. Professional Advice</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Before making any investment decisions, we strongly recommend that you:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-2 text-sm sm:text-base mt-3">
                <li>Consult with a SEBI-registered financial advisor</li>
                <li>Read all scheme-related documents including the Scheme Information Document (SID) and Key Information Memorandum (KIM)</li>
                <li>Understand your risk tolerance and investment horizon</li>
                <li>Consider your overall financial situation and goals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">9. Contact</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                If you have any questions about this disclaimer, please contact us at:
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

export default Disclaimer;
