// components/FeaturedProductsGrid.jsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart,  Star, Sparkles } from 'lucide-react';
import Image from 'next/image';

const FeaturedProductsGrid = ({ products = [] }) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const defaultProducts = [
    {
      id: 1,
      name: "Botanical Renewal Oil",
      category: "Shear Butter",
      price: 7800,
      rating: 4.9,
      description: "Potent botanical extract serum for luminous skin",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Earth-Bound Cleansing Balm",
      category: "Cocoaa Butter",
      price: 5400,
      rating: 4.7,
      description: "Gentle cleansing that transforms on contact",
      image: "https://images.unsplash.com/photo-1556228578-9c360e1d8d34?w=800&h=800&fit=crop",
      isNew: true,
    },
    {
      id: 3,
      name: "Flora Hydrating Mist",
      category: "TONER",
      price: 4200,
      rating: 4.8,
      description: "Fine mist hydration with rose and hyaluronic acid",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=800&fit=crop",
      isVegan: true,
    },
    {
      id: 4,
      name: "Sculpting Jade Tool",
      category: "BEAUTY TOOL",
      price: 3500,
      rating: 4.9,
      description: "Handcrafted jade for facial massage",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=800&fit=crop",
      isLimited: true,
    },
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  const toggleWishlist = (id: number) => {
    setWishlist(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-12 bg-white border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Elegant Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-px bg-lskin-secondary/30"></div>
            <Sparkles className="w-5 h-5 text-lskin-secondary" />
            <div className="w-20 h-px bg-lskin-secondary/30"></div>
          </div>
          
         
          
          <p className="text-lg text-lskin-secondary font-montserrat max-w-2xl mx-auto leading-relaxed">
Essentials    </p>
        </motion.div>

        {/* Elegant Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group relative"
            >
              {/* Product Card Container */}
              <div className="relative overflow-hidden rounded-2xl bg-white border border-lskin-secondary/10 transition-all duration-500 group-hover:shadow-2xl group-hover:border-lskin-secondary/20">
                {/* Image Container with Elegant Overlay */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-lskin-bg/20 to-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isBestSeller && (
                      <span className="px-3 py-1.5 bg-lskin-primary text-white text-xs font-bold tracking-widest rounded-full">
                        BESTSELLER
                      </span>
                    )}
                    {product.isNew && (
                      <span className="px-3 py-1.5 bg-white text-lskin-primary text-xs font-bold tracking-widest rounded-full border border-lskin-primary/20">
                        NEW
                      </span>
                    )}
                    {product.isVegan && (
                      <span className="px-3 py-1.5 bg-lskin-secondary text-white text-xs font-bold tracking-widest rounded-full">
                        BUTTER
                      </span>
                    )}
                  </div>
                  
                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      wishlist.includes(product.id)
                        ? 'bg-white/90 text-rose-500'
                        : 'bg-white/50 text-lskin-secondary hover:bg-white/80'
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        wishlist.includes(product.id) ? 'fill-current' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="text-xs text-lskin-secondary uppercase tracking-widest font-bold font-montserrat">
                      {product.category}
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-playfair font-bold text-lskin-text mb-3 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-lskin-secondary font-montserrat mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-lskin-secondary/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-lskin-secondary font-montserrat">
                      {product.rating}
                    </span>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t border-lskin-secondary/10">
                    <div>
                      <span className="text-2xl font-playfair font-bold text-lskin-primary">
                        Ksh{product.price}
                      </span>
                    </div>
                    
                    {/* Add to Cart Button - Elegant Slide Up */}
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredProduct === product.id ? 1 : 0,
                        y: hoveredProduct === product.id ? 0 : 10
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 bg-lskin-primary text-white text-sm font-medium rounded-lg hover:bg-lskin-text transition-all duration-300 group/btn"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span className="font-montserrat">Add</span>
                    </motion.button>
                    
                    {/* Quick View Button (Always visible fallback) */}
                    <button className="px-4 py-2.5 text-lskin-secondary text-sm font-medium hover:text-lskin-text transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>

              {/* Elegant Hover Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-lskin-primary/5 via-transparent to-lskin-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Modern View All Section */}
        
      </div>

      <style jsx global>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProductsGrid;