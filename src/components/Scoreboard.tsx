"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Package, Droplets, TreePine } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const impactStats = [
  { 
    icon: Leaf,
    value: "100%", 
    label: "Organic Ingredients",
    description: "Ethically sourced botanicals"
  },
  { 
    icon: Package,
    value: "0", 
    label: "Single-Use Plastics",
    description: "Refillable packaging only"
  },
  { 
    icon: Droplets,
    value: "85%", 
    label: "Reduced Water Usage",
    description: "Waterless formulations"
  },
  { 
    icon: TreePine,
    value: "50K+", 
    label: "Trees Planted",
    description: "Through reforestation partners"
  }
];

// Image optimization configuration
const images = [
  {
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    alt: "Sustainable ingredients",
    width: 800,
    height: 800
  },
  {
    src: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc",
    alt: "Natural botanicals",
    width: 800,
    height: 600
  },
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    alt: "Eco-friendly packaging",
    width: 800,
    height: 600
  },
  {
    src: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02",
    alt: "Plant-based formulations",
    width: 800,
    height: 800
  }
];

export default function ImpactSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-lskin-bg text-lskin-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content - Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pr-8"
          >
            {/* Header */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-lskin-primary/30"></div>
              <Leaf className="w-4 h-4 text-lskin-primary" />
              <span className="text-xs tracking-widest uppercase text-lskin-primary/60">
                Our Impact
              </span>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-lskin-primary font-light mb-6 leading-tight">
              Beauty That Doesn&apos;t Cost the Earth
            </h2>
            
            <p className="text-lskin-primary/60 text-lg leading-relaxed mb-8 max-w-lg">
              Every choice we make—from ingredient sourcing to packaging design—is 
              guided by our commitment to environmental responsibility. We believe 
              luxury skincare and sustainability aren&apos;t mutually exclusive.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-2 border-lskin-primary/20 pl-4 py-2"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-lskin-primary/10 flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-lskin-primary" />
                    </div>
                    <span className="font-playfair text-3xl md:text-4xl text-lskin-primary block">
                      {stat.value}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-lskin-primary text-sm md:text-base block mb-1">
                      {stat.label}
                    </span>
                    <span className="text-xs text-lskin-primary/50">{stat.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            {/* <Link
              to={createPageUrl('Sustainability')}
              className="group inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 border border-lskin-primary/30 rounded-full hover:border-lskin-primary hover:bg-lskin-primary/5 transition-all duration-300"
            >
              <span className="text-sm tracking-wider uppercase text-lskin-primary">
                Learn More
              </span>
              <ArrowRight className="w-4 h-4 text-lskin-primary group-hover:translate-x-1 transition-transform" />
            </Link> */}
          </motion.div>

          {/* Right Side - Staggered Image Grid with Next.js Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* First Column */}
              <div className="space-y-4 md:space-y-6">
                {/* Top Image - Square */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-lskin-primary/5 to-lskin-secondary/5 relative"
                >
                  <Image
                    src={`${images[0].src}?auto=format&fit=crop&w=800&q=80`}
                    alt={images[0].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    quality={85}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
                  />
                </motion.div>
                
                {/* Bottom Image - Rectangular */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-lskin-primary/5 to-lskin-secondary/5 relative"
                >
                  <Image
                    src={`${images[1].src}?auto=format&fit=crop&w=800&q=80`}
                    alt={images[1].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    quality={85}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
                  />
                </motion.div>
              </div>
              
              {/* Second Column - Offset */}
              <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
                {/* Top Image - Rectangular */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-lskin-primary/5 to-lskin-secondary/5 relative"
                >
                  <Image
                    src={`${images[2].src}?auto=format&fit=crop&w=800&q=80`}
                    alt={images[2].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    quality={85}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
                  />
                </motion.div>
                
                {/* Bottom Image - Square */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-lskin-primary/5 to-lskin-secondary/5 relative"
                >
                  <Image
                    src={`${images[3].src}?auto=format&fit=crop&w=800&q=80`}
                    alt={images[3].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 30vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    quality={85}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
                  />
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-lskin-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lskin-secondary/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-lskin-bg to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-lskin-bg to-transparent" />
    </section>
  );
}