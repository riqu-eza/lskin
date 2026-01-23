"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Recycle, Leaf, Package, ChevronRight, Sparkles, Target } from 'lucide-react';
import Image from 'next/image';

const innovations = [
  {
    id: 1,
    number: "01",
    icon: Droplets,
    title: "Waterless Formulations",
    highlight: "85% Less Water",
    description: "Our concentrated formulas require little to no water, reducing strain on water resources and eliminating the need for harmful preservatives.",
    fullDescription: "Revolutionary concentrated formulas that eliminate water from production, conserving vital resources while creating more effective, preservative-free skincare. Our technology reduces water usage by 98% compared to traditional formulations.",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80",
    stats: ["98% Water Reduction", "Zero Preservatives", "Higher Potency"],
    color: "from-blue-50 to-cyan-50",
    impact: "Saves 2M+ liters annually"
  },
  {
    id: 2,
    number: "02",
    icon: Recycle,
    title: "Upcycled Ingredients",
    highlight: "Zero Waste",
    description: "We transform byproducts from other industries into powerful skincare actives, creating value from waste.",
    fullDescription: "Circular economy approach that transforms agricultural and food industry byproducts into high-performance skincare ingredients. We partner with local farms to repurpose what would otherwise be discarded.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
    stats: ["30% Upcycled Content", "Zero Waste Sourcing", "Circular Economy"],
    color: "from-green-50 to-emerald-50",
    impact: "Repurposes 5+ tons of waste"
  },
  {
    id: 3,
    number: "03",
    icon: Leaf,
    title: "100% Plant-Based",
    highlight: "No Synthetics",
    description: "Every ingredient is plant-derived, never synthetic, delivering results without environmental harm.",
    fullDescription: "Complete elimination of synthetic chemicals through 100% plant-derived formulations. We use advanced extraction methods to preserve botanical efficacy while maintaining sustainability standards.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    stats: ["100% Natural", "No Synthetics", "Clinically Proven"],
    color: "from-lime-50 to-green-50",
    impact: "Eliminates 150+ synthetic chemicals"
  },
  {
    id: 4,
    number: "04",
    icon: Package,
    title: "Biodegradable Packaging",
    highlight: "Plastic-Free",
    description: "From plant-based containers to compostable materials, our packaging returns to earth in 90 days.",
    fullDescription: "Complete packaging ecosystem that decomposes within 90 days, leaving no microplastics. Our refill systems and take-back programs create true circularity in beauty packaging.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    stats: ["90-Day Decomposition", "100% Plastic-Free", "Closed Loop System"],
    color: "from-amber-50 to-orange-50",
    impact: "Eliminates 50K+ plastic units"
  }
];

