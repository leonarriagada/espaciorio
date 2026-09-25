'use client';

import React from 'react';
import Image from 'next/image';
import {
  Building2,
  Maximize2,
  Layers,
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { siteConfig } from '@/data/site';
import FadeIn from '../motion/FadeIn';

export default function CommercialLeasing() {
  const whatsappUrl = siteConfig.socials.whatsapp;

  const leasingSpecs = [
    {
      icon: Building2,
      label: 'CAPACIDAD',
      value: '10 Locales',
      desc: 'Espacios comerciales boutique diseñados para alta visibilidad.',
    },
    {
      icon: Maximize2,
      label: 'SUPERFICIES',
      value: '25 m² a 92 m²',
      desc: 'Plantas versátiles adaptables a diversos giros y marcas.',
    },
    {
      icon: Layers,
      label: 'ARQUITECTURA',
      value: 'Dos Niveles',
      desc: 'Distribución estratégica con circulación fluida y accesos.',
    },
    {
      icon: Compass,
      label: 'ORIENTACIÓN',
      value: 'Vista Norte & Terraza',
      desc: 'Iluminación natural privilegiada con amplias terrazas al aire libre.',
    },
  ];

  const environmentBenefits = [
    'Ubicación estratégica con alto flujo peatonal y vehicular en Av. Pedro de Valdivia.',
    'Conectividad inmediata con locomoción pública a la puerta.',
    'A pasos de supermercados, centros de salud, estaciones de servicio y bancos.',
    'Cercanía directa a reconocidos establecimientos educacionales y servicios esenciales.',
    'Entorno residencial de alto estándar, tranquilo y seguro en Concepción.',
  ];

  return (
    <section id="arriendo" className="relative w-full py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#151719] text-[#F5F3EA] overflow-hidden border-t border-white/10">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFE9A3]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C48B5E]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header Tagline & Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-white/15 gap-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#FFE9A3] text-[#080A0D] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-3.5 py-1 rounded-full shadow-md inline-flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>ESPACIOS DISPONIBLES</span>
              </span>
              <span className="text-xs text-[#FFE9A3] uppercase font-mono tracking-widest hidden sm:inline">
                ✦ TU ESPACIO EN CONCEPCIÓN
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-light text-[#F5F3EA] tracking-wide leading-tight">
              ARRIENDO DE LOCALES COMERCIALES
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FFE9A3] text-[#080A0D] px-7 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-white transition-all shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Solicita información</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>

        {/* 4 Feature Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {leasingSpecs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <FadeIn key={spec.label} direction="up" delay={0.05 * index}>
                <div className="h-full p-6 sm:p-8 rounded-3xl bg-[#080A0D]/90 backdrop-blur-md border border-white/10 hover:border-[#FFE9A3]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#FFE9A3]/10 text-[#FFE9A3] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FFE9A3] group-hover:text-[#080A0D] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C48B5E] block mb-1">
                      {spec.label}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-normal text-white mb-2">
                      {spec.value}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F5F3EA]/75 font-light leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Highlight Banner: Environment & Business Advantage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#080A0D] border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative background image */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <Image
              src="/images/03.jpg"
              alt="Masterplan Espacio Río"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Left Column: Business Benefits */}
          <div className="lg:col-span-8 z-10 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#C48B5E] font-bold">
                ✦ OPORTUNIDAD COMERCIAL
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-white font-light tracking-wide leading-tight">
              Descubre un entorno pensado para tu negocio.
            </h3>

            <div className="flex flex-col gap-3.5 pt-2">
              {environmentBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFE9A3] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#F5F3EA]/90 font-light leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High Impact CTA Box */}
          <div className="lg:col-span-4 z-10 flex flex-col justify-center items-center lg:items-end text-center lg:text-right pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
            <span className="text-xs font-mono tracking-widest text-[#FFE9A3] uppercase block mb-3">
              ¿INTERESADO EN ARRENDAR?
            </span>
            <p className="text-xs text-[#F5F3EA]/75 font-light mb-6 max-w-xs">
              Recibe atención personalizada y agenda una visita técnica a los locales disponibles.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FFE9A3] text-[#080A0D] px-8 py-4 rounded-full text-xs font-extrabold tracking-widest uppercase hover:bg-white transition-all shadow-2xl hover:scale-105"
            >
              <span>+ INFORMACIÓN</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
