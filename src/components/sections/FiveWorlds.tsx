'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import FadeIn from '../motion/FadeIn';

export default function FiveWorlds() {
  const [activeWorldId, setActiveWorldId] = useState(siteConfig.worlds[0].id);

  const activeWorld =
    siteConfig.worlds.find((w) => w.id === activeWorldId) || siteConfig.worlds[0];

  return (
    <section id="mundos" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#151719] text-[#F5F3EA] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-white/15 gap-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-[#FFE9A3] text-[#080A0D] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full">
                ✦ UN DESTINO URBANO
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-[#FFE9A3] font-semibold">
                CONCEPCIÓN
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-light text-[#F5F3EA] tracking-wide">
              Los 5 Mundos de Espacio Río
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <p className="text-sm font-light text-[#F5F3EA]/80 max-w-md leading-relaxed">
              La fusión perfecta de lujo y diversión en Av. Pedro de Valdivia 1161, Concepción. Deporte, gastronomía, bienestar y servicios en un mismo circuito.
            </p>
          </FadeIn>
        </div>

        {/* 5 Worlds Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {siteConfig.worlds.map((world) => {
            const isActive = world.id === activeWorldId;
            return (
              <button
                key={world.id}
                onClick={() => setActiveWorldId(world.id)}
                className={`p-4 text-left transition-all duration-300 border flex flex-col justify-between h-32 ${
                  isActive
                    ? 'bg-[#0050A0] text-[#F5F3EA] border-[#FFE9A3] shadow-xl scale-[1.02]'
                    : 'bg-[#080A0D]/60 text-[#F5F3EA]/70 border-white/10 hover:border-white/30 hover:bg-[#080A0D]'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className={`font-mono text-xs ${isActive ? 'text-[#FFE9A3]' : 'text-[#FFE9A3]/70'}`}>
                    {world.number}
                  </span>
                  {isActive && <span className="text-[#FFE9A3] text-xs">✦</span>}
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase block text-[#FFE9A3]/90 font-medium mb-1">
                    {world.badge}
                  </span>
                  <h3 className="font-display text-lg font-normal leading-tight">
                    {world.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active World Spotlight Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#080A0D] p-8 sm:p-12 border border-white/15 shadow-2xl">
          {/* Feature Image */}
          <div className="lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden border border-white/10">
            <Image
              src={activeWorld.image}
              alt={activeWorld.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#FFE9A3] text-[#080A0D] text-[10px] tracking-[0.2em] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                MUNDO {activeWorld.number} ✦ {activeWorld.badge}
              </span>
            </div>
          </div>

          {/* Feature Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#FFE9A3] uppercase mb-2">
              {activeWorld.subtitle}
            </span>
            <h3 className="font-display text-3xl sm:text-5xl font-light text-[#F5F3EA] mb-4">
              {activeWorld.title}
            </h3>
            <p className="text-sm sm:text-base font-light text-[#F5F3EA]/85 leading-relaxed mb-8">
              {activeWorld.desc}
            </p>

            <a
              href="#locales"
              className="inline-flex items-center gap-3 bg-[#FFE9A3] text-[#080A0D] px-6 py-3 text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#F5F3EA] transition-colors w-max rounded-full"
            >
              <span>EXPLORAR OPORTUNIDADES</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
