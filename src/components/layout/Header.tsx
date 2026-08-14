'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F3F1EB]/90 backdrop-blur-md border-b border-[#242624]/10 py-4 shadow-sm'
            : 'bg-gradient-to-b from-black/40 via-black/10 to-transparent text-white py-6 sm:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className={`font-display text-xl sm:text-2xl font-light tracking-[0.25em] transition-colors ${
              scrolled ? 'text-[#242624]' : 'text-white'
            }`}
          >
            ESPACIO RÍO
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs tracking-[0.2em] font-medium transition-colors relative group py-1 ${
                  scrolled
                    ? 'text-[#242624]/80 hover:text-[#242624]'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-[#242624]' : 'bg-white'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menú"
            className={`md:hidden text-xs tracking-[0.2em] uppercase font-medium border px-3 py-1.5 transition-colors ${
              scrolled
                ? 'border-[#242624]/30 text-[#242624] hover:bg-[#242624] hover:text-[#F3F1EB]'
                : 'border-white/40 text-white hover:bg-white hover:text-[#242624]'
            }`}
          >
            MENÚ
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
