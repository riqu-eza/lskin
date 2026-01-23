"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const solutions = [
  {
    id: 1,
    problem: "Dry, Flaky Skin",
    remedy: "Shea, mango & cocoa butter deeply moisturize, soften, and seal hydration for 24/7 softness."
  },
  {
    id: 2,
    problem: "Ashy Elbows, Knees & Legs",
    remedy: "Thick butters + body oils restore lost moisture and keep skin even-toned and smooth."
  },
  {
    id: 3,
    problem: "Rough Texture",
    remedy: "Vitamin-rich butters repair the skin barrier, reducing roughness and leaving skin silky."
  },
  {
    id: 4,
    problem: "Stretch Marks",
    remedy: "Cocoa & shea butter improve elasticity and help fade the appearance of stretch marks over time."
  },
  {
    id: 5,
    problem: "Hyperpigmentation",
    remedy: "Consistent hydration helps prevent friction irritation and supports gradual tone correction."
  },
  {
    id: 6,
    problem: "Itchy, Tight Skin",
    remedy: "Butters soothe, calm, and relieve dryness-related irritation especially after showering or shaving."
  },
  {
    id: 7,
    problem: "Dull, Lifeless Skin",
    remedy: "Body oils give an immediate healthy glow, while butters nourish deeply for long-lasting radiance."
  },
  {
    id: 8,
    problem: "Cracked Heels & Dry Feet",
    remedy: "Cocoa butter + oils soften hard skin and speed up heel repair naturally."
  },
  {
    id: 9,
    problem: "Beard Dryness",
    remedy: "Body oils soften beard hair, moisturize the skin underneath, and reduce flaking and irritation."
  },
  {
    id: 10,
    problem: "After-Shave Irritation",
    remedy: "Shea & mango butter calm razor bumps, reduce tightness, and keep skin smooth and soothed."
  },
  {
    id: 11,
    problem: "Pregnancy Belly Dryness",
    remedy: "Cocoa & shea butter support elasticity and help prevent skin tightness and stretch marks."
  },
  {
    id: 12,
    problem: "Uneven Skin Barrier",
    remedy: "Butters rebuild and strengthen the skin barrier, giving long-term resilience and softness."
  },
  {
    id: 13,
    problem: "Hot Weather Dryness",
    remedy: "Lightweight mango butter and fast-absorbing oils protect the skin from sun-related dehydration."
  },
  {
    id: 14,
    problem: "Nighttime Dryness",
    remedy: "Thick shea & cocoa butters act as overnight treatments for deep hydration and repair."
  }
];

export default function SolutionsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24  bg-lskin-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-lskin-primary font-light mb-6">
             Your Skin Questions, Answered
          </h2>
          <div className="w-16 h-px bg-lskin-primary/20 mx-auto" />
        </div>

        {/* Stacked Cards */}
        <div className="space-y-3">
          {solutions.map((item, index) => {
            const isExpanded = expandedId === item.id;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group"
              >
                <div 
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className={`cursor-pointer transition-all duration-300 ${
                    isExpanded 
                      ? 'bg-lskin-bg border-l border-lskin-primary' 
                      : 'hover:bg-lskin-bg/50'
                  }`}
                >
                  <div className="flex items-center justify-between p-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isExpanded ? 'bg-lskin-primary/10' : 'bg-lskin-primary/5 group-hover:bg-lskin-primary/10'
                      }`}>
                        <span className="text-sm font-medium text-lskin-primary">
                          {item.id.toString().padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-lskin-primary">
                        {item.problem}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isExpanded ? 'bg-lskin-primary/10' : 'bg-lskin-primary/5'
                    }`}>
                      {isExpanded ? (
                        <Minus className="w-4 h-4 text-lskin-primary" />
                      ) : (
                        <Plus className="w-4 h-4 text-lskin-primary" />
                      )}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 px-5 ml-14">
                        <div className="pl-4 border-l-2 border-lskin-primary/20">
                          <p className="text-lskin-primary/70 leading-relaxed">
                            {item.remedy}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
                
                {index < solutions.length - 1 && !isExpanded && (
                  <div className="h-px bg-lskin-primary/5 mx-5" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Simple Footer */}
        {/* <div className="mt-12 text-center">
          <p className="text-sm text-lskin-primary/40">
            Click on any concern to see our natural solution
          </p>
        </div> */}
      </div>
    </section>
  );
}