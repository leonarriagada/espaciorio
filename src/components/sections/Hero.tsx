'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] flex flex-col justify-between overflow-hidden bg-[#242624]">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/01.jpg"
          alt="Espacio Río — Vista panorámica de arquitectura contemporánea y cordillera"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-subtle-zoom"
          quality={90}
        />
        {/* Subtle non-heavy linear overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full px-6 sm:px-10 lg:px-12 flex flex-col justify-between pt-32 pb-12">
        <div />

        {/* Central Editorial Heading */}
        <div className="max-w-3xl my-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-xs sm:text-sm tracking-[0.3em] uppercase text-[#D8D3C8] font-medium mb-4"
          >
            PREMIUM OUTDOOR LIFESTYLE DESTINATION
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#F3F1EB] tracking-wide leading-[0.95]"
          >
            ESPACIO RÍO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-[#F3F1EB]/90 tracking-wide max-w-xl"
          >
            Un lugar para encontrarse.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-between items-end border-t border-white/20 pt-6"
        >
          <div className="text-xs tracking-[0.2em] text-[#D8D3C8]/80 font-light uppercase hidden sm:block">
            ARQUITECTURA · NATURALEZA · GASTRONOMÍA
          </div>

          <a
            href="#espacio"
            aria-label="Desplazarse hacia abajo"
            className="group flex items-center gap-3 text-xs tracking-widest text-white uppercase ml-auto"
          >
            <span className="group-hover:text-[#D8D3C8] transition-colors">EXPLORAR</span>
            <span className="inline-block animate-bounce text-base">↓</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
