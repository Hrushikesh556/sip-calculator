import React, { useEffect } from 'react';

// Replace with your actual AdSense Publisher ID
const ADSENSE_CLIENT_ID = 'ca-pub-XXXXXXXXXXXXXXXX';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  style?: React.CSSProperties;
  responsive?: boolean;
  className?: string;
}

// Individual Ad Unit Component
export const AdUnit: React.FC<AdUnitProps> = ({
  slot,
  format = 'auto',
  style = { display: 'block' },
  responsive = true,
  className = '',
}) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className={`ad-container my-4 ${className}`}>
      <div className="text-xs text-gray-400 text-center mb-1">Advertisement</div>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};

// Horizontal Banner Ad (728x90 on desktop, responsive on mobile)
export const BannerAd: React.FC<{ slot?: string }> = ({ slot: _slot = '1234567890' }) => (
  <div className="w-full flex justify-center my-6">
    <div className="w-full max-w-4xl bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
      <div className="text-xs text-gray-500 mb-2">Advertisement</div>
      <div className="bg-white rounded py-8 px-4 flex items-center justify-center min-h-[90px]">
        <div className="text-gray-400">
          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-sm font-medium">Banner Ad (728x90)</span>
          <p className="text-xs mt-1">Ad Slot: Banner</p>
        </div>
      </div>
    </div>
  </div>
);

// Rectangle Ad (300x250) - High Revenue
export const RectangleAd: React.FC<{ slot?: string }> = ({ slot: _slot = '2345678901' }) => (
  <div className="flex justify-center my-6">
    <div className="w-[300px] bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-dashed border-indigo-300 rounded-lg p-3 text-center">
      <div className="text-xs text-indigo-500 mb-2">Advertisement</div>
      <div className="bg-white rounded py-12 px-4 flex items-center justify-center min-h-[250px]">
        <div className="text-indigo-400">
          <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm font-medium">Rectangle Ad</span>
          <p className="text-xs mt-1">300x250 (High CTR)</p>
        </div>
      </div>
    </div>
  </div>
);

// In-Article Ad (Native style)
export const InArticleAd: React.FC<{ slot?: string }> = ({ slot: _slot = '3456789012' }) => (
  <div className="my-8 mx-auto max-w-2xl">
    <div className="bg-gradient-to-r from-green-50 to-emerald-100 border border-green-200 rounded-xl p-4">
      <div className="text-xs text-green-600 mb-2 text-center">Sponsored Content</div>
      <div className="bg-white rounded-lg p-6 flex items-center gap-4">
        <div className="w-24 h-24 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-gray-700">In-Article Native Ad</div>
          <p className="text-xs text-gray-500 mt-1">High engagement native format that blends with content</p>
        </div>
      </div>
    </div>
  </div>
);

// Sidebar/Sticky Ad
export const SidebarAd: React.FC<{ slot?: string }> = ({ slot: _slot = '4567890123' }) => (
  <div className="sticky top-4">
    <div className="w-full max-w-[300px] bg-gradient-to-b from-purple-50 to-pink-100 border-2 border-dashed border-purple-300 rounded-lg p-3 text-center">
      <div className="text-xs text-purple-500 mb-2">Advertisement</div>
      <div className="bg-white rounded py-16 px-4 flex items-center justify-center min-h-[600px]">
        <div className="text-purple-400">
          <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-sm font-medium">Sidebar Ad</span>
          <p className="text-xs mt-1">300x600 (Sticky)</p>
        </div>
      </div>
    </div>
  </div>
);

// Multiplex Ad (Related content style)
export const MultiplexAd: React.FC<{ slot?: string }> = ({ slot: _slot = '5678901234' }) => (
  <div className="my-8 w-full">
    <div className="bg-gradient-to-r from-orange-50 to-amber-100 border border-orange-200 rounded-xl p-4">
      <div className="text-xs text-orange-600 mb-3 text-center">You May Also Like</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-lg p-3 text-center">
            <div className="w-full h-16 bg-orange-100 rounded mb-2 flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-xs text-gray-500">Sponsored {i}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Anchor/Sticky Bottom Ad (Mobile)
export const AnchorAd: React.FC<{ slot?: string }> = ({ slot: _slot = '6789012345' }) => (
  <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
    <div className="bg-white border-t border-gray-200 shadow-lg p-2">
      <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-100 rounded py-3 px-4">
        <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="text-sm text-cyan-700 font-medium">Mobile Anchor Ad (320x50)</span>
      </div>
    </div>
  </div>
);

// Interstitial placeholder (for page transitions)
export const InterstitialAd: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
    <div className="bg-white rounded-2xl p-6 max-w-md mx-4 text-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="w-full h-64 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-xl flex items-center justify-center mb-4">
        <div className="text-indigo-500">
          <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">Interstitial Ad</span>
        </div>
      </div>
      <button
        onClick={onClose}
        className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
      >
        Continue to Site
      </button>
      <p className="text-xs text-gray-400 mt-2">Ad closes in 5 seconds</p>
    </div>
  </div>
);

export default AdUnit;
