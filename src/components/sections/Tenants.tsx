'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { tenantsData } from '@/data/tenants';
import { Tenant } from '@/types';
import FadeIn from '../motion/FadeIn';

export default function Tenants() {
  const [filter, setFilter] = useState<string>('todos');

  const categories = [
    'todos',
    ...Array.from(new Set(tenantsData.map((t) => t.category.split(' · ')[0]))),
  ];

  const filteredTenants =
    filter === 'todos'
      ? tenantsData
      : tenantsData.filter((t) => t.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="locales" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#F5F3EA] text-[#080A0D]">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-[#080A0D]/15 gap-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#C48B5E] font-bold">
                04 / MIX COMERCIAL & SERVICIOS
              </span>
              <span className="text-xs text-[#FFE9A3] bg-[#080A0D] px-1.5 py-0.5 rounded">✦</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#080A0D] tracking-wide">
              Marcas & Espacios Confirmados.
            </h2>
          </FadeIn>

          {/* Minimalist Filter Index */}
          <FadeIn direction="up" delay={0.1}>
            <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs tracking-widest uppercase font-semibold">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 rounded-full transition-all cursor-pointer border ${
                    filter === cat
                      ? 'bg-[#080A0D] text-[#FFE9A3] border-[#080A0D] shadow-md font-bold'
                      : 'bg-white/60 text-[#151719]/70 border-[#080A0D]/15 hover:border-[#080A0D]/40 hover:text-[#080A0D]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Editorial Tenants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredTenants.map((tenant: Tenant, index: number) => (
            <FadeIn key={tenant.slug} direction="up" delay={0.05 * (index % 6)}>
              <article className="group flex flex-col justify-between h-full bg-[#FFFFFF] p-6 shadow-sm border border-[#080A0D]/10 hover:border-[#080A0D]/40 transition-all duration-300 hover:shadow-xl rounded-2xl">
                {/* Image Aspect ratio Container */}
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-[#EBE7DC] rounded-xl">
                    <Image
                      src={tenant.image}
                      alt={tenant.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {tenant.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#080A0D]/90 backdrop-blur-xs text-[#FFE9A3] text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-full uppercase border border-[#FFE9A3]/30 shadow-md">
                          {tenant.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Dividers and Details */}
                  <div className="border-t border-[#080A0D]/10 pt-4 pb-2 flex justify-between items-baseline gap-2">
                    <span className="text-xs font-mono text-[#080A0D]/50">
                      {index < 9 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#C48B5E] font-bold truncate text-right">
                      {tenant.category}
                    </span>
                  </div>

                  {/* Store Brand Logo & Title */}
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="font-display text-2xl font-normal text-[#080A0D] tracking-wide group-hover:text-[#C48B5E] transition-colors">
                      {tenant.name}
                    </h3>
                    {tenant.logo && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#F5F3EA] text-[#080A0D] border border-[#080A0D]/10 flex-shrink-0">
                        {tenant.logo}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#080A0D]/75 font-light leading-relaxed mb-4">
                    {tenant.description}
                  </p>

                  {tenant.location && (
                    <div className="flex items-center gap-1.5 text-[11px] text-[#080A0D]/60 mb-2 font-mono">
                      <span>📍</span>
                      <span>{tenant.location}</span>
                    </div>
                  )}
                </div>

                {/* Card Action Link & Schedule */}
                <div className="pt-4 border-t border-[#080A0D]/10 flex justify-between items-center text-xs gap-3">
                  <span className="text-[#080A0D]/60 text-[11px] font-mono">
                    {tenant.schedule || 'Próxima Apertura'}
                  </span>
                  <a
                    href={`/local?slug=${tenant.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#080A0D] bg-[#FFE9A3] hover:bg-[#080A0D] hover:text-[#FFE9A3] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer shadow-xs"
                  >
                    <span>Ver detalles</span>
                    <span className="text-sm">↗</span>
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
