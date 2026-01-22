"use client";
import React from "react";
import { motion } from "framer-motion";
import { Droplets, TreePine, Award } from "lucide-react";

const achievements = [
  {
    icon: TreePine,
    value: "50K+",
    label: "Trees Planted",
    description: "Through reforestation partners",
  },
  {
    icon: Droplets,
    value: "2M",
    label: "Liters Saved",
    description: "Waterless formulations",
  },
  {
    icon: Award,
    value: "100%",
    label: "Clean Ingredients",
    description: "Organic & ethical certified",
  },
];

export default function AchievementScoreboard() {
  return (
    <section className="py-4 md:py-6  ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6  lg:px-8 ">

        {/* Scaled Flex Layout - All Screens Horizontal */}
        <div className="flex flex-row items-stretch gap-3 sm:gap-4 md:gap-8  ">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-1 min-w-0"
            >
              {/* Line-based Card */}
              <div className="h-full flex flex-col items-center text-center p-3 sm:p-4 md:p-8">
                
                {/* Icon with Line - Scaled for Mobile */}
                <div className="relative mb-4 sm:mb-6 md:mb-8">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-lskin-primary/10 flex items-center justify-center">
                    <achievement.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-lskin-primary" />
                  </div>
                  <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-2 sm:h-3 md:h-4 bg-lskin-primary/20"></div>
                </div>

                {/* Value - Scaled for Mobile */}
                <div className="mb-3 sm:mb-4 md:mb-6">
                  <span className="font-playfair text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-lskin-primary leading-none">
                    {achievement.value}
                  </span>
                </div>

                {/* Text Content - Scaled for Mobile */}
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-xs sm:text-sm md:text-base font-normal text-lskin-primary tracking-wide">
                    {achievement.label}
                  </h3>
                  <p className="text-xs sm:text-xs md:text-sm text-lskin-primary/40 leading-tight">
                    {achievement.description}
                  </p>
                </div>

                {/* Bottom Line - Scaled for Mobile */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connecting Line (All Screens) */}
                <div className="mt-4 sm:mt-6 md:mt-8 w-auto sm:w-auto md:w-auto h-px bg-lskin-primary/10"></div>

        {/* Minimal Footer */}
      
      </div>
    </section>
  );
}