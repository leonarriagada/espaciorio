'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const heroImages = [
  {
    src: '/images/01.jpg',
    label: 'VISTA PANORÁMICA GENERAL',
    category: 'ARQUITECTURA & ENTORNOS',
  },
  {
    src: '/images/nuevos-locales/local-1-starbucks-a.png',
    label: 'STARBUCKS · DRIVE-THRU',
    category: 'GASTRONOMÍA & DRIVE-THRU',
  },
  {
    src: '/images/02.jpg',
    label: 'FACHADA PRINCIPAL & ACCESOS',
    category: 'ARQUITECTURA & PASEO',
  },
  {
    src: '/images/nuevos-locales/local-1-starbucks-b.png',
    label: 'STARBUCKS · ESPACIO EXCLUSIVO',
    category: 'GASTRONOMÍA & CAFÉ',
  },
  {
    src: '/images/03.jpg',
    label: 'VISTA AÉREA Y TERRAZAS',
    category: 'MASTERPLAN & LIFESTYLE',
  },
  {
    src: '/images/nuevos-locales/local-1-starbucks-b1.png',
    label: 'STARBUCKS · TERRAZA EXTERIOR',
    category: 'GASTRONOMÍA & VIBE',
  },
  {
    src: '/images/08.jpg',
    label: 'PASEO COMERCIAL PEDRO DE VALDIVIA',
    category: 'PASEO PEATONAL',
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const currentSlide = heroImages[currentImageIndex];

  return (
    <section id="hero" className="relative w-full h-[100dvh] min-h-[620px] flex flex-col justify-between overflow-hidden bg-[#080A0D]">
      {/* Hero Background Images with Cinematic Zoom-out and Cross-fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide.src}
            initial={{ opacity: 0, scale: 1.45 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0, scale: 1.10 }}
            transition={{
              opacity: { duration: 0.6, ease: 'easeInOut' },
              scale: { duration: 3.0, ease: 'linear' },
            }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={currentSlide.src}
              alt={currentSlide.label}
              fill
              priority={currentImageIndex === 0}
              sizes="100vw"
              className="object-cover object-center"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Editorial Vignette & Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A0D]/70 via-[#080A0D]/30 to-[#080A0D]/90 pointer-events-none z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full h-full px-6 sm:px-10 lg:px-12 flex flex-col justify-between pt-32 pb-10">
        <div />

        {/* Central Editorial Heading */}
        <div className="max-w-4xl my-auto">
          {/* Brand Tag Capsule with Active Image Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6 flex-wrap"
          >
            <span className="bg-[#FFE9A3] text-[#080A0D] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-md">
              <span>✦</span>
              <span>CONCEPCIÓN</span>
            </span>

            <AnimatePresence mode="wait">
              <motion.span
                key={currentSlide.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-[#080A0D]/80 backdrop-blur-md border border-[#FFE9A3]/40 text-[#FFE9A3] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-md"
              >
                <Sparkles className="w-3 h-3 text-[#FFE9A3]" />
                <span>{currentSlide.label}</span>
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Mixed Contrast Typography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-1"
          >
            <div className="flex items-baseline gap-4 flex-wrap">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase text-[#FFE9A3]">
                VIVE
              </span>
              <span className="font-display italic text-2xl sm:text-4xl text-[#F5F3EA]/90 font-normal">
                la nueva experiencia
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,6.5vw,6rem)] font-light text-[#FFFFFF] tracking-wide leading-[0.95] mt-2 uppercase">
              TU NUEVO PUNTO DE ENCUENTRO
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-6 text-base sm:text-xl font-light text-[#F5F3EA]/90 tracking-wide max-w-xl leading-relaxed"
          >
            El nuevo destino en Pedro de Valdivia donde gastronomía, deporte, moda boutique y servicios convergen.
          </motion.p>
        </div>

        {/* Navigation & Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-between items-center border-t border-white/20 pt-4"
        >
          {/* Active Category Display & Manual Controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Anterior"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFE9A3] hover:text-[#080A0D] text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Siguiente"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFE9A3] hover:text-[#080A0D] text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <span className="text-xs tracking-widest text-[#FFE9A3] font-mono font-semibold">
              {String(currentImageIndex + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}
            </span>
          </div>

          <div className="text-xs tracking-[0.2em] text-[#F5F3EA]/80 font-light uppercase hidden md:flex items-center gap-3 py-2">
            <span>{currentSlide.category}</span>
          </div>

          <a
            href="#locales"
            aria-label="Desplazarse hacia abajo"
            className="group flex items-center gap-3 text-xs tracking-widest text-white uppercase ml-auto py-2 min-h-[44px]"
          >
            <span className="group-hover:text-[#FFE9A3] transition-colors">DESCUBRIR LOCALES</span>
            <span className="inline-block animate-bounce text-base text-[#FFE9A3]">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
