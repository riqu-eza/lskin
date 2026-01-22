"use client";

import Image from "next/image";

const HeroSectionOrganic = () => {
  return (
    <section className="min-h-[85vh] sm:h-[75vh] lg:h-[72vh] flex items-center bg-gradient-to-b from-lskin-bg/40 via-white to-lskin-bg/30 relative overflow-hidden">
      {/* Background organic blobs */}
      <div className="absolute top-0 -left-40 w-80 h-80 rounded-full bg-lskin-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 -right-40 w-80 h-80 rounded-full bg-lskin-secondary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
        <div className="h-full flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-6">
          {/* Image - Left Side */}
          <div className="flex-1 h-full flex items-center justify-center order-1 lg:order-1">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto">
              {/* Elegant frame */}
              <div className="relative group">
                {/* Main image container */}
                <div className="relative aspect-square rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg lg:shadow-xl">
                  <Image
                    src="/ladiespotrait.jpg"
                    alt="LSKIN - Mindful organic skincare community"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-lskin-secondary/5 mix-blend-soft-light"></div>
                </div>
              </div>
              
              {/* Image caption - Now optional and properly separated */}
              <div className="mt-4 sm:mt-6 text-center">
                <div className="relative inline-block px-8 sm:px-10">
                  {/* Decorative border elements */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-px sm:w-8 bg-gradient-to-r from-lskin-primary/30 to-transparent"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-px sm:w-8 bg-gradient-to-l from-lskin-primary/30 to-transparent"></div>
                  
                  <p className="font-playfair text-sm sm:text-base md:text-lg text-lskin-primary font-semibold italic tracking-wide leading-relaxed">
                    In harmony with nature, we find our purest form
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Message - Right Side */}
          <div className="flex-1 h-full flex items-center justify-center order-2 lg:order-2">
            <div className="w-full max-w-full sm:max-w-xl lg:max-w-2xl px-4 sm:px-6 lg:px-0">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
                {/* Brand typography */}
                <div className="relative">
                  {/* Decorative accent line */}
                  <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-lskin-secondary to-lskin-primary/30 mb-4 sm:mb-6 mx-auto lg:mx-0"></div>
                  
                  {/* Main brand name */}
                  <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-lskin-primary leading-[0.9] tracking-tight">
                    LSKIN
                    <span className="block text-sm sm:text-base lg:text-lg xl:text-xl text-lskin-secondary/70 font-normal font-montserrat tracking-wider sm:tracking-widest mt-2 sm:mt-3 lg:mt-4">
                      ORGANIC WELLNESS
                    </span>
                  </h1>
                </div>

                {/* Core message */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="lg:pl-4 lg:border-l-2 lg:border-lskin-secondary/30">
                    <p className="text-lg sm:text-xl lg:text-2xl text-lskin-text font-light leading-relaxed">
                      Where conscious living meets organic skincare
                    </p>
                  </div>

                  <p className="text-lskin-text/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                    Welcome to a community dedicated to mindful wellness. 
                    We believe in skincare that honors both your skin and our planet, 
                    crafted with intention and care.
                  </p>
                </div>

                {/* Subtle interactive indicator */}
                <div className="flex items-center space-x-3 pt-4 sm:pt-6 justify-center lg:justify-start">
                  <div className="flex space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-lskin-primary/40 animate-pulse"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-lskin-secondary/40 animate-pulse animation-delay-300"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-lskin-primary/40 animate-pulse animation-delay-600"></div>
                  </div>
                  <span className="text-xs text-lskin-text/40 font-medium tracking-wider">
                    WELCOME
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
};

export default HeroSectionOrganic;