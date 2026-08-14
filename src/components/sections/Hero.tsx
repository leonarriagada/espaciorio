'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const heroImages = [
  {
    src: '/images/01.jpg',
    alt: 'Espacio Río — Vista panorámica general del proyecto en Concepción',
  },
  {
    src: '/images/02.jpg',
    alt: 'Espacio Río — Fachada principal, tótem y entorno natural',
  },
  {
    src: '/images/03.jpg',
    alt: 'Espacio Río — Vista aérea del máster plan y terrazas',
  },
  {
    src: '/images/08.jpg',
    alt: 'Espacio Río — Paseo comercial y ambiente al aire libre',
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100svh] min-h-[660px] flex flex-col justify-between overflow-hidden bg-[#080A0D]">
      {/* Hero Background Images with Cinematic Zoom-out and Cross-fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={heroImages[currentImageIndex].src}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 4.2, ease: 'easeOut' },
            }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              fill
              priority={currentImageIndex === 0}
              sizes="100vw"
              className="object-cover object-center"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Editorial Vignette & Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A0D]/60 via-[#080A0D]/25 to-[#080A0D]/80 pointer-events-none z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full h-full px-6 sm:px-10 lg:px-12 flex flex-col justify-between pt-32 pb-12">
        <div />

        {/* Central Editorial Heading with High Contrast Typography */}
        <div className="max-w-4xl my-auto">
          {/* Brand Tag Capsule */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="bg-[#B8FF00] text-[#080A0D] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 shadow-md">
              <span>✦</span>
              <span>CONCEPCIÓN</span>
            </span>
            <span className="text-xs tracking-[0.25em] uppercase text-[#F5F3EA]/80 font-medium hidden sm:inline-block">
              LIFESTYLE & ARCHITECTURE
            </span>
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

            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl font-light text-[#FFFFFF] tracking-wide leading-[0.92] mt-1">
              ESPACIO RÍO
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-6 text-base sm:text-xl font-light text-[#F5F3EA]/90 tracking-wide max-w-xl leading-relaxed"
          >
            El nuevo punto de encuentro en Concepción donde gastronomía, deporte, arquitectura y vida social convergen.
          </motion.p>
        </div>

        {/* Scroll Indicator & Slide Progress Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-between items-end border-t border-white/20 pt-6"
        >
          {/* Slide Indicator lines */}
          <div className="flex items-center gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                aria-label={`Ver render ${idx + 1}`}
                className="h-1 py-2 cursor-pointer group focus:outline-none"
              >
                <div
                  className={`h-[2px] transition-all duration-500 ${
                    idx === currentImageIndex
                      ? 'w-8 bg-[#B8FF00]'
                      : 'w-4 bg-white/40 group-hover:bg-white/70'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="text-xs tracking-[0.2em] text-[#F5F3EA]/80 font-light uppercase hidden md:flex items-center gap-3">
            <span>GASTRONOMÍA</span>
            <span className="text-[#B8FF00]">✦</span>
            <span>PÁDEL</span>
            <span className="text-[#B8FF00]">✦</span>
            <span>ARQUITECTURA</span>
          </div>

          <a
            href="#espacio"
            aria-label="Desplazarse hacia abajo"
            className="group flex items-center gap-3 text-xs tracking-widest text-white uppercase ml-auto"
          >
            <span className="group-hover:text-[#B8FF00] transition-colors">DESCUBRIR</span>
            <span className="inline-block animate-bounce text-base text-[#B8FF00]">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
