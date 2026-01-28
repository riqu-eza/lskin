// components/ComingSoonCardLayout.jsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const ComingSoonCardLayout = () => {
  const backgroundImage = "/eyesclose.jpg";
  const logoImage = "/logo1.svg";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="LSKIN Background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      {/* Centered Card Layout */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className={`w-full max-w-md transition-all duration-1000 ${
          mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          
          {/* Card Container */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
            
            {/* Logo */}
            <div className="mb-8">
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src={logoImage}
                  alt="LSKIN Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-6">
              <div>
                <h1 className="text-4xl font-light text-white mb-2">
                  Coming Soon
                </h1>
                <div className="w-24 h-0.5 bg-white/40 mx-auto mb-4" />
                <p className="text-white/80 font-light tracking-wide">
                     Organic Skincare & Wellness
                </p>
              </div>

              {/* Progress indicator */}
              <div className="pt-6">
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full animate-pulse"
                    style={{
                      width: mounted ? '70%' : '0%',
                      transition: 'width 2s ease-in-out'
                    }}
                  />
                </div>
                <p className="text-xs text-white/50 mt-2">
                  Website under development
                </p>
              </div>
            </div>

            {/* Footer */}
            {/* <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-white/40">
                © LSKIN {new Date().getFullYear()}
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonCardLayout;