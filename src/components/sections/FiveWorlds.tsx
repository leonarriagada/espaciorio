'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import FadeIn from '../motion/FadeIn';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function FiveWorlds() {
  const [activeIndex, setActiveIndex] = useState(0);

  const worlds = siteConfig.worlds;
  const activeWorld = worlds[activeIndex] || worlds[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? worlds.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === worlds.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="mundos" className="py-16 sm:py-24 lg:py-36 px-4 sm:px-8 lg:px-16 bg-[#151719] text-[#F5F3EA] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 lg:mb-16 pb-6 sm:pb-8 border-b border-white/15 gap-4 sm:gap-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="bg-[#FFE9A3] text-[#080A0D] text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 rounded-full">
                ✦ UN DESTINO URBANO
              </span>
              <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#FFE9A3] font-semibold">
                CONCEPCIÓN
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5F3EA] tracking-wide leading-tight">
              Los 5 Mundos de Espacio Río
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <p className="text-xs sm:text-sm font-light text-[#F5F3EA]/80 max-w-md leading-relaxed">
              La fusión perfecta de lujo y diversión en Av. Pedro de Valdivia 1161, Concepción. Deporte, gastronomía, bienestar y servicios en un mismo circuito.
            </p>
          </FadeIn>
        </div>

        {/* 5 Worlds Navigation Tabs */}
        {/* Desktop Grid (lg+) */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-10">
          {worlds.map((world, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={world.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-4 text-left transition-all duration-300 border flex flex-col justify-between h-32 cursor-pointer ${
                  isActive
                    ? 'bg-[#0050A0] text-[#F5F3EA] border-[#FFE9A3] shadow-xl scale-[1.02]'
                    : 'bg-[#080A0D]/60 text-[#F5F3EA]/70 border-white/10 hover:border-white/30 hover:bg-[#080A0D]'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className={`font-mono text-xs ${isActive ? 'text-[#FFE9A3] font-bold' : 'text-[#FFE9A3]/70'}`}>
                    {world.number}
                  </span>
                  {isActive && <span className="text-[#FFE9A3] text-xs">✦</span>}
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase block text-[#FFE9A3]/90 font-medium mb-1 truncate">
                    {world.badge}
                  </span>
                  <h3 className="font-display text-base font-normal leading-tight">
                    {world.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile / Tablet Horizontal Scroll Selector (< lg) */}
        <div className="lg:hidden flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-none snap-x -mx-4 px-4 sm:mx-0 sm:px-0">
          {worlds.map((world, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={world.id}
                onClick={() => setActiveIndex(idx)}
                className={`snap-start flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-2 border whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0050A0] text-[#FFFFFF] border-[#FFE9A3] shadow-lg scale-[1.02]'
                    : 'bg-[#080A0D] text-[#F5F3EA]/70 border-white/15 hover:border-white/30'
                }`}
              >
                <span className={`font-mono text-[10px] ${isActive ? 'text-[#FFE9A3] font-bold' : 'text-[#FFE9A3]/70'}`}>
                  {world.number}
                </span>
                <span>{world.title}</span>
                {isActive && <span className="text-[#FFE9A3] text-[10px]">✦</span>}
              </button>
            );
          })}
        </div>

        {/* Active World Spotlight Feature Card */}
        <div className="bg-[#080A0D] border border-white/15 shadow-2xl rounded-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Feature Image with Mobile Touch Navigation */}
            <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[260px] sm:min-h-[380px] lg:min-h-[480px] w-full overflow-hidden bg-black/40">
              <Image
                src={activeWorld.image}
                alt={activeWorld.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                priority
              />

              {/* Gradient Overlay for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />

              {/* Floating Top Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                <span className="bg-[#080A0D]/90 backdrop-blur-md text-[#FFE9A3] border border-[#FFE9A3]/40 text-[9px] sm:text-[10px] tracking-[0.2em] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg">
                  MUNDO {activeWorld.number} ✦ {activeWorld.badge}
                </span>
              </div>

              {/* Mobile Arrows for quick prev/next navigation */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-2 z-10 lg:hidden">
                <button
                  onClick={handlePrev}
                  aria-label="Mundo anterior"
                  className="w-9 h-9 rounded-full bg-[#080A0D]/80 backdrop-blur-md text-[#F5F3EA] border border-white/20 flex items-center justify-center hover:bg-[#FFE9A3] hover:text-[#080A0D] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Mundo siguiente"
                  className="w-9 h-9 rounded-full bg-[#080A0D]/80 backdrop-blur-md text-[#F5F3EA] border border-white/20 flex items-center justify-center hover:bg-[#FFE9A3] hover:text-[#080A0D] transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Pagination Indicator */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 lg:hidden">
                {worlds.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'w-6 bg-[#FFE9A3]' : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Feature Details Content */}
            <div className="lg:col-span-5 p-5 sm:p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-[#080A0D]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#FFE9A3] uppercase">
                    {activeWorld.subtitle}
                  </span>
                  <span className="font-mono text-xs text-[#F5F3EA]/50 hidden sm:inline-block">
                    {activeWorld.number} / 05
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-light text-[#F5F3EA] mb-3 sm:mb-4 leading-tight">
                  {activeWorld.title}
                </h3>

                <p className="text-xs sm:text-sm lg:text-base font-light text-[#F5F3EA]/85 leading-relaxed mb-6 sm:mb-8">
                  {activeWorld.desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <a
                  href="#locales"
                  className="inline-flex items-center justify-center gap-2 bg-[#FFE9A3] text-[#080A0D] px-6 py-3 text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#F5F3EA] transition-all rounded-full w-full sm:w-auto shadow-md hover:scale-[1.02]"
                >
                  <span>EXPLORAR LOCALES</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* Desktop Navigation Arrows */}
                <div className="hidden lg:flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Anterior"
                    className="w-10 h-10 rounded-full border border-white/20 text-[#F5F3EA] flex items-center justify-center hover:bg-[#FFE9A3] hover:text-[#080A0D] hover:border-[#FFE9A3] transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Siguiente"
                    className="w-10 h-10 rounded-full border border-white/20 text-[#F5F3EA] flex items-center justify-center hover:bg-[#FFE9A3] hover:text-[#080A0D] hover:border-[#FFE9A3] transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
