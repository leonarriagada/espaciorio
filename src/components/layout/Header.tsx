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
            ? 'bg-[#080A0D]/90 backdrop-blur-md border-b border-white/10 py-4 shadow-xl text-[#F5F3EA]'
            : 'bg-gradient-to-b from-[#080A0D]/70 via-[#080A0D]/20 to-transparent text-white py-6 sm:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="font-display text-xl sm:text-2xl font-light tracking-[0.25em] text-[#F5F3EA] hover:text-[#FFE9A3] transition-colors flex items-center gap-2"
          >
            <span>ESPACIO RÍO</span>
            <span className="text-[#FFE9A3] text-sm">✦</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs tracking-[0.2em] font-medium text-[#F5F3EA]/85 hover:text-[#FFE9A3] transition-colors relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FFE9A3] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menú"
            className="md:hidden text-xs tracking-[0.2em] uppercase font-semibold border border-[#FFE9A3] text-[#FFE9A3] hover:bg-[#FFE9A3] hover:text-[#080A0D] px-4 py-2 min-h-[44px] inline-flex items-center justify-center transition-colors rounded-full"
          >
            MENÚ ✦
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
