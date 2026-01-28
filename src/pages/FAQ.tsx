import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('all');

  const faqs: FAQItem[] = [
    {
      category: 'sip',
      question: 'What is SIP (Systematic Investment Plan)?',
      answer: 'SIP is a method of investing a fixed amount regularly in mutual funds. It allows you to invest small amounts periodically (monthly, quarterly) instead of making a lump sum investment. SIP helps in rupee cost averaging and building wealth over time through the power of compounding.',
    },
    {
      category: 'sip',
      question: 'What is the minimum amount required to start a SIP?',
      answer: 'Most mutual funds in India allow you to start a SIP with as little as ₹500 per month. Some funds may have higher minimums of ₹1,000 or ₹5,000. Our calculator supports calculations starting from ₹500.',
    },
    {
      category: 'sip',
      question: 'How is SIP return calculated?',
      answer: 'SIP returns are calculated using the formula: M = P × [((1 + r)^n − 1) / r] × (1 + r), where P is the monthly investment, r is the monthly rate of return (annual rate/12/100), and n is the total number of months. This accounts for compounding on each monthly installment.',
    },
    {
      category: 'stepup',
      question: 'What is Step-Up SIP?',
      answer: 'Step-Up SIP (also called Top-Up SIP) is a variant where you increase your SIP amount periodically, usually annually. For example, if you start with ₹10,000/month with a 10% annual step-up, your SIP will become ₹11,000 in the second year, ₹12,100 in the third year, and so on. This helps you increase investments as your income grows.',
    },
    {
      category: 'stepup',
      question: 'Why should I consider Step-Up SIP?',
      answer: 'Step-Up SIP helps you: 1) Match your investments with salary increments, 2) Beat inflation by increasing contributions, 3) Build a significantly larger corpus compared to regular SIP, 4) Start small and gradually increase your investment capacity.',
    },
    {
      category: 'lumpsum',
      question: 'What is Lumpsum investment?',
      answer: 'Lumpsum investment means investing a large amount of money at once in a mutual fund, as opposed to spreading it over time through SIP. This is suitable when you have a windfall like bonus, inheritance, or sale proceeds and want to invest it immediately.',
    },
    {
      category: 'lumpsum',
      question: 'SIP vs Lumpsum - Which is better?',
      answer: 'Both have their advantages. SIP is better for: regular income earners, risk-averse investors, and volatile markets (rupee cost averaging). Lumpsum is better when: you have a large amount to invest, markets are at low levels, and for long-term goals. A combination of both often works best.',
    },
    {
      category: 'swp',
      question: 'What is SWP (Systematic Withdrawal Plan)?',
      answer: 'SWP is the opposite of SIP. Instead of investing regularly, you withdraw a fixed amount regularly from your mutual fund investment. It\'s popular among retirees who want regular income from their investments while keeping the remaining amount invested for growth.',
    },
    {
      category: 'swp',
      question: 'How long will my SWP last?',
      answer: 'The duration depends on: 1) Your initial investment, 2) Monthly withdrawal amount, 3) Expected returns. If withdrawals exceed returns, your corpus will eventually deplete. Our SWP calculator shows exactly how long your money will last and alerts you if the corpus gets exhausted.',
    },
    {
      category: 'general',
      question: 'Are these calculations accurate?',
      answer: 'Our calculators use standard financial formulas and provide mathematically accurate results based on your inputs. However, actual returns may vary as they depend on market performance. The expected return rate you enter is an assumption - actual mutual fund returns fluctuate and are not guaranteed.',
    },
    {
      category: 'general',
      question: 'What return rate should I assume?',
      answer: 'Historical data suggests: Equity funds: 10-15% p.a., Hybrid funds: 8-12% p.a., Debt funds: 6-8% p.a. However, past performance doesn\'t guarantee future returns. For conservative planning, use lower estimates. Always consult a financial advisor for personalized advice.',
    },
    {
      category: 'general',
      question: 'Is this website free to use?',
      answer: 'Yes, all our calculators are 100% free to use. We don\'t charge any fees. The website is supported by advertisements and affiliate partnerships with investment platforms.',
    },
    {
      category: 'general',
      question: 'Do you store my calculation data?',
      answer: 'No, we don\'t store any calculation data on our servers. All calculations happen in your browser. We may collect anonymous analytics data to improve our service, as described in our Privacy Policy.',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'sip', label: 'SIP' },
    { id: 'stepup', label: 'Step-Up' },
    { id: 'lumpsum', label: 'Lumpsum' },
    { id: 'swp', label: 'SWP' },
    { id: 'general', label: 'General' },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg">
            Find answers to common questions about SIP, mutual funds, and our calculators
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(null);
              }}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-3 sm:mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-10 sm:mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-center">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
            Can't find the answer you're looking for? Feel free to reach out to us.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-colors"
          >
            <span>Contact Us</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Back Button */}
        <div className="mt-8 sm:mt-12">
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
  );
};

export default FAQ;
