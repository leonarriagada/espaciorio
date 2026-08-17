'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { tenantsData } from '@/data/tenants';
import { Tenant } from '@/types';
import FadeIn from '../motion/FadeIn';
import ArrowLink from '../ui/ArrowLink';

export default function Tenants() {
  const [filter, setFilter] = useState<string>('todos');

  const categories = [
    'todos',
    ...Array.from(new Set(tenantsData.map((t) => t.category.split(' · ')[0]))),
  ];

  const filteredTenants =
    filter === 'todos'
      ? tenantsData
      : tenantsData.filter((t) => t.category.includes(filter));

  return (
    <section id="locales" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#F5F3EA] text-[#080A0D]">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-[#080A0D]/15 gap-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#0050A0] font-bold">
                04 / LOCALES & GASTRO
              </span>
              <span className="text-xs text-[#FFE9A3] bg-[#080A0D] px-1.5 py-0.5 rounded">✦</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#080A0D] tracking-wide">
              Establecimientos seleccionados.
            </h2>
          </FadeIn>

          {/* Minimalist Filter Index */}
          <FadeIn direction="up" delay={0.1}>
            <div className="flex flex-wrap gap-4 text-xs tracking-widest uppercase font-medium">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`pb-1 transition-colors relative ${
                    filter === cat
                      ? 'text-[#080A0D] font-bold border-b-2 border-[#0050A0]'
                      : 'text-[#151719]/60 hover:text-[#080A0D]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Editorial Tenants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {filteredTenants.map((tenant: Tenant, index: number) => (
            <FadeIn key={tenant.slug} direction="up" delay={0.1 * index}>
              <article className="group flex flex-col justify-between h-full bg-[#FFFFFF] p-6 shadow-sm border border-[#080A0D]/10 hover:border-[#0050A0]/30 transition-all duration-300">
                {/* Image Aspect ratio Container */}
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-[#F5F3EA]">
                    <Image
                      src={tenant.image}
                      alt={tenant.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Dividers and Details */}
                  <div className="border-t border-[#080A0D]/10 pt-4 pb-2 flex justify-between items-baseline">
                    <span className="text-xs font-mono text-[#080A0D]/50">
                      0{index + 1}
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-[#0050A0] font-semibold">
                      {tenant.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-normal text-[#080A0D] mb-2 tracking-wide group-hover:text-[#0050A0] transition-colors">
                    {tenant.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#080A0D]/75 font-light leading-relaxed mb-6">
                    {tenant.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#080A0D]/10 flex justify-between items-center">
                  <ArrowLink href={`#locales`} className="text-xs">
                    EXPLORAR LOCAL
                  </ArrowLink>
                  <span className="text-xs text-[#FFE9A3] bg-[#080A0D] px-2 py-0.5 rounded font-mono text-[10px]">
                    ✦ OPEN
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
