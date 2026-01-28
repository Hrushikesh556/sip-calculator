import React from 'react';

interface AdBannerProps {
  type: 'horizontal' | 'vertical' | 'square' | 'leaderboard' | 'mobile';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ type, className = '' }) => {
  const getAdStyles = () => {
    switch (type) {
      case 'horizontal':
        return 'h-20 sm:h-24 w-full';
      case 'leaderboard':
        return 'h-16 sm:h-20 md:h-24 w-full max-w-4xl mx-auto';
      case 'vertical':
        return 'hidden lg:block w-40 xl:w-48 h-[400px] xl:h-[600px]';
      case 'square':
        return 'w-full max-w-[300px] h-[200px] sm:h-[250px] mx-auto';
      case 'mobile':
        return 'h-16 sm:h-20 w-full sm:hidden';
      default:
        return 'h-20 sm:h-24 w-full';
    }
  };

  return (
    <div className={`bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 ${getAdStyles()} ${className}`}>
      <div className="text-center p-2">
        <p className="text-gray-500 text-xs sm:text-sm font-medium">Advertisement</p>
        <p className="text-gray-400 text-[10px] sm:text-xs mt-1">
          {type === 'mobile' ? 'Mobile Ad' : 
           type === 'vertical' ? 'Sidebar Ad' : 
           type === 'square' ? '300x250 Ad' :
           type === 'leaderboard' ? 'Leaderboard Ad' : 'Banner Ad'}
        </p>
      </div>
    </div>
  );
};

export default AdBanner;
