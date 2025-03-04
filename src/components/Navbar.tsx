'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-nexo-blue text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl">
          NEXO<span className="text-sm ml-1 opacity-80">SPORTS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="hover:text-gray-200 transition-colors">
            Inicio
          </Link>
          <Link href="#productos" className="hover:text-gray-200 transition-colors">
            Productos
          </Link>
          <Link href="#categorias" className="hover:text-gray-200 transition-colors">
            Categorías
          </Link>
          <Link href="#nosotros" className="hover:text-gray-200 transition-colors">
            Nosotros
          </Link>
          <Link href="#contacto" className="hover:text-gray-200 transition-colors">
            Contacto
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-nexo-blue border-t border-blue-800 py-2">
          <div className="container-custom flex flex-col space-y-3">
            <Link href="#" className="py-2 hover:bg-blue-800 px-3 rounded" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="#productos" className="py-2 hover:bg-blue-800 px-3 rounded" onClick={() => setIsMenuOpen(false)}>
              Productos
            </Link>
            <Link href="#categorias" className="py-2 hover:bg-blue-800 px-3 rounded" onClick={() => setIsMenuOpen(false)}>
              Categorías
            </Link>
            <Link href="#nosotros" className="py-2 hover:bg-blue-800 px-3 rounded" onClick={() => setIsMenuOpen(false)}>
              Nosotros
            </Link>
            <Link href="#contacto" className="py-2 hover:bg-blue-800 px-3 rounded" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 