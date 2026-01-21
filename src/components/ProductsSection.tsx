'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'face', name: 'Face Care' },
    { id: 'body', name: 'Body Care' },
    { id: 'serums', name: 'Serums' },
    { id: 'kits', name: 'Wellness Kits' },
  ];
  
  const products = [
    {
      id: 1,
      name: 'Organic Lavender Serum',
      category: 'Serums',
      price: 42.99,
      imageUrl: '/products/serum.jpg',
      isEco: true,
    },
    {
      id: 2,
      name: 'Green Tea Cleanser',
      category: 'Face Care',
      price: 28.50,
      imageUrl: '/products/cleanser.jpg',
      isEco: true,
    },
    {
      id: 3,
      name: 'Aloe Vera Body Lotion',
      category: 'Body Care',
      price: 35.00,
      imageUrl: '/products/lotion.jpg',
      isEco: true,
    },
    {
      id: 4,
      name: 'Sustainable Wellness Kit',
      category: 'Wellness Kits',
      price: 89.99,
      imageUrl: '/products/kit.jpg',
      isEco: true,
    },
  ];

  return (
    <section className="section-padding py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-lskin-primary">Products</span>
          </h2>
          <p className="text-xl text-lskin-text/70 max-w-3xl mx-auto">
            Discover our range of high-quality, organic skincare products formulated with sustainability in mind.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-lskin-primary text-white'
                  : 'bg-white text-lskin-primary border border-lskin-primary hover:bg-lskin-primary hover:text-white'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              imageUrl={product.imageUrl}
              isEco={product.isEco}
            />
          ))}
        </div>
        
        <div className="text-center">
          <button className="btn-primary">
            <i className="fas fa-store mr-2"></i> View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;