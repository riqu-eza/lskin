'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart, Star, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const FeaturedProductsGrid = ({ products = [] }) => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const defaultProducts = [
    {
      id: 1,
      name: "Botanical Renewal Oil",
      category: "Shea Butter",
      price: 7800,
      rating: 4.9,
      image: "/_DSC2942.jpg",
      isBestSeller: true,
    },
    {
      id: 2,
      name: "Earth-Bound Cleansing Balm",
      category: "Cocoa Butter",
      price: 5400,
      rating: 4.7,
      image: "/_DSC2971.jpg",
      isNew: true,
    },
    {
      id: 3,
      name: "Flora Hydrating Mist",
      category: "Toner",
      price: 4200,
      rating: 4.8,
      image: "/_DSC2959.jpg",
    },
    {
      id: 4,
      name: "Sculpting Jade Tool",
      category: "Beauty Tool",
      price: 3500,
      rating: 4.9,
      image: "/_DSC2949.jpg",
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-light text-gray-900 text-center mb-3">
            Top Products
          </h2>
          <p className="text-gray-500 text-center text-sm">
            Essentials worth having
          </p>
        </div>

        {/* Clean Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group"
            >
              {/* Product Card */}
              <div className="relative">
                {/* Image Container */}
                <div className="relative aspect-square mb-4 bg-gray-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  
                  {/* Minimal Badge */}
                  {product.isBestSeller && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-black text-white text-xs font-medium">
                        Best Seller
                      </span>
                    </div>
                  )}
                  
                  {/* Simple Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlist.includes(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  {/* Category */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-xs text-gray-600">{product.rating}</span>
                    </div>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-medium text-gray-900 text-sm leading-tight">
                    {product.name}
                  </h3>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-medium text-gray-900">
                      Ksh {product.price.toLocaleString()}
                    </span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors">
                      <ShoppingBag className="w-4 h-4" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-black font-medium text-sm transition-colors"
          >
            View all products
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsGrid;