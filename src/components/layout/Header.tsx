'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex justify-center items-center ${
        scrolled
          ? 'bg-[#080A0D]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#080A0D]/80 via-[#080A0D]/30 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center w-full">
        {/* Centered Brand Logo */}
        <Link
          href="/"
          className="relative inline-block transition-transform duration-300 hover:scale-105 focus:outline-none"
          aria-label="Espacio Río — Inicio"
        >
          <div className="relative h-10 sm:h-14 w-44 sm:w-56">
            <Image
              src="/LOGO.png"
              alt="Espacio Río Logo"
              fill
              sizes="(max-width: 640px) 176px, 224px"
              className="object-contain object-center"
              priority
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
