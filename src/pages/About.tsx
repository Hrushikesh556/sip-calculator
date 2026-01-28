import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const features = [
    {
      icon: '📊',
      title: 'SIP Calculator',
      description: 'Calculate returns on your monthly SIP investments with accurate projections',
    },
    {
      icon: '📈',
      title: 'Step-Up SIP Calculator',
      description: 'Plan investments with annual increases for wealth building',
    },
    {
      icon: '💎',
      title: 'Lumpsum Calculator',
      description: 'Calculate growth of one-time investments over time',
    },
    {
      icon: '💸',
      title: 'SWP Calculator',
      description: 'Plan systematic withdrawals for retirement income planning',
    },
  ];

  const stats = [
    { value: '1M+', label: 'Calculations Done' },
    { value: '50K+', label: 'Monthly Users' },
    { value: '4.9★', label: 'User Rating' },
    { value: '100%', label: 'Free Forever' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About SIP Calculator India
          </h1>
          <p className="text-blue-100 text-sm sm:text-base lg:text-xl leading-relaxed max-w-2xl mx-auto">
            India's most trusted mutual fund calculator suite, helping millions make informed investment decisions
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Our Mission</h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            We believe that everyone deserves access to professional-grade financial planning tools. Our mission is to democratize investment planning by providing free, accurate, and easy-to-use calculators that help Indians make smarter financial decisions.
          </p>
        </div>

        {/* Features Grid */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
          Our Calculators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">✓</span>
              </div>
              <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-2">100% Accurate</h3>
              <p className="text-gray-600 text-sm sm:text-base">Mathematically precise calculations verified by financial experts</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-2">Instant Results</h3>
              <p className="text-gray-600 text-sm sm:text-base">Real-time calculations as you adjust your inputs</p>
            </div>
            <div className="text-center p-4 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">📱</span>
              </div>
              <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-2">Mobile Friendly</h3>
              <p className="text-gray-600 text-sm sm:text-base">Works perfectly on all devices - phone, tablet, or desktop</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-5 sm:p-6 lg:p-8">
          <h3 className="text-base sm:text-lg font-bold text-yellow-800 mb-2 sm:mb-3">Important Disclaimer</h3>
          <p className="text-yellow-700 text-sm sm:text-base leading-relaxed">
            The calculators provided on this website are for educational and informational purposes only. They do not constitute financial advice. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
            Ready to Plan Your Investments?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
            Start using our free calculators today and take control of your financial future
          </p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <span>Start Calculating</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
