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
    <section id="locales" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#F3F1EB] text-[#242624]">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-[#242624]/15 gap-6">
          <FadeIn direction="up">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#68755F] font-semibold mb-3 block">
              04 / MARCAS & LOCALES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#242624] tracking-wide">
              Establecimientos seleccionados.
            </h2>
          </FadeIn>

          {/* Minimalist Filter Index */}
          <FadeIn direction="up" delay={0.1}>
            <div className="flex flex-wrap gap-4 text-xs tracking-widest uppercase">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`pb-1 transition-colors relative ${
                    filter === cat
                      ? 'text-[#242624] font-semibold border-b border-[#242624]'
                      : 'text-[#A8A49B] hover:text-[#242624]'
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
              <article className="group flex flex-col justify-between h-full bg-[#F3F1EB]">
                {/* Image Aspect ratio Container */}
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-[#D8D3C8]">
                    <Image
                      src={tenant.image}
                      alt={tenant.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Dividers and Details */}
                  <div className="border-t border-[#242624]/15 pt-4 pb-2 flex justify-between items-baseline">
                    <span className="text-xs font-mono text-[#A8A49B]">
                      0{index + 1}
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-[#68755F] font-medium">
                      {tenant.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-normal text-[#242624] mb-2 tracking-wide group-hover:text-[#304638] transition-colors">
                    {tenant.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#242624]/75 font-light leading-relaxed mb-6">
                    {tenant.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#242624]/10">
                  <ArrowLink href={`#locales`} className="text-xs">
                    EXPLORAR LOCAL
                  </ArrowLink>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