export default function DifferentiationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const activeInnovation = innovations[activeIndex];

  const handleMobileToggle = (index: number) => {
    setMobileExpanded(mobileExpanded === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-lskin-primary/30"></div>
            <Target className="w-4 h-4 text-lskin-primary" />
            <span className="text-xs tracking-widest uppercase text-lskin-primary/60">
              Industry Innovation
            </span>
            <div className="w-8 h-px bg-lskin-primary/30"></div>
          </div>
          
          {/* <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-lskin-primary font-light mb-4 leading-tight">
            Where LSKIN<br className="hidden md:block" /> Leads the Way
          </h2> */}
          
          <p className="text-lskin-primary/60 text-lg md:text-xl max-w-2xl mx-auto">
            Four innovations that define our commitment to sustainable skincare excellence.
          </p>
        </motion.div>

        {/* Desktop Layout - Two Columns */}
        <div className="hidden lg:block">
          <div className="flex gap-12">
            {/* Left: Navigation */}
            <div className="w-2/5 space-y-2">
              {innovations.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                    activeIndex === index 
                      ? 'bg-gradient-to-r from-lskin-primary to-lskin-primary/90' 
                      : 'hover:bg-lskin-bg border border-lskin-primary/5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`font-playfair text-2xl transition-colors ${
                      activeIndex === index ? 'text-lskin-bg' : 'text-lskin-primary/40'
                    }`}>
                      {item.number}
                    </span>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h3 className={`font-medium text-lg transition-colors ${
                          activeIndex === index ? 'text-lskin-bg' : 'text-lskin-primary'
                        }`}>
                          {item.title}
                        </h3>
                        <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-all ${
                          activeIndex === index 
                            ? 'text-lskin-bg rotate-90' 
                            : 'text-lskin-primary/30 group-hover:text-lskin-primary'
                        }`} />
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          activeIndex === index ? 'bg-lskin-bg/40' : 'bg-lskin-primary/20'
                        }`} />
                        <span className={`text-sm transition-colors ${
                          activeIndex === index ? 'text-lskin-bg/80' : 'text-lskin-primary/60'
                        }`}>
                          {item.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right: Active Innovation Display */}
            <div className="w-3/5">
              <motion.div
                key={activeInnovation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative h-full min-h-[600px] rounded-3xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${activeInnovation.color} opacity-30`} />
                
                <div className="relative w-full h-full">
                  <Image
                    src={activeInnovation.image}
                    alt={activeInnovation.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lskin-primary/60 via-lskin-primary/20 to-transparent" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-10">
                  <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
                      <activeInnovation.icon className="w-4 h-4 text-white" />
                      <span className="text-sm text-white font-medium">
                        {activeInnovation.highlight}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-playfair text-4xl text-white mb-4">
                      {activeInnovation.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/80 leading-relaxed text-xl mb-8">
                      {activeInnovation.fullDescription}
                    </p>

                    {/* Stats & Impact */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-3">
                        {activeInnovation.stats.map((stat, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
                          >
                            <span className="text-sm text-white/90">{stat}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-white/10">
                        <span className="text-sm text-white/70">{activeInnovation.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute top-8 left-8">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <span className="font-playfair text-2xl text-white">
                      {activeInnovation.number}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical Accordion */}
        <div className="lg:hidden space-y-4">
          {innovations.map((item, index) => {
            const isExpanded = mobileExpanded === index;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden"
              >
                {/* Clickable Header */}
                <motion.button
                  onClick={() => handleMobileToggle(index)}
                  className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
                    isExpanded 
                      ? 'bg-gradient-to-r from-lskin-primary to-lskin-primary/90' 
                      : 'bg-white hover:bg-lskin-bg/80 border border-lskin-primary/10'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isExpanded ? 'bg-white/20' : 'bg-lskin-primary/5'
                      }`}>
                        <span className="font-playfair text-xl text-lskin-primary">
                          {item.number}
                        </span>
                      </div>
                      
                      <div className="text-left">
                        <h3 className={`font-medium text-base mb-1 ${
                          isExpanded ? 'text-white' : 'text-lskin-primary'
                        }`}>
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            isExpanded ? 'bg-white/40' : 'bg-lskin-primary/20'
                          }`} />
                          <span className={`text-xs ${
                            isExpanded ? 'text-white/80' : 'text-lskin-primary/60'
                          }`}>
                            {item.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isExpanded 
                          ? 'bg-white/20 text-white' 
                          : 'bg-lskin-primary/5 text-lskin-primary'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-6">
                        {/* Image */}
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                          <div className="relative w-full h-full">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover"
                              sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-lskin-primary/50 to-transparent" />
                          </div>
                          
                          {/* Badge */}
                          <div className="absolute top-4 left-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                              <item.icon className="w-3 h-3 text-lskin-primary" />
                              <span className="text-xs font-medium text-lskin-primary">
                                {item.highlight}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-playfair text-2xl text-lskin-primary font-semibold mb-3">
                              {item.title}
                            </h4>
                            <p className="text-lskin-primary/70 leading-relaxed">
                              {item.fullDescription}
                            </p>
                          </div>
                          
                          {/* Stats */}
                          <div className="pt-4 border-t border-lskin-primary/10">
                            <div className="grid grid-cols-2 gap-3">
                              {item.stats.map((stat, statIndex) => (
                                <div
                                  key={statIndex}
                                  className="px-3 py-2 bg-lskin-primary/5 rounded-lg"
                                >
                                  <span className="text-sm text-lskin-primary">
                                    {stat}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Impact */}
                          <div className="pt-4 border-t border-lskin-primary/10">
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-lskin-secondary" />
                              <span className="text-sm text-lskin-primary/70">
                                {item.impact}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats - Mobile Optimized */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-24 pt-12 border-t border-lskin-primary/10"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-lskin-primary" />
              <span className="text-sm tracking-widest uppercase text-lskin-primary/60">
                Measurable Impact
              </span>
            </div>
            <h3 className="font-playfair text-2xl text-lskin-primary font-light mb-6">
              By the Numbers
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "0%", label: "Synthetic", icon: Leaf, detail: "Chemicals" },
              { value: "100%", label: "Plant", icon: Leaf, detail: "Derived" },
              { value: "85%", label: "Water", icon: Droplets, detail: "Reduction" },
              { value: "100%", label: "Recyclable", icon: Package, detail: "Packaging" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-lskin-bg/50 border border-lskin-primary/5"
              >
                <div className="w-10 h-10 rounded-full bg-lskin-primary/5 flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-5 h-5 text-lskin-primary" />
                </div>
                <span className="font-playfair text-2xl text-lskin-primary block mb-1">
                  {stat.value}
                </span>
                <div>
                  <div className="text-sm font-medium text-lskin-primary">
                    {stat.label}
                  </div>
                  <div className="text-xs text-lskin-primary/50">
                    {stat.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 -right-32 w-80 h-80 bg-lskin-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -left-32 w-80 h-80 bg-lskin-secondary/5 rounded-full blur-3xl" />
    </section>
  );
}