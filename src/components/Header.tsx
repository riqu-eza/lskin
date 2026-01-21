"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-lskin-bg/95 backdrop-blur-sm border-b border-lskin-secondary/20 my-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex justify-between items-center ">
          {/* Logo - Using SVG as Image */}
          <Link
            href="/"
            className="flex items-center group "
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Logo Image Container */}
            <div className="relative ">
              {/* If logo1.svg contains the full logo (including "LSKIN" text) */}
              <div className="relative w-48 h-20 md:w-96 md:h-24 ">
                {/* Option 1: Using Next.js Image component (optimized) */}
                <Image
                  src="/logo0.svg"
                  alt="LSKIN - Premium Organic Skincare"
                  layout="fill"
                  className="object-contain w-full h-full"
                  priority
                />

                {/* Option 2: Using img tag (if SVG has styling issues with Next Image) */}
                {/* <img
                  src="/logo1.svg"
                  alt="LSKIN - Premium Organic Skincare"
                  className="w-full h-full object-contain"
                /> */}

                {/* Fallback: If SVG isn't working yet, show structured logo */}
                <div className="flex items-center space-x-3">
                  {/* Logo Mark */}
                  {/* <div className="w-10 h-10 bg-gradient-to-br from-lskin-primary to-lskin-secondary rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white font-playfair text-xl font-bold">L</span>
                  </div> */}

                  {/* Brand Name & Tagline */}
                  {/* <div className="flex flex-col">
                    <span className="font-playfair text-2xl font-bold text-lskin-primary leading-none">
                      LSKIN
                    </span>
                    <span className="text-xs text-lskin-secondary font-medium tracking-wider mt-0.5">
                      SKINCARE ESSENTIALS
                    </span>
                  </div> */}
                </div>
              </div>

              {/* Hover Effect Indicator */}
              {/* <div className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 bg-lskin-primary/5 transition-opacity duration-300 pointer-events-none"></div> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-lskin-text hover:text-lskin-secondary font-medium transition-colors relative py-2"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  {item.name}
                </span>
              </Link>
            ))}

            {/* Action Buttons */}
            {/* <div className="flex items-center space-x-4 ml-4">
              <button className="btn-primary px-5 py-2 text-sm font-semibold rounded-full bg-lskin-primary hover:bg-lskin-secondary transition-all duration-300 shadow-sm hover:shadow">
                Shop Now
              </button>

              <div className="flex items-center space-x-3 border-l border-lskin-secondary/20 pl-4">
                <button className="text-lskin-text hover:text-lskin-primary transition-colors">
                  <i className="fas fa-search text-lg"></i>
                </button>
                <button className="text-lskin-text hover:text-lskin-primary transition-colors relative">
                  <i className="fas fa-shopping-bag text-lg"></i>
                  <span className="absolute -top-2 -right-2 bg-lskin-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    2
                  </span>
                </button>
              </div>
            </div> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-lskin-primary hover:text-lskin-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <span
                className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
  text-lskin-text
  font-medium
  py-3 px-4
  rounded-lg
  border-b-2 border-transparent
  hover:text-lskin-secondary
  hover:border-b-lskin-secondary
  hover:bg-lskin-secondary/5
  
  transition-all duration-200
"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Actions */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
