"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Leaf,
  FlaskRound,
  Package,
  Zap,
  BookOpen,
  Sparkles,
  ChevronRight,
  X,
} from "lucide-react";
import Image from "next/image";

// Core Values Data
const coreValues = [
  {
    id: 1,
    icon: Leaf,
    title: "Ethical Sourcing",
    shortDesc: "Responsibly sourced, community-focused",
    fullDesc:
      "We prioritize responsibly sourced ingredients, such as organic and fair-trade materials, to minimize the impact on local communities and ecosystems. Every ingredient is traceable back to its origin.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    stats: "100% Traceable",
  },
  {
    id: 2,
    icon: FlaskRound,
    title: "Clean Formulations",
    shortDesc: "No harmful chemicals, ever",
    fullDesc:
      "Avoiding harmful chemicals like parabens, sulfates, and phthalates in skincare products protects both your skin and the environment. Our formulas are scientifically proven and naturally powerful.",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    stats: "Zero Toxins",
  },
  {
    id: 3,
    icon: Package,
    title: "Packaging Innovation",
    shortDesc: "Eco-friendly, refillable solutions",
    fullDesc:
      "Utilizing eco-friendly packaging materials, reducing plastic waste, and promoting recycling and refillable options significantly reduces environmental impact. We're committed to zero single-use plastics.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    stats: "Plastic-Free",
  },
  {
    id: 4,
    icon: Zap,
    title: "Renewable Energy",
    shortDesc: "Carbon-neutral production",
    fullDesc:
      "We embrace renewable energy sources and implement energy-efficient manufacturing processes to reduce carbon emissions. Our facilities are powered by 100% solar and wind energy.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    stats: "Carbon Neutral",
  },
  {
    id: 5,
    icon: BookOpen,
    title: "Education & Transparency",
    shortDesc: "Empowering conscious choices",
    fullDesc:
      "We educate consumers about sustainable skincare, provide transparent information about our products' environmental impact, and encourage conscious consumer choices at every step.",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80",
    stats: "Full Disclosure",
  },
  {
    id: 6,
    icon: Sparkles,
    title: "Plant-Based Innovation",
    shortDesc: "Nature-powered skincare science",
    fullDesc:
      "Our skincare products rely on plant-derived ingredients and waterless formulations instead of synthetic chemicals. We utilize upcycled ingredients and biodegradable packaging for minimal environmental harm.",
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
    stats: "100% Natural",
  },
];

