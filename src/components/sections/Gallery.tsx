import React from 'react';
import Image from 'next/image';
import { galleryData } from '@/data/tenants';
import FadeIn from '../motion/FadeIn';

export default function Gallery() {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#F3F1EB] text-[#242624]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-[#242624]/15">
          <FadeIn direction="up">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#68755F] font-semibold mb-3 block">
              06 / GALERÍA VISUAL
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#242624] tracking-wide">
              Registros del espacio.
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-xs sm:text-sm font-light text-[#242624]/70 max-w-xs leading-relaxed">
              Fotografía y renders de referencia que traducen la atmósfera y materialidad de Espacio Río.
            </p>
          </FadeIn>
        </div>

        {/* Asymmetrical Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Item 1 - Large Panorama */}
          <div className="md:col-span-12">
            <FadeIn direction="up">
              <div className="relative aspect-[21/9] w-full overflow-hidden bg-[#D8D3C8] group">
                <Image
                  src={galleryData[0].image}
                  alt={galleryData[0].title}
                  fill
                  sizes="100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <span className="text-xs font-light tracking-widest text-[#F3F1EB] uppercase">
                    {galleryData[0].title}
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Item 2 - Portrait */}
          <div className="md:col-span-5">
            <FadeIn direction="up" delay={0.1}>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#D8D3C8] group">
                <Image
                  src={galleryData[1].image}
                  alt={galleryData[1].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-xs font-light tracking-widest text-[#F3F1EB] uppercase">
                    {galleryData[1].title}
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Item 3 - Square */}
          <div className="md:col-span-7">
            <FadeIn direction="up" delay={0.2}>
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#D8D3C8] group">
                <Image
                  src={galleryData[2].image}
                  alt={galleryData[2].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-xs font-light tracking-widest text-[#F3F1EB] uppercase">
                    {galleryData[2].title}
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
