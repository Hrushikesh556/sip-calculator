import React from 'react';
import Calculator from '../components/Calculator';
import AdBanner from '../components/AdBanner';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Top Ad Banner */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 pt-4 sm:pt-6">
        <AdBanner type="leaderboard" />
      </div>

      {/* Calculator Section */}
      <Calculator />

      {/* SEO Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-8 lg:p-10">
          <article className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              What is SIP Calculator?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              A SIP (Systematic Investment Plan) Calculator is a financial tool that helps you estimate the potential returns on your mutual fund investments made through SIP. It uses the power of compound interest to project how your regular monthly investments can grow over time, helping you plan for your financial goals effectively.
            </p>

            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">
              Benefits of Using SIP Calculator
            </h3>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-2 text-sm sm:text-base">
              <li><strong>Easy Planning:</strong> Instantly see how much you need to invest monthly to reach your goals</li>
              <li><strong>Visual Representation:</strong> Charts and graphs help you understand growth patterns</li>
              <li><strong>Compare Scenarios:</strong> Test different investment amounts and durations</li>
              <li><strong>Informed Decisions:</strong> Make better investment choices based on projected returns</li>
              <li><strong>Goal Setting:</strong> Align your investments with life goals like retirement, education, or buying a home</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">
              How SIP Works
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              SIP allows you to invest a fixed amount regularly in mutual funds. The key benefits include:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-2 text-sm sm:text-base">
              <li><strong>Rupee Cost Averaging:</strong> Buy more units when prices are low, fewer when high</li>
              <li><strong>Power of Compounding:</strong> Your returns earn returns over time</li>
              <li><strong>Disciplined Investing:</strong> Automatic investments build financial discipline</li>
              <li><strong>Flexibility:</strong> Start with as little as ₹500/month</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">
              Understanding Step-Up SIP
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              Step-Up SIP (also called Top-Up SIP) is an advanced version where you increase your investment amount periodically, usually annually. For example, if you start with ₹10,000/month and opt for a 10% annual step-up, your SIP becomes ₹11,000 in the second year, ₹12,100 in the third year, and so on. This strategy helps you:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-2 text-sm sm:text-base">
              <li>Match investment growth with salary increments</li>
              <li>Combat inflation by investing more over time</li>
              <li>Build a significantly larger corpus than regular SIP</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">
              Lumpsum vs SIP Investment
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              While SIP is great for regular investors, lumpsum investment works well when you have a large amount to invest at once. Our Lumpsum Calculator helps you project returns on one-time investments. The choice between SIP and lumpsum depends on:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-2 text-sm sm:text-base">
              <li>Availability of funds (regular income vs windfall)</li>
              <li>Market conditions (lumpsum may benefit from low markets)</li>
              <li>Risk tolerance (SIP reduces timing risk)</li>
              <li>Investment horizon and goals</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">
              What is SWP (Systematic Withdrawal Plan)?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              SWP is essentially the reverse of SIP. Instead of investing regularly, you withdraw a fixed amount from your mutual fund investment periodically. This is particularly useful for:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 space-y-2 text-sm sm:text-base">
              <li><strong>Retirement Income:</strong> Create a regular pension-like income</li>
              <li><strong>Supplemental Income:</strong> Add to your monthly cash flow</li>
              <li><strong>Tax Efficiency:</strong> Only the gains portion is taxed, not the principal</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">
              How to Use Our Calculators
            </h3>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 space-y-2 text-sm sm:text-base">
              <li>Select the calculator type (SIP, Step-Up SIP, Lumpsum, or SWP)</li>
              <li>Enter your investment amount using the slider or input field</li>
              <li>Set your expected annual return rate</li>
              <li>Choose your investment time period</li>
              <li>View instant results with charts and yearly breakdown</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg mt-6 sm:mt-8">
              <h4 className="font-bold text-blue-800 text-base sm:text-lg mb-2">Pro Tip</h4>
              <p className="text-blue-700 text-sm sm:text-base">
                Use our Step-Up SIP calculator if you expect your income to increase over time. Even a 10% annual step-up can significantly boost your final corpus compared to a regular SIP!
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Bottom Ad Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <AdBanner type="horizontal" />
      </div>
    </div>
  );
};

export default Home;