export default function CoreValuesSection() {
  const [activeValueId, setActiveValueId] = useState<number | null>(1);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileDetailOpen, setMobileDetailOpen] = useState(false);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setMobileDetailOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleValueClick = (id: number) => {
    if (isMobile) {
      setActiveValueId(id);
      setMobileDetailOpen(true);
      // Scroll the clicked value into view
      setTimeout(() => {
        document.getElementById(`value-${id}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    } else {
      setActiveValueId(id);
    }
  };

  const activeValue = coreValues.find(v => v.id === activeValueId) || coreValues[0];

  return (
    <section className="relative py-12 md:py-16 lg:py-24 bg-lskin-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        
<motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-10 md:mb-16"
    >
      <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-lskin-primary mb-2">
        The LSKIN Way
      </h2>
      {/* <p className="text-lskin-primary/50 text-sm uppercase tracking-widest mt-2">
        Principles • Integrity • Sustainability
      </p> */}
    </motion.div>
        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 items-start">
          {/* Value Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-5 mb-8 lg:mb-0"
          >
            {coreValues.map((value, index) => (
              <motion.button
                key={value.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleValueClick(value.id)}
                className={`relative p-4 md:p-5 rounded-xl md:rounded-2xl text-left transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-lskin-primary/30 ${
                  activeValueId === value.id
                    ? "bg-lskin-primary text-lskin-bg shadow-lg"
                    : "bg-lskin-bg hover:bg-lskin-secondary/5 border border-lskin-primary/5"
                }`}
                aria-label={`View details about ${value.title}`}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div
                    className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-colors ${
                      activeValueId === value.id
                        ? "bg-lskin-secondary/30"
                        : "bg-lskin-secondary/10 group-hover:bg-lskin-secondary/20"
                    }`}
                  >
                    <value.icon
                      className={`w-5 h-5 md:w-6 md:h-6 ${
                        activeValueId === value.id
                          ? "text-lskin-bg"
                          : "text-lskin-primary"
                      }`}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-medium mb-1 text-sm md:text-base truncate ${
                        activeValueId === value.id
                          ? "text-lskin-bg"
                          : "text-lskin-primary"
                      }`}
                    >
                      {value.title}
                    </h3>

                    <p
                      className={`text-xs leading-relaxed line-clamp-2 ${
                        activeValueId === value.id
                          ? "text-lskin-bg/70"
                          : "text-lskin-primary/50"
                      }`}
                    >
                      {value.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Active Indicator */}
                {activeValueId === value.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute top-4 right-4"
                    aria-hidden="true"
                  >
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-lskin-secondary" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Desktop Detail Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeValue.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] md:aspect-[5/3] w-full overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={activeValue.image}
                      alt={activeValue.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      priority={activeValue.id === 1}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lskin-primary/40 via-transparent to-transparent" />
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-lskin-primary shadow-sm">
                      <activeValue.icon className="w-3 h-3 md:w-4 md:h-4 text-lskin-secondary shrink-0" />
                      <span className="truncate">{activeValue.stats}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-5 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-lskin-secondary/10 flex items-center justify-center shrink-0">
                      <activeValue.icon className="w-5 h-5 md:w-6 md:h-6 text-lskin-primary" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl md:text-2xl lg:text-3xl text-lskin-primary font-semibold mb-2">
                        {activeValue.title}
                      </h3>
                      <p className="text-lskin-primary/60 text-sm md:text-base">
                        {activeValue.shortDesc}
                      </p>
                    </div>
                  </div>

                  <p className="text-lskin-primary/70 leading-relaxed text-base md:text-lg">
                    {activeValue.fullDesc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile Layout - Accordion Style */}
        <div className="lg:hidden">
          <div className="space-y-4">
            {coreValues.map((value, index) => {
              const isActive = activeValueId === value.id;
              
              return (
                <div key={value.id} id={`value-${value.id}`} className="scroll-mt-4">
                  {/* Mobile Value Card - Clickable Header */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleValueClick(value.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-lskin-primary/30 ${
                      isActive
                        ? "bg-lskin-primary text-lskin-bg shadow-lg"
                        : "bg-lskin-bg hover:bg-lskin-bg border border-lskin-primary/5"
                    }`}
                    aria-expanded={isActive && mobileDetailOpen}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-lskin-bg/20"
                            : "bg-lskin-secondary/10 group-hover:bg-lskin-secondary/20"
                        }`}>
                          <value.icon className={`w-5 h-5 ${
                            isActive ? "text-lskin-bg" : "text-lskin-primary"
                          }`} />
                        </div>
                        
                        <div className="text-left">
                          <h3 className={`font-medium text-sm ${
                            isActive ? "text-lskin-bg" : "text-lskin-primary"
                          }`}>
                            {value.title}
                          </h3>
                          <p className={`text-xs ${
                            isActive ? "text-lskin-bg/80" : "text-lskin-primary/50"
                          }`}>
                            {value.shortDesc}
                          </p>
                        </div>
                      </div>
                      
                      <div className="shrink-0 ml-4">
                        <motion.div
                          animate={{ rotate: isActive && mobileDetailOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isActive
                              ? "bg-lskin-bg/20 text-lskin-bg"
                              : "bg-lskin-primary/5 text-lskin-primary"
                          }`}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.button>

                  {/* Mobile Expandable Detail Panel */}
                  <AnimatePresence>
                    {isActive && mobileDetailOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ 
                          opacity: 1, 
                          height: "auto",
                          marginTop: "1rem"
                        }}
                        exit={{ 
                          opacity: 0, 
                          height: 0,
                          marginTop: 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="bg-white border border-lskin-primary/10 rounded-xl p-4 shadow-sm">
                          {/* Image */}
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                            <div className="relative w-full h-full">
                              <Image
                                src={value.image}
                                alt={value.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-lskin-primary/40 via-transparent to-transparent" />
                            </div>
                            
                            {/* Stats Badge */}
                            <div className="absolute bottom-3 left-3">
                              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-lskin-primary shadow-sm">
                                <value.icon className="w-3 h-3 text-lskin-secondary" />
                                {value.stats}
                              </span>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div>
                            <div className="flex items-start gap-3 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-lskin-secondary/10 flex items-center justify-center shrink-0">
                                <value.icon className="w-4 h-4 text-lskin-primary" />
                              </div>
                              <div>
                                <h3 className="font-playfair text-lg text-lskin-primary font-semibold mb-1">
                                  {value.title}
                                </h3>
                                <p className="text-lskin-primary/60 text-sm">
                                  {value.shortDesc}
                                </p>
                              </div>
                            </div>
                            
                            <p className="text-lskin-primary/70 leading-relaxed text-sm">
                              {value.fullDesc}
                            </p>
                          </div>

                          {/* Close Button for Mobile */}
                          <div className="mt-4 pt-4 border-t border-lskin-primary/10">
                            <button
                              onClick={() => setMobileDetailOpen(false)}
                              className="flex items-center gap-2 text-xs text-lskin-primary/50 hover:text-lskin-primary transition-colors"
                            >
                              <X className="w-3 h-3" />
                              Close details
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-lskin-primary/60 mb-6">
            Interested in learning more about our sustainable practices?
          </p>
          <button className="inline-flex items-center gap-2 bg-lskin-primary text-lskin-bg px-6 py-3 rounded-full font-medium hover:bg-lskin-primary/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-lskin-primary/30">
            Download Sustainability Report
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div> */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-lskin-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-lskin-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
    </section>
  );
}