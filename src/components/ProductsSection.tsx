"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  Award, 
  Sparkles,
  CheckCircle,
  Heart,
  ShoppingBag
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featuredProducts = [
  {
    id: 'prod_001',
    name: 'Ultra Hydrating Shea Butter',
    category: 'Body Care',
    tagline: '24-hour deep hydration with organic shea & cocoa butter',
    price: 38.00,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=800&q=80',
    features: ['Waterless Formula', 'Refillable Packaging', 'Vegan', 'Cruelty Free']
  },
  {
    id: 'prod_002',
    name: 'Glow Radiance Body Oil',
    category: 'Body Care',
    tagline: 'Lightweight, fast-absorbing oil for luminous skin',
    price: 42.00,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1601063458289-77247ba485ec?auto=format&fit=crop&w=800&q=80',
    features: ['Fast Absorbing', 'Multi-Use', 'Vegan', 'Non-Greasy']
  }
];

export default function ProductIntro() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-lskin-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-lskin-primary/30"></div>
            <Sparkles className="w-4 h-4 text-lskin-primary" />
            <span className="text-xs tracking-widest uppercase text-lskin-primary/60">
              Featured Products
            </span>
          </div>
          
          <h1 className="font-playfair text-4xl md:text-5xl text-lskin-primary font-light mb-4">
            Our Signature Collection
          </h1>
          
          <p className="text-lskin-primary/60 text-lg max-w-2xl mx-auto">
            Discover our most loved products, designed for effectiveness and sustainability
          </p>
        </div>

        {/* Two Products Side by Side */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-20">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-1"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-lskin-primary/10 h-full flex flex-col">
                
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    quality={85}
                  />
                  
                  {/* Rating */}
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="font-playfair text-2xl text-lskin-primary font-light mb-2">
                      {product.name}
                    </h3>
                    <p className="text-lskin-primary/60 text-sm">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-lskin-primary/5 rounded-full text-xs text-lskin-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="mt-auto pt-4 border-t border-lskin-primary/5">
                    <div className="flex items-center justify-between">
                      <span className="font-playfair text-2xl text-lskin-primary font-light">
                        ${product.price.toFixed(2)}
                      </span>
                      {/* <Link
                        href={createPageUrl(`ProductDetail?id=${product.id}`)}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-lskin-primary/20 rounded-full hover:border-lskin-primary hover:bg-lskin-primary/5 transition-colors"
                      >
                        <span className="text-sm">View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <div className="text-center">
          {/* <Link
            href={#('Products')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-lskin-primary text-white rounded-full hover:bg-lskin-primary/90 transition-colors"
          >
            <span className="text-sm font-medium tracking-wider">Explore Full Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link> */}
        </div>
      </div>
    </section>
  );
}