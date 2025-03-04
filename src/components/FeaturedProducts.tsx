'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Zapatillas Trail Running',
    category: 'Calzado',
    price: 89.99,
    discountPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    rating: 4.8,
    isNew: true,
  },
  {
    id: 2,
    name: 'Balón de Fútbol Profesional',
    category: 'Fútbol',
    price: 34.99,
    discountPrice: null,
    image: 'https://images.unsplash.com/photo-1614632537423-5e1c7618270d',
    rating: 4.5,
    isNew: false,
  },
  {
    id: 3,
    name: 'Set de Pesas 20kg',
    category: 'Fitness',
    price: 129.99,
    discountPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5',
    rating: 4.9,
    isNew: true,
  },
  {
    id: 4,
    name: 'Camiseta Técnica Running',
    category: 'Ropa',
    price: 29.99,
    discountPrice: null,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
    rating: 4.3,
    isNew: false,
  },
  {
    id: 5,
    name: 'Raqueta de Tenis Profesional',
    category: 'Tenis',
    price: 159.99,
    discountPrice: 139.99,
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0',
    rating: 4.7,
    isNew: false,
  },
  {
    id: 6,
    name: 'Mochila Deportiva 30L',
    category: 'Accesorios',
    price: 49.99,
    discountPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    rating: 4.6,
    isNew: true,
  },
];

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('all');
  
  // Get unique categories
  const categories = ['all', ...new Set(products.map(product => product.category.toLowerCase()))];
  
  // Filter products by category
  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === activeTab);

  return (
    <section id="productos" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-nexo-blue">Productos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos deportivos de alta calidad para mejorar tu rendimiento y comodidad.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === category
                  ? 'bg-nexo-blue text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`${product.image}?auto=format&fit=crop&w=600&q=80`}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-yellow-400 text-nexo-blue font-semibold px-3 py-1 rounded-full text-xs">
                    NUEVO
                  </div>
                )}
                {product.discountPrice && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white font-semibold px-3 py-1 rounded-full text-xs">
                    {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% DCTO
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    {product.discountPrice ? (
                      <div className="flex items-center">
                        <span className="text-lg font-bold text-nexo-blue mr-2">€{product.discountPrice}</span>
                        <span className="text-gray-500 line-through text-sm">€{product.price}</span>
                      </div>
                    ) : (
                      <span className="text-lg font-bold text-nexo-blue">€{product.price}</span>
                    )}
                  </div>
                  <button className="bg-nexo-blue text-white p-2 rounded-full hover:bg-opacity-90 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#" className="btn-primary">
            Ver Todos los Productos
          </Link>
        </div>
      </div>
    </section>
  );
} 