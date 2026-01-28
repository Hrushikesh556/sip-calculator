import React from 'react';
import { Link } from 'react-router-dom';
import AdBanner from '../components/AdBanner';

const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'Complete Guide to SIP Investment in 2024',
      excerpt: 'Learn everything about Systematic Investment Plans - how they work, benefits, and how to start your first SIP.',
      category: 'SIP',
      readTime: '8 min read',
      date: 'Jan 15, 2024',
      image: '📊',
    },
    {
      id: 2,
      title: 'Step-Up SIP: The Smart Way to Build Wealth',
      excerpt: 'Discover how increasing your SIP annually can help you build a significantly larger corpus for your financial goals.',
      category: 'Step-Up SIP',
      readTime: '6 min read',
      date: 'Jan 10, 2024',
      image: '📈',
    },
    {
      id: 3,
      title: 'Lumpsum vs SIP: Which is Better for You?',
      excerpt: 'A comprehensive comparison of lumpsum and SIP investments to help you make the right choice.',
      category: 'Investment',
      readTime: '7 min read',
      date: 'Jan 5, 2024',
      image: '⚖️',
    },
    {
      id: 4,
      title: 'SWP for Retirement: Create Your Pension',
      excerpt: 'How to use Systematic Withdrawal Plans to create a regular income stream during retirement.',
      category: 'SWP',
      readTime: '5 min read',
      date: 'Dec 28, 2023',
      image: '🏖️',
    },
    {
      id: 5,
      title: 'Best Mutual Funds for SIP in India 2024',
      excerpt: 'Top performing mutual funds across categories that are ideal for starting your SIP investment journey.',
      category: 'Mutual Funds',
      readTime: '10 min read',
      date: 'Dec 20, 2023',
      image: '🏆',
    },
    {
      id: 6,
      title: 'Power of Compounding: Why Start Early',
      excerpt: 'Understanding how compound interest works and why starting early can make a huge difference.',
      category: 'Education',
      readTime: '4 min read',
      date: 'Dec 15, 2023',
      image: '🚀',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Investment Blog</h1>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg">
            Learn about SIP, mutual funds, and smart investment strategies
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Featured Article */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 sm:p-10 lg:p-12 flex items-center justify-center">
              <span className="text-6xl sm:text-7xl lg:text-8xl">📊</span>
            </div>
            <div className="p-5 sm:p-6 lg:p-8">
              <span className="inline-block bg-blue-100 text-blue-600 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-3 sm:mb-4">
                Featured
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                Complete Guide to SIP Investment in 2024
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3">
                Learn everything about Systematic Investment Plans - how they work, benefits, tax implications, and step-by-step guide to start your first SIP investment.
              </p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                <span>📅 Jan 15, 2024</span>
                <span>⏱️ 8 min read</span>
              </div>
              <button className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-colors">
                <span>Read Article</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Ad Banner */}
        <div className="mb-8 sm:mb-12">
          <AdBanner type="leaderboard" />
        </div>

        {/* Articles Grid */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {articles.slice(1).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 sm:p-8 flex items-center justify-center group-hover:from-blue-50 group-hover:to-indigo-50 transition-colors">
                <span className="text-4xl sm:text-5xl">{article.image}</span>
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-1 rounded-full mb-2 sm:mb-3">
                  {article.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-10 sm:mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-center text-white">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
            Get weekly investment tips, market updates, and exclusive content delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg sm:rounded-xl text-gray-800 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-5 sm:px-6 py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
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

export default Blog;
