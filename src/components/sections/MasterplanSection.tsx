'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  MapPin,
  Clock,
  ExternalLink,
  CheckCircle,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import MasterplanMap from '@/components/sections/MasterplanMap';
import { tenantsData } from '@/data/tenants';
import FadeIn from '@/components/motion/FadeIn';

export default function MasterplanSection() {
  const [selectedSlug, setSelectedSlug] = useState('starbucks-drive-thru');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Track navigation & drag-to-scroll states (inspired by Section 02)
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const currentLocal = tenantsData.find((t) => t.slug === selectedSlug) || tenantsData[0];
  const gallery = currentLocal.galleryImages || [currentLocal.image];
  const mainDisplayedImage = gallery[activeImageIndex] || currentLocal.image;

  // Auto-scroll the active pill into view smoothly whenever selectedSlug changes
  React.useEffect(() => {
    const container = pillsContainerRef.current;
    if (!container) return;
    const selectedIndex = tenantsData.findIndex((t) => t.slug === selectedSlug);
    if (selectedIndex >= 0) {
      const activeChild = container.children[selectedIndex] as HTMLElement;
      if (activeChild) {
        const containerWidth = container.clientWidth;
        const childLeft = activeChild.offsetLeft;
        const childWidth = activeChild.clientWidth;
        const targetScrollLeft = childLeft - containerWidth / 2 + childWidth / 2;

        container.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedSlug]);

  const scrollPills = (direction: 'left' | 'right') => {
    if (!pillsContainerRef.current) return;
    const amount = direction === 'left' ? -260 : 260;
    pillsContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!pillsContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - pillsContainerRef.current.offsetLeft);
    setScrollLeftState(pillsContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !pillsContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - pillsContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    pillsContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleSelectLocal = (slug: string) => {
    setSelectedSlug(slug);
    setActiveImageIndex(0);
    if (detailsRef.current) {
      const rect = detailsRef.current.getBoundingClientRect();
      if (rect.top < 0 || rect.top > window.innerHeight - 150) {
        detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  const handlePrevLocal = () => {
    const currentIndex = tenantsData.findIndex((t) => t.slug === selectedSlug);
    const newIndex = (currentIndex - 1 + tenantsData.length) % tenantsData.length;
    handleSelectLocal(tenantsData[newIndex].slug);
  };

  const handleNextLocal = () => {
    const currentIndex = tenantsData.findIndex((t) => t.slug === selectedSlug);
    const newIndex = (currentIndex + 1) % tenantsData.length;
    handleSelectLocal(tenantsData[newIndex].slug);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Espacio Río, quisiera consultar información sobre ${currentLocal.name} (${currentLocal.badge || ''})`
  );
  const whatsappUrl = `https://wa.me/56995198669?text=${whatsappMessage}`;

  return (
    <section
      id="masterplan"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#0C0E12] text-[#F5F3EA] overflow-hidden border-t border-white/10"
    >
      {/* Ambient Lighting Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FFE9A3]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-[#C48B5E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1500px] mx-auto z-10 relative flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 border-b border-white/10 gap-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#FFE9A3] text-[#080A0D] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full shadow-md inline-flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>PLANO INTERACTIVO</span>
              </span>
              <span className="text-xs text-[#FFE9A3] uppercase font-mono tracking-widest hidden sm:inline">
                ✦ MASTERPLAN PISO 1
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5F3EA] tracking-wide leading-tight">
              DISTRIBUCIÓN DE LOCALES & ESPACIOS
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <p className="text-xs sm:text-sm text-[#F5F3EA]/70 max-w-md font-light leading-relaxed">
              Haz clic en cualquier local del plano o en los accesos inferiores para explorar su ficha comercial, imágenes y especificaciones.
            </p>
          </FadeIn>
        </div>

        {/* Masterplan Map (Interactive SVG Floor 1) */}
        <FadeIn direction="up" delay={0.15}>
          <MasterplanMap onSelectLocal={handleSelectLocal} selectedSlug={selectedSlug} />
        </FadeIn>

        {/* Store Selector Track with Elegant Controls (Section 02 Style) */}
        <div className="relative w-full flex items-center gap-2 pt-1">
          {/* Left Arrow Button */}
          <button
            onClick={() => scrollPills('left')}
            aria-label="Deslizar locales a la izquierda"
            className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#161B22]/90 border border-white/15 text-[#FFE9A3] flex items-center justify-center hover:bg-[#FFE9A3] hover:text-[#080A0D] transition-all cursor-pointer z-20 shadow-lg hover:scale-105"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Pills Container with Edge Gradient Masks */}
          <div className="relative flex-1 overflow-hidden rounded-2xl">
            {/* Left and Right Fade Masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#0C0E12] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#0C0E12] to-transparent z-10" />

            <div
              ref={pillsContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className={`flex items-center gap-2.5 overflow-x-auto py-2.5 px-6 no-scrollbar select-none ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
            >
              {tenantsData.map((tenant) => {
                const isSelected = tenant.slug === selectedSlug;
                return (
                  <button
                    key={tenant.slug}
                    onClick={() => {
                      if (isDragging) return;
                      handleSelectLocal(tenant.slug);
                    }}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-medium tracking-wider uppercase transition-all duration-300 flex-shrink-0 cursor-pointer border ${
                      isSelected
                        ? 'bg-[#FFE9A3] text-[#080A0D] border-[#FFE9A3] shadow-[0_0_15px_rgba(255,233,163,0.35)] font-bold scale-105'
                        : 'bg-[#161B22]/80 text-[#F5F3EA]/70 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {tenant.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scrollPills('right')}
            aria-label="Deslizar locales a la derecha"
            className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#161B22]/90 border border-white/15 text-[#FFE9A3] flex items-center justify-center hover:bg-[#FFE9A3] hover:text-[#080A0D] transition-all cursor-pointer z-20 shadow-lg hover:scale-105"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Track Counter & Status Bar */}
        <div className="flex items-center justify-between text-xs text-[#F5F3EA]/60 px-2 -mt-4">
          <span className="font-mono text-[11px] text-[#FFE9A3] uppercase tracking-wider font-semibold">
            Local {tenantsData.findIndex((t) => t.slug === selectedSlug) + 1} de {tenantsData.length} · {currentLocal.name}
          </span>
          <span className="text-[11px] text-white/40 hidden sm:inline">
            Desliza o usa las flechas para explorar cada local
          </span>
        </div>

        {/* Selected Local Showcase Card */}
        <div ref={detailsRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
          {/* Left Column: Image Stage & Thumbnail Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Featured Image Box */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-[#161B22] border border-white/15 shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mainDisplayedImage}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0 z-0"
                >
                  <Image
                    src={mainDisplayedImage}
                    alt={currentLocal.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Badge Tag */}
              <div className="absolute top-5 left-5 z-10">
                <span className="bg-[#080A0D]/85 backdrop-blur-md border border-[#FFE9A3]/50 text-[#FFE9A3] text-[11px] sm:text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg">
                  {currentLocal.badge}
                </span>
              </div>

              {/* Floating Prev / Next Controls over the Image Stage (Inspired by Section 02) */}
              <button
                onClick={handlePrevLocal}
                aria-label="Local anterior"
                className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-4 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#080A0D]/75 backdrop-blur-md border border-white/20 text-[#FFE9A3] flex items-center justify-center hover:bg-[#FFE9A3] hover:text-[#080A0D] transition-all cursor-pointer shadow-xl hover:scale-105 opacity-85 hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNextLocal}
                aria-label="Local siguiente"
                className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#080A0D]/75 backdrop-blur-md border border-white/20 text-[#FFE9A3] flex items-center justify-center hover:bg-[#FFE9A3] hover:text-[#080A0D] transition-all cursor-pointer shadow-xl hover:scale-105 opacity-85 hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Gallery Row */}
            {gallery.length > 1 && (
              <div className="flex items-center gap-3 pt-1">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === activeImageIndex
                        ? 'border-[#FFE9A3] scale-105 shadow-md'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`Vista ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Local Details & Commercial Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 bg-[#161B22]/80 backdrop-blur-xl p-6 sm:p-9 rounded-3xl border border-white/15 shadow-2xl">
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#FFE9A3] font-semibold block mb-2">
                  {currentLocal.category}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight leading-tight">
                  {currentLocal.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#F5F3EA]/85 font-light leading-relaxed">
                {currentLocal.description}
              </p>

              {/* Specs & Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3 border-t border-white/10">
                <div className="p-3.5 rounded-2xl bg-[#080A0D]/60 border border-white/10 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#FFE9A3] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#FFE9A3] font-semibold">
                      Horario
                    </span>
                    <span className="text-xs text-white font-medium">{currentLocal.schedule}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#080A0D]/60 border border-white/10 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FFE9A3] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#FFE9A3] font-semibold">
                      Ubicación
                    </span>
                    <span className="text-xs text-white font-medium">{currentLocal.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="flex flex-col gap-2 pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FFE9A3]">
                  Servicios y características
                </span>
                <div className="flex flex-col gap-2 text-xs text-[#F5F3EA]/80 font-light">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FFE9A3] flex-shrink-0" />
                    <span>Estándar de calidad premium en Pedro de Valdivia.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FFE9A3] flex-shrink-0" />
                    <span>Estacionamiento cómodo y accesos expeditos.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FFE9A3] flex-shrink-0" />
                    <span>Integración directa con el paseo y áreas verdes.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-white/10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FFE9A3] text-[#080A0D] px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-white transition-colors cursor-pointer text-center shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar local</span>
              </a>

              {currentLocal.website && (
                <a
                  href={currentLocal.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <span>Sitio Web</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
