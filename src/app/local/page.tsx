'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MapPin, Clock, ArrowLeft, ExternalLink, Store, Phone, Mail, Share2, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MasterplanMap from '@/components/sections/MasterplanMap';
import { tenantsData } from '@/data/tenants';

export default function LocalDemoPage() {
  const [selectedSlug, setSelectedSlug] = useState('starbucks-drive-thru');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentLocal = tenantsData.find((t) => t.slug === selectedSlug) || tenantsData[0];
  const gallery = currentLocal.galleryImages || [currentLocal.image];
  const mainDisplayedImage = gallery[activeImageIndex] || currentLocal.image;

  const handleSelectLocal = (slug: string) => {
    setSelectedSlug(slug);
    setActiveImageIndex(0);
  };

  return (
    <div className="min-h-screen bg-[#080A0D] text-[#F5F3EA] selection:bg-[#FFE9A3] selection:text-[#080A0D] flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-20 px-4 sm:px-8 lg:px-12 max-w-[1500px] mx-auto w-full flex-1 flex flex-col gap-12">
        {/* Top Back & Demo Badge Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#FFE9A3] hover:text-white transition-colors group font-semibold"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Volver a la portada</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE9A3]/10 border border-[#FFE9A3]/30 text-[#FFE9A3] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEMO / MASTERPLAN & LOCAL</span>
          </div>
        </div>

        {/* Masterplan Interactive Map */}
        <MasterplanMap onSelectLocal={handleSelectLocal} selectedSlug={selectedSlug} />

        {/* Store Selector Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-3 custom-scrollbar">
          {tenantsData.map((tenant) => {
            const isSelected = tenant.slug === selectedSlug;
            return (
              <button
                key={tenant.slug}
                onClick={() => handleSelectLocal(tenant.slug)}
                className={`px-4 py-2 rounded-2xl text-xs font-medium tracking-wider uppercase transition-all duration-300 flex-shrink-0 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#FFE9A3] text-[#080A0D] border-[#FFE9A3] shadow-lg font-bold scale-105'
                    : 'bg-[#161B22]/70 text-[#F5F3EA]/70 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {tenant.name}
              </button>
            );
          })}
        </div>

        {/* Main Interactive Demo Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Image Stage & Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Featured Image */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-[#161B22] border border-white/15 shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mainDisplayedImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
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
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-[#080A0D]/85 backdrop-blur-md border border-[#FFE9A3]/50 text-[#FFE9A3] text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-lg">
                  {currentLocal.badge}
                </span>
              </div>
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

          {/* Right Column: Local Details & Information */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 bg-[#161B22]/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl">
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#FFE9A3] font-semibold block mb-2">
                  {currentLocal.category}
                </span>
                <h1 className="font-display text-4xl sm:text-5xl text-white font-normal tracking-tight">
                  {currentLocal.name}
                </h1>
              </div>

              <p className="text-sm sm:text-base text-[#F5F3EA]/85 font-light leading-relaxed">
                {currentLocal.description}
              </p>

              {/* Specs & Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-2xl bg-[#080A0D]/60 border border-white/10 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#FFE9A3] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#FFE9A3] font-semibold">
                      Horario
                    </span>
                    <span className="text-xs text-white font-medium">{currentLocal.schedule}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#080A0D]/60 border border-white/10 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FFE9A3] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#FFE9A3] font-semibold">
                      Ubicación
                    </span>
                    <span className="text-xs text-white font-medium">{currentLocal.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              <div className="flex flex-col gap-2.5 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FFE9A3]">
                  Servicios y características
                </span>
                <div className="flex flex-col gap-2 text-xs text-[#F5F3EA]/80 font-light">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FFE9A3]" />
                    <span>Estándar premium y atención de excelencia en Espacio Río.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FFE9A3]" />
                    <span>Estacionamiento cómodo y accesos expeditos.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FFE9A3]" />
                    <span>Ubicación estratégica en Pedro de Valdivia, Concepción.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
              <a
                href="#contacto"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FFE9A3] text-[#080A0D] px-6 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-white transition-colors cursor-pointer text-center shadow-lg"
              >
                <Store className="w-4 h-4" />
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
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
