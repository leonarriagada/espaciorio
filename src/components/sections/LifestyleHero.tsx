'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { UtensilsCrossed, Dumbbell, Sparkles, ShoppingBag, ArrowUpRight, Flame } from 'lucide-react';

interface LifestyleFeature {
  id: string;
  title: string;
  subtitle: string;
  invite: string;
  icon: React.ReactNode;
  image: string;
  tag: string;
}

const lifestyleFeatures: LifestyleFeature[] = [
  {
    id: 'gastronomia',
    title: 'Gastronomía & Terrazas',
    subtitle: 'Starbucks, Boulangerie & Sempre Pasta',
    invite: 'Desde el café de especialidad en Starbucks Drive-Thru y pastelería francesa en Boulangerie, hasta la tradición de las pastas caseras italianas en Sempre Pasta.',
    icon: <UtensilsCrossed className="w-5 h-5 text-[#FFE9A3]" />,
    image: '/images/nuevos-locales/LOCAL 4 - BOULANGERIE.png',
    tag: 'GASTRONOMÍA & VIBE',
  },
  {
    id: 'deporte',
    title: 'Deporte & Movimiento',
    subtitle: 'Canchas de Pádel, Gym & Pilates',
    invite: 'Canchas de pádel techadas con iluminación LED, gimnasio de acondicionamiento físico y estudio boutique de Pilates Reformer.',
    icon: <Dumbbell className="w-5 h-5 text-[#FFE9A3]" />,
    image: '/images/nuevos-locales/CANCHAS PADEL.png',
    tag: 'DEPORTE & BIENESTAR',
  },
  {
    id: 'moda',
    title: 'Moda Boutique & Regalos',
    subtitle: 'Válgame Dios & La Ove Bee',
    invite: 'Vestuario femenino exclusivo, calzado de autor y accesorios en Válgame Dios, junto a ropa y regalos delicados para bebés en La Ove Bee.',
    icon: <ShoppingBag className="w-5 h-5 text-[#FFE9A3]" />,
    image: '/images/nuevos-locales/LOCAL 8 - VALGAME DIOS.png',
    tag: 'MODA & INFANTIL',
  },
  {
    id: 'quincho',
    title: 'Quincho Corporativo & Eventos',
    subtitle: 'Networking y celebraciones privadas',
    invite: 'Un espacio exclusivo equipado con parrilla y terrazas para reuniones corporativas, lanzamientos de marca y encuentros especiales.',
    icon: <Flame className="w-5 h-5 text-[#FFE9A3]" />,
    image: '/images/nuevos-locales/QUINCHO COORPORATIVO.png',
    tag: 'EVENTOS & CELEBRACIONES',
  },
];

export default function LifestyleHero() {
  const [activeTab, setActiveTab] = useState(0);
  const currentFeature = lifestyleFeatures[activeTab];

  return (
    <section id="experiencia" className="relative w-full min-h-screen bg-[#080A0D] text-[#F5F3EA] py-20 px-6 sm:px-10 lg:px-16 flex flex-col justify-between overflow-hidden">
      {/* Background Dynamic Image Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentFeature.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.8 }, scale: { duration: 3.5 } }}
            className="absolute inset-0"
          >
            <Image
              src={currentFeature.image}
              alt={currentFeature.title}
              fill
              sizes="100vw"
              className="object-cover object-center"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Editorial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0D]/95 via-[#080A0D]/75 to-[#080A0D]/60 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-transparent to-[#080A0D]/70 pointer-events-none z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full my-auto flex flex-col gap-12">
        {/* Top Header Tag */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE9A3]/10 border border-[#FFE9A3]/30 text-[#FFE9A3] text-xs font-semibold tracking-widest uppercase self-start"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 / LA EXPERIENCIA</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight"
          >
            Tu nuevo punto de encuentro <br className="hidden sm:inline" />
            <span className="italic text-[#FFE9A3]">en Concepción</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-[#F5F3EA]/90 font-light max-w-2xl leading-relaxed"
          >
            Ven a disfrutar espacios pensados para conectar, entrenar, vestir a tu estilo y compartir buenos momentos.
          </motion.p>
        </div>

        {/* Feature Interactive Selector Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Active Highlight Card */}
          <div className="lg:col-span-7 bg-[#161B22]/80 backdrop-blur-xl border border-white/15 p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col justify-between gap-6 min-h-[340px]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#FFE9A3] font-semibold block mb-2">
                {currentFeature.tag}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-white font-normal mb-1">
                {currentFeature.title}
              </h3>
              <p className="text-sm font-medium text-[#FFE9A3]/90 mb-4">
                {currentFeature.subtitle}
              </p>
              <p className="text-base text-[#F5F3EA]/90 font-light leading-relaxed">
                {currentFeature.invite}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <a
                href="#ubicacion"
                className="inline-flex items-center gap-2 bg-[#FFE9A3] text-[#080A0D] text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-full hover:bg-white transition-colors cursor-pointer"
              >
                <span>Planifica tu visita</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-[#F5F3EA]/60 uppercase tracking-widest font-mono">
                0{activeTab + 1} / 04
              </span>
            </div>
          </div>

          {/* Interactive Feature Pills */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {lifestyleFeatures.map((feat, idx) => {
              const isActive = idx === activeTab;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer ${
                    isActive
                      ? 'bg-[#FFE9A3] text-[#080A0D] border-[#FFE9A3] shadow-lg scale-[1.02]'
                      : 'bg-[#161B22]/60 text-white border-white/10 hover:border-white/30 hover:bg-[#161B22]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isActive ? 'bg-[#080A0D] text-[#FFE9A3]' : 'bg-white/5 text-white'
                      }`}
                    >
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold tracking-wide">{feat.title}</h4>
                      <p
                        className={`text-xs font-light ${
                          isActive ? 'text-[#080A0D]/80' : 'text-[#F5F3EA]/60'
                        }`}
                      >
                        {feat.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'translate-x-1 -translate-y-1 text-[#080A0D]' : 'text-white/40'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
