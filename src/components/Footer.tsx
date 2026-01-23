// components/FooterMinimalistCustomLogo.jsx (with logo color handling)
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FooterMinimalistCustomLogo = () => {
  return (
    <footer className="bg-[#26402A] text-[#F5F7DE]">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Centered Logo */}
        <div className="flex flex-col items-center mb-12">
          {/* If your SVG is monochrome and needs to be light */}
          <div className="relative w-32 h-32 mb-2">
            {/* Method 1: Use CSS filter to make dark logo light */}
            <div className="relative w-full h-full filter brightness-0 invert">
              <Image
                src="/logo2.svg"
                alt="LSKIN Logo"
                fill
                className="object-contain"
                sizes="128px"
                priority
              />
            </div>
            
            {/* Method 2: If your SVG has transparent background */}
            {/*
            <div className="relative w-full h-full">
              <Image
                src="/logo2.svg"
                alt="LSKIN Logo"
                fill
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
                sizes="128px"
                priority
              />
            </div>
            */}
          </div>
          
          {/* Tagline */}
          <p className="text-sm text-[#F5F7DE]/70 text-center max-w-md mt-2 font-montserrat">
            Premium Organic Skincare
          </p>
        </div>

        {/* Links section */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {['Shop', 'About', 'Ingredients', 'Sustainability', 'Contact'].map((item) => (
            <Link 
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm text-[#F5F7DE]/70 hover:text-[#F5F7DE] transition-colors duration-300 font-montserrat px-3 py-1 hover:bg-[#F5F7DE]/10 rounded-full"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#F5F7DE]/30 to-transparent mx-auto"></div>
        </div>

        {/* Copyright and tags */}
        <div className="text-center space-y-4">
          <div className="text-xs text-[#F5F7DE]/70 font-montserrat">
            © {new Date().getFullYear()} LSKIN
          </div>
          <div className="text-xs text-[#F5F7DE]/50 font-montserrat flex flex-wrap justify-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5F7DE]/30"></span>
              Vegan
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5F7DE]/30"></span>
              Cruelty-Free
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5F7DE]/30"></span>
              Sustainable
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMinimalistCustomLogo;